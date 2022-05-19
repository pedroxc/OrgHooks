import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Home from './src/Pages/Home';

// import { Container } from './styles';

function app() {
  return (
    <SafeAreaView style={estilos.tela}>
      <Home />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
  },
});
export default app;
