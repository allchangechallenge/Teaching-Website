function main() {
    var element = document.getElementById("12/17") ;
    element.innerHTML = "Hello" ;
    element.style.color = "red" ;
    element.style.fontFamily = "monospace" ;
}

//alert("Hello") ;

var flag = 0 ;
function button() {
    //document.getElementById("12/17").innerHTML = "Hello again." ;
    flag = 1 - flag ;
    var element = document.getElementById("light") ;
    if ( flag == 1 ) element.src = "images/temp2.jpg" ;
    if ( flag == 0 ) element.src = "images/temp1.jpg" ;

}

function greet() {
    var name = document.getElementById("name").value ;
    alert("Hi " + name) ; 
    var pw = "1234" ;
    var pw_elem = document.form.pw.value ;
    if ( pw_elem == pw ) {
        alert( "correct" ) ;
    } else alert( "Wrong password." ) ;
    
    var select = document.radio.num ;
    var player = select.value ;
    player -- ;
    //console.log( select ) ;
    //console.log( ans ) ;

    var game = [ "scissor", "stone", "paper" ] ;
    var com = Math.floor( Math.random() * 3 ) ;
    while ( com == 3 ) com = Math.floor( Math.random() * 3 ) ;

    var dif = player - com ;

    if ( dif == 1 || dif == -2 ) alert( "Computer : " + game[ com ] + "\nPlayer wins") ;
    else if ( dif == -1 || dif == 2 ) alert( "Computer : " + game[ com ] + "\nComputer wins" ) ;
    else alert( "Computer : " + game[ com ] + "\nTie" ) ;


    /*
    if ( ( player - com == 2 ) ) alert( "Computer : " + game[ com ] + "\nPlayer wins") ;
    else if ( ( com - player ) == 2 ) alert( "Computer : " + game[ com ] + "\nComputer wins" ) ;
    else alert( "Computer : " + game[ com ] + "\nTie" ) ; */


}

