import { Box, Stack } from '@mui/system'
import React, { useState } from 'react'
import { Typography } from '@mui/material'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchFromApi'
// import Videos from './'

import moment from 'moment'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Videos from './Videos'
const VideoDetail = () => {


  const [videoDetail, setVideoDetail] = useState(null)

  const [reletVideo, setReletVideo] = useState(null)

  const { id } = useParams()


  useState(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromApi(`search?part=snippet&reletedToVideoId=${id}&type=video`)
      .then((data) => setReletVideo(data.items[0]))
  }, [id])

  return (
    <Box minHeight="97vh" >
      <Stack direction={{ sx: "column", md: "row" }}>
        <Box flex={2}>
          <Box sx={{ width: '100%', position: 'sticky', marginTop: '50px' }} >
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              width='100%' height="100%"
              className='react-player' controls
            />
            <Typography variant='h5' color='white' fontWeight='bold' p={2}>
              {videoDetail?.snippet?.title}
            </Typography>


            <Stack>
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`} width='100px'>
                <Typography variant='h5' color='white' justifyItems='start' >
                  {videoDetail?.snippet?.channelTitle}
                  <CheckCircleIcon sx={{ fontSize: '12px', color: 'grey', ml: '5px' }} />
                </Typography>
                <Typography variant='v5' color='grey'>
                  {videoDetail?.statistics?.subscriberCount}
                </Typography>
              </Link>
              <Stack direction='row' gap='30px'>
                <Typography variant='h7' color='grey'>
                  {videoDetail?.statistics?.viewCount} views
                </Typography>
                <Typography variant='h7' color='grey'>
                  {moment.utc(videoDetail?.snippet?.publishedAt).local().startOf('seconds').fromNow()}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos reletVideo={reletVideo} />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
