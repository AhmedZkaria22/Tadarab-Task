import React, { useState } from 'react';
import DoraContentAccordion from './DoraContentAccordion';


interface Props { 
    
}

const DoraContent = (props: Props) => {
    const accordionData = [
        [ 'أسم الدرس و الفيديو' ,'03.45', 'شاهد مجاناً' ],
        [ 'أسم الدرس و الفيديو' ,'10.28', 'شاهد مجاناً' ],
        [ 'أسم الدرس و الفيديو' ,'08.46' ],
        [ 'أسئلة', 'أختبار على الدرس',  ],
        [ 'ملف شرح' ,'ملف PDF',  ]
    ];
    const accordionSvgs = [
        '/Images/Icons/lessonVideo.png' ,
        '/Images/Icons/lessonVideo.png' ,
        '/Images/Icons/lessonVideo.png' ,
        '/Images/Icons/docs.png' ,
        '/Images/Icons/quiz.png'
    ];

    const accordionData2 = [
        [ 'أسم الدرس و الفيديو' ,'08.46' ],
        [ 'أسئلة', 'أختبار على الدرس',  ],
        [ 'ملف شرح' ,'ملف PDF',  ]
    ];
    const accordionSvgs2 = [
        '/Images/Icons/lessonVideo.png' ,
        '/Images/Icons/docs.png' ,
        '/Images/Icons/quiz.png'
    ];

    const   accordion1name = ' أسم المجموعة 1 ',     accordion1dur = '4 دروس (2س : 45 د)',
            accordion2name = ' أسم المجموعة 2 ',     accordion2dur = '9 دروس (2س : 15 د)',
            accordion3name = ' أسم المجموعة 3 ',     accordion3dur = '4 دروس (2س : 45 د)';

            const [expanded, setExpanded] = useState<String | false>('panel1');

            const handleChange =
              (panel: String) => (event: React.SyntheticEvent, isExpanded: boolean) => {
                setExpanded(isExpanded ? panel : false);
            };
        

    return (
        <section id='DoraContent'>
            <h3>محتوى الدورة التدريبية</h3>
            <div>
                <img src='/Images/Icons/lessons.png' />
                <span><span>21</span> درس &nbsp; - </span>                
                <img src='/Images/Icons/time.png' />
                <span><span>6</span> س : <span>48</span> د</span>
            </div>
            <DoraContentAccordion keyndx={0} acrListener={"panel1"} changeFun={handleChange} expandedListener={expanded}  acrName={accordion1name}  acrDur={accordion1dur} acrData={accordionData} acrSvgs={accordionSvgs}/>
            <DoraContentAccordion keyndx={1} acrListener={"panel2"} changeFun={handleChange} expandedListener={expanded}  acrName={accordion2name}  acrDur={accordion2dur} acrData={accordionData2} acrSvgs={accordionSvgs2}/>
            <DoraContentAccordion keyndx={2} acrListener={"panel3"} changeFun={handleChange} expandedListener={expanded}  acrName={accordion3name}  acrDur={accordion3dur} acrData={accordionData2} acrSvgs={accordionSvgs2}/>
        </section>
    )
}

export default DoraContent