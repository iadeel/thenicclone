import img1 from '../assets/images/Gallery/1.png';
import img2 from '../assets/images/Gallery/2.png';
import img3 from '../assets/images/Gallery/3.png';
import img4 from '../assets/images/Gallery/4.png';
import img5 from '../assets/images/Gallery/5.png';
import img6 from '../assets/images/Gallery/6.png';
import img7 from '../assets/images/Gallery/7.png';
import img8 from '../assets/images/Gallery/8.png';
import img9 from '../assets/images/Gallery/9.png';
import img10 from '../assets/images/Gallery/10.png';
import img11 from '../assets/images/Gallery/11.png';
import img12 from '../assets/images/Gallery/12.png';
import img13 from '../assets/images/Gallery/13.png';
import img14 from '../assets/images/Gallery/14.png';
import img15 from '../assets/images/Gallery/15.png';
// import img16 from '../assets/images/Gallery/15.png';

const Gallery = () => {
  return (
    <>
    <div className="gallery flex justify-center items-center flex-col gap-5">
        <h1>Gallery</h1>
        <div className="gallerycontainer flex flex-wrap gap-2 ">
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
        <img src={img6} />
        <img src={img7} />
        <img src={img8} />
        <img src={img9} />
        <img src={img10} />
        <img src={img11} />
        <img src={img12} />
        <img src={img13} />
        <img src={img14} />
        <img src={img15} />
        <img src={img3} />
        </div>
    </div>
    </>
  )
}

export default Gallery