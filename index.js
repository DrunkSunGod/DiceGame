var random = Math.random() ;
random = random*6
var n = Math.floor( random ) + 1 ;
var diceOneRandom = "dice" + n + ".png" ;
// alert(diceOneRandom) ;
document.querySelector("#diceone").src = diceOneRandom ;
var random2 = Math.random() ;
random2 = random2 * 6 ;
var n2 = Math.floor( random2 ) + 1 ;
var diceTwoRandom = "dice" + n2 + ".png" ;
// alert(diceTwoRandom) ;
document.querySelector("#dicetwo").src = diceTwoRandom ;
if( n2 > n ){
    document.querySelector( "h1" ).innerHTML = " Player 2 Wins!" ;
}
else if( n2 == n ){
    document.querySelector( "h1" ).innerHTML = " Its a Draw" ;
}
else{
    document.querySelector( "h1" ).innerHTML = " Player 1 Wins!" ;
}

