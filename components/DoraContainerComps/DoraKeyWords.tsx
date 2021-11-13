import { Chip, Stack, Typography } from '@mui/material'
import React from 'react'

interface Props {
    
}

const DoraKeyWords = (props: Props) => {
    const KeyWords = ['الرسم', 'التلوين', 'الألوان', 'الفنون', 'الرسم للمبتدئين'];
    return (
        <section id='DoraKeyWords'>
            <h3> الكلمات المفتاحية للدورة </h3>
            <Stack>{
                KeyWords.map( (KeyWord, i) => {return(
                    <Chip className='chipTags' key={i} label={KeyWord} />
                )} )
            }</Stack>            
        </section>
    )
}

export default DoraKeyWords