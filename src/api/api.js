export const getTags = (success, error = () => {}) => {
  fakeCall('/tag')
    .then(success)
    .catch(error);
};

export const getImage = (success, error = () => {}) => {
  fakeCall('/image')
    .then(success)
    .catch(error);
};

export const getImages = (success, error = () => {}) => {
  fakeCall('/images')
    .then(success)
    .catch(error);
};

export const tagImage = (imageId, tagId, success, error = () => {}) => {
  fakeCall('/tagImage', { id: imageId, tagId })
    .then(success)
    .catch(error);
};

export const untagImage = (imageId, tagId, success, error = () => {}) => {
  fakeCall('/untagImage', { id: imageId, tagId })
    .then(success)
    .catch(error);
};

const fakeCall = (url) => {
  let data = {};
  let errors = false;
  switch (url) {
    case '/tag':
      data = tags;
      break;
    case '/images':
      data = images;
      break;
    case '/tagImage':
      data = {};
      break;
    case '/untagImage':
      data = {};
      break;
    default:
      data = 'URL not found';
      errors = true;
  }
  const resultObj = {
    then: (callback = () => {}) => { if (!errors) setTimeout(() => callback(data), 1000); return resultObj; },
    catch: (callback = () => {}) => { if (errors) setTimeout(() => callback(data), 1000); return resultObj; },
  };
  return resultObj;
};

const tags = [
  { id: 1, label: 'Abstract' },
  { id: 2, label: 'Typography' },
  { id: 3, label: 'Graffiti' },
  { id: 5, label: 'Realism' },
];

const images = [
  { tags: [{ id: 5, label: 'Realism' }, { id: 1, label: 'Abstract' }],
    createdAt: 1568044681586,
    updatedAt: 1568044681586,
    id: 1000,
    title: 'mural4',
    imageUrl: 'https://grace951.github.io/react-image-carousel/img/landing1.jpg',
    thumbnailUrl: 'https://grace951.github.io/react-image-carousel/img/landing1.jpg' },
  { tags: [{ id: 5, label: 'Realism' }, { id: 1, label: 'Abstract' }],
    createdAt: 1568044681586,
    updatedAt: 1568044681586,
    id: 1001,
    title: 'mural4',
    imageUrl: 'https://grace951.github.io/react-image-carousel/img/landing2.jpg',
    thumbnailUrl: 'https://grace951.github.io/react-image-carousel/img/landing2.jpg' },
  { tags: [{ id: 2, label: 'Typography' }, { id: 3, label: 'Graffiti' }],
    createdAt: 1568044681586,
    updatedAt: 1568044681586,
    id: 1002,
    title: 'mural4',
    imageUrl: 'https://grace951.github.io/react-image-carousel/img/landing3.jpg',
    thumbnailUrl: 'https://grace951.github.io/react-image-carousel/img/landing3.jpg' },
  { tags: [{ id: 5, label: 'Realism' }, { id: 1, label: 'Abstract' }, { id: 2, label: 'Typography' }, { id: 3, label: 'Graffiti' }],
    createdAt: 1568044681586,
    updatedAt: 1568044681586,
    id: 1003,
    title: 'mural4',
    imageUrl: 'https://grace951.github.io/react-image-carousel/img/landing4.jpg',
    thumbnailUrl: 'https://grace951.github.io/react-image-carousel/img/landing4.jpg' },
  { tags: [{ id: 5, label: 'Realism' }, { id: 1, label: 'Abstract' }],
    createdAt: 1568044681586,
    updatedAt: 1568044681586,
    id: 1004,
    title: 'mural4',
    imageUrl: 'https://grace951.github.io/react-image-carousel/img/landing5.jpg',
    thumbnailUrl: 'https://grace951.github.io/react-image-carousel/img/landing5.jpg' },
];
