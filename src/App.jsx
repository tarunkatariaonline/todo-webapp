import React from 'react';
import {
  ChakraProvider,

  theme,
} from '@chakra-ui/react';
import TodoContainer from './Components/TodoContainer';
import { store } from './Redux/store'
import { Provider } from 'react-redux'


function App() {
  return (
    <ChakraProvider theme={theme}>
  <Provider store={store}>
    <TodoContainer/>
    </Provider>
    </ChakraProvider>
  );
}

export default App;
