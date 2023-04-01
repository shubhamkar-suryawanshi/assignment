import React, { useEffect, useRef } from 'react';
import './App.css';
import test from './test.mp4';

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    let options = {
      rootMargin: '0px',
      threshold: [0.25, 0.75],
    };

    let handlePlay = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };

    let observer = new IntersectionObserver(handlePlay, options);

    observer.observe(videoRef.current);
  });

  return (
    <div className="App">
      <div className="hero">
        <h1>
          To play the <strong>Video</strong>, click on the below button <br />
          <strong>👇</strong>
        </h1>
        <button>
          <a href="#gallery">Show Video</a>
        </button>
      </div>

      <div id="gallery" className="video-container">
        <video src={test} ref={videoRef}></video>
      </div>
    </div>
  );
}

export default App;
