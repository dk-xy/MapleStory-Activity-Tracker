import React from 'react';
import Countdown from './Countdown';
import CountdownDaily from './CountdownDaily';
import { IconClock24 } from '@tabler/icons-react';
import { IconCalendarClock} from '@tabler/icons-react';

function ResetCountdown({ weeklyResetDay }) {
    return (
        <div className='resetContainer'>
            <div className='reset'>
                <IconClock24 />
                {/* <div className='resetLabel'> Daily reset:</div> */}
                <CountdownDaily /> {/* Countdown to next Monday */}
            </div>
            <div className='reset'>
                {/* <div className='resetLabel'>Weekly reset:</div> */}
                <IconCalendarClock />
                <Countdown resetDay={weeklyResetDay} /> {/* Countdown to next specified day */}
            </div>
        </div>
    );
}

export default ResetCountdown;