import React from 'react';
import { Card, CardActions, CardContent } from '@mui/material';

interface Props {
    
}

const DoraWhatLearn = (props: Props) => {
    const learnList = [
        'الرسم بالقلم الرصاص والألوان وعمل اسكتشات',
        'التلوين واستخدام الألوان الخشبية',
        'عمل لوحات فنية كاملة',
        'اختيار الالوان المناسبة للرسومات'
    ]
    return (
        <section id='DoraWhatLearn'>
            <Card>
                <CardContent>
                    <h3> ماذا سوف تتعلم فى الدورة </h3>
                    {
                        learnList.map( (learnItm, i) => {return(
                            <p key={i}> <img src='/Images/Icons/Check.png' /> {learnItm} </p>
                        )} )
                    }
                </CardContent>
                <CardActions>
                    <button className='sectionBtn sectionBtnSvgWrapper'>أقرا المزيد <img src='/Images/Icons/more.png' /> </button>
                </CardActions>
            </Card>
        </section>
    )
}

export default DoraWhatLearn;
