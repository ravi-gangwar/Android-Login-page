/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import AppPro from './AppPro';
import {name as appName} from './app.json';
import LoginPage from './LoginPage';

AppRegistry.registerComponent(appName, () => LoginPage);
