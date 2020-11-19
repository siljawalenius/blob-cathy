class Blobbo{
    constructor (){
        // lets set up the blobbo 
        this.numOfPoints = 500
        this.time = 0
    }

    wave(num, freq, amp, speed){
        // freq is the frequency, amp is the height of each wave, TWO_PI ensures we have a complete wave each time 
        return amp * sin(freq * TWO_PI * num / this.numOfPoints + this.time * speed)
    }




    draw() {
        // lets draw the blob

        noStroke()
        // strokeWeight(4)
        fill("#91fc9e")

        beginShape()
        for(let num = 0; num < this.numOfPoints; num++){

            let angle = TWO_PI * num / this.numOfPoints
            let h = this.wave(num, 7, 10, 1) 
                  + this.wave(num, 3, 20, 3) 
                  + this.wave(num, 5, 9, 4 ) 
                  + this.wave(num, 5, 15, -1)
            // superHi wave: (num, 3, 20, 1), (num, 7, 15, 3), (num, 9,5,0), (num, 13, 2, -5)
            // h changes the distance from the middle of the circle to each point
            let radius = 250 + h

            let x = (windowWidth/2) + radius*cos(angle)
            let y = (windowHeight/2) + radius*sin(angle)
            vertex(x,y)
        }
        endShape()

        this.time = this.time + 0.02
    }
}