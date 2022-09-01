import React from 'react'
import { NavLink } from 'react-router-dom';

const ListCategories = ({value}) => {
    let {categories} = value;
    console.log(categories)
  return (
    <div>
        <ul className='category__main-list'>
            {
                categories.map(category => {
                    return (
                        <li className='category__main-title'>
                            <NavLink to={'/'}>
                                <span>{category.name}</span>
                            </NavLink>
                            <ul className='category__sub-list'>
                                {
                                    category.subCategories.map(sbCategory => {
                                        return (
                                            <li className='category__sub-title'>
                                                <NavLink to={'/'}>
                                                    <span>{sbCategory.name}</span>
                                                </NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default ListCategories