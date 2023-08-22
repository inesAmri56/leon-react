import image from "../image/4.jpg"


// import { FontAwesomeIcon } from 'react-icons';
// import { FaYoutube, faSketch, faVectorSquare, faPencilRuler } from 'react-icons';

const Service = () => {
  return (
    <div className="services" id="services">
      <div className="container">
        <h2 className="special-heading">Services</h2>
        <p>Don't be busy, be productive</p>
        <div className="services-content">
          <div className="col">
            <div className="serv">
            <i className="bi bi-book"></i>
              <div className="text">
                <h3>Graphic design</h3>
                <p>
                  Graphic design is the process of visual communication and problem-solving using typography, photography, and illustration.
                </p>
              </div>
            </div>
            <div className="serv">
              {/* <FontAwesomeIcon icon={faSketch} className="fa-2x" /> */}
              <div className="text">
                <h3>UI & UX</h3>
                <p>
                  The process of enhancing user satisfaction with a product by improving usability, accessibility, and pleasure in interaction.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="serv">
              {/* <FontAwesomeIcon icon={faVectorSquare} className="fa-2x" /> */}
              <div className="text">
                <h3>Web design</h3>
                <p>
                  Web design encompasses various skills and disciplines in the production and maintenance of websites.
                </p>
              </div>
            </div>
            <div className="serv">
              {/* <FontAwesomeIcon icon={faPencilRuler} className="fa-2x" /> */}
              <div className="text">
                <h3>Web Development</h3>
                <p>
                  Web development involves the work in developing a website for the internet or intranet.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="image image-column">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
