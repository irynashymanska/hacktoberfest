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
      </div>
      <Footer />
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
    <section className="column">
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
