import Food from "./Food";
import Snake from "./Snake";
import ScorePanel from "./ScorePanel";

export default class GameControl {
  food: Food;
  snake: Snake;
  scorePanel: ScorePanel;

  constructor() {
    this.food = new Food();
    this.snake = new Snake();
    this.scorePanel = new ScorePanel();
  }

  init() {

  }
}