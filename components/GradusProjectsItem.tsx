import { Chip } from '@mui/material'
import React from 'react'

interface GrdProps {
    graduData: String[]
} 

const GradusProjectsItem: React.FC<GrdProps> = ( { graduData } ) => {
    const grdDt = graduData;
    return (
        <article className='GradusProjectsItem'>
            <img src={`${grdDt[0]}`} alt="" />
            <div>
                <img src={`${grdDt[1]}`} alt="" />
                <div>
                    <p> {grdDt[2]}  <Chip label="متعلم" className='chipTags'/>  </p>
                    <span> {grdDt[3]} </span>
                </div>
            </div>
        </article>
    )
}

export default GradusProjectsItem