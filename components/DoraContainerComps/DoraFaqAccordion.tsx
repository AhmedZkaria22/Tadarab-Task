import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

interface FaqProps {
    faqPayload: String[],
    changeFun: Function,
    expandedListener: String | false,
}

export const DoraFaqAccordion: React.FC<FaqProps> = ( { faqPayload, changeFun, expandedListener} ) => {
    const faqData = faqPayload,
        faqChange = changeFun,
        faqListener = expandedListener;

    return (
        <Accordion expanded={faqListener === faqData[0]} onChange={faqChange(faqData[0])} className='DoraFaqAccordion'>
            <AccordionSummary className='DoraFaqAccordionSummary'
                expandIcon={faqListener === faqData[0] ? <KeyboardArrowRightRoundedIcon /> : <KeyboardArrowDownRoundedIcon />}
                aria-controls={`${faqData[0]}bh-content`}
                id={`${faqData[0]}bh-header`}
            >   <h5>{faqData[1]}</h5>   </AccordionSummary>
            <AccordionDetails>    <p>{faqData[2]}</p>    </AccordionDetails>
        </Accordion>
)
}
