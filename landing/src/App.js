// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <FirstSection />
        <CallToAction />
        < HacktoberfestInfo />
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
          <button className="btn-link">hacktoberfest.com</button>
     
        </div>
      </div>
    </div>
  );
}

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
    <img src="/laptop.svg"/>
        </div>
</div>
  );
}

function CallToAction() {
  return (
    <div className="secondSection">
    <section className="cta column">
      <button className="cta-button">зареєструватись</button>
    </section>
    <section className="column" style={{ marginLeft: '17px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/Vector (1).svg" style={{ marginRight: 10 }} />
        <div style={{ color: '#2A5769', fontFamily: 'Raleway' }}>
          <div style={{ fontSize: 10, fontWeight: '600', wordWrap: 'break-word' }}>28 жовтня</div>
          <div className="infoRegular">13:00 - 19:00</div>
        </div>
      </div>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: '7px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/Vector (1).svg" style={{ marginRight: 10 }} />
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



export default App;
