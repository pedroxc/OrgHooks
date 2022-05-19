import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { carregaTopo } from '../../../Services/carregaDados';
import logo from '../../../assets/logo.png';

class Topo extends React.Component {
  state = {
    topo: {
      boasVindas: '',
      legenda: '',
    },
  };
  atualizaTopo() {
    const retorno = carregaTopo();
    this.setState({ topo: retorno });
  }
  componentDidMount() {
    this.atualizaTopo();
  }
  render() {
    return (
      <View style={estilos.topo}>
        <Image source={logo} style={estilos.image} />
        <Text style={estilos.boasVindas}>{this.state.topo.boasVindas}</Text>
        <Text style={estilos.legenda}>{this.state.topo.legenda}</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: '#f6f6f6',
  },
  image: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  legenda: {
    color: '#a3a3a3',
    fontSize: 16,
    lineHeight: 26,
  },
});

export default Topo;
