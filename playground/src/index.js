


var canvas = document.getElementById("window");

if (canvas.getContext) {
    function draw() {
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 800, 600);
        
        ctx.fillStyle = '#0f0';
        ctx.fillRect(20,20, 100, 100);
        
        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(100, 100, 100, 100);

        ctx.strokeRect(200, 200, 10, 10)

        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);

        ctx.beginPath();
        ctx.moveTo(300, 50);
        ctx.lineTo(350, 75);
        ctx.lineTo(350, 25);
        ctx.fill();


        ctx.clearRect(0, 0, 800, 600);
        var img = new Image();
        img.onload = function() {
          ctx.drawImage(img, 10, 200, 110, 75);
        };
        img.src = 'assets/Fly (1).png';

        // var f1 = new Image();
        // f1.src = 'assets/Fly (1).png';
        // var f2 = new Image();
        // f2.src = 'assets/Fly (2).png';

        // ctx.clearRect(0, 0, 800, 600);
        // i = 0;
        // while (i < 100) {
        //     if (i%2==0) {
        //         ctx.drawImage(f1, 10, 10, 220, 150)
        //     } else {
        //         ctx.drawImage(f2, 10, 10, 220, 150)
        //     }
        // }




    }



} else {
    //canvas unsupported code here
}



