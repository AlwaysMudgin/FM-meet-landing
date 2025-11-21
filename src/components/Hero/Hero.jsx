import logo from '../../assets/logo.svg';
import heroLeft from '../../assets/desktop/image-hero-left.png';
import heroRight from '../../assets/desktop/image-hero-right.png';
import heroCenter from '../../assets/tablet/image-hero.png';

function Banner() {
  return (
    <div className="logo">
      <img src={logo} alt="meet logo" />
    </div>
  );
}

function HeroImage({ side }) {
  let src;
  if (side === 'left') {
    src = heroLeft;
  } else if (side === 'right') {
    src = heroRight;
  } else {
    src = heroCenter;
  }

  return (
    <div className={`hero-image ${side}`}>
      <img src={src} alt="array of profile pictures" />
    </div>
  );
}

function HeroContent() {
  return (
    <div className="hero-content">
      <h1>Group Chat for Everyone</h1>
      <p>
        Meet makes it easy to connect with others face-to-face virtually and
        collaborate across any device.
      </p>
      <div className="buttons">
        <button className="btn-download">
          Download <span className="ver">v1.3</span>
        </button>
        <button className="btn-what">What is It?</button>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <header className="hero">
      <Banner />
      <HeroImage side="left" />
      <HeroImage side="right" />
      <HeroImage side="center" />
      <HeroContent />
    </header>
  );
}

export default Hero;
