(function () {
    "use strict";
var win = true;

$('document').ready(function () {
    $("#start").click(
        function () {
            $("#status").text("Good Luck.");
            $("div .boundary").removeClass("youlose");
            startGame();

        });
});

function startGame() {
    win = true;
   
    $(".boundary").mouseover(
        function () {
            loose();
        });

    $("#end").mouseover(                               //we can make it on click
        function () {
            if (win) {
                $("#status").text("You WIN! : Click S to Play Again");
                endGame();
            }
        });

    $(!"#maze").mousemove(
        function () {
            loose();
        });
    $("#end").mouseout(
        function () {
            loose();
        });       

}

function loose() {
    win = false;

    // $("#boundary1").addClass("youlose");                //to individually color the touched boundary with id
    
   $("div .boundary").addClass("youlose");
    $("#status").text("You LOSE! : Click 'S' to Retry ");
}

function endGame() {
    $("div .boundary").removeClass("youlose");
    $('.boundary').unbind('hover');
    $("#maze").unbind('mouseleave');
}
})();
