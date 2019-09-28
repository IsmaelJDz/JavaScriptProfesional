class AutoPause {
  constructor() {
    this.threshold = 0.25;
    this.handleIntersection = this.handleIntersection.bind(this);
  }

  run(player) {
    this.player = player;

    const oberver = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold
    });

    oberver.observe(this.player.media);
  }

  handleIntersection(entries) {
    const entry = entries[0];

    const isVisible = entry.intersectionRatio >= this.threshold;
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

export default AutoPause;
