
import React from 'react';
import { Chip, Divider } from '@mui/material';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


interface RecProps {
    recData: String[],
    jsonData: jsDt,
} 

export interface jsDt {
    id: number; type: String; title: String; image: String; description: String; 
    price: number; discounted_price: number; currency_code: String; 
    subscribers_count: null; trainer: null; comments_count: number; 
    is_in_favorites: boolean; is_purchased: boolean; number_of_courses: number;
}
 
interface apiObjTs{
    comments_count: Number; currency_code: String;   description: String;   
    discounted_price: Number;  duration: Number; id: Number;  image: String;    
    is_in_favorites: Boolean; is_purchased: Boolean; price: Number;   
    subscribers_count: Number; title: String;   trainer: apiObjTrainTs;   type: String;  
}

interface apiObjTrainTs{
    bio: String;    id: Number; image: String;   name_ar: String;   name_en: String;   title: String;
}

 
const DoraRecomandItem: React.FC<RecProps> = ( { recData, jsonData } ) => {    
    return (
    <section className='DoraRecomandItem'>
        {/* Use Json Data File (jsonData["image"]) */}
        <div style={{ backgroundImage: `url(${jsonData["image"]})` }}>
            <Chip label={recData[0]} className='chipTags'/>
        </div>
        {/* Use Json Data File (jsonData["image"]) */}

        <div>
            <img src={`${recData[1]}`} alt="" />
            <p className='cardHd'> {recData[2]} </p>
            <span className='cardNm'> {recData[3]} </span>
        </div>
        <Divider />
        <div>
            <div>
                <p> <span>{recData[4]}</span> جنيه مصرى</p>
                {
                    (recData[5]) && <p> <span>{recData[5]}</span> جنيه مصرى</p>
                }                
            </div>
            <div>
                <ShoppingCartOutlinedIcon />
                <FavoriteBorderRoundedIcon />                    
            </div>
        </div>
    </section>
    )
}

export default DoraRecomandItem