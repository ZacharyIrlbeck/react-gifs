import React from 'react';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';
import Gif from './components/Gif';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGif: "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif"
    };
  }

  componentWillMount() {
    const initSearchQuery = "http://api.giphy.com/v1/gifs/trending?api_key=YJX55XcfY5kziDCNt8AdN84EUvADhApg&rating=r";
    fetch(initSearchQuery).then(res => res.json()).then((json) => {
      const initIdList = json.data.map(gifObject => gifObject.id);
      this.setState({ gifs: initIdList });
    });
  }

  handleSearch = (event) => {
    const query = event.target.value;
    const searchUrl = `http://api.giphy.com/v1/gifs/search?api_key=YJX55XcfY5kziDCNt8AdN84EUvADhApg&q=${query}&rating=r&limit=10`;
    fetch(searchUrl).then((res) => { return res.json(); }).then((json) => {
      console.log(json.data.map(gif => gif.id));
      const idList = json.data.map(gifObject => gifObject.id);
      this.setState({ gifs: idList });
    });
  }

  handleClick = (event) => {
    const chosenUrl = event.currentTarget.src;
    this.setState({
      selectedGif: chosenUrl
    });
  }

  render() {
    const { gifs, selectedGif } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar className="form-search" handleSearch={this.handleSearch} />
          {/* { (selectedGif) ? ( */}
          <Gif className="selected-gif" imgSrc={selectedGif} />
          {/* ) : (
            <Gif className="selected-gif" />
          )
          } */}
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} handleClick={this.handleClick} />
        </div>
      </div>

    );
  }
}

export default App;
