class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {}

  makeMove($square) {
    let pos = $square.attr("data").split(",");
    let posNum1 = Number(pos[0]);
    let posNum2 = Number(pos[1]);
    let mark = this.game.currentPlayer;
    let posArr = [posNum1,posNum2];

    if (this.game.board.isEmptyPos(posArr)){
      $square.append(mark);
      this.game.playMove(posArr);

      if (this.game.isOver()) {
        alert(`Congratulations ${this.game.currentPlayer}!`);
      }

    } else {
      alert("Invalid move");
    }
  }

  setupBoard() {
    let $ul = $("<ul></ul>");

    for (let i = 0; i < 9; i++) {
      let $li = $("<li></li>");

      $li.hover(
        function(){
          $(this).css("background-color", "yellow");
        }, function(){
          $(this).css("background-color", "grey");
        });

      $li.click(() => {
        this.makeMove($li);
      });

      let col = i % 3;
      let row = Math.floor(i / 3);

      $li.attr("data",[col,row]);

      $ul.append($li);
    }

    this.$el.append($ul);
  }
}

module.exports = View;
