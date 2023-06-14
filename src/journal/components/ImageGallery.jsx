import { ImageList, ImageListItem } from "@mui/material";


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const ImageGallery = ({ images}) => {
  return (
    <ImageList
      sx={{ width: "100%", height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {images.map((images) => (
        <ImageListItem key={images} cols={images.cols || 1} rows={images.rows || 1}>
          <img
            {...srcset(images, 121, images.rows, images.cols)}
            alt={images}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

