import React,{useEffect, useState} from 'react'
// import { Link } from 'react-router-dom'
import egg from "../images/egg.png"
import bread from '../images/bread.png'
import cheese from '../images/cheese.png'
import onion from '../images/onion.png'
import cabbage from '../images/cabbage.png'
import likeicon from '../images/like icon.png'
import plus from '../images/plus icon.png'
import naira from '../images/naira.png'
import donjazzy from '../images/donjazy.png'
import axios from 'axios'
import '../styles/Hero.css'


const Hero = () => {
  const [data,setData] = useState([]);
  let url = 'https://jazzyburger.onrender.com/jazzy/allpost'
  const getFetchedData = async ()=>{
    let fetchedUrl = await axios (url);
    console.log(fetchedUrl.data);
    setData(fetchedUrl.data);
  }
  useEffect(()=>{
    getFetchedData()
  },[]);



  return (
    <div className='mapping container'>
      <div className='row'>
        <div className='col-lg-4 col-md-3 d-none d-md-block d-lg-block mt-4'>
          <img className=' jazzy' src={donjazzy} alt="" />
        </div>
        <div className='col-lg-8 col-md-9 space mb-2'>
         {data.map((datum)=>{
          const {_id,title,description,image,category,price} = datum;
          return(
        <div className='mb-2'>
              <div key={_id} className=' mt-4 hero-border'>
              <div className='relative '>
              <div className='map-image '>
                <img className='w-100 fetch-img' src={image} alt="" />
                <img className='like-icon' src={likeicon} alt="" />
              </div>
              </div>
             <div className='p-3'>
             <p className='title'>{title}</p>
             <p  className='text-color ' >Total Price</p>
              <div > 
                <img className='naira pb-1' src={naira} alt="" /><span >{price}</span>
              </div>
              <div className='d-flex justify-content-between mt-1 veggies'>
                <img src={cheese} alt="" />
                <img src={onion} alt="" />
                <img src={cabbage} alt="" />
                <img src={bread} alt="" />
                <img src={egg} alt="" />
              </div>
             <button className='btn button w-100 my-2 d-flex gap-2 justify-content-center '><img src={plus} alt="" />Add to Cart</button>
             </div>
            </div>
        </div>
          )
        })}
      </div>
      <button className='btn btn-dark w-50 my-4 mx d-md-none d-lg-none'>See More</button>
       </div>
    </div>
  )
}

export default Hero