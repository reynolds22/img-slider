import './App.css';
import ImgSlider from "./components";

function App() {
  return (
    <ImgSlider 
      url={"https://picsum.photos/v2/list"} 
      limit={'10'} 
      page={'1'} 
    />
  );
}
// url={"https://picsum.photos/v2/list?page=1&limit=5"} 

export default App;
