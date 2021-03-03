import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native-paper';
import Content from '../Content';
import Button from '../Button';
import Link from '../Link';
import { StatusBarHeightConsumer } from '../StatusBarHeight';
import BaseScreen from '../BaseScreen';

// eslint-disable-next-line no-unused-vars
function HomeScreen({ onLogout }) {
  return (
    <BaseScreen>
      <StatusBarHeightConsumer>
        {({ height }) => (
          <Content style={{ marginTop: height }}>
            <Text>Home screen (TBD).</Text>
            <Link to="/lsa" component={Button}>
                LSA screen
            </Link>
            <Link to="/ble" component={Button}>
                BLE screen
            </Link>
            {/* <Button onPress={onLogout}>Logout</Button> */}
          </Content>
        )}
      </StatusBarHeightConsumer>
    </BaseScreen>
  );
}

HomeScreen.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default HomeScreen;
