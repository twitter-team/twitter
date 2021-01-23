import React from "react";
import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core'
import SignUp from "../Login-Signup/SignupPage";



export default function MaxWidthDialog() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <React.Fragment>
            
            <Button variant="outlined" color="primary" className="login_button" onClick={handleClickOpen}> SignUp </Button>
            <Dialog
                maxWidth={"xs"}
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
            >
                <DialogContent>
                    <div>
                        <div className="Dialog">
                            <img className='Dialog__image' src='https://i.pinimg.com/736x/9f/32/20/9f3220f4535dd9cd9743b995fdfdeaa1.jpg' alt='ss' />
                        </div>
                        <div>
                            <SignUp handleClose={handleClose}/>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary"> Close </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}