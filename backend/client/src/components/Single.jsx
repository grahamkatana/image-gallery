import React from 'react'

function Single({ data }) {
    return (

        <section className="overflow-hidden text-gray-700">

            <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px:32">
                <div class=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="rounded-t-lg" src={data.largeImageURL} alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            {
                                data.userImageURL && (
                                    <div class="flex space-x-2">
                                        <div class="relative w-20 h-20">
                                            <a href={data.pageURL}><img class="rounded-full border border-gray-100 shadow-sm" src={data.userImageURL} alt="user image" /></a>
                                        </div>
                                    </div>
                                )
                            }
                        </a>
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.user}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.views} Views</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Tags: {data.tags} | Size: {data.imageSize}</p>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.downloads} downloads</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Single