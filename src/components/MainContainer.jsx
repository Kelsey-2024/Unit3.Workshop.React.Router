import {Routes, Route} from 'react-router-dom'
import Home from './Home.jsx';
import Blue from './Blue.jsx';
import Red from './Red.jsx';

const MainContainer = () => {
  return(
    <div id="main-section">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blue' element={<Blue />}></Route>
        <Route path='/red' element={<Red />}></Route>
      </Routes>
    </div>
  )
}

export default MainContainer;