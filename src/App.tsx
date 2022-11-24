import React from 'react';
import { ApolloProvider } from '@apollo/client';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme';
import { InternalizationContextProvider, UserContextProvider } from './context';
import Navigation from './routing/Navigation';
import { client, snackbarConfig } from './config';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client()}>
        <StyledEngineProvider injectFirst>
          <InternalizationContextProvider>
            <Router>
              <SnackbarProvider {...snackbarConfig}>
                <UserContextProvider>
                  {/* <Navigation /> */}
                  <div>123</div>
                </UserContextProvider>
              </SnackbarProvider>
            </Router>
          </InternalizationContextProvider>
        </StyledEngineProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;

/*
*<Navigation />


        
          
            
             
               
                  <UserContextProvider>
                    <MetricsContextProvider>

* */
