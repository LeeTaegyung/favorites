$(function() {
    function circleChartAnimation (option) {
        var length = option.val.length;
        var circleCanvas = option.canvas;
        var circleCanvasCtx = circleCanvas.getContext('2d');
        // canvas 레티나 대응
        var devicePixelRatio, backingStoreRatio, ratio;
            devicePixelRatio = window.devicePixelRatio || 1,
            backingStoreRatio = circleCanvasCtx.webkitBackingStorePixelRatio ||
            circleCanvasCtx.mozBackingStorePixelRatio ||
            circleCanvasCtx.msBackingStorePixelRatio ||
            circleCanvasCtx.oBackingStorePixelRatio ||
            circleCanvasCtx.backingStorePixelRatio || 1,
            ratio = devicePixelRatio / backingStoreRatio;
        circleCanvas.width = $('.chart_box').width() * 2;
        circleCanvas.height = $('.chart_box').height() * 2;
        circleCanvasCtx.scale(ratio, ratio);
    
        var circleCenterX = circleCanvas.width / 2;
        var circleCenterY = circleCanvas.height / 2;
        var circleRadius = Math.min(circleCenterX, circleCenterY);
        var startAngle = 0;
        var endAngle;
        var total = 0;
        var val = new Array();
        var stepAngle = startAngle;
        var maxDeg;
        var pieIdx = 0;
    
        // 비율 최종값, 배열 넘기기
        for(i = 0; i < length; i++) {
            total += option.val[i]; 
            val.push(option.val[i]);
        }
    
        // 시작값 넣어주기
        endAngle = 2 * Math.PI * val[pieIdx] / total; // 비율에 따라 호도각 산출
        maxDeg =  endAngle * 180 / Math.PI;// 호도각 -> 일반각

    
        // 반복되는 부분
        var circleChartMove = setInterval(function(){
            
            if(pieIdx >= length){
                // 모든 파이가 그려지면
                clearInterval(circleChartMove);
            }
    
            if(stepAngle > maxDeg) {
                // 파이 한조각이 완성되면
                pieIdx = pieIdx + 1;
                startAngle += endAngle;
                if (pieIdx < length) {
                    // 값 갱신
                    endAngle = 2 * Math.PI * val[pieIdx] / total;
                    maxDeg = maxDeg + endAngle * 180 / Math.PI;
                }
            } else {
    
                // 파이 한조각 완성전
                stepAngle++;
                
                circleCanvasCtx.fillStyle = option.colors[pieIdx];
                circleCanvasCtx.beginPath();
                circleCanvasCtx.moveTo(circleCenterX, circleCenterY);
                circleCanvasCtx.arc(circleCenterX, circleCenterY, circleRadius, startAngle, stepAngle * Math.PI / 180);
                circleCanvasCtx.closePath();
                circleCanvasCtx.fill();

                // 도넛 그림자
                circleCanvasCtx.beginPath();
                circleCanvasCtx.moveTo(circleCenterX, circleCenterY);
                circleCanvasCtx.fillStyle = 'rgba(0,0,0,.1)';
                circleCanvasCtx.arc(circleCenterX, circleCenterY, circleRadius/2 + 50, startAngle, stepAngle * Math.PI / 180);
                circleCanvasCtx.closePath();
                circleCanvasCtx.fill();

                // 도넛 홀
                circleCanvasCtx.beginPath();
                circleCanvasCtx.moveTo(circleCenterX, circleCenterY);
                circleCanvasCtx.fillStyle = '#fff';
                circleCanvasCtx.arc(circleCenterX, circleCenterY, circleRadius/2, 0, Math.PI / 180 * 360);
                circleCanvasCtx.closePath();
                circleCanvasCtx.fill();

            }
    
        }, 5);
    
    }
    
    $('.animation_start').on('click', function() {
        circleChartAnimation ({
            canvas: document.getElementById("chare_canvas"),
            val: [12, 28, 10],
            colors: ["#cfcfcf", "#414b67", "#828485"]
        });
    })
})