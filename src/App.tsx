import { ChakraProvider } from '@chakra-ui/react';
import { VFC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import theme from "./theme/theme";
import { Router } from "./router/Router"
import { Header } from "./components/organisms/layout/Header";

  // eslint-disable-next-line react/function-component-definition
  const App: VFC = () => (
    <ChakraProvider theme={ theme }>
      <Header>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      </Header>
    </ChakraProvider>
  );

export default App;
