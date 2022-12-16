import {Platform} from 'react-native';

export default Platform.select({
  ios: () => require('./ios'),
  android: () => require('./android'),
})();
