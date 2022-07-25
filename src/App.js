import Header from "./Hompage/Header/Header";
function App() {
  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "1000vh",
          backgroundColor: "#eaeded",
        }}
      >
        <Header />
      </header>
    </div>
  );
}

export default App;
