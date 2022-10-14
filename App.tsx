import {Provider} from 'react-redux';
import Todos from './src/views/Todos';
import store from './src/redux/store';

const App = () => (
  <Provider store={store}>
    <Todos />
  </Provider>
);

export default App;
