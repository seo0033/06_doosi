import React from 'react'
import { Link } from 'react-router-dom'
import { S_CONTENT } from './Data'

const Subscribe = () => {
    return (
        <section className='Subscribe sc'>
            <div className="S_left">
                <div className="S_tit">
                    <h2>Subscribe</h2>
                    <Link to={'/sub03'}><span>구독 신청</span></Link>
                </div>
                <ul>
                    {
                        S_CONTENT.map((it) => {
                            return (
                                <li>
                                    <div>
                                        <span>{it.num}</span>
                                        <h3>{it.tit}</h3>
                                    </div>
                                    <p>{it.des}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="S_right">
                <img src={process.env.PUBLIC_URL + "/assets/img/subscribe.png"} alt="" />
            </div>
        </section>
    )
}

export default Subscribe