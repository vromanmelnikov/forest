import { useEffect } from 'react';
import { useLocation, useNavigate, useRoutes } from 'react-router';
import './App.css';
import MainRoutes from './routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const routes = useRoutes(MainRoutes)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(
    () => {
      if (location.pathname == '/'){
        navigate('/main')
      }
    }
  )

  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
