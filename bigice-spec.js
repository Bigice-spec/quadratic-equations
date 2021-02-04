"use strict";

function getX(){

    const a = document.getElementById('valueA').value;
    const b = document.getElementById('valueB').value;
    const c = document.getElementById('valueC').value;
    const calcBtn = document.getElementById('calcBtn');
    const output = document.getElementById('output');
    
    // ax2 + bx + c = 0
    let mul = (b*b) - (4*a*c)
    if(a && b && c){
        if(Math.sign(mul) === 1){
            const theRoot = Math.sqrt(mul);
            const denominater = 2 * a;
                
            const calc1 = (-b + theRoot) / denominater;
            const calc2 = (-b - theRoot) / denominater;
    
            console.log(theRoot);
            console.log(denominater);
    
            if(calc1 > calc2){
                output.innerHTML = calc1;
             }else{
                 output.innerHTML = calc2;
             }
        }else{
            output.innerHTML = 'No X-cofficients' + '<br><br>' + 'Result inside square root is a negative i.e  '  +  mul;
        }
    }else{
        alert('fill all inputs!')
    }
}