import React from 'react'
import '../css/Spage.scss'

const Class = ({ Content }) => {
  const num = 1;
  return (
    <section className='class sub02'>
      <div className="sub_v sc">
        <figure>
          <img src={process.env.PUBLIC_URL + "/assets/img/sub_bg_02.png"} alt="" />
          <h2>{Content[num].pha}</h2>
        </figure>
      </div>
      <div className="inner sub_sc">
        <div className='sub_cate'>{Content[num].con} / DOOSI</div>
        <div className="sub_tit b_bottom">{Content[num].con}</div>
      </div>
      <div className="content">

      </div>
    </section>
  )
}

export default Class