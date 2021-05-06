import { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';

class App extends Component {
  
  state = {
    characterList: []
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((response) => this.setState({ characterList: response.results }))
      .catch((error) => console.log("Error: ", error));
  }


  render() {
    const { characterList } = this.state;
      return (
        <div className="App">
        <header className="App-header">
          { characterList && <CharacterList list={characterList} />}
        </header>
      </div>
    );
  }
}

export default App;
