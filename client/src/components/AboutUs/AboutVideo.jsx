import React from 'react';
import ReactPlayer from 'react-player';
const AboutVideo = () => {
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
