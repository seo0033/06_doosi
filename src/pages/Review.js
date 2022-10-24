import React from 'react'
import { REVIEW } from '../components/Data';
import '../css/Spage.scss'
import { FaStar } from "react-icons/fa";
import { useState } from 'react';

const Review = ({ Content }) => {
  const num = 3;
  const star = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />]

  return (
    <section className='review'>
      <div className="sub_v sc">
        <figure>
          <img src={process.env.PUBLIC_URL + "/assets/img/sub_bg_04.png"} alt="" />
          <h2>{Content[num].pha}</h2>
        </figure>
      </div>
      <div className="inner sub_sc">
        <div className='sub_cate'>{Content[num].con} / DOOSI</div>
        <div className="sub_tit b_bottom">{Content[num].con}</div>
        <div className="content inner">
          {
            REVIEW.map((it, idx) => {
              return (
                <div className='box'>
                  <figure>
                    <img src={process.env.PUBLIC_URL + "/assets/img/review_0" + it.id + ".jpg"} alt="" />
                  </figure>
                  <div>
                    <div className="des">
                      <h3>{it.tit} <span># {it.id}</span></h3>
                      <p>{it.des01}</p>
                      <p>{it.des02}</p>
                      <p>{it.des03}</p>
                      <b>{star.slice(0, it.count)}</b>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Review