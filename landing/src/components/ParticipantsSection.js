
import React from 'react';

function ParticipantsSection() {
    return (
        <div style={{ marginTop: '30px', marginBottom: '30px' }}>
            <div style={{ paddingLeft: 15, paddingRight: 15, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 15, display: 'inline-flex' }}>
                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5, display: 'flex' }}>
                    <div style={{ color: '#33B6D8', fontSize: 10, fontFamily: 'Montserrat', fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1.50, wordWrap: 'break-word' }}>про учасників</div>
                    <div style={{ color: '#2A5769', fontSize: 20, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word' }}>Хто може брати участь?</div>
                    <div style={{ width: 85, height: 3, background: '#33B6D8' }} />
                    <div style={{ color: '#2A5769', fontSize: 20, fontFamily: 'Montserrat', fontWeight: '400', letterSpacing: 1, wordWrap: 'break-word' }}>Всі - головне бажання!</div>
                </div>
            </div>

            <div style={{ marginTop: '15px' }}>
                <CenteredImage />
            </div>
        </div>
    );
}
function CenteredImage() {
    return (
        <div className="center-div">
            <img src="./image 30.png" alt="Background" />
            <img src="./1.svg" alt="iPad" className="overlay-image" />
        </div>
    );
  
}
export default ParticipantsSection;