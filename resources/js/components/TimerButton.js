import React from 'react';
import ReactDOM from 'react-dom';

class TimerButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        var min = 1;
        var sec = 2;

        document.getElementById("timer").innerText = min.toString() + ":0" + sec.toString();
        let timerId = setInterval(function(){
            --sec;
            (sec < 10)
                ?document.getElementById("timer").innerText = min.toString() + ":0" + sec.toString()
                :document.getElementById("timer").innerText = min.toString() + ":" + sec.toString();
            if(sec === 0 && min !== 0){
                sec = 60;
                --min;
            }
        }, 1000);

        if(min === 0){
            setTimeout(() => { clearInterval(timerId);}, sec * 1000);
        }else{
            setTimeout(() => { clearInterval(timerId);}, min * 60 * 1000 + sec * 1000);
        }
    }

    render() {
        return (
            <button id="timer" className="btn btn-secondary" onClick={this.handleClick}>Timer</button>
        );
    }
}


export default TimerButton;
