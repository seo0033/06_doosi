import React from 'react';
import MainVisual from '../components/MainVisual';
import '../css/Main.scss';
import Class from '../components/Class';
import Category from '../components/Category';
import Subscribe from '../components/Subscribe';
import Marquee from "react-fast-marquee";

const Main = () => {
    return (
        <main>
            <MainVisual />
            <Category />
            <Subscribe />
            <Class />
            <Marquee className='txt_line' gradientColor='tranparent'>
                Share life style with Doosi Share life style with Doosi
                Share life style with Doosi Share life style with Doosi
                Share life style with Doosi Share life style with Doosi
                Share life style with Doosi Share life style with Doosi
            </Marquee>
        </main>
    )
}

export default Main