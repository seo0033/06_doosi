import React from 'react'
import { Link } from 'react-router-dom';
import { CATEGORY } from '../components/Data';
import M_FLOWER from '../components/M_Flower';
import '../css/Spage.scss'


const Marcket_P01 = ({ Content }) => {
  const num = 0;
  return (
    <section className='marcket p01'>
      <div className="sub_v sc">
        <figure>
          <img src={process.env.PUBLIC_URL + "/assets/img/sub_bg_01.png"} alt="" />
          <h2>{Content[num].pha}</h2>
        </figure>
      </div>
      <div className="inner sub_sc">
        <div className='sub_cate'>{Content[num].con} / {CATEGORY[0].tit}</div>
        <div className="sub_tit b_bottom">{CATEGORY[0].tit}</div>
        <M_FLOWER />
      </div>
    </section>
  )
}

export default Marcket_P01