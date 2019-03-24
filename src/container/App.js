import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { lightTheme } from './ThemeProvider.js'
import Header from '../components/header/Header'
import Recipes from '../components/Recipes'
import Blog from '../components/Blog'

const AppContainer = styled.div`
`


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={lightTheme}>
        <AppContainer className={'appContainer'}>
          <Header />
          <Recipes />
          <Blog />
        </AppContainer>
      </ThemeProvider>

    );
  }
}

export default App;
