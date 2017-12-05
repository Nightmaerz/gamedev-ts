/**
* Game based on javascript30 series made by Wes Bos
*/
let app: any;

(function () {
    /**
     * Run after dom is ready
     */
    let init = function () {
        app = new Game();
    };

    window.addEventListener('load', init);
})();