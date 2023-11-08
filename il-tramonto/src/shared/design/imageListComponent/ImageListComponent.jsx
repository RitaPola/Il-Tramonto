import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import image1 from '../../assets/img/6.jpeg';
import image2 from '../../assets/img/7.jpeg';
import image3 from '../../assets/img/32.jpeg';
import image4 from '../../assets/img/33.jpeg';
import image5 from '../../assets/img/34.jpeg';
import image6 from '../../assets/img/36.jpeg';
import image7 from '../../assets/img/4.jpeg';
import image8 from '../../assets/img/5.jpeg';



function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ImageListComponent() {
  return (
    <ImageList
      sx={{ width: 790, height: 500, marginTop:10, marginLeft:5}}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
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
    rows: 2,
    cols: 2,
  },
  {
    img: image2,
  },
  {
    img: image3,
  },
  {
    img: image4,
    cols: 2,
  },
  {
    img: image5,
    cols: 2,
  },
  {
    img: image6,
    rows: 2,
    cols: 2,
  },
  {
    img: image7,
  },
  {
    img: image8,
  }
];