import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import LockIcon from '../assets/images/lock-icon.png'
import AudioPlayers from './AudioPlayer'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className='DescriptionTabs'>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab className="LockIconTab" icon={<img src={LockIcon} srcSet={LockIcon} alt="LockIcon"/>} label="Summary"  {...a11yProps(0)} />
                            <Tab label="Insights" {...a11yProps(1)} />
                            <Tab label="Quotes" {...a11yProps(2)} />
                            <Tab label="Community" {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <h2>Overview</h2>
                        <p>Astrophysics for People in a Hurry (2017) by Neil deGrasse Tyson is a collection of essays covering a variety of topics in astrophysics.

                            Physicists theorize that the universe originated with a Big Bang 14 billion years ago, when all matter that exists in the universe began as an extremely dense point and rapidly spread out. Matter and antimatter particles formed in the first millionth of a second from high-energy photons and annihilated upon contact with each other.

                            The universe cooled substantially moments after the explosion. Subatomic particles began forming heavier particles that eventually became protons and neutrons. Within one second of the Big Bang, the universe had expanded to several light-years in width. Soon after, the particles began to coalesce into atomic structures. About 380,000 years after the Big Bang, the universe filled with the light resulting from the prior interactions. Within a billion years, matter formed galaxies and stars, which seeded heavier elements throughout space when the stars exploded. From there, solar systems with planets formed. Billions of years later, life complex enough to develop intelligence evolved on Earth.</p>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                    <h2>Overview Second</h2>
                        <p>Astrophysics for People in a Hurry (2017) by Neil deGrasse Tyson is a collection of essays covering a variety of topics in astrophysics.

                            Physicists theorize that the universe originated with a Big Bang 14 billion years ago, when all matter that exists in the universe began as an extremely dense point and rapidly spread out. Matter and antimatter particles formed in the first millionth of a second from high-energy photons and annihilated upon contact with each other.

                            The universe cooled substantially moments after the explosion. Subatomic particles began forming heavier particles that eventually became protons and neutrons. Within one second of the Big Bang, the universe had expanded to several light-years in width. Soon after, the particles began to coalesce into atomic structures. About 380,000 years after the Big Bang, the universe filled with the light resulting from the prior interactions. Within a billion years, matter formed galaxies and stars, which seeded heavier elements throughout space when the stars exploded. From there, solar systems with planets formed. Billions of years later, life complex enough to develop intelligence evolved on Earth.</p>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                                                <h2>Overview Third</h2>
                        <p>Astrophysics for People in a Hurry (2017) by Neil deGrasse Tyson is a collection of essays covering a variety of topics in astrophysics.

                            Physicists theorize that the universe originated with a Big Bang 14 billion years ago, when all matter that exists in the universe began as an extremely dense point and rapidly spread out. Matter and antimatter particles formed in the first millionth of a second from high-energy photons and annihilated upon contact with each other.

                            The universe cooled substantially moments after the explosion. Subatomic particles began forming heavier particles that eventually became protons and neutrons. Within one second of the Big Bang, the universe had expanded to several light-years in width. Soon after, the particles began to coalesce into atomic structures. About 380,000 years after the Big Bang, the universe filled with the light resulting from the prior interactions. Within a billion years, matter formed galaxies and stars, which seeded heavier elements throughout space when the stars exploded. From there, solar systems with planets formed. Billions of years later, life complex enough to develop intelligence evolved on Earth.</p>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                                                <h2>Overview Fourth</h2>
                        <p>Astrophysics for People in a Hurry (2017) by Neil deGrasse Tyson is a collection of essays covering a variety of topics in astrophysics.

                            Physicists theorize that the universe originated with a Big Bang 14 billion years ago, when all matter that exists in the universe began as an extremely dense point and rapidly spread out. Matter and antimatter particles formed in the first millionth of a second from high-energy photons and annihilated upon contact with each other.

                            The universe cooled substantially moments after the explosion. Subatomic particles began forming heavier particles that eventually became protons and neutrons. Within one second of the Big Bang, the universe had expanded to several light-years in width. Soon after, the particles began to coalesce into atomic structures. About 380,000 years after the Big Bang, the universe filled with the light resulting from the prior interactions. Within a billion years, matter formed galaxies and stars, which seeded heavier elements throughout space when the stars exploded. From there, solar systems with planets formed. Billions of years later, life complex enough to develop intelligence evolved on Earth.</p>
                    </TabPanel>
                </Box>
            </div>
            <div className='PlayerOuter'>
                <AudioPlayers />
            </div>
        </>
    );
}