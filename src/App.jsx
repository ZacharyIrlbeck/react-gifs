import React from 'react';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';
import Gif from './components/Gif';
import gif from './components/Gif';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [
        { id: 'to8AmZ3lEUhqg' }
      ]
    };
  }

  handleSearch = (event) => {
    const query = event.target.value;
    const searchUrl = `http://api.giphy.com/v1/gifs/search?api_key=YJX55XcfY5kziDCNt8AdN84EUvADhApg&q=${query}&rating=r`;
    fetch(searchUrl).then((res) => { return res.json(); }).then((json) => {
      // console.log(json.data.map(gif => gif.id));
      const idList = json.data.map(gifObject => gifObject.id);
      this.setState({ gifs: idList });
    });
  }

  render() {
    const { gifs } = this.state;

    return (
      <div>
        <div className="left-scene">
          <SearchBar className="form-search" handleSearch={this.handleSearch} />
          <Gif className="selected-gif" id={gifs} />
        </div>
        <div className="right-scene">
          <GifList id={gifs} />
        </div>
      </div>

    );
  }
}

export default App;
