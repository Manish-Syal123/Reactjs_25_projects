import "./App.css";
import Home from "./component/Accordian/Home";
import RandomColor from "./component/random-color";
import StarRating from "./component/Star-Rating";
function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Home /> */}
      {/* Random color generator */}
      {/* <RandomColor /> */}
      {/* Star-Rating component */}
      <StarRating noOfStars={10} />
    </div>
  );
}

export default App;
