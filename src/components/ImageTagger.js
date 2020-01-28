import React, { useState } from 'react';
import { Popover, Chip } from '@material-ui/core';
import ImageSlider from './ImageSlider';

function ImageTagger() {
  const [open, setOpen] = useState(false);
  const [clickCoordinates, setCoordinates] = useState([0,0]);
  const [images, setImages] = useState([
    { tags: [{id: 5, label: "Realism"}, { id: 1, label: "Abstract"} ],
    createdAt:1568044681586, updatedAt: 1568044681586, id: 1000, title: "mural4",
    imageUrl: "https://grace951.github.io/react-image-carousel/img/landing1.jpg",
    thumbnailUrl: "https://grace951.github.io/react-image-carousel/img/landing1.jpg"},
    { tags: [{id: 5, label: "Realism"}, { id: 1, label: "Abstract"} ],
    createdAt:1568044681586, updatedAt: 1568044681586, id: 1001, title: "mural4",
    imageUrl: 'https://grace951.github.io/react-image-carousel/img/landing2.jpg',
    thumbnailUrl: 'https://grace951.github.io/react-image-carousel/img/landing2.jpg'},
    { tags: [{id: 2, label: "Typography"}, { id: 3, label: "Graffiti"} ],
    createdAt:1568044681586, updatedAt: 1568044681586, id: 1002, title: "mural4",
    imageUrl: 'https://grace951.github.io/react-image-carousel/img/landing3.jpg',
    thumbnailUrl: 'https://grace951.github.io/react-image-carousel/img/landing3.jpg'},
    { tags: [{id: 5, label: "Realism"}, { id: 1, label: "Abstract"}, {id:2, label:"Typography"}, {id:3, label:"Graffiti"} ],
    createdAt:1568044681586, updatedAt: 1568044681586, id: 1003, title: "mural4",
    imageUrl: 'https://grace951.github.io/react-image-carousel/img/landing4.jpg',
    thumbnailUrl: 'https://grace951.github.io/react-image-carousel/img/landing4.jpg'},
    { tags: [{id: 5, label: "Realism"}, { id: 1, label: "Abstract"} ],
    createdAt:1568044681586, updatedAt: 1568044681586, id: 1004, title: "mural4",
    imageUrl: 'https://grace951.github.io/react-image-carousel/img/landing5.jpg',
    thumbnailUrl: 'https://grace951.github.io/react-image-carousel/img/landing5.jpg'},
  ]);
  const [selected, setSelected] = useState(images[0]);
  const [tags, setTags] = useState([
    {id:1, label:"Abstract"},
    {id:2, label:"Typography"},
    {id:3, label:"Graffiti"},
    {id:5, label:"Realism"}
  ]);
  const handleAddTag = (tag) => {
    const newTag = { ...selected, tags: [...selected.tags, tag]}
    updateTag(newTag);
  };
  const handleDeleteTag = (tag) => {
    const newTag = { ...selected, tags: selected.tags.filter((tg) => (tg.id !== tag.id))}
    updateTag(newTag);
  }
  const updateTag = (tag) => {
    setSelected(tag);
    const auxImages = [...images];
    auxImages[auxImages.findIndex((img) => img.id === selected.id)] = tag;
    setImages(auxImages);
  };
  const filteredTags = tags.filter((tag) => (selected.tags.findIndex((tg) => (tg.id === tag.id)) === -1))
  return (
    <div className="my-carousel">
      <ImageSlider
        images={images}
        open={open}
        setOpen={setOpen}
        selected={selected}
        setSelected={setSelected}
        setCoordinates={setCoordinates}
      />
      {selected.tags.map((tag) => (<Chip label={tag.label} color="primary" onDelete={() => handleDeleteTag(tag)} key={tag.id}/>))}
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
        <div style={{ maxHeight: 100 }}>
          {filteredTags.length === 0 && <><p style={{ margin: 10, }}>No tags available</p><hr/></>}
          {filteredTags.map((tag) => (<><p onClick={() => handleAddTag(tag)} style={{ margin: 10 }} key={tag.id}>{tag.label}</p><hr/></>))}
        </div>
      </Popover>
    </div>
  );
}

export default ImageTagger;
