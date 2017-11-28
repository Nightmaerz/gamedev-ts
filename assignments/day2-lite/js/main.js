function init() {
    var container = document.getElementById('container');
}
window.addEventListener('load', init);
function createImgElement(src, className) {
    if (src === void 0) { src = './assets/images/plane.svg'; }
    if (className === void 0) { className = 'plane'; }
    var img = document.createElement('img');
    img.src = src;
    img.className = className;
    return img;
}
function createImgElementWithTemplateString(src, className) {
    if (src === void 0) { src = './assets/images/plane.svg'; }
    if (className === void 0) { className = 'plane'; }
    return "<img src=\"" + src + "\" class=\"" + className + "\" alt=\"new picture\" >";
}
function assignment3() {
}
function assignment4() {
    var topGoalScoresWC = [
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
    for (var _i = 0, topGoalScoresWC_1 = topGoalScoresWC; _i < topGoalScoresWC_1.length; _i++) {
        var player = topGoalScoresWC_1[_i];
        console.log('assignment 2.4.1', player.firstName);
    }
    topGoalScoresWC.map(function (player) {
        return console.log('assignment 2.4.2', "Firstname: " + player.firstName + " Lastname: " + player.lastname);
    });
    var topScores = topGoalScoresWC.filter(function (player) { return player.goals > 13; });
    topScores.map(function (player) {
        console.log('assignment 2.4.3', player.firstName);
    });
}
//# sourceMappingURL=main.js.map