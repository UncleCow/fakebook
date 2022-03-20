import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import { ImageViewer } from "react-image-viewer-dv";
import "../../css/ImagePage.css"

function ImagePage() {
  return (
    <Container maxWidth="md" sx={{ bgcolor: '#fff', borderRadius: 2, padding: "40px 30px 20px" }}>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <ImageViewer >
            <img className="img_page" src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/274351427_2153577864791552_7818378620949708504_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=-2acpKXY6E4AX-IOzXo&_nc_ht=scontent.fdad1-2.fna&oh=00_AT_puXkjpVzur9T3FSYodItG1c45qpcg8DoaSke9odkRog&oe=62363B6C" />
          </ImageViewer>
        </Grid>
        <Grid item xs={3}>
          <ImageViewer >
            <img className="img_page" src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/274351427_2153577864791552_7818378620949708504_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=-2acpKXY6E4AX-IOzXo&_nc_ht=scontent.fdad1-2.fna&oh=00_AT_puXkjpVzur9T3FSYodItG1c45qpcg8DoaSke9odkRog&oe=62363B6C" />
          </ImageViewer>
        </Grid>
        <Grid item xs={3}>
          <ImageViewer >
            <img className="img_page" src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/274351427_2153577864791552_7818378620949708504_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=-2acpKXY6E4AX-IOzXo&_nc_ht=scontent.fdad1-2.fna&oh=00_AT_puXkjpVzur9T3FSYodItG1c45qpcg8DoaSke9odkRog&oe=62363B6C" />
          </ImageViewer>
        </Grid>
        <Grid item xs={3}>
          <ImageViewer >
            <img className="img_page" src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/274351427_2153577864791552_7818378620949708504_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=-2acpKXY6E4AX-IOzXo&_nc_ht=scontent.fdad1-2.fna&oh=00_AT_puXkjpVzur9T3FSYodItG1c45qpcg8DoaSke9odkRog&oe=62363B6C" />
          </ImageViewer>
        </Grid>
        <Grid item xs={3}>
          <ImageViewer >
            <img className="img_page" src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/274351427_2153577864791552_7818378620949708504_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=-2acpKXY6E4AX-IOzXo&_nc_ht=scontent.fdad1-2.fna&oh=00_AT_puXkjpVzur9T3FSYodItG1c45qpcg8DoaSke9odkRog&oe=62363B6C" />
          </ImageViewer>
        </Grid>
      </Grid>
    </Box>
    </Container>
  )
}

export default ImagePage