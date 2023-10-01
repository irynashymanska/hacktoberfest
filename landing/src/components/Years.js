
import React from 'react';
import './Gallery.css';

function Years() {
    return (
        <div style={{ marginTop: '15px', marginBottom: '15px', background: 'rgba(178, 227, 240, 0.20)' }}>
        <div style={{ paddingLeft: 15, paddingRight: 15, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 15, display: 'inline-flex' }}>
                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5, display: 'flex' }}>
                    <div style={{ color: '#33B6D8', fontSize: 10, fontFamily: 'Montserrat', fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1.50, wordWrap: 'break-word' }}>про попередні роки</div>
                    <div style={{ color: '#2A5769', fontSize: 20, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word' }}>Як проходив Hacktoberfest в Україні?</div>
                    <div style={{ width: 85, height: 3, background: '#33B6D8' }} />
                </div>
            </div>
            <Gallery />
            <ImageGallery />
            <SmallImageGallery />
        </div>
    );
}

function Gallery() {
    return (
      <div
        className="gallery-container" style={{ marginTop: '15px', marginBottom: '15px' }} >
        <div className="image-list">
          {generateGalleryItems()}
        </div>
      </div>
    );
  }
  
  function generateGalleryItems() {
    const yearData = [
      { year: 2021, imageUrl: '/2021.png' },
      { year: 2020, imageUrl: '/2020.png' },
      { year: 2019, imageUrl: '/2019.png' },
      { year: 2018, imageUrl: '/2018.png' },
      { year: 2017, imageUrl: '/2017.png' },
    ];
  
    return yearData.map((data, index) => (
      <div key={index} className="gallery-item">
        <div className="image-container">
          <img className='years-image'
            src={data.imageUrl}
            alt={`Image ${data.year}`}
          />
        </div>
        <div className="year-label">{data.year}</div>
      </div>
    ));
  }

  function ImageGallery() {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          paddingLeft: 15,
          paddingRight: 15,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: 5,
          display: 'inline-flex',
          overflowX: 'scroll', // Enable horizontal scrolling
        }}
      >
        <img
          style={{
            width: 308.26,
            height: 145,
            borderRadius: 12,
          }}
          src="/image 13.png"
          alt="Image 1"
        />
        <img
          style={{
            width: 196.94,
            height: 145,
            borderRadius: 12,
          }}
          src="/image18.png"
          alt="Image 2"
        />
        <img
        style={{
          width: 265.50,
          height: 145,
          borderRadius: 12,
        }}
        src="/image 15.png"
        alt="Image 3"
      />
      </div>
    );
  }

  function SmallImageGallery() {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          paddingLeft: 15,
          paddingRight: 15,
          marginTop: '10px',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: 5,
          display: 'inline-flex',
          overflowX: 'scroll',
        }}
      >
        <img
          style={{
            width: 150,
            height: 97.70,
            borderRadius: 12,
          }}
          src="/image 17.png"
          alt="Image 1"
        />
        <img
          style={{
            width: 150,
            height: 94.70,
            borderRadius: 12,
          }}
          src="/image 14.png"
          alt="Image 2"
        />
        <img
          style={{
            width: 150,
            height: 99.79,
            borderRadius: 12,
          }}
          src="/image 16.png"
          alt="Image 3"
        />
      </div>
    );
  }

export default Years;