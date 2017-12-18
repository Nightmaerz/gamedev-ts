/*
* Game is based on
* https://github.com/wesbos/JavaScript30/tree/master/30%20-%20Whack%20A%20Mole
*/

//this is my constant where game and events meet
let app : any;

(function ()
{
    /**
     * Run after dom is ready
     */
    let init = function ()
    {
        app = new Game();
    };

    window.addEventListener('load', init);
})();