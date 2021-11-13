import React from 'react';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
interface Props {
    
}

const DoraInstructor = (props: Props) => {
    return (
        <section id='DoraInstructor'>
            <div>
                <img src='/Images/Icons/MaleAvatar.png' alt='avatar'/>
                <h6>أ/ مروة عبد الله</h6>
                <p>فنانة تشكيلية ومعلمة للرسم</p>
                <span>
                    <SchoolRoundedIcon />
                    5 دورات  -  
                    <PersonRoundedIcon />
                    12,930 متعلم
                </span>
            </div> 
            <p> هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص </p>
            <a className='sectionBtn sectionBtnSvgWrapper' href="#"> اعرض حساب المدرب <KeyboardArrowLeftRoundedIcon/> </a>
        </section>
    )
}

export default DoraInstructor