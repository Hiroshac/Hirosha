
// import './App.css';
import Headerbar from './Components/headerbar';
import Home from './Components/home/Home';
import Experience from './Components/experience/Experience'
import Project from './Components/project/Project'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'

// import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <div>
       <Headerbar/>
      <Home />
      <Experience/>
      <Project/>
      <Contact/>
      <Footer/>

      {/* <Headerbar/>
      <Router>
        <Route path = "/home" exact component = {Home}/>
      </Router> */}
    </div>

 
 
  );
}

export default App;
