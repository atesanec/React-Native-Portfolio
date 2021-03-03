import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import App from '../App';
import Router from '../Router';
import IntlProviderContainer from '../../../containers/Common/IntlProviderContainer';
import AssetPreloader from '../AssetPreloader';
import StatusBarHeightProvider from '../StatusBarHeight';
import GlobalStoreContext from '../GlobalStoreContext';
import LocalStoreProviderContainer from '../../../containers/Common/LocalStoreProviderContainer';
import { LocalStoreConsumer } from '../LocalStoreProvider';
import AppReadinessGuardContainer from '../../../containers/Common/AppReadinessGuardContainer';
import PassTokenSynchronizerContainer from '../../../containers/Pass/PassTokenSynchronizerContainer';
import KeyboardHeightProvider from '../KeyboardHeight';

function Entrypoint({ storeGlobal, history }) {
  return (
    <Provider store={storeGlobal} context={GlobalStoreContext}>
      <AppReadinessGuardContainer>
        <LocalStoreProviderContainer>
          <LocalStoreConsumer>
            {({ currentStore }) => (
              <Provider store={currentStore}>
                <IntlProviderContainer>
                  <Router history={history} context={GlobalStoreContext}>
                    <KeyboardHeightProvider>
                      <StatusBarHeightProvider>
                        <AssetPreloader>
                          <PaperProvider>
                            <PassTokenSynchronizerContainer />
                            <App />
                          </PaperProvider>
                        </AssetPreloader>
                      </StatusBarHeightProvider>
                    </KeyboardHeightProvider>
                  </Router>
                </IntlProviderContainer>
              </Provider>
            )}
          </LocalStoreConsumer>
        </LocalStoreProviderContainer>
      </AppReadinessGuardContainer>
    </Provider>
  );
}

Entrypoint.propTypes = {
  storeGlobal: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Entrypoint;
