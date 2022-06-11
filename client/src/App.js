import "./App.css"
import { Routes, Route} from "react-router-dom"
import LandigPage from "./components/LandigPage";
import HomePage from "./components/HomePage";
import CreateActivity from './components/createActivity/CreateActivity'


function App() {

  return (
    <div className="app"> 
      <Routes >
        <Route  exact path="/" element ={<LandigPage/>}></Route>
        <Route  path="/home" element ={<HomePage/>}></Route>
        <Route  path="/createActivity" element ={<CreateActivity/>}></Route>
      </Routes>
    </div> 
  );
}

export default App;
