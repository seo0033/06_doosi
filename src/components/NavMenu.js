import React from 'react'
import { Link } from 'react-router-dom'
import { NAVLINK } from './Data'

const NavMenu_L = () => {
    return (
        <ul>
            {
                NAVLINK.slice(0, 2).map((it, idx) => {
                    return (
                        <li key={idx}><Link to={it.link}>{it.content}</Link>
                            <ul>
                                {
                                    <li></li>
                                }

                            </ul>
                        </li>
                    )
                })
            }
        </ul>
    )
}
const NavMenu_R = () => {
    return (
        <ul>
            {
                NAVLINK.slice(2, 4).map((it, idx) => {
                    return (
                        <li key={idx}><Link to={it.link}>{it.content}</Link></li>
                    )
                })
            }
        </ul>
    )
}

export { NavMenu_L, NavMenu_R }