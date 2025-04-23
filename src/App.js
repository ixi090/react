import React, { useState } from 'react';
import './App.css';

const photos = {
  category1: [
    { id: 1, src: 'https://cdn.pixabay.com/photo/2023/01/30/11/38/cat-7755458_1280.jpg', alt: 'cat' },
    { id: 2, src: 'https://cdn.pixabay.com/photo/2025/04/08/13/56/great-tit-9521571_1280.jpg', alt: 'bird' },
    { id: 3, src: 'https://cdn.pixabay.com/photo/2025/02/22/10/28/bunny-9423909_1280.jpg', alt: 'rabit' },
  ],
  category2: [
    { id: 4, src: 'https://cdn.pixabay.com/photo/2025/01/23/17/20/flower-9355068_1280.jpg', alt: 'flowers' },
    { id: 5, src: 'https://cdn.pixabay.com/photo/2025/03/07/14/18/waterfall-9453143_1280.jpg', alt: 'waterfall' },
    { id: 6, src: 'https://cdn.pixabay.com/photo/2023/04/19/19/11/lake-7938396_1280.jpg', alt: 'lake' },
  ],
  category3: [
    { id: 7, src: 'https://cdn.pixabay.com/photo/2024/09/15/10/05/building-9048827_1280.jpg', alt: 'catedral' },
    { id: 8, src: 'https://cdn.pixabay.com/photo/2024/11/30/15/55/eiffel-tower-9235220_1280.jpg', alt: 'eiffl tower' },
    { id: 9, src: 'https://cdn.pixabay.com/photo/2022/08/02/04/11/city-7359472_1280.jpg', alt: 'city' },
  ]
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState('category1');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Galeria zdjęć</h1>
        
        <div className="category-buttons">
          <button onClick={() => handleCategoryChange('category1')}>Zwierzęta</button>
          <button onClick={() => handleCategoryChange('category2')}>Natura</button>
          <button onClick={() => handleCategoryChange('category3')}>Budowle</button>
        </div>

        <div className="gallery">
          {photos[selectedCategory].map(photo => (
            <img
              key={photo.id}
              src={photo.src}
              alt={photo.alt}
              className="thumbnail"
              onClick={() => handleImageClick(photo.src)}
            />
          ))}
        </div>

        {selectedImage && (
          <div className="modal" onClick={handleCloseModal}>
            <img src={selectedImage} alt="selected" className="modal-image" />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
