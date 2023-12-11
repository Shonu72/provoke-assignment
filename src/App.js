import React from 'react';
import VideoPlayer from './video';
import './App.css';

function App() {
  // Use an unlisted video ID for testing
  const unlistedVideoId = '7DXZ4VXfkK8';

  return (
    <div className="App">
      <h1>YouTube Video Player</h1>
      <p>Assignment by Sonu Kumar </p>
      <VideoPlayer videoId={unlistedVideoId} />
    </div>
  );
}

export default App;
