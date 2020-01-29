import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  imagePreviewContainer: { height: '70vh' },
  imagePreview: { height: '70vh' },
  thumbnailContainer: {
    height: 100,
    whiteSpace: 'nowrap',
    overflowX: 'auto',
    overflowY: 'hidden',
    marginTop: 50,
  },
  thumbnails: { maxHeight: 100 },
});

function ImageSlider({ images = [], setOpen = () => {}, setCoordinates = () => {},
  selected = { url: '' }, setSelected = () => {} }) {
  const classes = useStyles();
  const handleClickImage = (e) => {
    setCoordinates([e.pageX, e.pageY]);
    setOpen(true);
  };
  return (
    <>
      <div className={classes.imagePreviewContainer}>
        <img
          src={selected.imageUrl}
          className={classes.imagePreview}
          onClick={handleClickImage}
          alt="image preview"
        />
      </div>
      <div className={classes.thumbnailContainer}>
        {images.map((img, i) => (
          <img
            src={img.thumbnailUrl}
            className={classes.thumbnails}
            onClick={() => setSelected(img)}
            key={i}
            alt={`image thumbnail ${i}`}
          />
        ))}
      </div>
    </>
  );
}

export default ImageSlider;
