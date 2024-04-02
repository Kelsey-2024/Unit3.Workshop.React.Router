import { Routes, Route , Link } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import MainContainer from './components/MainContainer.jsx';
import './App.css'

function App() {
  
  return (
    <>
      <div id ="container">
        <NavBar />
        <MainContainer />
      </div>
    </>
  )
}

export default App
