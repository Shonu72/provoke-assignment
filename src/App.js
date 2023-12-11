import React from 'react';
import VideoPlayer from './video';

function App() {
  // Use an unlisted video ID for testing
  const unlistedVideoId = '7DXZ4VXfkK8';

  return (
    <div className="App">
      <h1>YouTube Video Player</h1>
      <VideoPlayer videoId={unlistedVideoId} />
    </div>
  );
}

export default App;
