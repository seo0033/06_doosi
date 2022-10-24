import React from 'react'
import { Link } from 'react-router-dom';
import { CATEGORY } from '../components/Data';
import M_Prop from '../components/M_Prop';
import '../css/Spage.scss'


const Marcket_P03 = ({ Content }) => {
    const num = 0;
    return (
        <section className='marcket p03'>
            <div className="sub_v sc">
                <figure>
                    <img src={process.env.PUBLIC_URL + "/assets/img/sub_bg_01.png"} alt="" />
                    <h2>{Content[num].pha}</h2>
                </figure>
            </div>
            <div className="inner sub_sc">
                <div className='sub_cate'>{Content[num].con} / {CATEGORY[0].tit}</div>
                <div className="sub_tit b_bottom">{CATEGORY[0].tit}</div>
                <M_Prop />
            </div>
        </section>
    )
}

export default Marcket_P03