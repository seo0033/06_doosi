import React from 'react'
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom'



const Footer = () => {
    return (
        <footer className='Footer'>
            <div className='line'></div>
            <div className='line'></div>
            <div className="inner">
                <h2>
                    <Link to='/'>
                        <img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} alt="" />
                    </Link>
                </h2>
                <div className="company_i">
                    <ul>
                        <li>대표 : 길홍종</li>
                        <li>사업자등록번호 : 687-56-1354</li>
                        <li>대전광역시 유성구 계룡로 137</li>
                        <li>통신판매신고번호 : 제2022-대전유성-0288호</li>
                    </ul>
                    <ul>
                        <li className='bank'><span>IBK기업은행 : 038-1495513-53-665</span></li>
                        <li>예금주 : 주식회사 두시</li>
                    </ul>
                </div>
                <div className="f_right">
                    <div className="cs">
                        <li className='call'><a href="tel:070-4466-5633">070-4466-5633</a></li>
                        <li>평일 10:00 - 17:00</li>
                        <li>점심시간 12:00 - 13:00</li>
                        <li>주말 및 공휴일 휴무</li>
                    </div>

                    <div className="sns">
                        <span><FaFacebookF className='icon'/></span>
                        <span><FaInstagram /></span>
                        <span><FaPinterestP /></span>
                        <span><FaTwitter /></span>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer