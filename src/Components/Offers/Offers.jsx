import React,{useEffect} from 'react'
import './Offers.css'
import { MdKingBed } from 'react-icons/md'
import { MdBathtub } from 'react-icons/md'
import { FaWifi } from 'react-icons/fa'
import { MdAirportShuttle } from 'react-icons/md'
import { MdLocationOn } from 'react-icons/md'
import { BsArrowRightShort } from 'react-icons/bs'

import img5 from '../../Assets/img15.jpg'
import img6 from '../../Assets/img16.jpg'
import img2 from '../../Assets/img17.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Offers = [
  {
    id: 1,
    imgSrc: img5,
    stTdeitle: 'Machu picchu',
    location: 'Peru',
    price: '$7,452'
  },

  {
    id: 2,
    imgSrc: img6,
    stTdeitle: 'Gunajuatao',
    location: 'Mexico',
    price: '$2,302'
  },

  {
    id: 3,
    imgSrc: img2,
    stTdeitle: 'Angkor Wat',
    location: 'Cambodia',
    price: '$3,543'
  },
]

const Offer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000}) 
   }, [])

  return (
    <section className='offer container section'>
      <div className="secContainer">

        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">
            Special offer
          </h2>
          <p>
            form historical cities to natural spectecurals, come see the best of the world!
          </p>
        </div>
        <div className="mainContent grid">

          {
            Offers.map(({id, imgSrc, stTdeitle, location, price})=>{
              return (
                <div  data-aos="fade-up" data-aos-duration="2000" className="singleOffer">
                  <div className="destImage">
                    <img src={imgSrc} alt={stTdeitle} />
                    <span className='discount'>
                      30% Off
                    </span>
                  </div>
                  <div className="offerBody">
                    <div className="price flex">
                      <h4>
                        {price}
                      </h4>
                      <span className='status'>
                        For Rent
                      </span>
                    </div>
                    <div className="amenities flex">
                      <div className="singleAmenity flex">
                        <MdKingBed className="icon" />
                        <small>2 Beds</small>
                      </div>
                      <div className="singleAmenity flex">
                        <MdBathtub className="icon" />
                        <small>1 Bath</small>
                      </div>
                      <div className="singleAmenity flex">
                        <FaWifi className="icon" />
                        <small>Wi.Fi</small>
                      </div>
                      <div className="singleAmenity flex">
                        <MdAirportShuttle className="icon" />
                        <small>Shutle</small>
                      </div>
                    </div>

                    <div className="location flex">
                      <MdLocationOn className="icon" />
                      <small>450 Vine #310, {location}</small>
                    </div>

                    <button className='btn flex'>
                      View Details
                      <BsArrowRightShort className="icon" />
                    </button>
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

export default Offer