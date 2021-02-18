import React, { useEffect, useState, useContext } from 'react';
//components
import Gallery from './Gallery';
import HeaderJumbotron from '../Home/HeaderJumbotron';
//assets
import Logo from '../../assets/logo.png';
import RestaurantImage from '../../assets/restaurant-image.jpg';
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 800,
    });
  }, []);

  return (
    <React.Fragment>
      {window.location.pathname === '/onas' ? <HeaderJumbotron /> : ''}
      <div className='about' id='about'>
        <article className='titles-container'>
          <div
            className='titles-container__animation'
            id='box'
            data-aos={window.innerWidth < 770 ? 'zoom-in-down' : 'fade-left'}
          >
            <img src={Logo} alt='logo' width='90px' height='auto' />
            <h2>Rodzinna kuchnia włoska</h2>
            <h5 className='titles-container__subtitle'>
              La qualità è la nostra passione
            </h5>
          </div>
        </article>
        <div
          className='about__card-container about__card-container--full-desc '
          data-aos='zoom-in'
        >
          <div className='about__card-text about__card-text--full-desc'>
            <h4 className='description'>
              <p>
                La qualità è la nostra passione - Jakość to nasza pasja! Obok
                Alei Fontann, tuż za plecami szczecińskiego Marynarza Sternika,
                w samym sercu miasta, w ciągu spacerowym na odcinku od placu
                Grunwaldzkiego do placu Lotników jest smaczne, kameralne i
                przyjemnie urządzone miejsce – restauracja Emilio, gdzie jakość
                włoskich przypraw, oliwy, chleba, wina oraz radość i zadowolenie
                gości jest jedyną pasją, którą mają w życiu gospodarze tego
                przepysznego i porywającego punktu na kulinarnej mapie
                Szczecina. „Na gości, którzy zawitają do Emilio czekają
                niebywałe doznania kulinarne. Nasza kuchnia opiera się głównie
                na składnikach, które sprowadzamy do Szczecina prosto z
                najróżniejszych włoskich regionów. Najwyższej jakości produkty i
                nietuzinkowe połączenia smakowe są odzwierciedleniem pasji, z
                jaką tworzone są nasze dania.”
              </p>
              <p>
                <i>Iwona Szulc Emilio</i>
              </p>
              <p>
                Powodów, dla których warto nas odwiedzić, nie brakuje. Na gości
                czeka tu autorska i popisowa „Pasta alla forma”, czyli
                tagliatelle w sosie truflowym, które mieszamy w samym środku
                dużego kawałka oryginalnego Parmigiano Reggiano. Dzięki twardemu
                włoskiemu serowi, danie to nabiera swojego niezwykłego
                charakteru i wyrazistego smaku. Przekraczając progi naszego
                włoskiego Domu, czeka na Was między innymi podróż do Piemontu,
                podczas której przeniesiecie się do winnicy La Scolca, a
                wszystko za sprawą degustacji doskonałych i głębokich w smaku i
                tonacji win. Przed Wami również niepowtarzalna wyprawa do lasu w
                Toskanii, po niezwykle cenne grzyby o wyjątkowym smaku i
                aromacie. Mowa o truflach, po włosku „tartufo”. Te najdroższe
                grzyby na świecie stanowią bardzo aromatyczny dodatek do naszych
                dań. To wreszcie tu, przez cały rok możecie skosztować boskiego
                smaku oliwy z oliwek, którą sprowadzamy do Szczecina prosto z
                Sycylii.
              </p>
              <p>
                „Okolica, w której jesteśmy otwarci jest tłumnie odwiedzana
                przez turystów i mieszkańców Szczecina. Przyjeżdżają do nas
                goście z całego świata oraz z różnych regionów Polski –
                miłośnicy włoskich win i dań. Naszych gości przyciąga przede
                wszystkim rozgłos, jakim cieszy się nasza kuchnia.”
              </p>
              <p>
                <i>
                  Dodaje założycielka, pomysłodawczyni i prawdziwa gospodyni
                  tego miejsca, Iwona Szulc.
                </i>
              </p>
              <p>
                Co najważniejsze klimat tego miejsca tworzą ludzie, którzy
                wyróżniają się pozytywnym nastawieniem do życia i drugiego
                człowieka. Są rozśpiewani, radośni i wiecznie uśmiechnięci.
                Przyjdź i dodaj do swoich ulubionych miejsc nasz adres. Chcemy
                Cię poznać i sobą zainspirować.
              </p>
              <strong>
                <i>Rodzina Emilio</i>
              </strong>
            </h4>
          </div>
          <div className='about__card-image about__card-image--full-desc'>
            <img src={RestaurantImage} alt='restaurant-image' />
          </div>
        </div>
      </div>
      <Gallery />
    </React.Fragment>
  );
};

export default AboutUs;
