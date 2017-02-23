import React from 'react';

function Stream({tracks = [], onAuth}) {
  return (
    <div>
      <div>
        <button onClick={onAuth}>Login</button>
      </div>
      <br/>
      <div>
        {
          tracks.map((track, key) => {
            return <div className="track" key={key}>{track.title}</div>;
          })
        }
      </div>
    </div>
  )
}

export default Stream;