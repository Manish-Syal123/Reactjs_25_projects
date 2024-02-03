import "./App.css";
import Home from "./component/Accordian/Home";
import RandomColor from "./component/random-color";
import StarRating from "./component/Star-Rating";
import ImageSlider from "./component/image-slider";
function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Home /> */}
      {/* Random color generator */}
      {/* <RandomColor /> */}
      {/* Star-Rating component */}
      {/* <StarRating noOfStars={10} /> */}

      {/* Image slider component */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </div>
  );
}

export default App;
