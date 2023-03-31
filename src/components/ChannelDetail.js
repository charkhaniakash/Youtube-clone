import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system'

import { ChannelCard, Videos } from './'
import { useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchFromApi'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

 
  const { id } = useParams();


  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]))
    fetchFromApi(`search?channelId=${id}&part=snippet&id=${id} & order=date`)
      .then((data) => setVideos(data.items))
  }, [id])


  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height: '300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail






// import React, { useEffect, useState } from 'react'
// import { Box } from '@mui/system'

// import { ChannelCard, Videos } from './'
// import { useParams } from 'react-router-dom'
// import { fetchFromApi } from '../utils/fetchFromApi'
// const ChannelDetail = () => {

//   const [channelDetail, setChannelDetail] = useState();
//   const [videos, setVideos] = useState(null);
//   console.log(videos)



//   const { id } = useParams()

//   // In this example, the useParams hook retrieves the postId parameter from the URL, and the useEffect hook is used to fetch the details of the post from the API. The details are then displayed in the component using the post state.

//   useEffect(() => {
//     fetchFromApi(`channels?part=snippet&id=${id}`)
//       .then((data) => setChannelDetail(data?.items[0]))
//     fetchFromApi(`search?channelId=${id}&part=snippet&id=${id} & order=date`)
//       .then((data) => setVideos(data?.items))
//   }, [id])


//   return (
//     <Box minHeight="95vh">
//       <Box>
//         <div style={{
//           height:'300px',
//           background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
//           zIndex: 10,
//         }} />
//         <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
//       </Box>
//       <Box p={2} display="flex">
//       <Box sx={{ mr: { sm: '100px' } }}/>
//         {/* <Videos videos={videos} /> */}
//       </Box>
//     </Box>
//   )
// }

// export default ChannelDetail

