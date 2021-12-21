import Food from "./Food";
import Snake from "./Snake";
import ScorePanel from "./ScorePanel";

export default class GameControl {
  food: Food;
  snake: Snake;
  scorePanel: ScorePanel;

  direction: string = '';
  isLive: boolean = true;

  constructor() {
    this.food = new Food();
    this.snake = new Snake();
    this.scorePanel = new ScorePanel();

    this.init();
    this.run();
  }

  init() {
    document.addEventListener('keydown', this.keydownHandler.bind(this))
  }

  keydownHandler(event: KeyboardEvent) {
    this.direction = event.key;
  }

  run() {
    let x = this.snake.X;
    let y = this.snake.Y;

    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        y -= 10
        break;
      case 'ArrowDown':
      case 'Down':
        y += 10
        break;
      case 'ArrowLeft':
      case 'Left':
        x -= 10
        break;
      case 'ArrowRight':
      case 'Right':
        x += 10
        break;
      default:
        break;
    }

    this.snake.X = x;
    this.snake.Y = y;

    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 10);
  }
}