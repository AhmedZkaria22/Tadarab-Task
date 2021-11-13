import React from 'react';
import DoraOfferItem from './DoraOfferItem';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

interface Props {  
    
}

const DoraOffer = (props: Props) => {
    const offersData = [
        ['فنون', '/Images/avatarImg.jpg', 'تعلم الرسم بالقلم الرصاص', 'أ/ مروة عبدالله', '4.1', '5', '217', '800', '860'],
        ['فنون', '/Images/avatarImg.jpg', 'تعليم رسم الشخصيات الكرتونية', 'د. حسين عبدالكريم', '4.1', '3', '217', '800', '860'],
        ['فنون', '/Images/avatarImg.jpg', 'تعليم التلوين بالألوان الخشبية', 'د. حسين عبدالكريم', '4.1', '4', '217', '800', '860']
    ]
    return (
        <section id='DoraOffer'>
            <h5> <img src="/Images/Icons/gift.png" alt="" /> عرض خاص جداا لفترة محدودة </h5> 
            <div className="DoraOfferContainer">
                {
                    offersData.map( (offerData, i) => {return(
                        (i !== offersData.length-1) ?
                        <>
                            <DoraOfferItem keyndx={i} offerData={offerData}/>
                            <AddRoundedIcon className='DoraOfferPlus'/>
                        </>
                        : <DoraOfferItem keyndx={i} offerData={offerData}/>
                    )} )
                }
            <div>
                <div>
                    <p><span>1600</span> جنيه مصرى</p>
                    <span>بدلا من <span>3000</span> جنيه مصرى</span>
                    <span>هتوفر <span>60%</span> من خلال العرض</span>
                </div>
                <div>
                    <div>
                        <span>العرض متاح خلال</span>
                        <div>                
                            <p> 2 <span> ساعة </span> </p>:
                            <p> 30 <span> دقيقة </span> </p>:
                            <p> 45 <span> ثانية </span> </p>
                        </div>
                        <button> <ShoppingCartOutlinedIcon /> احصل على العرض </button>
                    </div>                    
                </div>
            </div>
            </div>
        </section>
    )
}


export default DoraOffer