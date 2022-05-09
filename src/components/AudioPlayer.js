import { useState , useRef , useEffect} from "react"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayerIcon from '../assets/images/AudioPlayer.png'
import AudiodOne from '../assets/Audio/AudioOne.mp3'
import AudiodTwo from '../assets/Audio/AudioTwo.mp3'
import AudiodThree from '../assets/Audio/AudioThree.mp3'
import PlayListIcon from '../assets/images/PlayList-icon.png'


export default function AudioPlayers() {
    const [currentAudio, setcurrentAudio] = useState('')
    const [lastCTime, setLastCTime] = useState({})
    const [audioPlayerList, setAudioPlayerList] = useState([
        {
            id:1,
            Label: 'Key Insights 1',
            path: AudiodTwo,
            time:0
        },
        {
            id:2,
            Label: 'What to see, when...',
            path: AudiodOne,
            time:0
        },
        {
            id:3,
            Label: 'Some other points...',
            path: AudiodThree,
            time:0
        }
    ])

    const buttonRef = useRef(null);

    const HandleAudio = (val) => {
        
       
        const list = audioPlayerList.map((item, j) => {
                if (item.id === currentAudio.id) {
                    if(buttonRef.current.audio.current.duration == item.time){
                        item.time = 0;
                    }else{
                        item.time = buttonRef.current.audio.current.currentTime;     
                    }
                   
                   return item
                } else {
                  return item;
                }
            })
        setAudioPlayerList(list)
        setcurrentAudio(val)
    }

    const playSong = () =>{
        console.log('buttonRef',buttonRef.current.audio.current.currentTime)
    }

    const pauseAudio = () =>{
        console.log('pause',buttonRef.current.audio.current.currentTime)
       // buttonRef.current.currentTime = "4.4";
       const list = audioPlayerList.map((item, j) => {
                if (item.id === currentAudio.id) {
                   item.time = buttonRef.current.audio.current.currentTime;
                   return item
                } else {
                  return item;
                }
            })
        setAudioPlayerList(list)
    }

    const start = () => {
        buttonRef.current.audio.current.currentTime=currentAudio.time
    }
    
    const end = () => {        

        const list = audioPlayerList.map((item, j) => {
                if (item.id === currentAudio.id) {
                   item.time = 0;
                   return item
                } else {
                  return item;
                }
            })
        setAudioPlayerList(list)
    }

      useEffect(() => {    

      },[currentAudio]);

    return (
        <>
            <h3>Audiobook</h3>
            <img src={AudioPlayerIcon} srcSet={AudioPlayerIcon} alt="" />
            <div className="AudioPlayerOuter">
           
               <span className="TitleLabel">
                    <span>{currentAudio && currentAudio.Label ? currentAudio.Label :'Overview'}</span>
                </span>
               
          
                <AudioPlayer
                    autoPlay
                    src={currentAudio.path}
                    onPlay={playSong}
                    className="AudioPlayerCustom"
                    ref={buttonRef}
                   
                    onPause={pauseAudio}
                   
                    onLoadedMetaData={start}
                    onEnded={end}
                    
                /></div>
                <span className="AudioListTitle">Table of Contents</span>
            <ul type="none" className="PlayList">
                {audioPlayerList.map((item, i) => {
                    return <li onClick={() => HandleAudio(item)} key={item.id} className={item.id==currentAudio.id?'active':''}><span className="AudioCount">{i + 1}</span>{item.Label}<span><img src={PlayListIcon} srcSet={PlayListIcon} alt="PlayListIcon" /></span></li>
                })}
            </ul>

        </>
    )
}