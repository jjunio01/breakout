$("#plataforma").draggable({axis: 'x', containment: '#container'});

var x = $("#bola").position().left;
var y = $("#bola").position().top;

var dY = 1;
var dX = 1;

var container = $("#container");
var bola = $("#bola");
var plataforma = $("#plataforma");
var blocos = $(".bloco");

var topoContainer = container.offset().top;
var baixoContainer = container.offset().top + container.height();
var esquerdaContainer = container.offset().left;
var direitaContainer = container.offset().left + container.width();

function movimentaBola(){
    
    var larguraBola  = bola.width();
    var alturaBola = bola.height();
    var esquerdaBola = bola.offset().left;
    var direitaBola = bola.offset().left + larguraBola;
    var baixoBola = bola.offset().top + alturaBola;
    var topoBola = bola.offset().top;
    var meioBolaX = esquerdaBola + larguraBola/2;
    var meioBolaY = topoBola + alturaBola/2;
    
    if (baixoBola == baixoContainer) {
        clearInterval(moviemnto);
    } else if (direitaBola == direitaContainer) {
        dX = -1;
    } else if (topoBola == topoContainer) {
        dY = 1;
    } else if( esquerdaBola == esquerdaContainer) {
        dX = 1;
    } else if ((baixoBola == $("#plataforma").offset().top) && (meioBolaX >= $("#plataforma").offset().left) && (meioBolaX <= $("#plataforma").offset().left + $("#plataforma").width())) {
        dY = -1;
    }

    for (var i = blocos.length - 1; i >= 0; i--) {
        var bloco = $(blocos[i]);
        var topoBloco = bloco.offset().top;
        var baixoBloco = bloco.offset().top + bloco.height();
        var esquerdaBloco = bloco.offset().left;
        var direitaBloco = bloco.offset().left + bloco.width();
        if ((topoBola == baixoBloco) && (meioBolaX >= esquerdaBloco) && (meioBolaX <= direitaBloco)) {
            dY = 1;
            bloco.remove();
        } else if ((direitaBola == esquerdaBloco) && (meioBolaY >= topoBloco) && (meioBolaY <= baixoBloco)) {
            dX = -1;
            bloco.remove();
        } else if((esquerdaBola == direitaBloco) && (meioBolaY >= topoBloco) && (meioBolaY <= baixoBloco)) {
            dX = 1;
            bloco.remove();
        } else if((baixoBola == topoBloco) && (meioBolaX >= esquerdaBloco) && (meioBolaX <= direitaBloco)) {
            dy = -1;
            bloco.remove();
        }
    }

    y += dY;
    x += dX;

    $('#bola').css("top", y);
    $('#bola').css("left", x);
}

function colorirPosicionarBlocos() {
    $('#bloco11').css({"left":"0%", "background-color":"#000000", "top":"0%"});
    $('#bloco12').css({"left":"10%", "background-color":"#512469", "top":"0%"});
    $('#bloco13').css({"left":"20%", "background-color":"#452135", "top":"0%"});
    $('#bloco14').css({"left":"30%", "background-color":"#154214", "top":"0%"});
    $('#bloco15').css({"left":"40%", "background-color":"#256134", "top":"0%"});
    $('#bloco16').css({"left":"50%", "background-color":"#154278", "top":"0%"});
    $('#bloco17').css({"left":"60%", "background-color":"#123695", "top":"0%"});
    $('#bloco18').css({"left":"70%", "background-color":"#778459", "top":"0%"});
    $('#bloco19').css({"left":"80%", "background-color":"#457865", "top":"0%"});
    $('#bloco110').css({"left":"90%", "background-color":"#258475", "top":"0%"});
    $('#bloco21').css({"left":"0%", "background-color":"#784569", "top":"5%"});
    $('#bloco22').css({"left":"10%", "background-color":"#985467", "top":"5%"});
    $('#bloco23').css({"left":"20%", "background-color":"#135248", "top":"5%"});
    $('#bloco24').css({"left":"30%", "background-color":"#487578", "top":"5%"});
    $('#bloco25').css({"left":"40%", "background-color":"#665985", "top":"5%"});
    $('#bloco26').css({"left":"50%", "background-color":"#235255", "top":"5%"});
    $('#bloco27').css({"left":"60%", "background-color":"#203500", "top":"5%"});
    $('#bloco28').css({"left":"70%", "background-color":"#021548", "top":"5%"});
    $('#bloco29').css({"left":"80%", "background-color":"#458545", "top":"5%"});
    $('#bloco210').css({"left":"90%", "background-color":"#521458", "top":"5%"});
    $('#bloco31').css({"left":"0%", "background-color":"#514201", "top":"10%"});
    $('#bloco32').css({"left":"10%", "background-color":"#421521", "top":"10%"});
    $('#bloco33').css({"left":"20%", "background-color":"#102154", "top":"10%"});
    $('#bloco34').css({"left":"30%", "background-color":"#021522", "top":"10%"});
    $('#bloco35').css({"left":"40%", "background-color":"#215365", "top":"10%"});
    $('#bloco36').css({"left":"50%", "background-color":"#124569", "top":"10%"});
    $('#bloco37').css({"left":"60%", "background-color":"#120320", "top":"10%"});
    $('#bloco38').css({"left":"70%", "background-color":"#784596", "top":"10%"});
    $('#bloco39').css({"left":"80%", "background-color":"#458784", "top":"10%"});
    $('#bloco310').css({"left":"90%", "background-color":"#965825", "top":"10%"});
}

var movimento = setInterval(movimentaBola, 10);

colorirPosicionarBlocos()