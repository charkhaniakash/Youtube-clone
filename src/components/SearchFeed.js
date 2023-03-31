import React, { useEffect, useState } from "react";
import { Box,Typography } from "@mui/material";

import { fetchFromApi } from "../utils/fetchFromApi";
import { Videos} from "./";
import { useParams} from "react-router-dom";


// Here's an example to clarify how the search, part, and q parameters work in an API request.
// Let's say we want to search for videos about "cat videos" on YouTube using the YouTube API. The API call might look like this:fetchFromAPI(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=cat+videos`)
// The endpoint is search, which is specified after /youtube/v3/ in the URL.
// The part parameter is set to snippet, which tells the API to return only the video snippets that match the search criteria.
// The q parameter is set to cat+videos, which specifies the search terms. In this case, we're searching for videos about "cat videos".

// `search?part=snippet&q=${selectedCategory}`

// In this URL, snippet is a part parameter in the YouTube API v3 search endpoint. The part parameter specifies the resource properties that should 
// be returned in the API response. In this case, the snippet part contains information about the search results, including their titles, descriptions, and thumbnails.

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);


// The useParams() hook is a React Router hook that allows
//  you to access the parameters of the current URL. 
  const {searchTerm} = useParams()

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          Results from <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
        </Typography>

        <Videos videos={videos}/>
      </Box>
  )
}

export default SearchFeed



