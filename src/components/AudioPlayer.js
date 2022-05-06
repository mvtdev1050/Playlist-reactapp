import { useState } from "react"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayerIcon from '../assets/images/AudioPlayer.png'
import AudiodOne from '../assets/Audio/AudioOne.mp3'
import AudiodTwo from '../assets/Audio/AudioTwo.mp3'
import AudiodThree from '../assets/Audio/AudioThree.mp3'
import PlayListIcon from '../assets/images/PlayList-icon.png'


export default function AudioPlayers() {
    const [currentAudio, setcurrentAudio] = useState('')
    console.log('current -=', currentAudio)
    const AudioPlayerList = [
        {
            Label: 'Key Insights 1',
            path: AudiodTwo
        },
        {
            Label: 'What to see, when...',
            path: AudiodOne
        },
        {
            Label: 'Some other points...',
            path: AudiodThree
        }
    ]
    const HandleAudio = (val) => {
        setcurrentAudio(val)
    }
    return (
        <>
            <h3>Audiobook</h3>
            <img src={AudioPlayerIcon} srcSet={AudioPlayerIcon} alt="" />
            <div className="AudioPlayerOuter">
                <AudioPlayer
                    autoPlay
                    src={currentAudio}
                    onPlay={e => console.log("onPlay")}
                    className="AudioPlayerCustom"
                /></div>
                <span className="AudioListTitle">Table of Contents</span>
            <ul type="none" className="PlayList">
                {AudioPlayerList.map((item, i) => {
                    return <li onClick={() => HandleAudio(item.path)}><span className="AudioCount">{i + 1}</span>{item.Label}<span><img src={PlayListIcon} srcSet={PlayListIcon} alt="PlayListIcon" /></span></li>
                })}
            </ul>

        </>
    )
}