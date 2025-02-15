import React from 'react';

import Categorie from './Categorie';

const Categories = () => {
  return (
    <section className='p-8' id='categories'>
      <div className='grid gap-2 md:grid-cols-3 mb-2'>
        <Categorie
          name='Clothes'
          image='https://cdn.prod.website-files.com/63e37b8b44232684eb7acf20/63f09f4cad117e0b70c1442c_63e37b8b44232648c57ad2f5_Clothing%2520stores.webp'
        />
        <Categorie
          name='Shoes'
          image='https://www.shutterstock.com/image-photo/happy-excited-indian-man-unboxing-600nw-2370679095.jpg'
        />
        <Categorie
          name='Electronics'
          image='https://www.dekopay.com/hubfs/tech.png'
        />
      </div>
      <div className='grid gap-3 md:grid-col-2'>
        <Categorie
          name='SunGlasses'
          image='https://www.thebeachcompany.in/cdn/shop/files/Fancy_Sunglasses_Online_1_800x.jpg?v=1725437476'
        />
        <Categorie
          name='Others'
          image='https://youthincmag.com/wp-content/uploads/2018/03/Online-shopping.png'
        />
      </div>
    </section>
  );
};

export default Categories;
