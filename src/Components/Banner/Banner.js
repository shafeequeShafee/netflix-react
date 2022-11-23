import './Banner.css'
import React, { useEffect, useState } from 'react'
import axios from '../../Axios/axios';
import {apiKey,imageUrl} from '../../Constants/constants.js'
function Banner() {
    const [bannerData,setBanner]=useState([])
    useEffect(() => {
        axios.get(`/trending/all/week?api_key=${apiKey}`)
        .then((res)=>{
            console.log('banner',res.data.results[0]) 
            setBanner(res.data.results[0])

        })
        .catch()
    
    //   return () => {
    //   }
    }, [])  /// component mount avumbol run cheyyaan empty array koduthamathi
    
    return (
        <div style={{backgroundImage:`url( ${bannerData ? imageUrl+bannerData.backdrop_path : ''})`}} className='banner'>
            <div className='content'>
                <h1 className='title'> {bannerData ? bannerData.original_title : ''}</h1>
                <div className='banner-button'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
            </div>
            <h1 className='description'>
                {bannerData ? bannerData.overview: ''}
            </h1>
            <div className="fade-bottom">
                
            </div>

        </div>
    )
}

export default Banner