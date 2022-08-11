import './App.css';
import { HomePage } from './pages/HomePage/Home';
import {Card}  from './components/Card/Card';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

function App() {
  return (  
    <div className="App">
      <Roll left>
        <div className='content-title'>
          What's cooking this week
        </div>        
      </Roll>
      <Fade left className='card-container'>
        <div className='card-content'>
        <Card 
          title={"Grilled Cheese for a Bad Day with Scallion Mayonnaise"}
          text={"An indulgent play off the classic grilled cheese featuring melted gruyere and cheddar alongside apple and scallion mayonnaise oozing between two thick slices of artisan bread."}
          image={"./assets/images/cheese.png"}
        />
        <Card 
          title={"Spaghetti with Creamy Red Bell Pepper Ginger Sauce"}
          text={"A simple bowl of pasta made with spaghetti tossed with a creamy red bell pepper and ginger sauce. A bowl of carbs made for comforting meal while being simple to put together."}
          image={"./assets/images/spagetti.png"}
        />
        <Card 
          title={"Zuppa Toscana Congee"}
          text={"Simple congee serves as the perfect base for the flavors of the iconic Zuppa Toscana soup from Olive Garden. The congee features a comforting base filled with ground pork, kale, garlic, and sliced potato."}
          image={"./assets/images/chicken.png"}
        />
        </div>
      </Fade>      
    </div>
  );
}

export default App;
