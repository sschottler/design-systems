import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components/macro'
import GlobalStyle from './Global'
import Header from './layouts/Header'
import { Card, Button } from './elements'

const theme = {
  colors: {
    primary: '#E54B4B',
    secondary: '#DBDE61'
  }
}

const theme2 = {
  colors: {
    primary: '#524763',
    secondary: '#82D8D8'
  }
}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Header />
          <GlobalStyle />
          <main
            css={`
              background: red;
              h2 {
                font-size: 100px;
              }
            `}>
            <Button>Say Hello</Button>
            <ThemeProvider theme={theme2}>
              <Card>
                <h2>Card Heading</h2>
                <Card.Button modifiers="cancel">Say Hello</Card.Button>
                <Card.Button as="a">Say Hello</Card.Button>
              </Card>
            </ThemeProvider>
          </main>
        </div>
      </ThemeProvider>
    )
  }
}

export default App
