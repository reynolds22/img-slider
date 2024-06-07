import './App.css';
import ImgSlider from "./components";

function App() {
  return (
    <ImgSlider 
      url={"https://picsum.photos/v2/list?page=1&limit=5"} 
      limit={'10'} 
      page={'1'} 
    />
  );
}

export default App;
