import React, {Component} from 'react';

export default function Steam({tracks = []}) {
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
