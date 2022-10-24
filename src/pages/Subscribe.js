import React from 'react'
import { CATEGORY } from '../components/Data';
import Theme from '../components/Theme';
import '../css/Spage.scss'

const Subscribe = ({ Content }) => {
  const num = 2;
  return (
    <section className='subscribe'>
      <div className="sub_v sc">
        <figure>
          <img src={process.env.PUBLIC_URL + "/assets/img/sub_bg_03.jpg"} alt="" />
          <h2>{Content[num].pha}</h2>
        </figure>
      </div>
      <div className="inner sub_sc">
        <div className='sub_cate'>{Content[num].con} / DOOSI</div>
        <div className="sub_tit b_bottom">{Content[num].con}</div>
      </div>
      <div className="content">
        <h3>THEME SUBSCRIBE</h3>
        <Theme />
      </div>
    </section>
  )
}

export default Subscribe