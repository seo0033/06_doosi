import React, { useEffect, useState, useRef } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const Slide = [
    { id: 1, span: "Doosi", tit: "TAKE A REST", des: "꽃을 통해 진정한 휴식을 전달하는 브랜드" },
    { id: 2, span: "Doosi", tit: "두시와 함께 밀도 높은 휴식", des: "주체적이고 자발적으로 자기 시간의 주인이 되어\n진정한 휴식을 취하는 사람들 휴식이란 텅 빈 시간이 아닌 '밀도'있는 순간" },
    { id: 3, span: "Doosi", tit: "두시, 꽃으로 쉬어가는 시간", des: "창문 틈으로 들어오는 따스한 빛" }
]

const MainVisual = () => {
    const [IDX, setIDX] = useState();
    useEffect(() => {
        setIDX(0)
    }, []);
    const mainSlide = useRef(null);
    const setting = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        afterChange: index => setIDX(index),
    }

    return (
        <section className='MainVisual'>
            <Slider {...setting} ref={mainSlide}>
                {
                    Slide.map((slide, idx) => {
                        return (
                            <div className='s_box sc'>
                                <figure key={idx} className={'itm0' + slide.id + (idx === IDX ? ' on' : '')}></figure>
                                <div className="mv_txt">
                                    <span>{slide.span}</span>
                                    <h2 className='tit'>{slide.tit}</h2>
                                    <p className='des'>{slide.des}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            <ul className="slidedot">
                {
                    Slide.map((dots, idx) => {
                        return (
                            <li key={dots.id} className={idx === IDX ? ' on' : ''} onClick={() => mainSlide.current.slickGoTo(idx)}>{dots.title}</li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default MainVisual