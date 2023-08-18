import Phaser from "phaser";

export default {
  type: Phaser.AUTO,
  parent: "game",
  width: 470,
  height: 470,
  scale: {
    mode: Phaser.Scale.FIT,
    max: {
      width: 800,
      height: 500,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  transparent: true,
};
