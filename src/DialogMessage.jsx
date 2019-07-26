import React from 'react';
import Dialog, {
    DialogTitle,
    DialogContent,
    DialogFooter,
    DialogButton,
} from '@material/react-dialog';
import '@material/react-dialog/index.scss';

const DialogMessage = (props) => {
    const { isOpen, timecredit } = props;

    return (
        <Dialog open={isOpen}>
            <DialogTitle>Available time:</DialogTitle>
            <DialogContent>
                <p>You have {(timecredit / 60).toFixed(0)} minutes to browse the Internet.</p>
            </DialogContent>
            <DialogFooter>
                <DialogButton action='dismiss'>Close</DialogButton>
                {/* <DialogButton action='accept' isDefault>Connect</DialogButton> */}
            </DialogFooter>
        </Dialog>
    );
}

export default DialogMessage;