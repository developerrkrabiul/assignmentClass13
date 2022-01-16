// - Subject Marks app with notification color 

// Main submit button

const submitBtn = document.querySelector('#result_submit');


// input value selecti for result
const fistName = document.querySelector('#name');
const lastName = document.querySelector('#last_name');
const roll = document.querySelector('#roll');
const regNum = document.querySelector('#reg_number');
const psYear = document.querySelector('#pas_year');
const group = document.querySelector('#group');

// input value selecti for result
// student data output result


const outName = document.querySelector('#out_name');
const outRoll = document.querySelector('#out_roll');
const outRegNo = document.querySelector('#out_reg');
const outGroup = document.querySelector('#out_group');
const outPssYear = document.querySelector('#out_year');
const grade = document.querySelector('#grade');

// student data output result

const secHidden = document.querySelector('.subject-sec');


submitBtn.addEventListener('click', ()=>{

    outName.innerHTML= `${fistName.value} ${lastName.value}`;
    outRoll.innerHTML= roll.value;
    outRegNo.innerHTML= regNum.value;
    outGroup.innerHTML= group.value;
    outPssYear.innerHTML= psYear.value;

});

// Group hidden function work start.


group.addEventListener('click', ()=>{

    if(group.value == 'business'){
        secHidden.id = 'bus_visible';
    }else if(group.value == "humanities"){
        secHidden.id = 'hum_visible';
    }else if(group.value == "Science"){
        secHidden.id = 'sci_visible';
    }else{
        secHidden.id = "";
    }

});

// Group hidden function work end.


// Subjects mark input Selectsion work start.
const in_ban = document.getElementById('in_ban');
const in_eng = document.getElementById('in_eng');
const in_math = document.getElementById('in_math');
const in_ssci = document.getElementById('in_ssci');
const in_reg = document.getElementById('in_reg');
const in_phy = document.getElementById('in_phy');
const in_bio = document.getElementById('in_bio');
const in_chem = document.getElementById('in_chem');
const in_higmath = document.getElementById('in_higmath');
const in_gen = document.getElementById('in_gen');
const in_civ = document.getElementById('in_civ');
const in_eco = document.getElementById('in_eco');
const in_gsic = document.querySelector('.in_gsic');
const in_gsicb = document.querySelector('.in_gsicb');
const in_finbank = document.getElementById('in_finbank');
const in_acc = document.getElementById('in_acc');
const in_bis = document.getElementById('in_bis');
// Subjects mark input Selectsion work start.


// Subjects  Selectsion work start.

const ban = document.getElementById('ban');
const eng = document.getElementById('eng');
const sMath = document.getElementById('math');
const sSic = document.getElementById('s_sic');
const reli = document.getElementById('reli');
const physi = document.getElementById('physi');
const biol = document.getElementById('biol');
const chemi = document.getElementById('chemi');
const higMath = document.getElementById('hig_math');
const geog = document.getElementById('geog');
const civic = document.getElementById('civic');
const eco = document.getElementById('eco');
const genSic = document.querySelector('.gen_sic');
const genSicb = document.querySelector('.gen_sicB');
const finBank = document.getElementById('fin_bank');
const acco = document.getElementById('acco');
const busEnt = document.getElementById('bus_ent');

// Subjects  Selectsion work start.

submitBtn.addEventListener('click', ()=>{

    ban.children[2].innerHTML = in_ban.value ;
    eng.children[2].innerHTML = in_eng.value ;
    sMath.children[2].innerHTML = in_math.value ;
    sSic.children[2].innerHTML = in_ssci.value ;
    reli.children[2].innerHTML = in_reg.value ;
    physi.children[2].innerHTML = in_phy.value ;
    biol.children[2].innerHTML = in_bio.value ;
    chemi.children[2].innerHTML = in_chem.value ;
    higMath.children[2].innerHTML = in_higmath.value ;
    geog.children[2].innerHTML = in_gen.value ;
    civic.children[2].innerHTML = in_civ.value ;
    eco.children[2].innerHTML = in_eco.value ;
    genSic.children[2].innerHTML = in_gsic.value ;
    genSicb.children[2].innerHTML = in_gsicb.value ;
    finBank.children[2].innerHTML = in_finbank.value ;
    acco.children[2].innerHTML = in_acc.value ;
    busEnt.children[2].innerHTML = in_bis.value ;

});

// gpa cal work start 

submitBtn.addEventListener('click', ()=>{

    ban.children[3].innerHTML = gpacal(in_ban.value);
    eng.children[3].innerHTML = gpacal(in_eng.value)  ;
    sMath.children[3].innerHTML = gpacal(in_math.value) ;
    sSic.children[3].innerHTML = gpacal(in_ssci.value) ;
    reli.children[3].innerHTML = gpacal(in_reg.value) ;
    physi.children[3].innerHTML = gpacal(in_phy.value)  ;
    biol.children[3].innerHTML = gpacal(in_bio.value) ;
    chemi.children[3].innerHTML = gpacal(in_chem.value) ;
    higMath.children[3].innerHTML = gpacal(in_higmath.value) ;
    geog.children[3].innerHTML = gpacal(in_gen.value ) ;
    civic.children[3].innerHTML = gpacal(in_civ.value );
    eco.children[3].innerHTML = gpacal(in_eco.value );
    genSic.children[3].innerHTML = gpacal(in_gsic.value );
    genSicb.children[3].innerHTML = gpacal(in_gsicb.value );
    finBank.children[3].innerHTML = gpacal(in_finbank.value) ;
    acco.children[3].innerHTML = gpacal(in_acc.value) ;
    busEnt.children[3].innerHTML = gpacal(in_bis.value) ;


});
submitBtn.addEventListener('click', ()=>{

    ban.children[4].innerHTML = mgrade(in_ban.value);
    eng.children[4].innerHTML = mgrade(in_eng.value)  ;
    sMath.children[4].innerHTML = mgrade(in_math.value) ;
    sSic.children[4].innerHTML = mgrade(in_ssci.value) ;
    reli.children[4].innerHTML = mgrade(in_reg.value) ;
    physi.children[4].innerHTML = mgrade(in_phy.value)  ;
    biol.children[4].innerHTML = mgrade(in_bio.value) ;
    chemi.children[4].innerHTML = mgrade(in_chem.value) ;
    higMath.children[4].innerHTML = mgrade(in_higmath.value) ;
    geog.children[4].innerHTML = mgrade(in_gen.value ) ;
    civic.children[4].innerHTML = mgrade(in_civ.value );
    eco.children[4].innerHTML = mgrade(in_eco.value );
    genSic.children[4].innerHTML = mgrade(in_gsic.value );
    genSicb.children[4].innerHTML = mgrade(in_gsicb.value );
    finBank.children[4].innerHTML = mgrade(in_finbank.value) ;
    acco.children[4].innerHTML = mgrade(in_acc.value) ;
    busEnt.children[4].innerHTML = mgrade(in_bis.value) ;

});

// total marks rork 
 
const toMark = document.getElementById('total_mark');
const toPoint = document.getElementById('total_point');
const toGrade = document.getElementById('total_grade');
const resultColor = document.querySelector('.result_output');



submitBtn.addEventListener('click', ()=>{

    let finGread;
    let alcolor;

  
    toMark.innerHTML = `${totalmarks(group.value)}`;
    alcolor = toPoint.innerHTML = `${fpoint(group.value)}`;
    finGread = toGrade.innerHTML = totalgrade(fpoint(group.value));

    grade.innerHTML= finGread;

    if(alcolor == 'Faill'){
        resultColor.id = 'redalart';
    }else if( alcolor <= 5){
        resultColor.id = 'godalart';
    }
    else{
        resultColor.id = "";
    }
    

});







