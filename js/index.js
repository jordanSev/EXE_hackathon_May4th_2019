  var windowHeight = $('#intro').height();
    var windowWidth = $('#intro').width();
    
    $('#canvas').attr({height:windowHeight});
    $('#canvas').attr({width:windowWidth});
    
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    function smallStarCreate(starNumber, starSize) {
        for(var i=0; i<starNumber; i++) {
            ctx.beginPath();
            var starLeft = Math.floor(Math.random()*windowWidth) + 1;
            var starTop = Math.floor(Math.random()*windowHeight) + 1;
            var colorVal01 =  Math.floor(Math.random()*106) + 150;
            var colorVal02 =  Math.floor(Math.random()*106) + 150;
            var opacityVal =  (Math.floor(Math.random()*11)) / 10;
            ctx.fillStyle = "rgba(" + colorVal01 + ", " + colorVal02 + ", " + 255 + ", " + opacityVal + ")";
            ctx.fillRect(starLeft, starTop, starSize, starSize);
            ctx.fill();
        }
    }
    smallStarCreate(200, 1);
    smallStarCreate(50, 2);
    ctx.restore();
    ctx.save();
    
    function bigStarCreate(starNumber, starSize) {
        for(var i=0; i<starNumber; i++) {
            ctx.beginPath();
            var starLeft = Math.floor(Math.random()*windowWidth) + 1;
            var starTop = Math.floor(Math.random()*windowHeight) + 1;
            var colorVal01 =  Math.floor(Math.random()*106) + 150;
            var colorVal02 =  Math.floor(Math.random()*106) + 150;
            var opacityVal =  (Math.floor(Math.random()*11)) / 10;
            var colorVal =  Math.floor(Math.random()*151);
            var radgrad = ctx.createRadialGradient(starLeft,starTop,0,starLeft,starTop,starSize);
            radgrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
            radgrad.addColorStop(1, "rgba(" + colorVal01 + ", " + colorVal02 + ", " + 255 + ", " + opacityVal + ")");
            ctx.fillStyle = radgrad;
            ctx.arc(starLeft, starTop, starSize, 0, Math.PI * 2, true);
            ctx.fill();
        }
    }
    bigStarCreate(10, 1);
    bigStarCreate(5, 2);
    var sky = new Image();
    sky.src = canvas.toDataURL("image/png");
    $('#intro').css("background", "url("+sky.src+")");
    ctx.restore();
    ctx.save();
	
	
	var slices = 8,
  angle = 360 / slices,
  sphere = document.querySelector('.sphere');
for (var i = 0; i < (slices - 1); i++) {
  var slice = document.createElement('div');
  slice.className = 'circle';
  slice.style.transform = 'rotateY(' + angle * i + 'deg)';
  sphere.appendChild(slice);
}

var stars = 100,
  vh = window.innerHeight,
  vw = window.innerWidth;

function randomStar(selector) {
  var star = document.createElement('div');
  star.className = 'star';
  star.style.left = Math.floor((Math.random() * vw * 2) - 20) + 'px';
  star.style.top = Math.floor(Math.random() * (vh - 40) + 20) + 'px';
  document.querySelector(selector).appendChild(star);
}