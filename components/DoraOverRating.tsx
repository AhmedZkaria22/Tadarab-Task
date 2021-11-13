import { Rating } from '@mui/material'
import React from 'react'
import Slider from 'react-slick';
import DoraOverRatingItem from './DoraOverRatingItem';

interface Props {

} 
const DoraOverRating = () => {
    const  settings = {
        dots: false,
        speed: 500,
        slidesToShow: 3,
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
            breakpoint: 992,
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

    const ratsData = [
      ['/Images/Icons/MaleAvatar.png', 'محمد عبد الرحمن', '4', 'منذ 8 ساعات', 
       'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت '],
      ['/Images/Icons/MaleAvatar.png', 'علاء كمال', '3', 'منذ 8 ساعات', 
       'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز '],
      ['/Images/Icons/MaleAvatar.png', 'حنان', '4', 'منذ 8 ساعات', 
       'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها'],
      ['/Images/Icons/MaleAvatar.png', 'محمد عبد الرحمن', '5', 'منذ 8 ساعات', 
       'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ']
    ];
    
    return (
        <section id='DoraOverRating'>
            <h5>التقييم العام للدورة</h5>
            <div className='DoraOverRatingDesc'>
                <p>4.1</p> 
                <div>
                <Rating value={5} className='ratingSpan Rating4Star' readOnly/>
                <span><span>1.278</span> تقييم من المتعلميين</span>
                </div>
            </div>
 
        <Slider {...settings} className='DoraOverRatingCarousel'>            
            <DoraOverRatingItem ratData={ratsData[0]}/>
            <DoraOverRatingItem ratData={ratsData[1]}/>
            <DoraOverRatingItem ratData={ratsData[2]}/>
            <DoraOverRatingItem ratData={ratsData[3]}/>
        </Slider>

        </section>
    )
}

export default DoraOverRating