import { useState, useEffect } from "react";
import youtube from "../api/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    try {
      const response = await youtube.get("/search", {
        params: {
          q: term,
        },
      });
      const { data } = response;
      setVideos(data.items);
    } catch (error) {
      console.error("An error has occurred", error);
    }
  };
  return [videos, search];
};

export default useVideos;
