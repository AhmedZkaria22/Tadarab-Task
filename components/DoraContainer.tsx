import React, { useRef } from 'react';
import { Breadcrumbs, CardMedia, Divider } from '@mui/material';
import Link from 'next/link';
import DoraWhatLearn from './DoraContainerComps/DoraWhatLearn';
import DoraDetails from './DoraContainerComps/DoraDetails';
import DoraKeyWords from './DoraContainerComps/DoraKeyWords';
import DoraLevel from './DoraContainerComps/DoraLevel';
import DoraContent from './DoraContainerComps/DoraContent';
import DoraInstructor from './DoraContainerComps/DoraInstructor';
import DoraFaq from './DoraContainerComps/DoraFaq';
import DoraOffer from './DoraContainerComps/DoraOffer';
import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded';
import { DoraSatisfy } from './DoraSatisfy';
interface Props {
    
}

const DoraContainer = (props: Props) => {
    const vdoRef = useRef<HTMLVideoElement | undefined | any>(null);
    const vdoPlayRef = useRef<HTMLOrSVGElement | undefined | any>(null);
    return ( 
        <section id='DoraContainer'>     
            <Breadcrumbs id='breadcrumb' aria-label="breadcrumb" separator=">">
                <Link href="/"> فنون </Link>
                <Link href="/"> الرسم </Link>
                <Link href="/"> تعليم الرسم و التلوين </Link>
            </Breadcrumbs>
            <div id='videoWrapper'>
                <div ref={vdoPlayRef}>
                    <PlayCircleFilledWhiteRoundedIcon   onClick={() => {
                        console.log('hello', vdoRef.current);
                        vdoPlayRef.current.style.display = 'none';
                        vdoRef.current.style.display = 'block';
                    } }/>   شاهد اعلان الدورة
                </div>
                <CardMedia
                    ref={vdoRef}
                    component="video"
                    autoPlay
                    controls
                    src="/Project.mp4"                    
                    className='videoElm'
                />
            </div>            
            <DoraWhatLearn />
            <DoraDetails />
            <Divider />
            <DoraKeyWords /> 
            <DoraLevel />
            <DoraContent /> 
            <DoraInstructor />
            <DoraSatisfy satHd={'رضاك يهمنا نقدم لك 30 يوم ضمان ذهبى'} satPg={'استرداد كامل المبلغ اذا لم تكن راضى عن محتوى الدورة'}/>
            <section id='DoraCert'>                
                <p> سوف تحصل على <span> شهادة من تدرب بعد إنتهاء الدورة </span> </p>
                <div>
                <div>
                    <img src="/Images/TadarabLogo.png" alt="" />
                    <p>شهادة إتمام الدورة</p>
                    <div>
                        <span></span><span></span><span></span>
                        <div>
                            <div><span></span><span></span></div>
                            <img src="/Images/certSign.png" alt="" />
                        </div>
                    </div>
                </div>
                </div>
            </section>            
            <DoraFaq />
            <DoraOffer />
        </section>
    )
}

export default DoraContainer