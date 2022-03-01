import React from "react";
import Menu from "../components/layouts/Menu";
import Content from "../components/layouts/Content";
// import { BrowserRouter as Router} from "react-router-dom";
import './App.css';


const App = (props) => (
    <div className="App">
        <Menu /> 
        <Content />              
    </div>
)

export default App;


