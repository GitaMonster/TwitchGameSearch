import React from 'react';
import icon from './icon.png';
import './App.css';
import SearchField from './SearchField.js';
import ResultsItem from './ResultsItem.js';
import Sidebar from './Sidebar.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      games: [],
      currentlySelectedGame: {}
    };
    this.fetchFromTwitch = this.fetchFromTwitch.bind(this);
    this.updateSearchResults = this.updateSearchResults.bind(this);
    this.selectGame = this.selectGame.bind(this);
  }

  fetchFromTwitch(input) {
    var req = new XMLHttpRequest();

    req.onload = function () {
      if (req.readyState === 4) {
        if (req.status === 200) {
          this.updateSearchResults(JSON.parse(req.responseText));
        } else {
          console.error(req.statusText);
        }
      }
    }.bind(this);

    req.open('GET', 'https://api.twitch.tv/kraken/search/games?query=World');
    req.setRequestHeader('Client-ID', 'obuq7qlphrub653ijesd6izf8avndr');
    req.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
    req.send();
  }

  updateSearchResults(response) {
    this.setState({games: response.games});
  }

  createResultsTable() {
    var table = [];
    for (let i = 0; i < this.state.games.length; i++) {
      table.push(<ResultsItem key={i} text={this.state.games[i].name} onClick={this.selectGame}/>);
    }
    return table;
  }

  selectGame(e) {
    this.setState({currentlySelectedGame: e.target.innerText});
  }

  render() {
    return (
      <div className="page">
        <header className="app-header">
          <img src={icon}/><span className="header-content">Twitch Game Search</span>
        </header>
        <div className="body">
          <div className="main-panel">
            <span>Search for your favourite games in the search box below. Click on their name to find out more information about them.</span>
            <div className="search-panel">
              <SearchField onChange={this.fetchFromTwitch}/>
              {this.createResultsTable()}
            </div>
          </div>
          <Sidebar title={this.state.currentlySelectedGame.name}/>
        </div>
      </div>
    );
  }
}

export default App;
