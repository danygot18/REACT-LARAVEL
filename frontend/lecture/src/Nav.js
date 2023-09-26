<<<<<<< HEAD
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Login from './Login';
import { getUser, logout } from './helpers';


const pages = ['Home', 'Create', 'Login'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Nav = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
=======
import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';


const Nav = () => {
    const [open, setOpen] = useState(false);
    const [state, setState] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate()
    const { email, password } = state;

>>>>>>> 4081ab83bbe6ff0f877e8a8454ccda63028534f1
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

<<<<<<< HEAD
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
=======
    const handleChange = name => event => {

        setState({ ...state, [name]: event.target.value });
    };

    const handleSubmit = event => {
        console.log(event)

        event.preventDefault();

        axios.post(`http://localhost:8000/api/login`, { email, password }).then(response => {
            console.log(response.data.access_token);
            setOpen(false)
            // show sucess alert
            // alert(`Post titled ${response.data.data.title} is created`);
            return navigate("/");
        })
            .catch(error => {
                console.log(error.response);
                alert(error.response.data.error);
            });
    };

>>>>>>> 4081ab83bbe6ff0f877e8a8454ccda63028534f1
    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >

                                <MenuItem onClick={handleCloseNavMenu}>
                                <Link href="/" variant="body2">
                                        Home
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Link href="/create" variant="body2">
                                        Create
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Link onClick={handleClickOpen} variant="body2">
                                        Login
                                    </Link>
                                </MenuItem>

<<<<<<< HEAD
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                component={Link} to="/"
                            >Home
                            </Button>
                            {/* { getUser() && <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                component={Link} to="/create"
                            >Create
                            </Button>} */}
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                component={Link} to="/create"
                            >Create
                            </Button>
                            {/* { getUser() ? <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                onClick={() => logout(() => navigate('/'))}
                            >Logout
                            </Button> : <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                onClick={handleClickOpen}
                            >Login
                            </Button>} */}
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                onClick={handleClickOpen}
                            >Login
                            </Button>

                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="chae" src="/images/chaeyoung2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {open && <Login openDialog={open} handleClose={handleClose}/>}

        </>
    )
}



export default Nav
=======
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
                                onChange={handleChange('email')}
                                value={email}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Password"
                                type="password"
                                fullWidth
                                variant="standard"
                                onChange={handleChange('password')}
                                value={password}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleSubmit}>Login</Button>
                        </DialogActions>
                    </Dialog>
                </li>
            </ul>
        </div>
    )
}

export default Nav
>>>>>>> 4081ab83bbe6ff0f877e8a8454ccda63028534f1
