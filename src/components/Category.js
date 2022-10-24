import React from 'react'
import { Link } from 'react-router-dom'
import { CATEGORY } from './Data'

const Category = () => {
    return (
        <section className="Category sc">
            <div className="inner">
                {
                    CATEGORY.map((it) => {
                        return (
                            <figure key={it.id}>
                                <Link to={it.link}>
                                    <div className="box">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/cate_0" + it.id + ".png"} alt="" />
                                    </div>
                                    <div className='tit'>{it.tit}</div>
                                </Link>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Category