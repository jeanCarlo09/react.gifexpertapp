import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'One Piece'];
    const [categories, setCategories] = useState(['Naruto']);

    // console.log(categories);
    // const handleAdd = () => {
    //     //cuando se utiliza el set del useState se le cae encima a lo que tiene categories, por eso se debe crear un nuevo arreglo
    //     // setCategories([...categories, 'HxH']);
    //     setCategories(cats => [...cats, 'Hxh']);

    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            {/* Order list */}
            <ol>
                {categories.map(c =>
                    // <li key={c}>{c}</li>
                    <GifGrid
                        key={c}
                        category={c}
                    />
                )}
            </ol>
        </>
    );
}

export default GifExpertApp;