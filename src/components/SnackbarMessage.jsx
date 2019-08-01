import React from 'react';
import { Snackbar } from '@material/react-snackbar';
import '@material/react-snackbar/index.scss';


const SnackbarMessage = (props) => {
    const { timecredit } = props;
    const message = `Voucher contains ${(timecredit / 60).toFixed(0)} minutes.`

    return (
        <Snackbar message={message} />
    );
}

export default SnackbarMessage;