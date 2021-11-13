import React from 'react';
import SignalCellularAltRoundedIcon from '@mui/icons-material/SignalCellularAltRounded';
interface Props {
    
}

const DoraLevel = (props: Props) => {
    return (
        <section id='DoraLevel'>
            <div> <SignalCellularAltRoundedIcon /> <span>مستوى متوسط</span> </div>
            <h4> متطلبات البدء فى الدورة </h4>
            <ul>
                <li> كشكول رسم </li>
                <li> ألوان </li>
            </ul>
        </section>
    )
}

export default DoraLevel
