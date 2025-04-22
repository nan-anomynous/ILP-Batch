import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './footer';


function App() {
  let name="React project";
  let l=[1,2,3,4,5,];
  let obj ={
    name:"hehehee",
    desc:"huihuihui"
  }
  let status=false;

  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {name}
        {
          (status)? <p> {Object.desc}</p>:"nothing"
        }
        {23*13}
        {
          l.map((v)=>{
            return(
              <div>{v}</div>
            )
          })
        }
      </header>
      <Footer/>
    </div>
  );
}

export default App;
