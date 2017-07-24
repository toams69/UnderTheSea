import 'pixi';
import 'p2';
import 'phaser';
import boot from 'states/boot';
import play from 'states/play';

import pkg from '../package.json';

// This is the entry point of your game.

const config = {
  width: window.innerWidth,
  height: window.innerHeight,
  renderer: Phaser.AUTO,
  parent: '',
  transparent: false,
  antialias: false,
  physicsConfig: { arcade: true },
};

var game = new Phaser.Game(config);
game.state.add('boot', boot);
//game.state.add('login', require('./states/login'));
game.state.add('play', play);
game.state.start('boot');
