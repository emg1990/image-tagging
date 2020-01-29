import React, { useState, useEffect } from 'react';
import { Popover, Chip, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImageSlider from './ImageSlider';
import { getTags, getImages, getImage, tagImage, untagImage } from '../api/api';

const useStyles = makeStyles({
  taggerContainer: { paddingTop: '2vh' },
  dropdown: {
    maxHeight: 200,
    width: 150,
  },
  dropdowItem: {
    margin: 12,
  },
  tagsContainer: { marginTop: -140, marginLeft: 15 },
  tags: { marginRight: 15 },
  title: { fontSize: 34, color: 'white' },
});

const ImageTagger = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [clickCoordinates, setCoordinates] = useState([0, 0]);
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState({});
  const [tags, setTags] = useState([]);
  const [isSingleImage, setIsSingleImage] = useState(true);
  useEffect(() => {
    getImages((imgs) => { setImages(imgs); setSelected(imgs[0]); }, console.log);
    getTags(setTags, console.log);
  }, []);
  const handleAddTag = (tag) => {
    const previousImage = { ...selected };
    const newImage = { ...selected, tags: [...selected.tags, tag] };
    tagImage(
      selected.id,
      tag.id,
      () => console.log('Tag added'),
      () => { console.log('Error adding tag'); updateTag(previousImage); },
    );
    updateTag(newImage);
  };
  const handleDeleteTag = (tag) => {
    const previousImage = { ...selected };
    const newImage = { ...selected, tags: selected.tags.filter((tg) => (tg.id !== tag.id)) };
    untagImage(
      selected.id,
      tag.id,
      () => console.log('Tag removed'),
      () => { console.log('Error removing tag'); updateTag(previousImage); },
    );
    updateTag(newImage);
  };
  const updateTag = (tag) => {
    setSelected(tag);
    const auxImages = [...images];
    auxImages[auxImages.findIndex((img) => img.id === selected.id)] = tag;
    setImages(auxImages);
  };
  const handleToggleImage = () => {
    if (isSingleImage) getImage((imgs) => { setImages(imgs); setSelected(imgs[0]); }, console.log);
    else getImages((imgs) => { setImages(imgs); setSelected(imgs[0]); }, console.log);
    setImages([]);
    setIsSingleImage(!isSingleImage);
  };
  const filteredTags = tags.filter((tag) => ((selected.tags || []).findIndex((tg) => (tg.id === tag.id)) === -1));
  return (
    <div className={classes.taggerContainer}>
      <span className={classes.title}>
        Image Tagger (click on image)
        <Button color="primary" onClick={handleToggleImage}>Toggle image/images</Button>
      </span>
      {images.length > 0 && Object.keys(selected).length > 0
        ? (
          <>
            <ImageSlider
              images={images}
              open={open}
              setOpen={setOpen}
              selected={selected}
              setSelected={setSelected}
              setCoordinates={setCoordinates}
            />
            <div className={classes.tagsContainer}>
              {(selected.tags || []).map((tag) => (
                <Chip
                  label={tag.label}
                  color="primary"
                  className={classes.tags}
                  onDelete={() => handleDeleteTag(tag)}
                  key={tag.id}
                />
              ))}
              {(selected.tags || []).length === 0 && <Chip label="Click on the image to add tags" disabled />}
            </div>
            <Popover
              anchorReference="anchorPosition"
              open={open}
              onClose={() => setOpen(false)}
              anchorPosition={{ left: clickCoordinates[0], top: clickCoordinates[1] }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <div className={classes.dropdown}>
                {filteredTags.length === 0 && (
                  <div>
                    <p className={classes.dropdowItem}>No tags available</p>
                    <hr />
                  </div>
                )}
                {filteredTags.map((tag) => (
                  <div onClick={() => handleAddTag(tag)} className={classes.dropdowItem} key={tag.id}>
                    {tag.label}
                    <hr />
                  </div>
                ))}
              </div>
            </Popover>
          </>
        )
        : <h1>Loading...</h1>}
    </div>
  );
};

export default ImageTagger;
