import React from 'react';
import { Card, CardActions, CardContent } from '@mui/material';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
interface Props {
    
}

const DoraDetails = (props: Props) => {
    return (
        <section id='DoraDetails'>
            <Card>
                <CardContent>
                    <h3> تفاصيل الدورة </h3>
                    <p> تقدم لك منصة تدرب الإلكترونية دورة أسراري في التربية، بإِشراف الأستاذة عفاف محمد الجاسم، وهي المؤسس والرئيس التنفيذي لشركة إنسان للاستشارات والتدريب، خبرة أكثر من 30 عاماً في مجال الاستشارات الاجتماعية والتدريب. مدربة مدربين فئة A والمشرف العام لنادي إنسان للمدربين، وهي مستشار تدريب في معهد وليام جلاسر الدولي لنظرية الاختيار والعلاج الواقعي وعضو مجلس إدارة في جمعية الخدمة الاجتماعية الكويتية. بالإضافة إلى كونها عضو المجلس الاستشاري للجنة الطبية في جمعية صندوق إعانة المرضى وعضو مؤسس في جمعية الاختيار الكويتية. مقيم داخلي ومحكم دولي معتمد من المؤسسة الأوروبية لإدارة الجودة EFQM، وعضو في الجمعية البريطانية للتنويم الايحائي العلاجي UK Guild منذ عام 2000.  </p>
                </CardContent>
                <CardActions>
                    <button className='sectionBtn sectionBtnSvgWrapper'>أقرا المزيد <KeyboardArrowDownRoundedIcon /> </button>
                </CardActions>
            </Card>
        </section>
    )
}

export default DoraDetails