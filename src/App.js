import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import Meme from './Components/Meme';
import {data} from './data.js';
import './App.css';

function App() {

  const TravelData = data.map(item => {
    return(
      <Cards 
          item={item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      {TravelData}
      <Meme />
    </div>
  );
}

export default App;
