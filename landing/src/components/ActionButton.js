
import React from 'react';

function ActionButton() {
    const containerStyle = {
        marginTop: 24,
        marginBottom: 25,
        marginLeft: 15,
        background: 'while',
        display: 'flex',
        justifyContent: 'space-between', // This will create two columns
        alignItems: 'center',
    };

    const leftColumnStyle = {
        flex: 1, // Takes up remaining space in the row
    };

    const rightColumnStyle = {
        marginRight: '15px', 
    };

    const titleStyle = {
        color: '#2A5769',
        fontSize: '20px',
        fontFamily: 'Raleway',
        fontWeight: '700',

        wordWrap: 'break-word',
    };

    const subTitleStyle = {
        color: '#2A5769',
        fontSize: '10px',
        fontFamily: 'Montserrat',
        fontWeight: '400',
        wordWrap: 'break-word',
    };

    return (
        <div style={containerStyle}>
            <div style={leftColumnStyle}>
                <span style={titleStyle}>ХОЧУ ДО ВАС!<br /></span>
                <span style={subTitleStyle}>Зареєструватись на Hacktoberfest у Львові 2023</span>
            </div>
            <div style={rightColumnStyle}>
                <div onClick={navigateToRegistration} className="actionButton"style={{ width: '100%', height: '100%', padding: 18, borderRadius: 12, justifyContent: 'center', alignItems: 'center', gap: 18, display: 'inline-flex' }}>
                    <div style={{ color: '#EFEDEF', fontSize: 10, fontFamily: 'Montserrat', fontWeight: '700', textTransform: 'uppercase', wordWrap: 'break-word' }}>зареєструватись</div>
                </div>
            </div>
        </div>
        
    );
}

const navigateToRegistration = () => {
    const url = 'https://1qm8mu6k7oi.typeform.com/to/Mt5H8rcT?fbclid=IwAR3EQ5WxlBK96gxjZo7e-BLnTu4_WG6JuEE9s5eK_9q02C59qKzq3kC7qlI&typeform-source=l.facebook.com';
    window.location.href = url;
  };

export default ActionButton;