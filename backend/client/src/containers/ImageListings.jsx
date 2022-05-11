import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './Loader'
import Images from '../components/Images'

function ImageListings() {
  const [images, setImages] = useState([])
  const fetchImages = () => {
    axios.get('/images').then(res => {
      setImages(res.data)
      console.log(res.data)

    }).catch(e => {
      setImages([])
    })

  }
  const handleScroll = () => {
    let userScrollHeight = window.innerHeight + window.scrollY;
    let windowBottomHeight = document.documentElement.offsetHeight;
    if (userScrollHeight >= windowBottomHeight) {
      fetchImages();
    }
  };
  useEffect(() => {
    fetchImages()
    window.addEventListener("scroll", handleScroll);

  }, []);
  return (
    images.length > 0 ? (<Images data={images} />) : (<Loader />)


  )
}

export default ImageListings