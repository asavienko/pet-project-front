import React from 'react';
import { ApolloProvider } from '@apollo/client';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import theme from './theme';
import { InternalizationContextProvider, UserContextProvider } from './context';
import Navigation from './routing/Navigation';
import { client, snackbarConfig } from './config';
import Error from 'components/templates/Error';

function App() {
  return (
    <ApolloProvider client={client()}>
      <InternalizationContextProvider>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <ErrorBoundary
              onError={(e) => {
                console.log(e);
              }}
              fallbackRender={() => <Error />}
            >
              <SnackbarProvider {...snackbarConfig}>
                <Router>
                  <UserContextProvider>
                    <Navigation />
                  </UserContextProvider>
                </Router>
              </SnackbarProvider>
            </ErrorBoundary>
          </ThemeProvider>
        </StyledEngineProvider>
      </InternalizationContextProvider>
    </ApolloProvider>
  );
}

export default App;

/*
*<Navigation />


        
          
            
             
               
                  <UserContextProvider>
                    <MetricsContextProvider>

* */
