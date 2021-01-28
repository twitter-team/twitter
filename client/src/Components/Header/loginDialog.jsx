import React from "react";
import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core'
import LogIn from "../Login-Signup/LoginPage";



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
            
            <Button variant="outlined" color="primary" className="login_button" onClick={handleClickOpen}> SignIn</Button>
            <Dialog
                maxWidth={"xs"}
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
            >
                <DialogContent>
                    <div>
                        <div className="Dialog">
                            <img className='Dialog__image' src='https://icons-for-free.com/iconfiles/png/512/twitter+twitter+button+twitter+logo+icon-1320190501026673072.png' alt='ss' />
                        </div>
                        <div>
                            <LogIn handleClose={handleClose}/>
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