import { Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import LoaderContainer from './components/HOC/Loader/Loader.container'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={<LoaderContainer width='100vw' height='100vh' color='white'/>}>
        <App />
      </Suspense>
    </Provider>
  </BrowserRouter>
);