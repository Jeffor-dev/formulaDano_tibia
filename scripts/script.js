function calcular(){
    //categoria1
    var atk1 = document.getElementById('atk1').value
    var var1Cat1 = document.getElementById('var1Cat1').value
    var skill1 = document.getElementById('skill1').value
    var var2Cat1 = document.getElementById('var2Cat1').value
    var dano1 = atk1 * var1Cat1 + skill1 * var2Cat1
    document.getElementById('dano1').value = dano1
    //categoria2
    var atk2 = document.getElementById('atk2').value
    var var1Cat2 = document.getElementById('var1Cat2').value
    var skill2 = document.getElementById('skill2').value
    var var2Cat2 = document.getElementById('var2Cat2').value
    var dano2 = atk2 * var1Cat2 + skill2 * var2Cat2
    document.getElementById('dano2').value = dano2
    //categoria3
    var atk3 = document.getElementById('atk3').value
    var var1Cat3 = document.getElementById('var1Cat3').value
    var skill3 = document.getElementById('skill3').value
    var var2Cat3 = document.getElementById('var2Cat3').value
    var dano3 = atk3 * var1Cat3 + skill3 * var2Cat3
    document.getElementById('dano3').value = dano3
    //categoria4
    var atk4 = document.getElementById('atk4').value
    var var1Cat4 = document.getElementById('var1Cat4').value
    var skill4 = document.getElementById('skill4').value
    var var2Cat4 = document.getElementById('var2Cat4').value
    var dano4 = atk4 * var1Cat4 + skill4 * var2Cat4
    document.getElementById('dano4').value = dano4
    //categoria5
    var atk5 = document.getElementById('atk5').value
    var var1Cat5 = document.getElementById('var1Cat5').value
    var skill5 = document.getElementById('skill5').value
    var var2Cat5 = document.getElementById('var2Cat5').value
    var dano5 = atk5 * var1Cat5 + skill5 * var2Cat5
    document.getElementById('dano5').value = dano5
}