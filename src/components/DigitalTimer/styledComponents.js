import styled from 'styled-components'

export const MainContainer=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image:linear-gradient(to right,#ffffff,#cffcf1);
    background-size:cover;
    height:100vh;
`

export const Heading=styled.h1`
    color:#1e293b;
    font-weight: bold;
`

export const NumberCon=styled.div`
    background-image:url("https://assets.ccbp.in/frontend/react-js/digital-timer-elapsed-bg.png");
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding:5px;
    width:50px;
    height:20px;
`

export const Container=styled.div`
    display:flex;
    flex-direction: row;
    width:90%;
    @media screen and (max-width:576px) {
        flex-direction: column;
    }
    justify-content: space-around;
    align-items: center;
`

export const TimeCon=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image:url("https://assets.ccbp.in/frontend/react-js/digital-timer-elapsed-bg.png");
    background-size:cover;
    background-position:center;
    padding:10%;
`

export const Time=styled.p`
    color:#00d9f5;
    font-weight: bold;
    font-size:25px;
    margin:0px;
`

export const Status=styled.p`
    color:#0f172a;
    font-weight: bold;
    font-size:25px;
    margin:0px;
`
export const Con=styled.div`
    background-color:white;
    border-radius: 50%;
    margin:10px;
    padding:28%;
    display: flex;
    flex-direction: column;
    text-align:center;
    @media screen and (max-width:576px){
        margin:30px;
        padding:10px;
    }
`

export const Button=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`
export const TimerCon=styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    padding:20px;
`

export const StartContainer=styled.div`
    display:flex;
    flex-direction: row;
`

export const StartCon=styled.div`
    display:flex;
    flex-direction: row;
`

export const Play=styled.img`
    width:50px;
    @media screen and (max-width:576px){
        width:50%;
    }
`
export const Pause=styled.img`
    width:50px;
    @media screen and (max-width:576px){
        width:50%;
    }
`

export const Start=styled.p`
    color:#0f172a;
    font-weight: bold;
    font-size:25px;
`

export const ResetCon=styled.div`
    display:flex;
    flex-direction: row;
`

export const ResetImg=styled.img`
    width:50px;
    @media screen and (max-width:576px){
        width:50%;
    }
`
export const Reset=styled.p`
    color:#0f172a;
    font-weight: bold;
    font-size:25px;
`

export const Para=styled.p`
    color:#0f172a;
    font-size:20px;
    font-weight: bold;
`

export const LimitCon=styled.div`
    display:flex;
    flex-direction:row;
`
export const Minus=styled.button`
    background-color:transparent;
    border:none;
    cursor: pointer;
    font-size:25px;
`

export const Number=styled.p`
    color:#0f172a;
    font-weight: bold;
    font-size:20px;
`

export const Plus=styled.button`
    background-color:transparent;
    border:none;
    cursor: pointer;
    font-size:25px;
`

export const PlayButton=styled.button`
    background-color:transparent;
    border:none;
    cursor: pointer;
`

export const ResetButton=styled.button`
    background-color:transparent;
    border:none;
    cursor: pointer;
`