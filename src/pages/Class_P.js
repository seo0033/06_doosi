import React from 'react'
import '../css/Spage.scss'
import Class from '../components/Class';

const Class_P = ({ Content }) => {
  const num = 1;
  return (
    <section className='sub02'>
      <div className="sub_v sc">
        <figure>
          <img src={process.env.PUBLIC_URL + "/assets/img/sub_bg_02.png"} alt="" />
          <h2>{Content[num].pha}</h2>
        </figure>
      </div>
      <div className="inner sub_sc">
        <div className='sub_cate'>{Content[num].con} / DOOSI</div>
        <div className="sub_tit b_bottom">{Content[num].con}</div>
        <div className="content">
          <Class />
        </div>
      </div>
    </section>
  )
}

export default Class_P