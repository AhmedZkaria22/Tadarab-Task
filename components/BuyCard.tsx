import React from 'react';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import FileCopyRoundedIcon from '@mui/icons-material/FileCopyRounded';
import AllInclusiveRoundedIcon from '@mui/icons-material/AllInclusiveRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import SubtitlesRoundedIcon from '@mui/icons-material/SubtitlesRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { DoraSatisfy } from './DoraSatisfy';
import { Divider } from '@mui/material';
interface Props {
    
}

const BuyCard = (props: Props) => {
    const DoraFeats = [
        [<AccessTimeFilledRoundedIcon key={0} />, '8 ساعات تدريبية'],
        [<FileCopyRoundedIcon key={1} />, 'مرفقات حصرية جاهزة للتحميل'],
        [<AllInclusiveRoundedIcon key={2} />, 'امتلاك الدورة مدى الحياة'],
        [<DevicesRoundedIcon key={3} />, 'المشاهدة من اى موبايل او لابتوب'],
        [<SubtitlesRoundedIcon key={4} />, 'شهادة إتمام اون لاين معتمدة']
    ];

    return (
        <section id='BuyCard'>
            <p>تعلم الرسم و التلوين</p>
            <p><span>1600</span> جنيه مصرى</p>
            <span>                  
                <span> <span> 2800 </span> جنيه مصرى </span>
                <span>(خصم 20%)</span>
            </span>
            <div>
                <button> <ShoppingCartOutlinedIcon /> أضف للسلة </button>
                <button><FavoriteBorderRoundedIcon /></button>
                <button><ExitToAppRoundedIcon /></button>
            </div>
            <DoraSatisfy satHd={'٣٠ يوم ضمان ذهبي استرداد كامل المبلغ اذا لم تكن راضي عن محتوى الدورة'} satPg={'٣٠ يوم ضمان ذهبي استرداد كامل المبلغ اذا لم تكن راضي عن محتوى الدورة'}/>
            <Divider />
            <div>{
                DoraFeats.map( (DoraFeat, i) => {return(
                    <p key={i}> {DoraFeat[0]} {DoraFeat[1]} </p>
                    // <p> {DoraFeat[0]} {DoraFeat[1]} </p>
                )} )
            }</div>
            <p> انضم الى <span>2 مليون متعلم</span> على منصة تدرب وتعلم مهارة جديدة يومياً </p>
            <p>
                <span>هل لديك كوبون خصم ؟</span>
                <a href=''>ادخل الكوبون</a>
            </p>
        </section>
    )
}

export default BuyCard;