
import React from 'react';
import './Gallery.css';

function Years() {
    return (
        <div style={{ marginTop: '15px', marginBottom: 15, background: 'rgba(178, 227, 240, 0.20)' }}>
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
        <div className="gallery-container" style={{ marginTop: '15px', marginBottom: '15px' }} >
            <div className="image-list" style={{ cursor: 'pointer' }}>
                {generateGalleryItems()}
            </div>
        </div>
    );
}

function generateGalleryItems() {
    const yearData = [
        { year: 2021, imageUrl: './2021.png', url: 'https://www.facebook.com/events/%D0%BA%D0%BE%D0%B7%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B0-%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F-2-%D0%BB%D1%8C%D0%B2%D1%96%D0%B2-79026-%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0/hacktoberfest-lviv-2021/351384380003855/' },
        { year: 2020, imageUrl: './2020.png', url: 'https://www.facebook.com/events/1481060418756600/?acontext=%7B%22event_action_history%22%3A[%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22left_rail%22%2C%22surface%22%3A%22bookmark%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22calendar_hosting_past_events_unit%22%2C%22surface%22%3A%22bookmark_calendar%22%7D]%2C%22ref_notif_type%22%3Anull%7D' },
        { year: 2019, imageUrl: './2019.png', url: 'https://www.facebook.com/events/509578022948163/?active_tab=about' },
        { year: 2018, imageUrl: './2018.png', url: 'https://www.facebook.com/events/2180407068873890/?acontext=%7B%22event_action_history%22%3A[%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22left_rail%22%2C%22surface%22%3A%22bookmark%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22calendar_hosting_past_events_unit%22%2C%22surface%22%3A%22bookmark_calendar%22%7D]%2C%22ref_notif_type%22%3Anull%7D' },
        { year: 2017, imageUrl: './2017.png', url: 'https://www.facebook.com/events/854757391360303/?acontext=%7B%22event_action_history%22%3A[%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22left_rail%22%2C%22surface%22%3A%22bookmark%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22calendar_hosting_past_events_unit%22%2C%22surface%22%3A%22bookmark_calendar%22%7D]%2C%22ref_notif_type%22%3Anull%7D' },
    ];

    return yearData.map((data, index) => (
        <a key={index} href={data.url} target="_blank" rel="noopener noreferrer" className="gallery-item">
            <div className="image-container">
                <img className='years-image'
                    src={data.imageUrl}
                    alt={`Image ${data.year}`}
                />
            </div>
            <div className="year-label">{data.year}</div>
        </a>
    ));
}

function ImageGallery() {
    return (
        <div
            style={{
                paddingLeft: 15,
                paddingRight: 15,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: 5,
                display: 'inline-flex',
                overflowX: 'scroll',
            }}>

            <img
                style={{ width: '100%', height: 145, borderRadius: 12 }}
                src="./image 13.png"
                alt="Image 1"
            />

            <img
                style={{ width: '100%', height: 145, borderRadius: 12 }}
                src="./image18.png"
                alt="Image 2"
            />
            <img
                style={{
                    width: '100%',
                    height: 145,
                    borderRadius: 12,
                }}
                src="./image 15.png"
                alt="Image 3"
            />
        </div>
    );
}

function SmallImageGallery() {
    return (
        <div
            style={{

                paddingLeft: 15,
                paddingRight: 15,
                marginTop: '10px',
                marginBottom: '15px',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: 5,
                display: 'inline-flex',
                overflowX: 'scroll',
            }}
        >
            <img
                style={{ width: '100%', height: 95, borderRadius: 12 }}
                src="./image 17.png"
                alt="Image 1"
            />
            <img
                style={{ width: '100%', height: 95, borderRadius: 12 }}
                src="./image 14.png"
                alt="Image 2"
            />
            <img
                style={{ width: '100%', height: 95, borderRadius: 12 }}
                src="./image 16.png"
                alt="Image 3"
            />
        </div>
    );
}


export default Years;