import React, { useState } from 'react';

function ImageSlider({images = []}) {
  const [selected, setSelected] = useState(images[0])
  return (
    <div>
      <div style={{ height: '50vh' }}>
        <img src={selected} style={{ maxHeight: '50vh' }}/>
      </div>
      <div style={{ height: 100 }}>
        {images.map((img) => (
          <img src={img} style={{ maxHeight: 100 }} onClick={() => setSelected(img)} />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
