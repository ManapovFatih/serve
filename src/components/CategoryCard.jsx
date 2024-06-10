import React from 'react'
import { getImageURL } from '../helpers/all'

const CategoryCard = ({ title, media }) => {
    return (
        <a href="/" className='category-card'>
            <figure>
                <img src={getImageURL({ path: media, size: "", type: "category" })} alt={title} />
                <figcaption>
                    <h3>{title}</h3>
                </figcaption>
            </figure>
        </a>
    )
}

export default CategoryCard