var jsonData = [];
$(document).ready(function() {
    $.getJSON("./civicstest.json", function(json) {
        json.forEach(item => {
            jsonData.push(item)
        });
    });
    $('.answerBtn').hide();
});
var questionIndex;
$('.questionBtn').click(function printQuestion(){
    $('.answerList li').remove()
    var randomNum = Math.floor((Math.random()*100)+1);
    questionIndex = randomNum;
    $('.civicstest').html(jsonData[randomNum].question);
    $('.answerBtn').show();
    $('.questionBtn').hide();
});

$('.answerBtn').click(function printAnswer(){
    for (let item of jsonData[questionIndex].answers){
        $('<li />', {html: item.answer}).appendTo('.answerList')
    }
    $('.questionBtn').show();
    $('.answerBtn').hide();
});