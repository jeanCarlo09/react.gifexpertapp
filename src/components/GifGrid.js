import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {


    const { loading, data: images } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            
            {loading && <p className="animate__animated animate__flash">Loading...</p>}

            <div className="card-grid animate__animated animate__fadeIn">

                {
                    images.map((img) =>

                        <GifGridItem
                            {...img}
                            key={img.id}
                        />
                    )

                }
            </div>
            {/* <button onClick={() => { setCount(count + 1) }}>{count}</button> */}
        </>
    )
}
