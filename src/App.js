import "./App.css";
import Home from "./component/Accordian/Home";
import RandomColor from "./component/random-color";
import StarRating from "./component/Star-Rating";
import ImageSlider from "./component/image-slider";
import LoadMoreData from "./component/LoadMoreData";
import TreeView from "./component/Tree-View";
import { menus } from "./component/Tree-View/data";
import QRCodeGenerator from "./component/QRCode-Generator";
import LightDarkMode from "./component/Light-Dark-Mode";
import ScrollIndicator from "./component/Scroll-Indicator";
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
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* Loading more data */}
      {/* <LoadMoreData /> */}

      {/* Tree view component or menu UI component or recursive navigation menu */}
      {/* <TreeView menus={menus} /> */}

      {/* Qrcode generator */}
      {/* <QRCodeGenerator /> */}

      {/* Toggle Light-Dark mode */}
      {/* <LightDarkMode /> */}

      {/* Scroll Indicator Component */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;
