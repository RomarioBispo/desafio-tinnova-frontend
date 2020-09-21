import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaCar, FaSave, FaSpinner, FaList } from 'react-icons/fa';

import { Container, Form, SubmitButton } from './styles';

import api from '../../service/api';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      veiculo: '',
      ano: '',
      descricao: '',
      marca: '',
      vendido: false,
      loading: false,
    };

    this.handleChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = e => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value,
    });
  };

  handleSubmit = async e => {
    this.setState({
      ...this.state,
      loading: true,
    });
    e.preventDefault();
    await api.post('/veiculos', this.state);
    this.setState({
      ...this.state,
      loading: false,
    });
    this.props.history.push('/');
  };

  render() {
    const { veiculo, ano, descricao, loading } = this.state;
    return (
      <Container>
        <>
          <Link to="/">
            <FaList size={24} />
          </Link>
          <h1>
            <FaCar />
            Adicionar Veículos
          </h1>
        </>
        <Form onSubmit={this.handleSubmit}>
          <input
            name="veiculo"
            type="text"
            placeholder="veiculo"
            value={veiculo}
            onChange={this.handleInputChange}
          />
          <input
            name="ano"
            type="number"
            placeholder="Ano"
            value={ano}
            onChange={this.handleInputChange}
          />
          <textarea
            name="descricao"
            placeholder="Descricao"
            value={descricao}
            onChange={this.handleInputChange}
          />
          <select name="marca" onChange={this.handleInputChange}>
            <option value="">Marca</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Fiat">Fiat</option>
            <option value="Renault">Renault</option>
            <option value="Ford">Ford</option>
            <option value="Toyota">Volkswagen</option>
            <option value="Hyunday">Hyunday</option>
          </select>
          <select name="vendido" onChange={this.handleInputChange}>
            <option value="false">Estado do carro</option>
            <option value="false">Não Vendido</option>
            <option value="true">Vendido</option>
          </select>
          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaSave size={20} color="#FFF" />
            )}
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
