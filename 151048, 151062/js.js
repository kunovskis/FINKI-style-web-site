var app=angular.module('single-page-app',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'home.html'
        })
        .when('/javas',{
            templateUrl: 'javas.html'
        })
        .when('/php',{
            templateUrl: 'php.html'
        })
        .when('/prijava',{
            templateUrl: 'prijava.html'
        })
        .when('/pusteno',{
            templateUrl: 'pusteno.html',
            controller: 'ctrl'
        })
});
app.controller('cfgController',function($scope, $location, $anchorScroll){

    $scope.scrollTo = function(id) {
        var old = $location.hash();
        $location.hash(id);
        $anchorScroll();
        $location.hash(old);
    }
});


document.getElementById("ss1").onmouseover = function() {mouseOver1()};
document.getElementById("ss1").onmouseout = function() {mouseOut1()};
document.getElementById("p1").onmouseover = function() {mouseOver1()};
document.getElementById("p1").onmouseout = function() {mouseOut1()};

function mouseOver1() {
    document.getElementById("p1").style.display = "block";
}

function mouseOut1() {
    document.getElementById("p1").style.display = "none";
}

document.getElementById("ss2").onmouseover = function() {mouseOver2()};
document.getElementById("ss2").onmouseout = function() {mouseOut2()};
document.getElementById("p2").onmouseover = function() {mouseOver2()};
document.getElementById("p2").onmouseout = function() {mouseOut2()};

function mouseOver2() {
    document.getElementById("p2").style.display = "block";
}

function mouseOut2() {
    document.getElementById("p2").style.display = "none";
}

document.getElementById("ss3").onmouseover = function() {mouseOver3()};
document.getElementById("ss3").onmouseout = function() {mouseOut3()};
document.getElementById("p3").onmouseover = function() {mouseOver3()};
document.getElementById("p3").onmouseout = function() {mouseOut3()};

function mouseOver3() {
    document.getElementById("p3").style.display = "block";
}

function mouseOut3() {
    document.getElementById("p3").style.display = "none";
}

{
    function displayNextImage1() {
        x = (x === images.length - 1) ? 0 : x + 1;
        document.getElementById("s1").src = images[x];
    }

    function displayNextImage2() {
        y = (y === images.length - 1) ? 0 : y + 1;
        document.getElementById("s2").src = images[y];
    }

    function displayNextImage3() {
        z = (z === images.length - 1) ? 0 : z + 1;
        document.getElementById("s3").src = images[z];
    }

    function startTimer() {
        mt1 = setInterval(displayNextImage1, f);
        mt2 = setInterval(displayNextImage2, f);
        mt3 = setInterval(displayNextImage3, f);
    }

    function display1() {
        temp1=document.getElementById("s1").src;
        document.getElementById("s1").src = document.getElementById("s2").src;
        document.getElementById("s2").src = temp1;
        clearInterval(mt1);
        clearInterval(mt2);
        clearInterval(mt3);
        startTimer();
    }

    function display2() {
        temp1=document.getElementById("s1").src;
        document.getElementById("s1").src = document.getElementById("s3").src;
        document.getElementById("s3").src = temp1;
        clearInterval(mt1);
        clearInterval(mt2);
        clearInterval(mt3);
        startTimer();
    }

    function text(){
        if(document.getElementById("s1").src == sss1)
        {
            document.getElementById("n1").style.display = "inline";
            document.getElementById("n2").style.display = "none";
            document.getElementById("n3").style.display = "none";
        }else{
            if(document.getElementById("s1").src == sss2)
            {
                document.getElementById("n1").style.display = "none";
                document.getElementById("n2").style.display = "inline";
                document.getElementById("n3").style.display = "none";
            }
            else
            {
                document.getElementById("n1").style.display = "none";
                document.getElementById("n2").style.display = "none";
                document.getElementById("n3").style.display = "inline";
            }
        }
    }

    setInterval(text,1);

    var images = [], x = -1, y=0, z= 1, f=5000, mt1, mt2, mt3, temp1=document.getElementById("s1").src;
    const sss1 = document.getElementById("s1").src,
        sss2 = document.getElementById("s2").src;
    images[0] = "random-picture-12.png";
    images[1] = "slika2.jpg";
    images[2] = "slika3.jpg";

}

function setheight() {
    var divHeight = document.getElementById('ss1').offsetHeight;
    document.getElementById('p1').style.height = (0.68 * divHeight) + 'px';
    document.getElementById('p2').style.height = (0.68 * divHeight) + 'px';
    document.getElementById('p3').style.height = (0.68 * divHeight) + 'px';
}

setInterval(setheight,1);