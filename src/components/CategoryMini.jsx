import React from 'react'
import { getImageURL } from '../helpers/all'

const CategoryMini = ({ title, media }) => {
    return (
        <figure className='category-mini'>
            <img src={getImageURL({ path: media, size: "", type: "story" })} alt={title} />
            <figcaption><a href='/' className='stretched-link'>{title}</a></figcaption>
        </figure>
    )
}

export default CategoryMini