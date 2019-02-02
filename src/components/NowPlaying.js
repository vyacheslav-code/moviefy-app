import React, { Component } from 'react';
import axios from 'axios'
import ListItem from './ListItem'


const request = 'https://api.themoviedb.org/3/movie/now_playing?api_key=35bdfd8ec0dcd70c85336a22a5b55f5a&language=en-US&region=UA';


class NowPlaying extends Component {
    state = {
        isPlaying:[],
        isLoading: false
    };
    async componentDidMount() {
        this.setState({ isLoading: true });

        try {
            const result = await axios.get(request);

            this.setState({
                isPlaying: result.data.results,
                isLoading: false
            });
        } catch (error) {
            this.setState({
                error,
                isLoading: false
            });
        }
    }
  render() {
    return (
      <div>
          {this.state.isLoading && <p>Loading...</p>}
          {
              this.state.isPlaying.map((item, index) => (
                  <ListItem
                  key={index}
                  item={item}
                  index={index+1}
                  />
              ))

          }

      </div>
    );
  }
}

export default NowPlaying;
