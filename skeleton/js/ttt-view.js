class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    let $ul = $("<ul></ul>");

    for (let i = 0; i < 9; i++) {
      $ul.append($("<li></li>"));
    }

    this.$el.append($ul);
    // return "board";
  }
}

module.exports = View;
