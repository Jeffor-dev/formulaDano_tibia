function calcular(){
    var atk = document.getElementById('atk').value
    var skill = document.getElementById('skill').value

    //categoria1
    var var1Cat1 = document.getElementById('var1Cat1').value
    var var2Cat1 = document.getElementById('var2Cat1').value
    var dano1 = (atk * var1Cat1 + skill * var2Cat1)/2
    document.getElementById('dano1').value = Math.round(dano1)
    document.getElementById('min1').innerHTML = Math.round(dano1 * 0.7)
    document.getElementById('max1').innerHTML = Math.round(dano1 * 1.3)
    //categoria2
    var var1Cat2 = document.getElementById('var1Cat2').value
    var var2Cat2 = document.getElementById('var2Cat2').value
    var dano2 = (atk * var1Cat2 + skill * var2Cat2)/2
    document.getElementById('dano2').value = Math.round(dano2)
    document.getElementById('min2').innerHTML = Math.round(dano2 * 0.7)
    document.getElementById('max2').innerHTML = Math.round(dano2 * 1.3)
    //categoria3
    var var1Cat3 = document.getElementById('var1Cat3').value
    var var2Cat3 = document.getElementById('var2Cat3').value
    var dano3 = (atk * var1Cat3 + skill * var2Cat3)/2
    document.getElementById('dano3').value = Math.round(dano3)
    document.getElementById('min3').innerHTML = Math.round(dano3 * 0.7)
    document.getElementById('max3').innerHTML = Math.round(dano3 * 1.3)

    //categoria4
    var var1Cat4 = document.getElementById('var1Cat4').value
    var var2Cat4 = document.getElementById('var2Cat4').value
    var dano4 = (atk * var1Cat4 + skill * var2Cat4)/2
    document.getElementById('dano4').value = Math.round(dano4)
    document.getElementById('min4').innerHTML = Math.round(dano4 * 0.7)
    document.getElementById('max4').innerHTML = Math.round(dano4 * 1.3)

    //categoria5
    var var1Cat5 = document.getElementById('var1Cat5').value
    var var2Cat5 = document.getElementById('var2Cat5').value
    var dano5 = (atk * var1Cat5 + skill * var2Cat5)/2
    document.getElementById('dano5').value = Math.round(dano5)
    document.getElementById('min5').innerHTML = Math.round(dano5 * 0.7)
    document.getElementById('max5').innerHTML = Math.round(dano5 * 1.3)
}