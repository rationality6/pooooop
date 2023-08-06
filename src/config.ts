import Phaser from "phaser";

export default {
  type: Phaser.AUTO,
  parent: "game",
  width: 470,
  height: 470,
  scale: {
    mode: Phaser.Scale.FIT,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
      gravity: { y: 200 },
    },
  },
  transparent: true,
};
