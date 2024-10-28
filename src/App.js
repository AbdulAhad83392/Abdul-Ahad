import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navz from './Zameen.com/Navz';
import Body from './Zameen.com/Body';
import Bottom from './Zameen.com/Bottom';
import Calculator from './Zameen.com/Calculator';
import './Zameen.com/Zameen.css'
import Example from './Zameen.com/Nav';
// import './Project/Project.css';
// import Main from './Project/Main';
// import Portfoilo from './Project/Portfoilo';
// import About from './Project/About';
// import Contact from './Project/Contact';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
      <Navz />
      <Example/>
      <Body />
      <Bottom />
      <Calculator/>

      {/* <Main />
      <Menu />
      
      <Portfoilo />
      
      <About />
      
      <Contact/> */}

      
      
        

          
    </div>
  );
}

export default App;
