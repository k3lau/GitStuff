var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var result = sentiment.analyze('Cats are so stupid. Get rid of them.');
//console.dir(result);    // Score: -2, Comparative: -0.666

var text = 'Cats are so stupid. Get rid of them';
var strt = 0;
var end = 0;
var result = [];
for (var i = 0; i <= text.length; i++) {
    if (text[i] === ' ') {
        end = i
        //console.dir(end);

        var word = text.substring(strt, end);
        //Check for non letter included in the word
        var y = word.length;
        while (1==1) {
            if (y <= 0) {
                break;
            }
            else {
                var str = word.charAt(y);
                if (str.toLowerCase() !== str.toUpperCase()) {
                    break;
                }
                else {
                    y = y - 1;
                    end = end - 1;
                    //console.dir(end);
                }
            }
        }
        score = sentiment.analyze(word).score;
        //console.dir(word + ' ' + score + ' ' + strt);
        result.push({strt,end,score})
        strt = i + 1;
        //console.dir(result);
    }
}
