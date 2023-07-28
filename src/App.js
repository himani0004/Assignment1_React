// import logo from './logo.svg';
import imghimani1 from './images/image1.png'
import imghimani2 from './images/image2.png'
import imghimani3 from './images/image3.png'
import imghimani4 from './images/image4.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <p className="heading">Popular Products</p>
      <hr></hr>
      <table className="mytable" style={{ margin: 'auto' }}>
        <tr>
          <td >
            <img src={imghimani1} alt="Image1" width="280" height="150" />
          </td>
          <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg>  <br/>
            61
          </td>
          <td>
            <strong>Haught and naught</strong>
            <br />
            Hight minded or absent minded you decide
            <br/>
           <strong>Submitted by:</strong>  <img src= {imghimani1} alt ="Image1"  className ='logo'/>
            </td>
          
        </tr>
        
          
        
        <tr>
          <td >
            <img src={imghimani2} alt="Image2" width="280" height="150" />
          </td>
          <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg> <br/>
            54
          </td>
          <td>
            <strong>Supermajority: The Fantasy Congress League</strong>
            <br/>
            Earn points when your favourite politicians pass legistlature
            <br/>
            <strong>Submitted by:</strong> <img src= {imghimani2} alt ="Image2"  className ='logo'/>
          </td>
        </tr>



        <tr>
          <td >
            <img src={imghimani3} alt="Image3" width="280" height="150" />
          </td>
          <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg><br /> 27</td>
          <td> 
            <strong> tinfoild:tailored tinfoil hats</strong>
             <br/>
             Don't worry we alreadyhave your measurement and shipping address     
             <br/>
            <strong>Submitted by:</strong> <img src= {imghimani3} alt ="Image3"  className ='logo'/>  
          </td>
        </tr>







        <tr>
          <td >
            <img src={imghimani4} alt="Image4" width="280" height="150" />
          </td>
          <td> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg> <br/>
            26
          </td>
          <td>
            <strong>yellow pall</strong>
            <br/>
            on-demand sand castle construction expertise.
            <br/>
  
            <strong>Submitted by:</strong> <img src= {imghimani4} alt ="Image4"  className ='logo'/>
          </td>
        </tr>




      </table>
    </div>
  );
}

export default App;
