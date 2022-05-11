import React from 'react'
import { Link } from "react-router-dom";

function Images({ data }) {
    return (
        <section className="overflow-hidden text-gray-700">
            <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
                <div className="flex flex-wrap -m-1 md:-m-2">
                    <div className="flex flex-wrap w-100">
                        {
                            data.map((image, index) =>
                                <Link className="w-1/4 p-1 md:p-2" key={index} to={`/view/${image.id}`}>

                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={image.largeImageURL} />
                                </Link>

                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Images