import './App.css';
import Home from './Home'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Header from './Header';
import Checkout from './Checkout';
// import { Login } from '@mui/icons-material';
import Login from './Pages/Login';

function App() {
  const router = createBrowserRouter([
    
    {
      path: "/login",
      element: <div>
        <Login/>
        
        </div>,
    },
    {
      path: "/",
      element: <div>
        <Header/>
        <Home/>
        </div>,
    },
    {
      path: "/checkout",
      element: <div>
        <Header/>
        <Checkout/>
        </div>,
    }
  ]);



  return (
    <div className="App">
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
