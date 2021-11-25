import Preview from "./components/PreviewWorkout";

//import photo from "./Juan.jpg";
import data from "./test.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {
          //mapping the data from database (every preview of workout)
        }
        <Preview data={data} />
      </BrowserRouter>
    </div>
  );
}

export default App;
