import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import image1 from '../../assets/img/entrata1 .jpeg';
import image2 from '../../assets/img/scale.jpeg';
import image3 from '../../assets/img/soggiorno2.jpeg';
import image4 from '../../assets/img/soggiorno1.jpeg';
import image5 from '../../assets/img/saladapranzo2.jpeg';
import image6 from '../../assets/img/cucina1.jpeg';
import image7 from '../../assets/img/bagno1su.jpeg';
import image8 from '../../assets/img/bagno2su.jpeg';
import image9 from '../../assets/img/bagno1giu.jpeg';
import image10 from '../../assets/img/bagno2giu.jpeg';
import image11 from '../../assets/img/camera1.jpeg';
import image12 from '../../assets/img/camera2.jpeg';
import image13 from '../../assets/img/camera3.jpeg';
import image14 from '../../assets/img/corridoiosu .jpeg';
import image15 from '../../assets/img/terrazzo.jpeg';










export default function TheHomeComponent() {
    return (
      <ImageList
        sx={{
          width: 790,
          height: 550,
          marginTop: 10,
          marginLeft: '15%', 
          border: 4,
          borderColor: '#EA540A',
          '&::-webkit-scrollbar': {
            width: '10px',
            height: '10px',
            left: '0', 
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#EA540A',
            '&:hover': {
              background: '#F29D14',
            },
          },
        }}
        variant="woven"
        cols={3}
        gap={8}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=161&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }

const itemData = [
  {
    img: image1,
    title: 'Bed',
  },
  {
    img: image2,
    title: 'Kitchen',
  },
  {
    img: image3,
    title: 'Sink',
  },
  {
    img: image4,
    title: 'Blinds',
  },
  {
    img: image5,
    title: 'Chairs',
  },
  {
    img: image6,
    title: 'Candle',
  },
  {
    img: image7,
    title: 'Laptop',
  },
  {
    img: image8,
    title: 'Doors',
  },
  {
    img: image9,
    title: 'Coffee',
  },
  {
    img: image10,
    title: 'Storage',
  },
  {
    img: image11,
    title: 'Coffee table',
  },
  {
    img: image12,
    title: 'Blinds',
  },
  {
    img: image13,
    title: 'Blinds',
  },
  {
    img: image14,
    title: 'Blinds',
  },
  {
    img: image15,
    title: 'Blinds',
  },
];
