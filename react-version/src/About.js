import React, {useState} from 'react';

import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';

function About() {
  const [bigImgSrc, setBigImgSrc] = useState(img6);
  const [smallImgSrcs, setSmallImgSrcs] = useState({
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
    img5: img5
  });

  function changeImage(e) {
    setSmallImgSrcs({...smallImgSrcs, [`img${e.target.id}`]: bigImgSrc})
    setBigImgSrc(e.target.src);
  }

  return (
    <section id="about">
      <h1>Sobre</h1>
            <div className="images-box">
                <img src={bigImgSrc} alt="Large_image" id="lrgImg" />
                <div className="small-images">
                    <img src={smallImgSrcs.img1} alt="Small_image" className="smllImg" onClick={changeImage} id="1" />
                    <img src={smallImgSrcs.img2} alt="Small_image" className="smllImg" onClick={changeImage} id="2" />
                    <img src={smallImgSrcs.img3} alt="Small_image" className="smllImg" onClick={changeImage} id="3" />
                    <img src={smallImgSrcs.img4} alt="Small_image" className="smllImg" onClick={changeImage} id="4" />
                    <img src={smallImgSrcs.img5} alt="Small_image" className="smllImg" onClick={changeImage} id="5" />
                </div>
            </div>
    </section>
  );
}

export default About;