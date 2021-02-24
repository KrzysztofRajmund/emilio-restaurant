import React from 'react';
import ReactPlayer from 'react-player';
const AboutVideo = () => {
  return (
    <React.Fragment>
      <section className='video'>
        <ReactPlayer
          className='video__frame'
          url='https://youtu.be/uaENJCWL-84'
        />
      </section>
    </React.Fragment>
  );
};

export default AboutVideo;
