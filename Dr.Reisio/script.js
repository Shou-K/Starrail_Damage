document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', calculate);
});

function calculate(){
    const Mylevel = parseFloat(document.getElementById("Mylevel").value);
    const Attack = parseFloat(document.getElementById("Attack").value);
    const skildamagebahu = parseFloat(document.getElementById("skildamagebahu").value);
    const Clidamage = parseFloat(document.getElementById("Clidamage").value);
    const Typedamage = parseFloat(document.getElementById("Typedamage").value);
    const Giftdamage = parseFloat(document.getElementById("Giftdamage").value);
    const Directdamage = parseFloat(document.getElementById("Directdamage").value);
    const Enemylevel = parseFloat(document.getElementById("Enemylevel").value);
    const Blockde = parseFloat(document.getElementById("Blockde").value);
    const receivede = parseFloat(document.getElementById("receivede").value);
    const DirectBrock = parseFloat(document.getElementById("DirectBrock").value);
    const Destory = parseFloat(document.getElementById("Destory").value);
    const normal_at_level = document.getElementById('normal_at_level');
    const skill_at_level = document.getElementById('skill_at_level');
    const kiseki_at_level = document.getElementById('kiseki_at_level');
    const ult_at_level = document.getElementById('ult_at_level');
    const enemy_protect = document.getElementById('enemy_protect');
    const enemyprotectde = parseFloat(document.getElementById("enemyprotectde").value);

    const select_normal_at_level = parseInt(normal_at_level.value); 
    const select_enemy_protect = parseInt(enemy_protect.value); 
    const select_skill_at_level = parseInt(skill_at_level.value);
    const select_kiseki_at_level = parseInt(kiseki_at_level.value);
    const select_ult_at_level = parseInt(ult_at_level.value);
    const resultElement1 = document.getElementById('result1');
    const resultElement2 = document.getElementById('result2');
    const resultElement3 = document.getElementById('result3');
    const resultElement4 = document.getElementById('result4');
    const resultElement5 = document.getElementById('result5');
    const resultElement6 = document.getElementById('result6');
    const resultElement7 = document.getElementById('result7');
    const resultElement8 = document.getElementById('result8');


    let correspondingValue1;
    let correspondingValue2;
    let correspondingValue3;
    let correspondingValue4;
    let correspondingValue5;

    switch (select_normal_at_level) {
        case 0:
            correspondingValue1 = 0;
            break;
        case 1:
            correspondingValue1 = 0.5;
            break;
        case 2:
            correspondingValue1 = 0.6;
            break;
        case 3:
            correspondingValue1 = 0.7;
            break;
        case 4:
            correspondingValue1 = 0.8;
            break;
        case 5:
            correspondingValue1 = 0.9;
            break;
        case 6:
            correspondingValue1= 1.0;
            break;
        case 7:
            correspondingValue1 = 1.1;
            break;
        default:
            correspondingValue1 = 0;
            break;
    }

    switch (select_enemy_protect) {
        case 0:
            correspondingValue2 = 0;
            break;
        case 1:
            correspondingValue2 = 0;
            break;
        case 2:
            correspondingValue2 = 0.2;
            break;
        case 3:
            correspondingValue2 = 0.4;
            break;
        case 4:
            correspondingValue2 = 0.4;
            break;
        case 5:
            correspondingValue2 = 0.4;
            break;
        case 6:
            correspondingValue2 = 0.4;
            break;
        default:
            correspondingValue2 = 0;
            break;
    }

    switch (select_skill_at_level) {
        case 0:
            correspondingValue3 = 1;
            break;
        case 1:
            correspondingValue3 = 0.75;
            break;
        case 2:
            correspondingValue3 = 0.82;
            break;
        case 3:
            correspondingValue3 = 0.9;
            break;
        case 4:
            correspondingValue3 = 0.97;
            break;
        case 5:
            correspondingValue3 = 1.05;
            break;
        case 6:
            correspondingValue3 = 1.12;
            break;
        case 7:
            correspondingValue3 = 1.21;
            break;
        case 8:
            correspondingValue3 = 1.31;
            break;
        case 9:
            correspondingValue3 = 1.4;
            break;
        case 10:
            correspondingValue3 = 1.5;
            break;
        case 11:
            correspondingValue3 = 1.57;
            break;
        case 12:
            correspondingValue3 = 1.65;
            break;
        default:
            correspondingValue3 = 1;
            break;
    }

    switch (select_kiseki_at_level) {
        case 0:
            correspondingValue4 = 1;
            break;
        case 1:
            correspondingValue4 = 1.35;
            break;
        case 2:
            correspondingValue4 = 1.48;
            break;
        case 3:
            correspondingValue4 = 1.62;
            break;
        case 4:
            correspondingValue4 = 1.75;
            break;
        case 5:
            correspondingValue4 = 1.89;
            break;
        case 6:
            correspondingValue4 = 2.02;
            break;
        case 7:
            correspondingValue4 = 2.19;
            break;
        case 8:
            correspondingValue4 = 2.36;
            break;
        case 9:
            correspondingValue4 = 2.53;
            break;
        case 10:
            correspondingValue4 = 2.70;
            break;
        case 11:
            correspondingValue4 = 2.83;
            break;
        case 12:
            correspondingValue4 = 2.97;
            break;
        default:
            correspondingValue4 = 1;
            break;
    }

    switch (select_ult_at_level) {
        case 0:
            correspondingValue5 = 1;
            break;
        case 1:
            correspondingValue5 = 1.44;
            break;
        case 2:
            correspondingValue5 = 1.53;
            break;
        case 3:
            correspondingValue5 = 1.63;
            break;
        case 4:
            correspondingValue5 = 1.72;
            break;
        case 5:
            correspondingValue5 = 1.82;
            break;
        case 6:
            correspondingValue5 = 1.92;
            break;
        case 7:
            correspondingValue5 = 2.04;
            break;
        case 8:
            correspondingValue5 = 2.16;
            break;
        case 9:
            correspondingValue5 = 2.28;
            break;
        case 10:
            correspondingValue5 = 2.40;
            break;
        case 11:
            correspondingValue5 = 2.49;
            break;
        case 12:
            correspondingValue5 = 2.59;
            break;
        default:
            correspondingValue5 = 1;
            break;
    }

    if (isNaN(Mylevel) || isNaN(Attack) || isNaN(Clidamage) || isNaN(Typedamage) || isNaN(Giftdamage) || isNaN(Directdamage) || isNaN(Enemylevel) || isNaN(Blockde) || isNaN(DirectBrock) || isNaN(Destory)){
        resultElement1.textContent = "数値を入力してください";
        resultElement2.textContent = "数値を入力してください";
        resultElement3.textContent = "数値を入力してください";
        resultElement4.textContent = "数値を入力してください";
        resultElement5.textContent = "数値を入力してください";
        resultElement6.textContent = "数値を入力してください";
        resultElement7.textContent = "数値を入力してください";
        resultElement8.textContent = "数値を入力してください";
    }else{
       const result1 = (Attack) * (correspondingValue1 + skildamagebahu) * (1 + Clidamage) * (1 + Typedamage + Giftdamage) * (1 + receivede) * (1 - correspondingValue2 + enemyprotectde + Directdamage) * (Destory) * (20 + Mylevel) / ((20 + Enemylevel) * (1 - Blockde - DirectBrock) + 20 + Mylevel);
       const result2 = (Attack) * (correspondingValue1 + skildamagebahu) * (1 + Typedamage + Giftdamage) * (1 + receivede) * (1 - correspondingValue2 + enemyprotectde) * (Destory) * (20 + Mylevel) / ((20 + Enemylevel) * (1 - Blockde - DirectBrock) + 20 + Mylevel);
       const result3 = (Attack) * (correspondingValue3 + skildamagebahu) * (1 + Clidamage) * (1 + Typedamage + Giftdamage) * (1 + receivede) * (1 - correspondingValue2 + enemyprotectde + Directdamage) * (Destory) * (20 + Mylevel) / ((20 + Enemylevel) * (1 - Blockde - DirectBrock) + 20 + Mylevel);
       const result4 = (Attack) * (correspondingValue3 + skildamagebahu) * (1 + Typedamage + Giftdamage) * (1 + receivede) * (1 - correspondingValue2 + enemyprotectde) * (Destory) * (20 + Mylevel) / ((20 + Enemylevel) * (1 - Blockde - DirectBrock) + 20 + Mylevel);
       const result5 = (Attack) * (correspondingValue4 + skildamagebahu) * (1 + Clidamage) * (1 + Typedamage + Giftdamage) * (1 + receivede) * (1 - correspondingValue2 + enemyprotectde + Directdamage) * (Destory) * (20 + Mylevel) / ((20 + Enemylevel) * (1 - Blockde - DirectBrock) + 20 + Mylevel);
       const result6 = (Attack) * (correspondingValue4 + skildamagebahu) * (1 + Typedamage + Giftdamage) * (1 + receivede) * (1 - correspondingValue2 + enemyprotectde) * (Destory) * (20 + Mylevel) / ((20 + Enemylevel) * (1 - Blockde - DirectBrock) + 20 + Mylevel);
       const result7 = (Attack) * (correspondingValue5 + skildamagebahu) * (1 + Clidamage) * (1 + Typedamage + Giftdamage) * (1 + receivede) * (1 - correspondingValue2 + enemyprotectde + Directdamage) * (Destory) * (20 + Mylevel) / ((20 + Enemylevel) * (1 - Blockde - DirectBrock) + 20 + Mylevel);
       const result8 = (Attack) * (correspondingValue5 + skildamagebahu) * (1 + Typedamage + Giftdamage) * (1 + receivede) * (1 - correspondingValue2 + enemyprotectde) * (Destory) * (20 + Mylevel) / ((20 + Enemylevel) * (1 - Blockde - DirectBrock) + 20 + Mylevel);
       resultElement1.textContent = result1.toFixed(0);
       resultElement2.textContent = result2.toFixed(0);
       resultElement3.textContent = result3.toFixed(0);
       resultElement4.textContent = result4.toFixed(0);
       resultElement5.textContent = result5.toFixed(0);
       resultElement6.textContent = result6.toFixed(0);
       resultElement7.textContent = result7.toFixed(0);
       resultElement8.textContent = result8.toFixed(0);
    }
}