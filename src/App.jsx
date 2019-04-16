import React from 'react';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';
import Gif from './components/Gif';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifDataObjs: [],
      selectedGif: null
    };
  }

  componentWillMount() {
    const initSearchQuery = "http://api.giphy.com/v1/gifs/trending?api_key=YJX55XcfY5kziDCNt8AdN84EUvADhApg&rating=r";
    fetch(initSearchQuery).then(res => res.json()).then((json) => {
      const initIdList = json.data.map(gifObject => gifObject.id);
      this.setState({ gifDataObjs: initIdList });
    });
  }

  handleSearch = (event) => {
    const query = event.target.value;
    const searchUrl = `http://api.giphy.com/v1/gifs/search?api_key=YJX55XcfY5kziDCNt8AdN84EUvADhApg&q=${query}&rating=r&limit=10`;
    fetch(searchUrl).then((res) => { return res.json(); }).then((json) => {
      console.log(json.data.map(gif => gif.id));
      const idList = json.data.map(gifObject => gifObject.id);
      this.setState({ gifDataObjs: idList });
    });
  }

  render() {
    const { gifDataObjs, selectedGif } = this.state;

    return (
      <div>
        <div className="left-scene">
          <SearchBar className="form-search" handleSearch={this.handleSearch} />
          { console.log(selectedGif ? 'true' : 'false') }
          {selectedGif ? 
            (<Gif className="selected-gif" selectedGif={selectedGif} />) :
            (null)
          }
        </div>
        <div className="right-scene">
          <GifList gifs={gifDataObjs} />
        </div>
      </div>

    );
  }
}

export default App;
