import React from 'react';
import { DoraFaqAccordion } from './DoraFaqAccordion';

interface Props {
    
}

const DoraFaq = (props: Props) => {
    const [expanded, setExpanded] = React.useState<String | false>('panel1');

    const handleChange = (panel: String) => 
    (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };

    const faqData = [
        ['panel1', 'هل الدورة للمبتدئين فقط ؟', 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ'],
        ['panel2', 'كيف اشترك في الدورة؟', 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ'],
        ['panel3', 'هل يمكننى مشاهدة الدورة فى أى وقت ؟', 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ']
    ];
    return (
        <section id='DoraFaq'>
            <h3>الأسئلة الشائعة عن الدورة</h3>
            {
                faqData.map( (faqItem, i) => {return(
                    <DoraFaqAccordion key={i} faqPayload={faqItem} changeFun={handleChange} expandedListener={expanded}/>
                )} )
            }            
            <p>
                <span>هل لديك سؤال ؟</span>
                <a href=''>تواصل معنا</a>
            </p>
        </section>
    )
}

export default DoraFaq