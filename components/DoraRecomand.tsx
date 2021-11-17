import { GetServerSideProps } from 'next';
import React, { useEffect, useMemo, useState } from 'react';
import Slider from 'react-slick';
// import dt from '../course.json';
// import DoraRecomandItem from './DoraRecomandItem';
import DoraRecomandItemCls from './DoraRecomandItemCls';

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
 
  // Handel Functional Component Data
  /*const recDatas = [
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
  }, [dt]);*/        
  // Handel Functional Component Data

  return (    
    <section id='DoraRecomand'>
        <h3> مشتركين هذه الدورة <span>امتلكوا الدورات التالية أيضاً</span> </h3>
        <a href='#'>اعرض المزيد</a>
        <Slider {...settings} className='DoraRecomandCarousel'>

            {/* Functional Component - Data from json file  */}
            {/* 
              <DoraRecomandItem recData={recDatas[0]} jsonData={rltdCourse[0]} />
              <DoraRecomandItem recData={recDatas[1]} jsonData={rltdCourse[0]} />
              <DoraRecomandItem recData={recDatas[2]} jsonData={rltdCourse[0]} />
              <DoraRecomandItem recData={recDatas[3]} jsonData={rltdCourse[0]} /> 
            */}
            {/* Functional Component - Data from Json file  */}

            {/* Class Component - Data fetched from Api  */}
              <DoraRecomandItemCls ObjId={0}/>
              <DoraRecomandItemCls ObjId={1}/>
              <DoraRecomandItemCls ObjId={2}/>
              <DoraRecomandItemCls ObjId={3}/>
              <DoraRecomandItemCls ObjId={4}/>
            {/* Class Component - Data fetched from Api  */}

        </Slider>
    </section>
  )
};


export default DoraRecomand
