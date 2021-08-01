import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p style={{ fontSize: "52px" }}>Lissa & Martinas ~ Coming Soon!</p>
        <div style={{ width: "100%", height: "500px" }}>
          <a
            data-pin-do="embedBoard"
            data-pin-board-width="400"
            data-pin-scale-height="240"
            data-pin-scale-width="80"
            href="https://www.pinterest.com/lissamei/dress-code/"
          ></a>
        </div>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
