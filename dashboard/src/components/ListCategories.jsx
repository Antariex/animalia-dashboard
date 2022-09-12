import React from 'react'
import { NavLink } from 'react-router-dom';

const ListCategories = ({value}) => {
    let {category} = value;
    console.log(category)
  return (
    <div>
        <ul className='category__main-list'>
            {
                category.map(category => {
                    return (
                        <li className='category__main-title'>
                            <NavLink to={'/'}>
                                <span>{category.name}</span>
                            </NavLink>
                            <ul className='category__sub-list'>
                                {
                                    category.subCategory.map(subCategory => {
                                        return (
                                            <li className='category__sub-title'>
                                                <NavLink to={'/'}>
                                                    <span>{subCategory.name}</span>
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