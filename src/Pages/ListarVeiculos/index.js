import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import api from '../../service/api';
import { FaCar, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

import { Container, List, Button, hr } from './styles';

export default class ListarVeiculos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      veiculosUltimaSemana: [],
      qtdVeiculosNaoVendidos: '',
      veiculos: [],
    };
  }

  async componentDidMount() {
    await api.get('/veiculos').then(json => {
      const { data } = json;
      this.setState({ veiculos: data });
    });

    await api.get('/veiculos/find?vendido=false').then(json => {
      const { data } = json;
      this.setState({ qtdVeiculosNaoVendidos: data.length });
    });

    await api.get('/veiculos/find?createdLastWeek=true').then(json => {
      const { data } = json;
      this.setState({ veiculosUltimaSemana: data });
    });
  }

  async handleDelete(id) {
    await api.delete('veiculos/' + id);
    this.props.history.push('/');
  }

  async handleEdit(veiculo) {
    this.props.history.push({
      pathname: '/editar',
      state: {
        veiculo,
      },
    });
  }

  render() {
    return (
      <Container>
        <h1>
          <FaCar />
          Listagem de Veículos
        </h1>
        <List>
          {this.state.veiculos.map(veiculo => (
            <li key={veiculo.id}>
              <span>{veiculo.veiculo}</span>
              <div>
                <Button onClick={() => this.handleEdit(veiculo)}>
                  <FaEdit color="purple" size={14} />
                </Button>
                <Button onClick={() => this.handleDelete(veiculo.id)}>
                  <FaTrash color="purple" size={14} />
                </Button>
                <hr></hr>
              </div>
            </li>
          ))}
        </List>
        <Link to="/adicionar">
          <FaPlus size={24} />
        </Link>
        <h4>Veículos não vendidos: {this.state.qtdVeiculosNaoVendidos} </h4>
        <h4>Veículos por década: </h4>
        <h4>Veículos por fabricante: </h4>
        <List>
          <h4>Últimos registrados: </h4>
          {this.state.veiculosUltimaSemana.map(veiculosUltimaSemana => (
            <li key={veiculosUltimaSemana.id}>
              <span>{veiculosUltimaSemana.veiculo}</span>
              <hr></hr>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
