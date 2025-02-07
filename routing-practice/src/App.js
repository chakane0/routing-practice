import './App.css';
import { RouterProvider } from 'react-router-dom';
// import {router} from './Components/Route66';
import { router } from './Components/decouple/Route18';
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
