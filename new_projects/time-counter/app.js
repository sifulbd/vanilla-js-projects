class Timer{
    constructor(duration, buttonStart, pauseButton, callbacks){
        this.duration = duration;
        this.buttonStart = buttonStart;
        this.pauseButton = pauseButton;
        if(callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
        this.buttonStart.addEventListener('click', this.start);  
        this.pauseButton.addEventListener('click', this.pause);  
    }
    start = () => {
        if(this.onStart) {
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.interval = setInterval(this.tick, 10);
    }
    pause = () => {
        clearInterval(this.interval);
    }
    tick = () => {
        if(this.timeRemaining <= 0) {
            this.pause();
            if(this.onComplete) {
                this.onComplete();
            } 
        }else {
            this.timeRemaining = this.timeRemaining - 0.01;
            if(this.onTick) {
                this.onTick(this.timeRemaining);
            }        
        }
    }
    get timeRemaining() {
        return parseFloat(this.duration.value);
    }
    set timeRemaining(time) {
        this.duration.value = time.toFixed(2)
    }
}

const duration = document.querySelector('#duration');
const buttonStart = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let currentOffset = 0;
let timeDuration;
const timer = new Timer(duration, buttonStart, pauseButton,{
    onStart(totalDuraion) {
        timeDuration = totalDuraion;
    },
    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / timeDuration - perimeter);
        // currentOffset = currentOffset - 1;
    },
    onComplete() {
        console.log('timer completed')
    }
});