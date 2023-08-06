import Phaser from "phaser";

class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  get gemeHeight() {
    return this.game.config.height as number;
  }

  preload() {
    this.load.image("ground", "assets/ground.png");

    this.load.image("lee", "assets/lee_final.png");
  }


  create() {
    this.add.tileSprite(0, this.gemeHeight, 1000, 26, "ground").setOrigin(0, 3);
  }
}

export default GameScene