import React from 'react';
import Header from '../../components/Header';
import galleryimg from '../../images/header_bg_3.jpg';
import './Gallery.css';

function Gallery() {
  const galleryLength = 15;
  const images = [];

  for(let i = 1; i<=galleryLength; i++){
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  // console.log(images);
  return (
    <>
      <Header title="Our Gallery" image={galleryimg}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veniam quidem, dolorem fuga laudantium magnam modi! Officia cum libero perferendis?
      </Header>
      <section className='gallery'>
        <div className="container gallery__container">
          {
            images.map((images, index) => {
              return(
                <article key={index}>
                  <img src={images} alt={`Gallery Image ${index + 1}`} />
                </article>
              )
            })
          }
          
        </div>
      </section>
      
    </>
  )
}

export default Gallery