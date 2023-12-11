import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';

const VideoPlayer = ({ videoId }) => {
  const [videoData, setVideoData] = useState({ title: '', description: '' });

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
          params: {
            id: videoId,
            part: 'snippet',
            key: process.env.YOUTUBE_API_KEY,
          },
        });

        const video = response.data.items[0].snippet;
        setVideoData({
          title: video.title,
          description: video.description,
        });
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    fetchVideoData();
  }, [videoId]);

  return (
    <div>
      <YouTube videoId={videoId} />
      <h2>{videoData.title}</h2>
      <p>{videoData.description}</p>
    </div>
  );
};

export default VideoPlayer; 