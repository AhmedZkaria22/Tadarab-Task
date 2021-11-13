import React from 'react';
import GradusProjectsItem from './GradusProjectsItem';

interface Props {
    
} 

const GradusProjects = (props: Props) => {
    const gradusData = [
        ['/Images/backImg.jpg', '/Images/Icons/MaleAvatar.png', 'علياء عبد الحكيم', 'لوحة فنية'],
        ['/Images/backImg.jpg', '/Images/Icons/MaleAvatar.png', 'فهد عبدالمحسن', 'رسم بالرصاص'],
        ['/Images/backImg.jpg', '/Images/Icons/MaleAvatar.png', 'رانيا محمود', 'رسم شخصية كارتونية'],
        ['/Images/backImg.jpg', '/Images/Icons/MaleAvatar.png', 'جمال السيد', 'مشروع بالألوان الخشبية']
    ]
    return (
        <section id='GradusProjects'>
            <h3> المشاريع العملية <span>للمتعلمين فى الدورة</span> </h3>
            <p> هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ </p>
            <div>
                {
                    gradusData.map( (graduData, i) => {return(
                        <GradusProjectsItem key={i}  graduData={graduData}/>
                    )} )
                }
            </div>
        </section>
    )
}


export default GradusProjects