import React,{useEffect} from 'react'
import './About.css'
import img1 from '../../Assets/Mountain.jpg'
import img from '../../Assets/img18.jpg'
import img2 from '../../Assets/img7.jpg'
import video from '../../Assets/video1.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {

  useEffect(()=>{
    Aos.init({duration: 2000}) 
   }, [])

  return (
    <section className='about section'>
      <div className="secContainer">
        <h2 className="title">
          Why Hiking
        </h2>

        <div className="mainContent container grid">
          <div data-aos="fade-up" data-aos-duration="2000" className="singleItem">
            <img src={img1} alt="Image Name" />

            <h3>100+Mountain</h3>

            <p>
              Resarch show that a chance to break awy from the normal ehythms of
              daily life reduce stress and improves health and well-being
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="2500" className="singleItem">
            <img src={img} alt="Image Name" />

            <h3>1000+Hakings</h3>

            <p>
              Resarch show that a chance to break awy from the normal ehythms of
              daily life reduce stress and improves health and well-being
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="singleItem">
            <img src={img2} alt="Image Name" />

            <h3>2000+Customer</h3>

            <p>
              Resarch show that a chance to break awy from the normal ehythms of
              daily life reduce stress and improves health and well-being
            </p>
          </div>

        </div>

        <div className="videoCard container">
          <div className="cardContent grid">

            <div data-aos="fade-right" data-aos-duration="2000" className="cardText">
              <h2>Wonderful House experiance nin
                there!
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ullam 
                culpa quae corporis magni tempora.
              </p>
            </div>

            <div data-aos="fade-left" data-aos-duration="2000" className="cardVideo">
              <video src={video} autoPlay loop muted typeof='video/mp4'></video>
            </div>
          </div>
        </div>

      </div>
    </section >
  )
}

export default About