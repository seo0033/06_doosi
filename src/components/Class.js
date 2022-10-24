import React from 'react'
import { Link } from 'react-router-dom'

const C_CONTENT = [
    { id: 1, tit: "One day", des: "가볍게 배울수 있는 수업입니다." },
    { id: 2, tit: "Hobby", des: "일상 생활에 응용할 수 있는 4가지 작품을 익히는 수업입니다." },
    { id: 3, tit: "Florlist", des: "플로리스트라는 직업에 대해 깊이있게 이해할 수 있는 수업입니다." },

]

const Class = () => {
    return (
        <section className='Class'>
            <div className="inner">
                <div className="C_left">
                    <figure><img src={process.env.PUBLIC_URL + "/assets/img/class.jpg"} alt="" /></figure>
                </div>
                <div className="C_right">
                    <div className="circle">
                        <h2>
                            doosi<br />florlist class</h2>
                    </div>
                    <ul>
                        {
                            C_CONTENT.map((it, idx) => {
                                return (
                                    <li>
                                        <h3>{it.tit}</h3>
                                        <p>{it.des}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <Link to={'/sub02'} className='C_button'>Class<br />Reservation</Link>
                </div>
            </div>
        </section>
    )
}

export default Class