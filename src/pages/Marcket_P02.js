import React from 'react'
import { Link } from 'react-router-dom';
import { CATEGORY } from '../components/Data';
import M_Plant from '../components/M_Plant';
import '../css/Spage.scss'


const Marcket_P02 = ({ Content }) => {
    const num = 0;
    return (
        <section className='marcket p02'>
            <div className="sub_v sc">
                <figure>
                    <img src={process.env.PUBLIC_URL + "/assets/img/sub_bg_01.png"} alt="" />
                    <h2>{Content[num].pha}</h2>
                </figure>
            </div>
            <div className="inner sub_sc">
                <div className='sub_cate'>{Content[num].con} / {CATEGORY[0].tit}</div>
                <div className="sub_tit b_bottom">{CATEGORY[0].tit}</div>
                <M_Plant />
            </div>
        </section>
    )
}
export default Marcket_P02