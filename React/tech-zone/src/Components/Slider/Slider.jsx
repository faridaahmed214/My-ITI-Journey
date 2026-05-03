import { PureComponent } from 'react';
import './Slider.css';
import  img1  from '../../assets/1.jpg';
import  img2  from '../../assets/2.jpg';
import  img3  from '../../assets/3.jpg';
import  img4  from '../../assets/4.jpg';

class Slider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      images: [img1, img2, img3, img4]
    };
  }

  componentDidMount() {
    this.startAutoPlay();
  }

  componentWillUnmount() {
    this.stopAutoPlay();
  }

  startAutoPlay = () => {
    this.timer = setInterval(() => this.goToNext(false), 1500);
  };

  stopAutoPlay = () => {
    if (this.timer) {
      clearInterval(this.timer);
    }
  };

  resetAutoPlay = () => {
    this.stopAutoPlay();
    this.startAutoPlay();
  };

  goToNext = (isManual = false) => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % prevState.images.length
    }));
    if (isManual === true) {
      this.resetAutoPlay();
    }
  };

  goToPrev = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex - 1 + prevState.images.length) % prevState.images.length
    }));
    this.resetAutoPlay();
  };

  goToIndex = (index) => {
    this.setState({ currentIndex: index });
    this.resetAutoPlay();
  };

  getPositionClass = (index) => {
    const { currentIndex, images } = this.state;
    const length = images.length;
    let diff = index - currentIndex;

    if (diff < -1) diff += length;
    if (diff > 1) diff -= length;

    if (diff === 0) return 'slide-center';
    if (diff === 1) return 'slide-right-1';
    if (diff === -1) return 'slide-left-1';
    
    return 'slide-hidden';
  };

  render() {
    const { images, currentIndex } = this.state;

    return (
      <div className="slider-container">
        <button className="nav-arrow left-arrow" onClick={this.goToPrev}>
          &#10094;
        </button>

        <div className="slider-track">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`slide ${this.getPositionClass(index)}`}
              onClick={() => this.goToIndex(index)}
            >
              <img src={img} alt={`Tech Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        <button className="nav-arrow right-arrow" onClick={() => this.goToNext(true)}>
          &#10095;
        </button>

        <div className="dots-container">
          {images.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => this.goToIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    );
  }
}

export default Slider;
