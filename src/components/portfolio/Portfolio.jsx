

import '../../App.css';
import image1 from "../image/po1.jpeg"
import image2 from "../image/po3.webp"
import image3 from "../image/po5.jpg"


const Portfolio = () => {
  return (
    <div className="portfolio" id='portfolio'>
      <div className="container">
        <h2 className="special-heading">Portfolio</h2>
        <p>If you do it right you last forever</p>
        <div className="portfolio-content">
          <div className="card">
          <img src={image3} alt="" />
            <div className="info">
              <h1>Project Here</h1>
              <p>
                My creative ability is very difficult to measure because it can manifest in so many surprises.
              </p>
            </div>
          </div>
          <div className="card">
            <img src={image1} alt="" />
            <div className="info">
              <h1>Project Here</h1>
              <p>
                My creative ability is very difficult to measure because it can manifest in so many surprises.
              </p>
            </div>
          </div>
          <div className="card">
            <img src={image2} alt="" />
            <div className="info">
              <h1>Project Here</h1>
              <p>
                My creative ability is very difficult to measure because it can manifest in so many surprises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
