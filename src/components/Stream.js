import React, {Component} from 'react';

export default class Stream extends Component {
  render() {
    const { tracks = [] } = this.props;

    return (
      <div>
      {
        tracks.map((track, key) => {
          return <div className="track" key={key}>{track.title}</div>;
        })
      }
      </div>
    )
  }
}
