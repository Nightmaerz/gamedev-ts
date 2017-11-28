function init() {
    const container = document.getElementById('container');
    //uncomment the function calls to see the results of the assignments

    //assignment 1 - call
    // container.appendChild(createImgElement());
    // container.appendChild(createImgElement('./assets/images/windsock.png', 'windsock')); //locatie van image en className van image.

    //assignment 2 - call
    // container.innerHTML = createImgElementWithTemplateString();
    // container.innerHTML = createImgElementWithTemplateString('./assets/images/windsock.png', 'windsock');    

    //assignment 3 - call
    //assignment3();

    //assignment 4 - call
    //assignment4();
}

window.addEventListener('load', init);

//assignment 1 - default parameters
function createImgElement(src: string = './assets/images/plane.svg', className: string = 'plane'): HTMLImageElement {
    let img = document.createElement('img');
    img.src = src;
    img.className = className;
    return img;
}

//assignment 2 - template strings
function createImgElementWithTemplateString(src: string = './assets/images/plane.svg', className: string = 'plane'): string {
    return `<img src="${src}" class="${className}" alt="new picture" >`;
}

//assignment 3 - let, const and var
function assignment3() {
    //this will give an error
    // let newAmount: number = amount + 2;
    // let amount:number = 0;
    // console.log(newAmount);

    //this will not give an error
    // let newAmount: number = amount + 2;
    // var amount:number = 0;
    // console.log(newAmount);
}

//assignment 4 - loops, https://en.wikipedia.org/wiki/FIFA_World_Cup_top_goalscorers
function assignment4() {
    const topGoalScoresWC = [
        { firstName: 'Miroslav', lastname: 'Klose', team: 'Germany', goals: 16, matches: 24, tournaments: [2002, 2006, 2010, 2014] },
        { firstName: 'Ronaldo', lastname: '', team: 'Brasil', goals: 15, matches: 19, tournaments: [1998, 2002, 2006] },
        { firstName: 'Gerd', lastname: 'Muller', team: 'Germany', goals: 16, matches: 24, tournaments: [2002, 2006, 2010, 2014] },
        { firstName: 'Just', lastname: 'Fontaine', team: 'France', goals: 14, matches: 13, tournaments: [1970, 1974] },
        { firstName: 'Pele', lastname: '', team: 'Brasil', goals: 12, matches: 14, tournaments: [1958, 1962, 1966, 1970] },
        { firstName: 'Sandor', lastname: 'Kocsis', team: 'Hungary', goals: 11, matches: 5, tournaments: [1954] },
        { firstName: 'Jurgen', lastname: 'Klinsmann', team: 'Germany', goals: 11, matches: 17, tournaments: [1990, 1994, 1998] },
        { firstName: 'Helmut', lastname: 'Rahn', team: 'Germany', goals: 10, matches: 10, tournaments: [1954, 1958] },
        { firstName: 'Gary', lastname: 'Lineker', team: 'England', goals: 10, matches: 12, tournaments: [1986, 1990] },
        { firstName: 'Gabriel', lastname: 'Batistuta', team: 'Argentina', goals: 10, matches: 12, tournaments: [1994, 1998, 2002] },
    ];

    //4.1 example of for...of
    for (const player of topGoalScoresWC) {
        console.log('assignment 2.4.1', player.firstName);
    }

    //4.2 combined firstname and lastname
    topGoalScoresWC.map((player)=>
        console.log('assignment 2.4.2', `Firstname: ${player.firstName} Lastname: ${player.lastname}`)
    );

    //4.3 players with goals more than 13
    //https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209
    const topScores = topGoalScoresWC.filter((player)=> player.goals > 13);  //do not use {} otherwise use return type.
    topScores.map((player)=>{
        console.log('assignment 2.4.3', player.firstName);
    });
}
