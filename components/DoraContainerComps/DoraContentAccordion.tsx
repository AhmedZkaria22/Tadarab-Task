import { Accordion, AccordionDetails, AccordionSummary, Divider } from '@mui/material'
import React from 'react';
import MinimizeRoundedIcon from '@mui/icons-material/MinimizeRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';

interface IProps {
    keyndx: React.Key | null | undefined,
    acrListener: String,
    changeFun: Function,
    expandedListener: String | false,
    acrName: String,
    acrDur: String,
    acrData: String[][],
    acrSvgs: String[],
}


const DoraContentAccordion: React.FC<IProps> = ( { keyndx, acrListener, changeFun, expandedListener, acrName, acrDur, acrData, acrSvgs } ) => {
    const accordionListener = acrListener,
        accordionChange = changeFun,
        accordionExpanded = expandedListener,
        accordionName = acrName,
        accordionDur = acrDur,
        accordionData = acrData,
        accordionSvgs = acrSvgs;

    return (
        <article className='DoraContentAccordion' key={keyndx}>
        <Accordion expanded={accordionExpanded === accordionListener} onChange={accordionChange(accordionListener)}>
            <AccordionSummary   expandIcon={accordionExpanded === accordionListener?<MinimizeRoundedIcon />:<AddRoundedIcon/>}     
                aria-controls={`${accordionListener}bh-content`}
                id={`${accordionListener}bh-header`}
                className='DoraContentAccordionSummary'
            >
            <h6>{accordionName}</h6>
            <span> {accordionDur} </span>
            </AccordionSummary>
            <AccordionDetails className='DoraContentAccordionDetailsWrapper'>
                { accordionData.map( (accordionDt, i) => {return(
                <>
                    <div key={i} className='DoraContentAccordionDetails'>
                        <div>
                            <img src={`${accordionSvgs[i]}`} alt='img'/>
                            <div>
                            <p>{accordionDt[0]}</p>
                            <span>{accordionDt[1]}</span>
                            </div>
                        </div>
                        <div>{ (accordionDt[2]) ? 
                            <>
                                <p>{accordionDt[2]}</p>
                                <LockOpenRoundedIcon className='lecFree'/>
                            </>
                            : <LockRoundedIcon className='lecPrim'/>
                        }</div> 
                    </div>
                    { (i !== accordionData.length - 1)  &&  <Divider /> }                    
                </>
                )} ) }
            </AccordionDetails>
        </Accordion>
        </article>
    )
}


export default DoraContentAccordion