import React from 'react'
import { Link } from 'react-router-dom'
import { CATEGORY, PRODUCT_02 } from './Data'

const M_Plant = () => {
    return (
        <div className="product">
            <ul className="tab_menu">
                {
                    CATEGORY.map((it, idx) => {
                        return (
                            <Link to={it.link}><li>{it.tit}</li></Link>
                        )
                    })
                }
            </ul>

            <ul className="tab_pd">
                {
                    PRODUCT_02.map((it, idx) => {
                        return (
                            <li className='box'>
                                <table>
                                    <tr>
                                        <th>Title</th>
                                        <td>{it.tit}</td>
                                    </tr>
                                    <tr>
                                        <th>Price</th>
                                        <td>{it.price}</td>
                                    </tr>
                                </table>
                                <Link><img src={process.env.PUBLIC_URL + "/assets/img/plant_0" + it.id + ".jpg"} alt="" /></Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>

    )
}

export default M_Plant