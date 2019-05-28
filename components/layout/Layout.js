import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Container = styled('div')`
  padding-top: 3rem;
`;

const Layout = props => (
  <div>
    <Helmet
      title={'Hypercharge'}
      script={[
        {
          type: 'text/javascript',
          innerHTML: "history.scrollRestoration = 'manual';"
        }
      ]}
      meta={[
        {
          name: 'description',
          content: 'Hyper.'
        },
        {
          name: 'keywords',
          content: 'Hyper'
        },
        { name: 'theme-color', content: '#4da0ff' }
      ]}
    >
      <html lang="nl" />
    </Helmet>
    <Header />
    <Container>{props.children}</Container>
    <Footer />
  </div>
);

export default Layout;
