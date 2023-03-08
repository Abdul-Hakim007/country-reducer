// import logo from './logo.svg';
// import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Countires from './Components/Countries/Countires';
import CountryContext from './Context/CountryContext';

function App() {
  return (
    <>



    <CountryContext>
      <Countires />
    </CountryContext>
    </>
  );
}

export default App;
