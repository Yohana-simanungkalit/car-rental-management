import './App.css';
import { Provider } from 'react-redux';
import RouteList from './routes';
import MainStore from './slice/store/store';

function App() {
  return (
    <>
    <Provider store={MainStore}>
      <RouteList/>
    </Provider>
    </>
  );
}

export default App;
