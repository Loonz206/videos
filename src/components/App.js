import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import VideoDetail from "../components/VideoDetail";
import VideoList from "../components/VideoList";
import useVideos from "../hooks/useVideos";
import { setDataToCache } from "../util/sessionCache";

const App = () => {
  // default search term
  const [videos, search] = useVideos("bacon cheeseburgers");
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    if (videos) {
      setSelectedVideo(videos[0]);
      setDataToCache(selectedVideo);
    }
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
