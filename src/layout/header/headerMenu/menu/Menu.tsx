import React from 'react';
import {Styles} from "../HeaderMenu_Styles"

const items = [
    {
        title:'Home',
        href: 'home'
    },
    {
        title:'Skills',
        href: 'skills'
    },
    {
        title:'Works',
        href: 'works'
    },
    {
        title:'Testimony',
        href: 'testimony'
    },
    {
        title:'Contact',
        href: 'contact'
    },
]

export const Menu:React.FC = () => {
    return (
        <ul>
            {items.map((item, index) => {
                return <Styles.MenuItem key={index}>
                    <Styles.NavLink
                        activeClass="active"
                        spy = {true}
                        offset={-1}
                        to={item.href}
                        smooth={true}
                    >
                        {item.title}
                    <Styles.Mask>
                        <span >{item.title}</span>
                    </Styles.Mask>
                    <Styles.Mask>
                        <span>{item.title}</span>
                    </Styles.Mask>
                    </Styles.NavLink>
                </Styles.MenuItem>
            })}
        </ul>
    );
};



