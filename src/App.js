
import './App.css';
import farah from './img2.jpeg' ;

function App() {
  return (
    <div className="Main">
    
    
    <div style ={{border:'solid 1px black', maxWidth:'100vw'}}/>
    <h1 className="title">FARAH</h1>
    <br/>
    <br/>
    <img src={farah} alt='image de farah'/>
    <br/>
    <br/>
    <br/>
    
   {<iframe width="853" height="480" src="https://www.youtube.com/embed/Mupom-sgjAU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  }
   <br/>
   <br/>
   <br/>
    <img src ="/img1.jpg" alt ="C:\Users\Administrateur\Desktop\CHECKPOINT JSX\checkpoint\public\img1.jpg" />
    
    </div>
      );
    }
    
    export default App;