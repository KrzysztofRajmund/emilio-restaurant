import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Slider, Direction, PlayerIcon } from 'react-player-controls';
const AboutVideo = () => {
  const [play, setPlay] = useState(true);

  return (
    <React.Fragment>
      <section className='video'>
        <ReactPlayer
          controls={true}
          className='video__frame'
          url='https://www.youtube.com/watch?v=S9KUR3phn1E'
        />
      </section>
    </React.Fragment>
  );
};

export default AboutVideo;
