import React from 'react'

const CategoryCard = (props) => {
    return (
        <a href="/" className='category-card'>
            <figure>
                <img src={props.imgUrl} alt={props.title} />
                <figcaption>
                    <h3>{props.title}</h3>
                </figcaption>
            </figure>
        </a>
    )
}

export default CategoryCard