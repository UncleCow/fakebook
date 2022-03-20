import React, { useRef, useEffect } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import video1 from "../../video/test1.mp4"
import "../../css/VideoPage.css"

function VideoPage() {
  const videoRef = useRef()
  console.log(videoRef.current)

  /* const mouseEnter = () => {
    for (let i = 0; i < videoRef.current.length; i++) {
      videoRef.current[i].play()
    }
  } */
  const mouseEnter = () => {
    videoRef.current.play()
  } 


  const mouseLeave = () => {
    videoRef.current.currentTime = 0
    videoRef.current.pause()
  }

  return (
    <Container maxWidth="md" sx={{ bgcolor: '#fff', borderRadius: 2, padding: "40px 30px 20px" }}>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <video 
          type="video/mp4"
          ref={videoRef}
          src={video1}
          onMouseEnter={mouseEnter}
          onMouseOut={mouseLeave}
        />
      </Grid>
    </Grid>
  </Box>
  </Container>
  )
}

export default VideoPage