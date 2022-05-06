import AlbumLogo from '../assets/images/Album.png'
import { Typography } from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import RatingStars from '../assets/images/RatingStars.png'
import NotesIcon from '../assets/images/Notes-icon.png'
import HeadphonesIcon from '../assets/images/Headphones-icon.png'
import BookmarkIcon from '../assets/images/Bookmark-icon.png'
import CartIcon from '../assets/images/Cart-icon.png'


export default function AlbumBanner() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <div className='AlbumBanner'>
                <div>
                    <img
                        className='NavbarLogo'
                        src={AlbumLogo}
                        srcSet={AlbumLogo}
                        alt="logo"
                        loading="lazy"
                    />
                </div>
                <div className='AlbumBannerContent'>
                    <h1>Astrophysics for People in a Hurry's Summary</h1>
                    <Typography sx={{ fontSize: '20px !important', fontWeight: 600, paddingTop: '8px', color: '#000 !important', letterSpacing: '0 !important', fontWeight: 100 }}>Key Insights & Analysis</Typography>
                    <p>Kelly Brogan, MD with Kristin Loberg</p>
                    <div className='AlbumActions'>
                        <ul type="none">
                            {/* <FontAwesomeIcon icon={faCoffee} /> */}
                            <li>                    <img
                                className='Icons'
                                src={NotesIcon}
                                srcSet={NotesIcon}
                                alt="NotesIcon"
                                loading="lazy"
                            />
                                18 min read</li>
                            <li>
                                <img
                                    className='Icons'
                                    src={HeadphonesIcon}
                                    srcSet={HeadphonesIcon}
                                    alt="HeadphonesIcon"
                                    loading="lazy"
                                />
                                14 min listen</li>
                            <li>
                                <img
                                    className='Icons'
                                    src={BookmarkIcon}
                                    srcSet={BookmarkIcon}
                                    alt="BookmarkIcon"
                                    loading="lazy"
                                />
                                Add to library</li>
                            <li>
                                <img
                                    className='Icons'
                                    src={CartIcon}
                                    srcSet={CartIcon}
                                    alt="CartIcon"
                                    loading="lazy"
                                />
                                <Button
                                    id="fade-button"
                                    aria-controls={open ? 'fade-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    Buy Book
                                </Button>
                                <Menu
                                    id="fade-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'fade-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    TransitionComponent={Fade}
                                    className="BuyBookButton"
                                >
                                    <MenuItem onClick={handleClose}>Google Books</MenuItem>
                                </Menu>
                            </li>
                        </ul>
                    </div>
                    <div className='BusinessChips'>
                        <Stack direction="row" spacing={1}>
                            <Chip label="Business & Finance" />
                            <Chip label="Business & Finance" />
                        </Stack>
                    </div>

                    {/* <div class="RatingOuter">
                        <div class="RatingValuesOuter">
                            <h3 class="RatingValues">0.0</h3>
                            <div class="Rating"><span class="Rating-text">0</span> Ratings</div>
                        </div>
                        <div className='StarsOuter'>
                            <img src={RatingStars} srcSet={RatingStars} alt='Rating' />
                        </div>
                    </div> */}

                </div>
            </div>
        </>
    )
}