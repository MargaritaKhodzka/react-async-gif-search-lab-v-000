import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {
  state = {
    gifs: []
  }

  render() {
    return(
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  fetchGifs = (value = 'cats') => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${value}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then(({data}) => {
        this.setState({gifs: data.map(gif => ({url: gif.images.original.url}) )} )
      })
  }

  componentDidMount() {
    this.fetchGifs();
  }
}

export default GifListContainer;
