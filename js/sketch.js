"use strict";

const SIZE_CANVAS = 400;
const CURSORS_MARGIN = 30;
var slider1, slider2,slider3, slider4, slider5, sliderZoom;

function setup() {
    createCanvas(SIZE_CANVAS, SIZE_CANVAS);
    textSize(15);
    noStroke();
    slider1 = createSlider(1, 40, 30);
    slider1.position(20, 100+CURSORS_MARGIN);
    slider1.style('width', '200px');

    slider2 = createSlider(1, 300, 80);
    slider2.position(20, 100+CURSORS_MARGIN*2);
    slider2.style('width', '200px');

    sliderZoom = createSlider(10, 200, 100);
    sliderZoom.position(20, 100+CURSORS_MARGIN*3);
    sliderZoom.style('width', '200px');

    slider3 = createSlider(2, 100, 30);
    slider3.position(20, 100+CURSORS_MARGIN*4);
    slider3.style('width', '200px');

    slider4 = createSlider(1, 60, 30);
    slider4.position(20, 100+CURSORS_MARGIN*5);
    slider4.style('width', '200px');


    slider5 = createSlider(0.1, 1000, 40);
    slider5.position(20, 100+CURSORS_MARGIN*6);
    slider5.style('width', '200px');

}

function draw() {

    background(220);
    stroke("#000");
    var p3 = Math.PI / (slider1.value()/10);
    var p6 = Math.PI / (slider2.value()/10);
    var p8 = p6;
    var p;
    var d;
    var e;
    var b;
    var a;
    var c2;
    var c3;
    var x1;
    var z1;
    var tc;
    var ts;
    var sa;
    var cm;
    var sm;
    var x;
    var y;

    var currentPointX = SIZE_CANVAS/2;
    var currentPointY = SIZE_CANVAS/2;
    for (var mu = 0; mu < 3.141; mu += 0.1) {
        p++;
        d = sliderZoom.value() + 4.794 * Math.sin(6 * mu - p3);
        e = 6.732 * Math.sin(slider3.value()/10 * mu - p6);
        a = d + e;
        b = d - e;
        sa = Math.sin(p8 * Math.sin(slider4.value()/10 * mu));
        c2 = Math.sqrt(a * a + b * b);
        c3 = (slider5.value()/10 * d * e) / c2;
        cm = Math.cos(mu);
        sm = Math.sin(mu);
        for (var te = 0; te < 6.288; te += 0.06) {
            tc = a * Math.cos(te);
            ts = b * Math.sin(te);
            x1 = c3 + tc - ts;
            z1 = c2 + tc + ts;
            //Voici les coordonnées
            x = x1 * cm - z1 * sa * sm;
            y = x1 * sm + z1 * sa * cm;
            // point(SIZE_CANVAS/2 + x, SIZE_CANVAS/2 + y);
            line(currentPointX, currentPointY, SIZE_CANVAS/2 + x, SIZE_CANVAS/2 + y);
            stroke(10);
            currentPointX = SIZE_CANVAS/2 + x;
            currentPointY = SIZE_CANVAS/2 + y;
        }
    }
    // noLoop();
}

// for (var x= 0 + offset - start; x<SIZE_CANVAS + offset; x++ ){
//   for (var y= 0 + offset - start; y<SIZE_CANVAS + offset; y++ ){
//     if((Math.round(Math.sqrt(x*x*10 + y*y*10)) % 2) === 0) {
//         stroke("#F00");
//     } else stroke("#00F");
//     point(x-offset, y-offset);
//   }
// }
