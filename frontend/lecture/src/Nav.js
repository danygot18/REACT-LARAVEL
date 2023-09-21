import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Nav = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>

            <ul className="nav nav-tabs">

                <li className="nav-item pr-3 pt-3 pb-3">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item pr-3 pt-3 pb-3">
                    <Link to="/create">Create</Link>
                </li>

                <li className="nav-item pr-3 pt-3 pb-3">
                    <Button variant="outlined" onClick={handleClickOpen}>
                        Login
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Login</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Pls Login. hehe
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Email Address"
                                type="email"
                                fullWidth
                                variant="standard"
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Password"
                                type="password"
                                fullWidth
                                variant="standard"
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleClose}>Login</Button>
                        </DialogActions>
                    </Dialog>
                </li>
            </ul>
        </div>
    )
}

export default Nav