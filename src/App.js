import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from './requests';
import Button from './Button';


function App() {
  return (
    <div className="App">
      {/* nav */}
      <Button/>
      {/* <header className="App-header">
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
      </header> */}
      <h1>yeah</h1>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} big_poster/>
      <Row title="Fetch Trending" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries Movies" fetchUrl={requests.fetchDocumentariesMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      

      <div ></div>
    </div>
  );
}

export default App;
