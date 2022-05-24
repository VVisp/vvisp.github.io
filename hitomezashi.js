function drawPattern(ctx, canvasWidth, canvasHeight, singleLength) {
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    
    // Draw horizontals
    for (let h = 0; h < canvasHeight; h += singleLength) {
        ctx.beginPath();
        ctx.moveTo(0, h);
        let rnd = Math.floor(Math.random() * 10); // 0-9
        let initialVal = (rnd % 2) ? singleLength : 0;
        for (let w = initialVal; w < canvasWidth; w += 2*singleLength) {
            ctx.moveTo(w, h);
            ctx.lineTo(w+singleLength, h);
        }
        ctx.stroke(); 
    }

    // Draw verticals
    for (let w = 0; w < canvasWidth; w += singleLength) {
        ctx.beginPath();
        ctx.moveTo(0, w);
        let rnd = Math.floor(Math.random() * 10); // 0-9
        let initialVal = (rnd % 2) ? singleLength : 0;
        for (let h = initialVal; h < canvasHeight; h += 2*singleLength) {
            ctx.moveTo(w, h);
            ctx.lineTo(w, h+singleLength);
        }
        ctx.stroke(); 
    }

    ctx.strokeStyle = 'lightgrey';
    ctx.lineWidth = 5;
    ctx.strokeRect(0, 0, canvasWidth, canvasHeight)
}

function main() {
    const canvas = document.getElementById('canvas');
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const singleLength = 20;

    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    drawPattern(ctx, canvasWidth, canvasHeight, singleLength);
}
// Autorun on startup
main();