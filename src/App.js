import "./App.css";
import Game from "./Game";
import Header from "./Header";
import Games from "./Games.json";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {Games.map((element) => {
          return (
            <Game
              title={element.Title}
              download={element.Downloads}
              img={element.Poster}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
