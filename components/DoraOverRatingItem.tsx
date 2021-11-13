import { Rating } from '@mui/material'
import React from 'react'

interface RatProps {
    ratData: String[],
}
 
const DoraOverRatingItem: React.FC<RatProps> = ( { ratData } ) => {  
    const RatDt = ratData;  
    return ( 
        <article className='DoraOverRatingItem'>
            <img src={`${RatDt[0]}`} alt="" />
            <div>
            <p>{RatDt[1]}</p>
            <div>
                <Rating value={5} className={`ratingSpan Rating${RatDt[2]}Star`} readOnly/>                
                <span>{RatDt[3]}</span>                
            </div>
            <p> {RatDt[4]} </p>
            </div>
        </article>
    )
}

export default DoraOverRatingItem
