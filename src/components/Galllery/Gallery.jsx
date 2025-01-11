// CategorizableGallery.js
import { useState } from 'react';
import { items } from '../../assets/asset';


const categories = ['all', 'category1', 'category2', 'category3'];

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filterGallery = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-4">
        {categories.map((category) => (
          <button
            key={category}
            className="btn-category bg-green-600 rounded-full  text-white px-4 py-2 mx-2 transition duration-500 scroll-smooth"
            onClick={() => filterGallery(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items
          .filter(
            (item) => selectedCategory === 'all' || item.category === selectedCategory
          )
          .map((item) => (
            <div key={item.id} className="gallery-item bg-white p-4">
            <img className='rounded-xl' src={item.content} alt="" />  
            </div>
          ))}
      </div>
    </div>
  );
}

export default Gallery;
