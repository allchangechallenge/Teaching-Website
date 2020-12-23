/*
function unfold() {
    var newDiv = document.createElement("div") ;
    var text = document.createTextNode("Select elements.") ;
    newDiv.appendChild(text) ;

    var element = document.getElementById("c1") ;
    element.appendChild(newDiv) ;
}

function turnBack() {
    
} */
var flag = 0 ;

function create() {
    if ( flag == 0 ) {
        var newP = document.createElement("p") ;
        newP.setAttribute("id", "newP1") ;
        var text = document.createTextNode("This is red.\n") ;
        newP.appendChild(text) ;
    
        var element = document.getElementById("cont1") ;
        element.appendChild(newP)
    } flag ++ ;
    if ( flag == 2 ) {
        var element = document.getElementById("newP1") ;
        element.style.color = "red" ;
        element.style.fontSize = "200%" ;
        element.style.fontFamily = "monospace" ;
    }
    if ( flag == 3 ) {
        var element = document.getElementById("hide") ;
        element.style.display = "block";
    }
}

function show() {
    document.getElementById("cont2").style.display = "block" ;
}

function submit() {
    var name = document.form.name.value ;
    var pw = document.form.pw.value ;
    var select = document.getElementById("radio").num ;
    var date = document.form3.date.value ;

    var n ;
    if ( pw == "1234" ) {
        alert( name + "你好\n今天是 " + date) ;
        for ( var i = 0 ; i < select.length ; i ++ ) {
            if ( select[ i ].checked) n = i ;
        }
        if ( n == 0 ) alert("本日笑話 :\n有一天牙籤A跟牙籤B在馬路上相遇，\n突然一隻刺蝟快速的經過，\n牙籤A就對牙籤B說 :\n乾，我的公車過了...") ;
        if ( n == 1 ) alert("本日笑話 :\n有一天小明去圖書館\n小明：我要一碗牛肉麵\n櫃檯：先生 這裡是圖書館 . . .\n小明：喔喔好 （氣音）我要一碗牛肉麵") ;
        if ( n == 2 ) alert("本日笑話 :\n哈利波特裡面誰最有主見？\nA : 佛地魔，因為他不會被牽著鼻子走") ;
    }
    else alert("Wrong password\n") ;          
}

function ani() {
    document.getElementById("cont3").style.display = "block" ;
    var element = document.getElementById("snow") ;
    var elem2 = document.getElementById("snow2") ;
    var elem3 = document.getElementById("snow3") ;
    var id = setInterval( frame, 20 ) ;
    var pos = 0 ;
    var d = 1 ;
    function frame() {
        pos += d ;
        element.style.top = pos + "px" ;
        element.style.left = pos + "px" ;
        elem2.style.top = pos + "px" ;
        elem2.style.left = ( window.innerWidth - pos * 1.5 ) + "px";
        elem3.style.top = ( 0.8 * window.innerHeight - pos ) + "px" ;
        
        console.log( elem2.style.right ) ;
        if ( pos == 700 ) d = -d ;
        if ( pos == 0 ) d = -d ;
        
    }
}