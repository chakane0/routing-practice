import './App.css';
import { RouterProvider } from 'react-router-dom';
import {router} from './Components/Route66';
import WelcomePage from './Components/WelcomePage';
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
