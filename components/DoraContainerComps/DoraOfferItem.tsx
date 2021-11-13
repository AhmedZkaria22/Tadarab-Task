import React from 'react';
import { Chip, Divider, Rating } from '@mui/material';

interface OffProps {
    offerData: String[], 
    // keyndx: React.Key | null | undefined,
}
 
const DoraOfferItem: React.FC<OffProps> = ( { offerData } ) => {    
    return (
        <section className='DoraOfferItem'>
            <div><Chip label={offerData[0]} className='chipTags'/></div>
            <div>
                <div>
                    <img src={`${offerData[1]}`} alt="img" />
                    <h6 className='cardHd'>{offerData[2]}</h6>
                    <span className='cardNm'>{offerData[3]}</span>
                </div>
                <Divider />
                <div> 
                    <span>{offerData[4]}</span>
                    <Rating name="read-only" defaultValue={5} className={`ratingSpan Rating${offerData[5]}Star`} readOnly />
                    <span>{`( ${offerData[6]} تقييم )`}</span>
                </div>
                <p> <span>{offerData[7]}</span> جنيه مصرى</p>
                <span> <span>{offerData[8]}</span> جنيه مصرى</span>
            </div>
        </section>
    )
}

export default  DoraOfferItem