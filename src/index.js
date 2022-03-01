import "./index.css"
import ReactDOM  from "react-dom";
import React from "react";
import App from "./views/App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <Router>
        <App></App>
    </Router>,
    document.getElementById('root')
)