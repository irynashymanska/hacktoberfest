// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Years from './components/Years';
import ActionButton from './components/ActionButton';
import ParticipantsSection from './components/ParticipantsSection';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <FirstSection />
        <CallToAction />
        <HacktoberfestInfo />
        <ParticipantsSection />
        <Years />
        <ActionButton />
        <Partners  />
      </div>
      <Footer />
    </div>
  );
}

function HacktoberfestInfo() {
  return (
    <div style={{ padding: 15, background: 'rgba(178, 227, 240, 0.20)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 15, display: 'inline-flex' }}>
      <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5, display: 'flex' }}>
        <div style={{ color: '#33B6D8', fontSize: 10, fontFamily: 'Montserrat', fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1.50, wordWrap: 'break-word' }}>про hacktoberfest</div>
        <div style={{ color: '#2A5769', fontSize: 20, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word' }}>Що таке Hacktoberfest? </div>
        <div style={{ width: 85, height: 3, background: '#33B6D8' }} />
      </div>
      <div >
        <div >
          <span style={{ color: '#2A5769', fontSize: 16, fontFamily: 'Raleway', fontWeight: '400', lineHeight: '16.80px', letterSpacing: 0.80, wordWrap: 'break-word' }}>
            Hacktoberfest - це один з наймасштабніших заходів у міжнародній ІТ-спільноті, який проходить щороку по всьому світу і  присвячений розвитку
            <span style={{ color: '#2A5769', fontSize: 16, fontFamily: 'Raleway', fontWeight: '500', letterSpacing: 0.80, wordWrap: 'break-word' }}> open source</span>.
            <br/><br/>Велика частина сучасної технічної інфраструктури, включаючи деякі продукти DigitalOcean - створені і підтримувані пристрасними людьми.
            <br/><br/>Протягом останніх 10 років - тисячі людей брали участь у Hacktoberfest, щоб підтримувати проекти, які їм подобаються, вчитись, вдосконалювати навички, які покращують кар'єру, і зустрічати нових людей, які так само люблять open source, як і вони.
            <br/><br/>Адже саме на опен сорсі можна отримати досвід, корисні фідбеки, долучитись до крутих проектів та зустріти цікавих людей.
          </span>
        </div>
        <div className='moreInfo'>
          <p>Більше про всесвітній проект можна дізнатись тут:</p>
          <button className="btn-link" onClick={navigateToWebsite}>hacktoberfest.com</button>
     
        </div>
      </div>
    </div>
  );
}

const navigateToWebsite = () => {
  const url = 'https://hacktoberfest.com/';
  window.location.href = url;
};

const navigateToRegistration = () => {
  const url = 'https://1qm8mu6k7oi.typeform.com/to/Mt5H8rcT?fbclid=IwAR3EQ5WxlBK96gxjZo7e-BLnTu4_WG6JuEE9s5eK_9q02C59qKzq3kC7qlI&typeform-source=l.facebook.com';
  window.location.href = url;
};

function FirstSection() {
  return (
    <div className="firstSection">
       <div className="column">
      <section className="hero">
      <p>Приєднатись до крутих <span className="boldText"> open source </span> проектів</p>
    </section>
    <section className="hero">
      <p>Здобути унікальний <span className="boldText" style={{ display: 'block' }}> досвід</span></p>
    </section>
    <section className="hero">
      <p>Стати частиною <span className="boldText" >потужної спільноти</span></p>
    </section>
    </div>
    <div className="column">
    <img src="./laptop.svg"/>
        </div>
</div>
  );
}

function CallToAction() {
  return (
    <div className="secondSection">
    <section className="cta column">
      <button className="cta-button" onClick={navigateToRegistration}>зареєструватись</button>
    </section>
    <section className="column" style={{ marginLeft: '17px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="./Vector (1).svg" style={{ marginRight: 10 }} />
        <div style={{ color: '#2A5769', fontFamily: 'Raleway' }}>
          <div style={{ fontSize: 10, fontWeight: '600', wordWrap: 'break-word' }}>28 жовтня</div>
          <div className="infoRegular">13:00 - 19:00</div>
        </div>
      </div>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: '7px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="./Vector (3).svg" style={{ marginRight: 10 }} />
        <div style={{ color: '#2A5769', fontFamily: 'Raleway' }}>
          <div style={{ fontSize: 10, fontWeight: '600', wordWrap: 'break-word' }}>м. Львів, Козельницька 2а</div>
          <div className="infoRegular">Факультет прикладних наук УКУ</div>
        </div>
      </div>
    </div>
     
    </section>
    </div>
  );
}

function Partners() {
 return (
  <div style={{ padding: 15, background: 'rgba(178, 227, 240, 0.20)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 15, display: 'flex'}}>
        <div style={{height: 75, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 7, display: 'flex'}}>
            <div style={{color: '#33B6D8', fontSize: 10, fontFamily: 'Montserrat', fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1.50, wordWrap: 'break-word'}}>про партнерів</div>
            <div style={{alignSelf: 'stretch', color: '#2A5769', fontSize: 20, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>Саме час познайомитись з партнерами:</div>
            <div style={{width: 85, height: 3, background: '#33B6D8'}} />
        </div>

        <img style={{width: 100, height: 15}} src="./Logo (1).svg" />
        <img style={{width: 100, height: 15}} src="./partner.png" />
        <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <img style={{width: 99.31, height: 45}} src="./image 20.png" />
            <img style={{width: 49.63, height: 45}} src="./FACULTY_APPLIED 1.png" />
        </div>
    </div>
    <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
        <div style={{height: 32, borderBottom: '1px #B2E3F0 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div style={{color: '#33B6D8', fontSize: 10, fontFamily: 'Montserrat', fontWeight: '400', textTransform: 'uppercase', letterSpacing: 1.85, wordWrap: 'break-word'}}>Всесвітні  організатори:</div>
        </div>
        <div >
            <div style={{width: 36, height: 9.96, left: 35, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div style={{width: 13.03, height: 9.25, background: '#2A5769'}}></div>
                <div style={{width: 34.46, height: 6.28, background: '#2A5769'}}></div>
            </div>
            <div style={{width: 37.08, height: 26.89, left: 0, top: 5, position: 'absolute', background: '#0080FF'}}></div>
            <img style={{width: 29, height: 16, left: 42, top: 16, position: 'absolute'}} src="./image 24.png" />
        </div>
    </div>
    <img style={{width: 330, height: 94.74}} src="./hf10_horz.png" />
</div>
 )
}



export default App;
