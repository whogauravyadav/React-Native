import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
function App() {
  return (
   <>
   <Navbar aboutText="about" />
   <div className='container'>
   <Textform />
   </div>
   </>
    
  );
}

export default App;
