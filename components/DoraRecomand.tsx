import React, { useEffect, useMemo } from 'react';
import Slider from 'react-slick';
import DoraRecomandItem from './DoraRecomandItem';
import dt from '../course.json';

const rltdCourse: any = [];
interface Props {
    
} 

const DoraRecomand = (props: Props) => {

  const  settings = {
      dots: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: -2,
      rtl: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            dots: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: -2,
            rtl: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: -2,
            rtl: true,
            speed: 500,
          }
        },
        {
          breakpoint: 576,
          settings: {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: -2,
            rtl: true,
            speed: 500,
          }
        }
      ]
  };

 
    const recDatas = [
      ['فنون', '/Images/avatarImg.jpg', 'تعلم الرسم بالقلم الرصاص', 'د. حسين عبد الحكيم', '800', '860'],
      ['فنون', '/Images/avatarImg.jpg', 'الرسم بالتابلت', 'د. وفاء عبدالعزيز', '600', '800'],
      ['فنون', '/Images/avatarImg.jpg', 'تعليم الرسم للأطفال', 'م. محمد مصطفي', '1200'],
      ['فنون', '/Images/avatarImg.jpg', 'رسم وتصميم الزخارف', 'د. محمد زين الدين', '1200']
    ];

    useEffect(() => {
      rltdCourse.push(dt.data.related_courses[0]);
    }, [dt]);        

    useMemo(() => {
      rltdCourse.push(dt.data.related_courses[0]);
    }, [dt]);        

    return ( 
        <section id='DoraRecomand'>
            <h3> مشتركين هذه الدورة <span>امتلكوا الدورات التالية أيضاً</span> </h3>
            <a href='#'>اعرض المزيد</a>
            <Slider {...settings} className='DoraRecomandCarousel'>
                <DoraRecomandItem recData={recDatas[0]} jsonData={rltdCourse[0]}/>
                <DoraRecomandItem recData={recDatas[1]} jsonData={rltdCourse[0]}/>
                <DoraRecomandItem recData={recDatas[2]} jsonData={rltdCourse[0]}/>
                <DoraRecomandItem recData={recDatas[3]} jsonData={rltdCourse[0]}/>
            </Slider>
        </section>
    )
}

export default DoraRecomand
