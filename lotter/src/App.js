import React from "react";
import Lottery from "./Lottery";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Lottery title="Lotto" decNum={6} maxNum={40} />
      <Lottery title="Mini Daily" decNum={4} maxNum={10} />
    </div>
  );
};

export default App;
