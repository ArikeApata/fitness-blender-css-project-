import Home from './Home';
import NavBar from './Navbar';
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar/>
      </header>
      <div className="body">
        <Home/>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
