//const
const block = document.getElementById('Block');
const bold = document.getElementById('bol');
const itali = document.getElementById('ital');
const underLine = document.getElementById('undLine');
const strike = document.getElementById('strike');
const leftA = document.getElementById('leftAlign');
const centerA = document.getElementById('centerAlign');
const rightA = document.getElementById('rightAlign');
const save = document.getElementById('saveBtn');

// render btn sec2
fontBold = false;
fontItalic = false;
underlineText = false;
strikeText = false;
leftAl = false;
centerAl = false;
rightAl = false;

function render() {

    if (fontBold) {
        bold.classList.add('gray1');
        block.style.fontWeight = 'bold';
    } else {
        bold.classList.remove('gray1');
        block.style.fontWeight = 'normal';

    }
    if (fontItalic) {
        itali.classList.add('gray1');
        block.classList.add('fontStyle');
    } else {
        itali.classList.remove('gray1');
        block.classList.remove('fontStyle');
    }

    let textDecoration = '';
    if (underlineText) {

        textDecoration += 'underline ';

    }

    if (strikeText) {

        textDecoration += 'line-through ';

    }
    block.style.textDecoration = textDecoration;
}

// bold text
bold.onclick = function() {
    if (fontBold) {

        fontBold = false;
    } else {

        fontBold = true;
    }
    render();
}

// italic text
itali.onclick = function() {
    if (fontItalic) {
        fontItalic = false;
    } else {
        fontItalic = true;
    }
    render();
}

// underline text
underLine.onclick = function() {
    if (underlineText) {
        underLine.classList.remove('gray1');

        underlineText = false;
    } else {
        underLine.classList.add('gray1');
        underlineText = true;
    }
    render();
}


// strike text
strike.onclick = function() {
    if (strikeText) {
        strike.classList.remove('gray1');
        strikeText = false;
    } else {
        strike.classList.add('gray1');
        strikeText = true;
    }
    render();
}

// left align

leftA.onclick = function() {
    block.style.textAlign = 'left';
}

// center align

centerA.onclick = function() {
    block.style.textAlign = 'center';
}

// right align

rightA.onclick = function() {
    block.style.textAlign = 'right';
}

//font-family
function fontFamily() {
    block.style.fontFamily = event.target.value;
}

//fontSize
function fontSizee() {
    block.style.fontSize = event.target.value;
}

// function block choose Color
function changeColor(c) {
    block.style.color = c;
}

// function block choose Background
function changeBg(color) {
    block.style.backgroundColor = color;
    block.style.backgroundImage = null;
}

// сhoose back-img
function changeIm(color) {
    block.style.backgroundImage = "url" + color;
    block.style.backgroundRepeat = "no-repeat";
    block.style.backgroundSize = "cover"

}

//function display color bg
function displayColor() {
    document.getElementById("chooseBgColor").style.display = "flex";
    document.getElementById("chooseBgImg").classList.add('disp');
    document.getElementById("chooseBgFile").classList.add('disp');
    document.getElementById("colorA").classList.add('active');
    document.getElementById("imgA").classList.remove('active');
    document.getElementById("fileA").classList.remove('active');
}

//function display img bg
function displayImg() {
    document.getElementById("chooseBgImg").classList.remove('disp');
    document.getElementById("chooseBgColor").style.display = "none";
    document.getElementById("chooseBgFile").classList.add('disp');
    document.getElementById("colorA").classList.remove('active');
    document.getElementById("fileA").classList.remove('active');
    document.getElementById("imgA").classList.add('active');
}

// displ file
function displayFile() {
    document.getElementById("chooseBgColor").style.display = "none";
    document.getElementById("chooseBgImg").classList.add('disp');
    document.getElementById("chooseBgFile").classList.remove('disp');
    document.getElementById("colorA").classList.remove('active');
    document.getElementById("imgA").classList.remove('active');
    document.getElementById("fileA").classList.add('active');
}
// url background
document.getElementById('customFile').onchange = function(e) {
    let file = e.target.files[0].name;
    block.style.backgroundImage = "url('" + file + "')";
}

// open lock
let login = document.getElementById('log');
let pass = document.getElementById('pass');
let validMsg = document.getElementById('validMsg');
let ar = document.getElementById('btnArea');
let openLock = document.getElementById('lockOpen');
let area = document.getElementById('textAr');
let menu2 = document.getElementById('menu2');
let menu1 = document.getElementById('menu1');
let loggedIn = false;

$('#logForm').submit(function(e) {
    e.preventDefault();
    if (!login.value && !pass.value) {
        validMsg.innerText = 'Value is empty';
        login.classList.add('is-invalid');
        pass.classList.add('is-invalid');
    } else if (login.value !== 'admin' || pass.value !== 'admin') {
        validMsg.innerText = 'Please check your login or password';
        login.classList.add('is-invalid');
        pass.classList.add('is-invalid');
    } else {
        login.classList.remove('is-invalid');
        pass.classList.remove('is-invalid');
        ar.removeAttribute('disabled');
        openLock.innerHTML = '<i class="uil uil-unlock"></i>';
        $('#exampleModal3').modal('hide');
        loggedIn = true;
        $('#lockOpen').attr('data-target', '#exampleModal7');

    }

})


// edit area
function areaEdit() {
    area.classList.remove('disp');
    block.classList.add('disp');

    menu2.classList.remove('disp');
    menu1.classList.add('disp');
}


// save edit area
function saveFun() {

    block.innerHTML = area.value;

    area.classList.add('disp');
    block.classList.remove('disp');


    menu2.classList.add('disp');
    menu1.classList.remove('disp');
}


//table-----------------------------------------------------------------------------------------------------------

//validation form table
$(document).ready(function() {
    $('#tableForm').submit(function(e) {
        e.preventDefault();
    })
});

function validateTable() {
    let validation = document.getElementById('validation-message');
    let validationCustom01 = document.getElementById('validationCustom01');
    let validationCustom02 = document.getElementById('validationCustom02');
    let validationCustom03 = document.getElementById('validationCustom03');
    let validationCustom04 = document.getElementById('validationCustom04');
    let validationCustom05 = document.getElementById('validationCustom05');
    let validationCustom06 = document.getElementById('validationCustom06');
    let validationCustom07 = document.getElementById('validationCustom07');
    hasErrors = false;
    if (validationCustom01.value.length < 1) {
        hasErrors = true;
    }
    if (validationCustom02.value.length < 1) {
        hasErrors = true;
    }
    if (validationCustom03.value.length < 1) {
        hasErrors = true;
    }
    if (validationCustom04.value.length < 1) {
        hasErrors = true;
    }
    if (validationCustom05.value.length < 1) {
        hasErrors = true;
    }
    if (validationCustom06.value.length < 1) {
        hasErrors = true;
    }
    if (validationCustom07.value.length < 1) {
        hasErrors = true;
    }

    if (hasErrors) {
        validation.innerHTML = "invalid value";
        validation.style.display = "block";
    } else {
        validation.innerHTML = "";
        validation.style.display = "none";
    }
    return hasErrors;
}

//create table
function createTbl() {
    if (!validateTable()) {
        let form = document.forms['formTb'];
        let countTr = form.countTR.value;
        let countTd = form.countTD.value; //count
        let borderValue = form.borderWidth.value;
        let borderType = form.borderType.value;
        let borderColor = form.borderColor.value;
        let borderHeightTD = form.borderHeightTD.value;
        let borderWidthTD = form.borderWidthTD.value;
        let tableStyle = 'border: ' + borderValue + 'px ' + borderType + ' ' + borderColor + '; width: ' + borderWidthTD + 'px; ' + 'height: ' + borderHeightTD + 'px';
        area.value += '<table>';
        for (let i = 1; i <= countTr; i++) {
            area.value += '<tr>';
            for (let j = 1; j <= countTd; j++) {
                area.value += '<td style="' + tableStyle + '">TD</td>';
            }
            area.value += '</tr>';
        }
        area.value += '</table>';
    }
}

//function BTN RESET Table
function resetTbl() {
    document.getElementsByName('formTb')[0].reset();
    document.getElementById('validationCustom07').selectedIndex = 0;
    document.getElementById('validationCustom06').selectedIndex = 0;
}



// ol-------------------------------------------------------------------------------

//VALIDATION OL FORM
$(document).ready(function() {
    $('#formLiOl').submit(function(e) {
        e.preventDefault();
    })
});

function validateLiOl() {
    let validation = document.getElementById('validation-messages');
    let validationCustom01 = document.getElementById('validationCustom08');
    let validationCustom02 = document.getElementById('validationCustom09');
    hasErrors = false;
    if (validationCustom01.value.length < 1) {
        hasErrors = true;
    }
    if (validationCustom02.value.length < 1) {
        hasErrors = true;
    }

    if (hasErrors) {
        validation.innerHTML = "invalid value";
        validation.style.display = "block";
    } else {
        validation.innerHTML = "";
        validation.style.display = "none";
    }
    return hasErrors;
}

//function btn-create Li OL
function createLiOl() {
    if (!validateLiOl()) {
        let form = document.forms['formOl'];
        let countLi = form.countLi.value;
        let typeLi = form.typeLi.value;
        area.value += '<ul style="list-style-type: ' + typeLi + ';">';
        for (let i = 1; i <= countLi; i++) {
            area.value += '<li>' + `item ` + i;
        }
        area.value += '</li>';
    }
}

//function BTN RESET Li ol
function resetLiOl() {
    document.getElementsByName('formOl')[0].reset();
    document.getElementById('validationCustom09').selectedIndex = 0;
}


// ul--------------------------------------------------------------------------------

//VALIDAION UL FORM
$(document).ready(function() {
    $('#formLiUl').submit(function(e) {
        e.preventDefault();
    })
});

function validateLiUl() {
    let validation = document.getElementById('validation-messagesss');
    let validationCustom010 = document.getElementById('validationCustom010');
    let validationCustom011 = document.getElementById('validationCustom011');
    hasErrors = false;
    if (validationCustom010.value.length < 1) {
        hasErrors = true;
    }
    if (validationCustom011.value.length < 1) {
        hasErrors = true;
    }

    if (hasErrors) {
        validation.innerHTML = "invalid value";
        validation.style.display = "block";
    } else {
        validation.innerHTML = "";
        validation.style.display = "none";
    }
    return hasErrors;
}

//function btn-create Li Ul
function createLiUl() {
    if (!validateLiUl()) {
        let form = document.forms['formUl'];
        let countLiUl = form.countLiUl.value;
        let typeLiUl = form.typeLiUl.value;
        area.value += '<ul style="list-style-type: ' + typeLiUl + ';">';
        for (let i = 1; i <= countLiUl; i++) {
            area.value += '<li>' + `item ` + i;
        }
        area.value += '</li>';
    }
}

//function BTN RESET Li Ul
function resetLiUl() {
    document.getElementsByName('formUl')[0].reset();
    document.getElementById('validationCustom011').selectedIndex = 0;
}

// func cancel
function cancelEnd() {
    $('#exampleModal7').modal('hide');
}

// func signOut
function signOut() {
    $('#exampleModal7').modal('hide');
    ar.setAttribute("disabled", "disabled");
}