import React from 'react';
import GppGoodRoundedIcon from '@mui/icons-material/GppGoodRounded';
interface SatProps {
    satHd: String,
    satPg: String,
}

export const DoraSatisfy: React.FC<SatProps> = ( { satHd, satPg } ) => {
    return (
        <section className='DoraSatisfy'>
            <GppGoodRoundedIcon />
            <h4> {satHd} </h4>
            <p> {satPg} </p>
        </section>
    )
}
