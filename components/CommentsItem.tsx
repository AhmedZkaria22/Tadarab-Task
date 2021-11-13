
import React from 'react';
import { Chip } from '@mui/material';
import FlagRoundedIcon from '@mui/icons-material/FlagRounded';

interface ComProps {
    commentType?: String
}

const CommentsItem: React.FC<ComProps> = ( { commentType } ) => {
    return (
        <article className={`CommentsItem ${commentType}`}>
            <img src="/Images/avatarImg.jpg" alt="" /> 
            <div>
                <p>محمد عبد الرحمن <Chip label="متعلم" className='chipTags'/></p>
                <div>
                    <FlagRoundedIcon />
                    <span>8 مارس 2021, 1.45 ص</span>                
                </div>
                <p>  لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص   </p>
                <div>
                    <p> <img src='Images/Icons/liked.png' alt='img'/> 5 </p>                    
                    <form>
                        <img src='Images/Icons/reply.png' alt='img'/>

                        <button> أكتب تعليق ... </button>
                    </form>
                </div>
            </div>
        </article>
    )
}

export default CommentsItem