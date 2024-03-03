import React from 'react'

import './topnav.css'

import Dropdown from '../dropdown/Dropdown'

import ThemeMenu from '../thememenu/ThemeMenu'


import user_image from '../../assets/images/tuat.png'


const curr_user = {
    display_name: 'Doğukan Taha ',
    image: user_image
}





const Topnav = () => {
    return (
        <div className='topnav'>
            <div className="topnav__search">
            </div>
            <div className="topnav__right">
                <div className="topnav__right-item">
                    <ThemeMenu/>
                </div>
            </div>
        </div>
    )
}

export default Topnav
