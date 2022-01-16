



function mgrade(marks){

    let grade;
    
    if(marks < 33){
        grade = `F`;
    }else if(marks >= 33 && marks < 40){
        grade = `D`;
    }else if(marks >= 40 && marks < 50){
        grade =`C`;
    }else if(marks >= 50 && marks < 60){
        grade = `B`;
    }else if(marks >= 60 && marks < 70){
        grade = `A-`;
    }else if(marks >= 70 && marks < 80){
        grade = `A`;
    }else if(marks >= 80 && marks <= 100){
        grade = `A+`;
    }else{
        grade = `no`;
    }
    return grade;

}


//gpa calculation


function gpacal(marks){

    let gpa;
    
    if(marks < 33){
        gpa = `0`;
    }else if(marks >= 33 && marks < 40){
        gpa = `1`;
    }else if(marks >= 40 && marks < 50){
        gpa =`2`;
    }else if(marks >= 50 && marks < 60){
        gpa = `3`;
    }else if(marks >= 60 && marks < 70){
        gpa = `3.50`;
    }else if(marks >= 70 && marks < 80){
        gpa = `4`;
    }else if(marks >= 80 && marks <= 100){
        gpa = `5`;
    }else{
        gpa = `na`;
    }
    return gpa;

}

function totalgrade(cgpa){
      
    if(cgpa < 1 || cgpa == "Faill"){
        return  `Faill`;
    }else if(cgpa >= 1 && cgpa < 2){
        return  `D`;
    }else if(cgpa >= 2 && cgpa < 3){
        return `C`;
    }else if(cgpa >= 3 && cgpa < 3.50){
        return  `B`;
    }else if(cgpa >= 3.50 && cgpa < 4){
        return  `A-`;
    }else if(cgpa >= 4 && cgpa < 5){
        return  `A`;
    }else if(cgpa >= 5){
        return  `A+`;
    }else{
        return `Invalit`;
    }
}


function totalmark(a, b, c, d, e, f, g, h, i,){
    return Number(a) + Number(b) + Number(c) + Number(d) + Number(e) + Number(f) + Number(g) + Number(h) + Number(i);
}

function totalmarks(group){

    if(group == 'business'){

        return `${totalmark(in_ban.value, in_eng.value, in_math.value, in_reg.value, in_ssci.value, in_gsicb.value, in_finbank.value, in_acc.value, in_bis.value)}`;

    }else if(group == "humanities"){
        return `${totalmark(in_ban.value, in_eng.value, in_math.value, in_reg.value, in_ssci.value, in_gen.value, in_civ.value, in_eco.value, in_gsic.value)}`;

    }else if(group == "Science"){

        return `${totalmark(in_ban.value, in_eng.value, in_math.value, in_reg.value, in_ssci.value, in_phy.value, in_bio.value, in_higmath.value, in_chem.value)}`;
    }else{
        return 'Invalit';
    }

}
function fpoint(group){

    if(group == 'business'){

        return `${cgpaa(gpacal(in_ban.value),gpacal(in_eng.value) , gpacal(in_math.value) ,gpacal(in_reg.value)  ,gpacal(in_ssci.value)  ,gpacal(in_gsicb.value)  , gpacal(in_finbank.value) , gpacal(in_acc.value) , gpacal(in_bis.value))}`;

    }else if(group == "humanities"){
        return `${cgpaa(gpacal(in_ban.value),gpacal(in_eng.value) , gpacal(in_math.value) ,gpacal(in_reg.value)  ,gpacal(in_ssci.value)  ,gpacal(in_gsic.value), gpacal(in_gen.value) , gpacal(in_civ.value), gpacal(in_eco.value) , gpacal(in_gsic.value))}`;

    }else if(group == "Science"){

        return `${cgpaa(gpacal(in_ban.value),gpacal(in_eng.value) , gpacal(in_math.value) ,gpacal(in_reg.value) ,gpacal(in_ssci.value),gpacal(in_phy.value) , gpacal(in_bio.value) ,gpacal(in_higmath.value)  ,gpacal(in_chem.value))}`;
    }else{
        return 'Invalit';
    }

}

function totalcgpa(group){
    let totalpoint;

    if(group == 'business'){

        totalpoint = `${(Number(gpacal(in_ban.value)) + Number(gpacal(in_eng.value)) + Number(gpacal(in_math.value)) + Number(gpacal(in_reg.value)) + Number(gpacal(in_ssci.value)) + Number(gpacal(in_gsicb.value)) + Number(gpacal(in_finbank.value)) + Number(gpacal(in_acc.value)) + Number(gpacal(in_bis.value)))}`;

    }else if(group == "humanities"){

        totalpoint = `${Number(gpacal(in_ban.value)) + Number(gpacal(in_eng.value)) + Number(gpacal(in_math.value)) + Number(gpacal(in_reg.value)) + Number(gpacal(in_ssci.value)) + Number(gpacal(in_gen.value)) + Number(gpacal(in_civ.value)) + Number(gpacal(in_eco.value)) + Number(gpacal(in_gsic.value))}`;

    }else if(group == "Science"){

         totalpoint = `${Number(gpacal(in_ban.value)) + Number(gpacal(in_eng.value)) + Number(gpacal(in_math.value)) + Number(gpacal(in_reg.value)) + Number(gpacal(in_ssci.value)) + Number(gpacal(in_phy.value)) + Number(gpacal(in_bio.value)) + Number(gpacal(in_higmath.value)) + Number(gpacal(in_chem.value))}`;
    }else{
        totalpoint = "Invalit";
    }
    return totalpoint;

}
let toPionts = `${(totalcgpa(group.value) / 9).toFixed(2)}`;

function cgpaa(a, b, c, d, e, f, g, h, i){
    if(a == 0 || b == 0 || c == 0 || d == 0 || e == 0 || f == 0 || g == 0 || h == 0 || i == 0){
        return "Faill"
    }else{
        return `${toPionts}`
    }
}








