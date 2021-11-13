import React from 'react';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import CommentsItem from './CommentsItem';

interface Props {
    
}

const Comments = (props: Props) => {
    return (
        <section id='Comments'>
            <h3> التعليقات </h3>            
            <form action="">
                <textarea name="" id="CommentsArea"
                    placeholder="هل لديك تعليقاً أو سؤالاً؟ أكتب تعليقك هنا..."
                ></textarea>
                <button> إرسال <SendRoundedIcon /> </button>
            </form>
            <div>
                <CommentsItem />
                <CommentsItem />
            </div>
            <div className='nestedComments'>
                <CommentsItem commentType='primaryCom'/>
                <CommentsItem commentType='secondaryCom'/>
                <CommentsItem commentType='secondaryCom'/>
                <CommentsItem commentType='secondaryCom'/>
            </div>
            <div>
                <CommentsItem />
            </div>
        </section>
    )
}

export default Comments