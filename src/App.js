import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <>
      <div>
      <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/dashboard' Component={Dashboard}/>
      </Routes>
      </div>
    </>
  );
}

export default App;
