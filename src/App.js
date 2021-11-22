import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my site</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={ } />
      <Row title="Trending Now" fetchUrl={ } />
    </div>
  );
}

export default App;
