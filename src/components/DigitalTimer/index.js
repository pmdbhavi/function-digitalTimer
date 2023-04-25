import {MainContainer,Heading,Container,Pause,Button,TimerCon,Time,TimeCon,Con,NumberCon,PlayButton,ResetButton,Status,StartContainer,StartCon,Play,Start,ResetCon,ResetImg,Reset,Para,LimitCon,Minus,Plus,Number} from './styledComponents'
import {useState,useEffect} from 'react'
const DigitalTimer=()=>{
    const [minutes,setMinutes]=useState(25)
    const [seconds,setSeconds]=useState(0)
    const [play,setPlay]=useState(false)

    const onReset=()=>{
        setMinutes(25)
        setSeconds(0)
        setPlay(false)
    }
    
    const onIncrement=()=>{
        if(!play){
            setMinutes(prevState=>prevState+1)
        }
    }

    const onDecrement=()=>{
        if(!play && minutes>1){
            setMinutes(prevState=>prevState-1)
        }
    }

    const getIncrement=()=>{
        const isTimerCompleted=minutes*60===seconds
        if(isTimerCompleted){
            setPlay(false)
        }else{
            setSeconds(prevState=>prevState+1)
        }
    }

    useEffect(()=>{
        if(play){
            const intervalId=setInterval(getIncrement,1000)

        return ()=>{
            clearInterval(intervalId)
        }
    }
    })

    const onStartOrPause=()=>{
        const isTimerCompleted=minutes*60===seconds
        if(isTimerCompleted){
            setSeconds(0)
        }
        setPlay(prevState=>!prevState)
    }

    const getStringifiedTime=()=>{
        const totalRemainingSeconds=minutes*60-seconds
        const min=Math.floor(totalRemainingSeconds/60)
        const sec=Math.floor(totalRemainingSeconds%60)
        const stringifiedMin=min>9 ? min:`0${min}`
        const stringifiedSec=sec>9 ? sec:`0${sec}`
        return `${stringifiedMin}:${stringifiedSec}`
    }

    
    return(
        <MainContainer>
            <Heading>Digital Timer</Heading>
            <Container>
                <TimeCon>
                    <Con>
                        <Time>{getStringifiedTime()}</Time>
                        <Status>{play?"Running":"Paused"}</Status>
                    </Con>
                </TimeCon>
                <TimerCon>
                    <StartContainer>
                        <StartCon>
                            <Button>
                                <PlayButton type="button" onClick={onStartOrPause}>
                                    {play ? 
                                    <Play src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png" alt="play"/>:
                                    <Pause src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png" alt="pause"/>}
                                </PlayButton>
                            </Button>
                            <Start>{play?"Pause":"Start"}</Start>
                        </StartCon>
                        <ResetCon>
                            <ResetButton type="button" onClick={onReset} >
                                <ResetImg src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png" alt="reset"/>
                            </ResetButton>
                            <Reset>Reset</Reset>
                        </ResetCon>
                    </StartContainer>
                    <Para>Set Timer limit</Para>
                    <LimitCon>
                        <Minus type="button" onClick={onDecrement}>-</Minus>
                        <NumberCon>
                            <Number>{minutes}</Number>
                        </NumberCon>
                        <Plus type="button" onClick={onIncrement}>+</Plus>
                    </LimitCon>
                </TimerCon>
            </Container>
        </MainContainer>
    )
}

export default DigitalTimer