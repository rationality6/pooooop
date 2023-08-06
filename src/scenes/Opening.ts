import Phaser from "phaser";

class OpeningScene extends Phaser.Scene {
  constructor() {
    super("OpeningScene");
  }

  get gemeHeight() {
    return this.game.config.height as number;
  }

  preload() {
    this.load.image("background", "assets/background.webp");
    this.load.image("poop", "assets/poop.png");

    this.poops = this.physics.add.group({
      collideWorldBounds: true,
    });
  }

  random_poop_sound() {
    let poop_sounds = ["poop_sound0", "poop_sound1"];
  }

  create() {
    let background = this.add.image(0, 0, "background").setOrigin(0, 0);

    this.input.on("pointerdown", () => {
      new Audio("assets/sounds/poop_sound0.mp3").play();
      new Audio("assets/sounds/poop_sound1.mp3").play();

      const random_poops = Math.round(Math.random() * 2);
      this.createPoop(random_poops);
    });
  }
  createPoop(count: number) {
    [...Array(count)].forEach((i) => {
      let randomXposision = Math.round(Math.random() * 20) + 100;
      let poop = this.physics.add.sprite(randomXposision, 400, "poop");
      poop.displayWidth = 60;
      poop.displayHeight = 60;

      poop.body.velocity.x = Math.round(Math.random() * 5) * 200;
      poop.body.velocity.y = 400;

      poop.setBounce(0.7, 0.7);
      poop.setCollideWorldBounds(true);
      setTimeout(() => {
        poop.destroy();
      }, 2000);

      // this.poops.add(poop);
      // this.physics.add.collider(poop, this.poops, () => {
      //   new Audio("./assets/sounds/hit.mp3").play();
      // });
    });
  }
}

export default OpeningScene;
