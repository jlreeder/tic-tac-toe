class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {}

  makeMove($square) {
    let pos = $square.attr("data");
    $square.append("X");
    this.game.playMove(pos);
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

      $li.click( function() {
        $(this).append($li.attr("data"));
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
