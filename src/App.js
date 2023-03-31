import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Box } from '@mui/material';


import { Navbar, VideoDetail, ChannelDetail, SearchFeed, Feed } from './components';

const App = () => (

    <Router>
        <Box sx={{ backgroundColor: '#000' }} >
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Feed />} />
                {/* ,/vedio/:id  when a user submits a form, the page might dynamically render new content based on the information submitted. */}
                {/* id will show the some random number in the link */}
                <Route path='/video/:id' element={<VideoDetail />} />
                <Route path='/channel/:id' element={<ChannelDetail/>} />
                <Route path='/search/:searchTerm' element={<SearchFeed/>} />
            </Routes>
        </Box>
    </Router>
)

export default App
