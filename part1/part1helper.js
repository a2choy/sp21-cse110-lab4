function helper(){
    /*var a = '3' + 2;
    console.log("a: ", a);
    var b = '3' - 2;
    console.log("b: ", b);
    var c = 3 + null;
    console.log("c: ", c);
    var d = '3' + null;
    console.log("d: ", d);
    var e = true + 3;
    console.log("e: ", e);
    var f = false + null;
    console.log("f: ", f);
    var g = '3' + undefined;
    console.log("g: ", g);
    var h = '3' - undefined;
    console.log("h: ", h);*/

    var a = '2' > 1;
    console.log("a: ", a);
    var b = '2' < '12';
    console.log("b: ", b);
    var c = 2 == '2';
    console.log("c: ", c);
    var d = 2 === '2';
    console.log("d: ", d);
    var e = true == 2;
    console.log("e: ", e);
    var f = true === Boolean(2);
    console.log("f: ", f);
}
helper();