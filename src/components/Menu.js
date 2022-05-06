import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import NavLogo from '../assets/images/NavLogo.png'
export default function Menu() {
    return (
        <>
            <div className='MenuOuter'>
            <div className='MenuOuter Content'>
                <img
                    className='NavbarLogo'
                    src={NavLogo}
                    srcSet={NavLogo}
                    alt="logo"
                    loading="lazy"
                />
                <Paper sx={{ width: 'auto', boxShadow: 'none' }} className="NavMenu">
                    <MenuList>
                        <MenuItem>

                            <Typography variant="inherit">Discover</Typography>
                        </MenuItem>
                        <MenuItem>
                            <Typography variant="inherit">Search</Typography>
                        </MenuItem>
                        <MenuItem>
                            <Typography variant="inherit">Try Instaread
                            </Typography>
                        </MenuItem>
                        <MenuItem>
                            <Typography variant="inherit">Login
                            </Typography>
                        </MenuItem>
                    </MenuList>
                </Paper>
                </div>
            </div>
        </>
    )
}
