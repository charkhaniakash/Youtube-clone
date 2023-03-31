// https://preeminent-kelpie-533738.netlify.app/



import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromApi } from "../utils/fetchFromApi";
import { Videos, SideBar } from "./";
// Here's an example to clarify how the search, part, and q parameters work in an API request.
// Let's say we want to search for videos about "cat videos" on YouTube using the YouTube API. The API call might look like this:fetchFromAPI(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=cat+videos`)
// The endpoint is search, which is specified after /youtube/v3/ in the URL.
// The part parameter is set to snippet, which tells the API to return only the video snippets that match the search criteria.
// The q parameter is set to cat+videos, which specifies the search terms. In this case, we're searching for videos about "cat videos".

// `search?part=snippet&q=${selectedCategory}`

// In this URL, snippet is a part parameter in the YouTube API v3 search endpoint. The part parameter specifies the resource properties that should 
// be returned in the API response. In this case, the snippet part contains information about the search results, including their titles, descriptions, and thumbnails.

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null); 

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className="copyright" variant="p" sx={{ mt: 1.5, color: "#fff", }}>
          Made with ❤️ by @kash
        </Typography>
      </Box>


      <Box sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed



