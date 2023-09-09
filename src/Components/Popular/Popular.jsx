import React, {useEffect} from 'react'
import './Popular.css'

import { BsArrowLeftShort } from 'react-icons/bs'
import { BsArrowRightShort } from 'react-icons/bs'
import { BsDot } from 'react-icons/bs'

import img1 from '../../Assets/img11.jpg'
import img2 from '../../Assets/img12.jpg'
import img3 from '../../Assets/img13.jpg'
import img4 from '../../Assets/img14.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'Machu picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX'
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Gunajuatao',
    location: 'Mexico',
    grade: 'CULTURAL RELAX'
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX'
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX'
  },
]

const Popular = () => {

  useEffect(()=>{
    Aos.init({duration: 2000}) 
   }, [])

  return (
    <section className='popular section container'>
      <div className="secContainer">

        <div className="secHeader flex">
          <div className="textDiv">
            <h2 data-aos="fade-right" data-aos-duration="2000" className="secTitle">
              Popular Destination
            </h2>
            <p data-aos="fade-right" data-aos-duration="2000"> From historical cities to natural
              spesteculars come see the best of the world
            </p>
          
        </div>

        <div data-aos="fade-left" data-aos-duration="2000" className="iconsDiv flex">
          <BsArrowLeftShort className="icon leftIcon" />
          <BsArrowRightShort className="icon" />
        </div>
      </div>

      <div className="mainContent grid">
        {
          Data.map(({ id, imgSrc, destTitle, location, grade }) => {
            return (
              <div data-aos="fade-up" data-aos-duration="2000" className="singleDestination">
                <div className="destImage">

                  <img src={imgSrc} alt="Image title" />

                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>{location}</p>
                    <wRightShort className='icon' />
                  </div>
                </div>
                <div className="destFooter">
                  <div className="number">
                    0{id}
                  </div>
                  <div className="destText flex">
                    <h6>
                      {location}
                    </h6>
                    <span className='flex'>
                      <span className='dot'>
                        <BsDot className="icon" />
                      </span>
                      Dot
                    </span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

    </div>

    </section >
  )
}

export default Popular