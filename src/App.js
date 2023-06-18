import React from "react";
import "./App.css";
import Calculator from "./components/Calculator";

function App(props) {
    return (
        <div className="App">
            <Calculator button={props.button} />
        </div>
    );
}

export default App;
