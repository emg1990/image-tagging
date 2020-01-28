import React, { useState } from 'react';

function ImageSlider({ images = [], setOpen = () => {}, setCoordinates = () => {},
  selected = { url: '' }, setSelected = () => {}}) {
  return (
    <div>
      <div style={{ height: '70vh' }}>
        <img src={selected.imageUrl} style={{ maxHeight: '70vh' }} onClick={(e) => {
          setCoordinates([e.pageX, e.pageY]);
          setOpen(true);
        }}/>
      </div>
      <div style={{ height: 100, whiteSpace: 'nowrap', overflowX: 'auto', paddingBottom: 20, overflowY: 'hidden' }}>
        {images.map((img, i) => (
          <img src={img.thumbnailUrl} style={{ maxHeight: 100 }} onClick={() => setSelected(img)} key={i} />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
