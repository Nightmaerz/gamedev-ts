// Init function to initialize the program
let init = function () {

    //create a little rocket.   
    let rocket = {
        xPos: 0,
        yPos: 0,
        image: 'rocket.png',
        render: function(){
            //1.create element
            let imgElement: HTMLImageElement = document.createElement('img');
            //2. add attributes
            imgElement.src = './assets/images/'+this.image;
            imgElement.className = 'rocket';
            // imgElement.style.left = this.xPos+'px';
            // imgElement.style.top = this.yPos+'px';
            // use transform for better performance.
            imgElement.style.transform = `translate(${this.xPos}px, ${this.yPos}px)`;
            //3. add it to the dom
            let container = document.getElementById('container');
            container.innerHTML = ''; //leave this and see what happens
            container.appendChild(imgElement);
        }
        //render function as an arrow function with a template literal
        // render: () => {
        //     let container = document.getElementById('container');
        //     container.innerHTML = `
        //         <img 
        //             class="rocket" 
        //             src="./assets/images/${rocket.image}" 
        //             style="left:${rocket.xPos}px; top:${rocket.yPos}px;"
        //         >`
        // }
    }
    
    //A function to move to specific coordinate
    let moveToPosition = (xPosition: number, yPosition: number) => {
        
        //save the starting position of the rocket
        var startingPoint = {
            xPos: rocket.xPos,
            yPos: rocket.yPos
        };

        //save the ending position of the rocket
        var endingPoint = {
            xPos: xPosition,
            yPos: yPosition
        }

        //set the new position of the rocket
        rocket.xPos = xPosition;
        rocket.yPos = yPosition;
        //what is the difference between to positions 
        let distanceTraveld: number = distance(startingPoint, endingPoint);
        return distanceTraveld;

    }

    //Function to calculate the distance between to points/positions
    let distance = (startingPoint: any, endingPoint: any): number => {
        //use the Pythagoras formula
        //a2 + b2 = c2
        //c2 = (xa - xb)2 + (ya - yb)2
        //c = sqr ((xa - xb)2 + (ya + yb)2)
        let a = startingPoint.xPos - endingPoint.xPos;
        let b = startingPoint.yPos - endingPoint.yPos;
        let c = Math.sqrt(a * a + b * b);
        return c;
    }
    
    //add a click handler to the document.
    window.addEventListener('click', handleClickEvent);

    //function to handle the click event.
    function handleClickEvent(e: Event) {
        console.log('yep');
        //cast the event into a MouseEvent en read the xPos en yPos of the Mouse
        let newPosX = (<MouseEvent>e).clientX;
        let newPosY = (<MouseEvent>e).clientY;
        console.log(newPosX);
        //call the moveToPosition method with the x and y coordinates of the mouse.
        moveToPosition(newPosX, newPosY);
        
        // //render the rocket to the new coordinates.
        rocket.render();
    }
    //render the rocket for the first time
    rocket.render();

};

//when window is loaded call the init function
window.addEventListener('load', init);