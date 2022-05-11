import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './Loader'
import { useParams } from 'react-router-dom'

import ImageComponent from '../components/Single'

function ShowImage() {
    const id = useParams()
    console.log(id.id)
    const [Image, setImage] = useState([])
    const fetchImage = () => {
        axios.get('/images/' + id.id).then(res => {
            setImage(res.data)
            console.log(res.data)

        }).catch(e => {
            setImage([])
        })

    }

    useEffect(() => {
        fetchImage()

    }, []);
    return (
        Image.length > 0 ? (<ImageComponent data={Image[0]}/>) : (<Loader />)


    )
}

export default ShowImage