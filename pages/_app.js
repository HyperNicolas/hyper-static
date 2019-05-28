import App, { Container } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/layout/Layout';
import GlobalStyles from '../components/layout/Globalstyles';
import { theme } from '../components/utils/styledComponents';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Layout>
            <GlobalStyles />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
