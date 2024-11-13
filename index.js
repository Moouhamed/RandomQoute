var qoutes=['"Do not take life too seriously. You will not get out alive." <br> --Oscar wilde' , '"Be yourself; everyone else is already taken." <br> -- Oscar Wilde' ,' " Iam selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best." <br> --Marilyn Monroe' , '"So many books, so little time." <br> --Frank Zappa' , '"Two things are infinite: the universe and human stupidity; and Iam not sure about the universe." <br> --Albert Einstein' , '"A room without books is like a body without a soul." <br> --Marcus Tullius Cicero' , '"Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind." <br> --Bernard M. Baruch' , '"You only live once, but if you do it right, once is enough." <br> --Mae West' , '"Be the change that you wish to see in the world." <br> --Mahatma Gandh' , '"In three words I can sum up everything Ive learned about life: it goes on." <br> --Robert Frost' , '"To live is the rarest thing in the world. Most people exist, that is all." <br> --Oscar Wilde' , '"Live as if you were to die tomorrow. Learn as if you were to live forever." <br> --Mahatma Gandhi'];

var prev=0;
function getQoute()
{
    var random=Math.floor((Math.random()*qoutes.length));
    while(prev===random){
         random=Math.floor((Math.random()*qoutes.length));
    }
    var randomCoute=qoutes[random];

    console.log(randomCoute);
    document.getElementById("para").innerHTML=randomCoute;
    prev=random;
}






