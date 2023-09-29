/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Router from './src/router/Router.tsx';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);
