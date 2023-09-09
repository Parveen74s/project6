import React,{useEffect} from 'react'
import './Blog.css'

import { BsArrowRightShort } from 'react-icons/bs'

import img from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Posts = [
  {
    id: 1,
    PostImage: img,
    title: 'Beautiful Marcco, et us travel!',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim omnis voluptatum eaque non ducimus corporis consectetur totam reiciendis porro eos!',
  },

  {
    id: 2,
    PostImage: img2,
    title: 'Beautiful Marcco, et us travel!',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim omnis voluptatum eaque non ducimus corporis consectetur totam reiciendis porro eos!',
  },

  {
    id: 3,
    PostImage: img3,
    title: 'Beautiful Marcco, et us travel!',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim omnis voluptatum eaque non ducimus corporis consectetur totam reiciendis porro eos!',
  },

  {
    id: 4,
    PostImage: img4,
    title: 'Beautiful Marcco, et us travel!',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim omnis voluptatum eaque non ducimus corporis consectetur totam reiciendis porro eos!',
  },

]

const Blog = () => {

  useEffect(()=>{
    Aos.init({duration: 2000}) 
   }, [])

  return (
    <section className='blog container section'>
      <div className="secContainer">

        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className='secTitle'>
            Our Best Blog?
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">
            An insight to the incredible experiance in the world.
          </p>
        </div>

        <div className="mainContainer grid">
          {
            Posts.map(({ id, PostImage, title, desc }) => {
              return (
                <div className="singlePost grid">
                  <div data-aos="fade-up" data-aos-duration="2500" className="imgDiv">
                    <img src={PostImage} alt={title} />
                    <div className="postDetails">
                      <h3  data-aos="fade-up" data-aos-duration="3000">
                        {title}
                      </h3>
                      <p data-aos="fade-up" data-aos-duration="4000">
                        {desc}
                      </p>
                    </div>
                    <a href="#" className="flex" data-aos="fade-up" data-aos-duration="4500">
                      Read More
                      <BsArrowRightShort className="icon" />
                    </a>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </section>
  )
}

export default Blog