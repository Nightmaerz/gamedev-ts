class Game {
    
constructor() {
    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => key.addEventListener('transitionend', this.removeTransition));
    window.addEventListener('keydown', this.playSound);
}

    private removeTransition(e: TransitionEvent) {
    if (e.propertyName !== 'transform') return;
    (<HTMLElement>e.target).classList.remove('playing');
}

    private playSound(e: KeyboardEvent) {
    const audio: HTMLAudioElement = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}
}
