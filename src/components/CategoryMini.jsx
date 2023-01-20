import React from 'react'

const CategoryMini = (props) => {
    return (
        <figure className='category-mini'>
            <img src={props.imgUrl} alt={props.title} />
            <figcaption><a href='/' className='stretched-link'>{props.title}</a></figcaption>
        </figure>
    )
}

export default CategoryMini