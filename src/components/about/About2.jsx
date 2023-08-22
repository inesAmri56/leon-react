
import '../../App.css'; 
import  image  from '../image/bout4.jpg';

const About2 = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <h2 className="special-heading">About</h2>
        <p>Less is more work</p>
        <div className="about-content">
          <div className="image">
          {/* {images
            
            .map((img) =>
            <div className="author" key={img.id}>
                <img src={img.image}  className="author-img" />
               
            </div>
            )} */}
            <img width="200px" src={image} alt="" />
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam optio quos doloribus, adipisci consectetur odit
              dignissimos nesciunt ut nam esse enim, quae sit, libero molestias quidem ratione nobis voluptate?
              Doloremque!
            </p>
            <hr />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quidem dignissimos illo voluptatibus deleniti
              reprehenderit commodi nulla vero quam excepturi ipsam quasi itaque non molestiae repellendus voluptas cum eius
              facilis?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About2;
