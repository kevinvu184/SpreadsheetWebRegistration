function limitHour() {
    let daySelected = event.currentTarget.value;
    let hourAvailable = '';
    let min = ['10', '20', '30', '40', '50', '00'];
    let limitHour = false;

    hourAvailable = '<option value="">Select time slot</option>';

    if (daySelected === '18' || daySelected === '22' || daySelected === '25' || daySelected === '29') {
        var firstHour = '14';
        var secondHour = '15';
        var thirdHour = '16';
        limitHour = true;
    } else if (daySelected === '19' || daySelected === '26') {
        var firstHour = '18';
        var secondHour = '19';
        var thirdHour = '20';
        limitHour = true;

    } else if (daySelected === '21' || daySelected === '28') {
        var firstHour = '17';
        var secondHour = '18';
        var thirdHour = '19';
        limitHour = true;
    }

    if (limitHour === true) {
        for (let i = 2; i <= 4; ++i) {
            if (min[i + 1] !== '00') {
                hourAvailable += '<option value="' + firstHour + min[i] + '">' + firstHour + ':' + min[i] + ' - ' + firstHour + ':' + min[i + 1] + '</option>';
            } else {
                hourAvailable += '<option value="' + firstHour + min[i] + '">' + firstHour + ':' + min[i] + ' - ' + secondHour + ':' + '00' + '</option>';
            }
        }

        hourAvailable += '<option value="' + secondHour + '00' + '">' + secondHour + ':' + '00' + ' - ' + secondHour + ':' + min[0] + '</option>';

        for (let j = 0; j <= 4; ++j) {
            if (min[j + 1] !== '00') {
                hourAvailable += '<option value="' + secondHour + min[j] + '">' + secondHour + ':' + min[j] + ' - ' + secondHour + ':' + min[j + 1] + '</option>';
            } else {
                hourAvailable += '<option value="' + secondHour + min[j] + '">' + secondHour + ':' + min[j] + ' - ' + thirdHour + ':' + '00' + '</option>';
            }
        }

        hourAvailable += '<option value="' + thirdHour + '00' + '">' + thirdHour + ':' + '00' + ' - ' + thirdHour + ':' + min[0] + '</option>';

        for (let i = 0; i <= 1; ++i) {
            hourAvailable += '<option value="' + thirdHour + min[i] + '">' + thirdHour + ':' + min[i] + ' - ' + thirdHour + ':' + min[i + 1] + '</option>';
        }

        document.getElementById('hour').innerHTML = hourAvailable;
    }

}

function renderHour() {
    document.getElementById('hour').innerHTML = '<option value="" selected>Please select date first</option>';
}

function seedDay() {
    let dayAvailable = `
    <option value="">Select date</option>
    <optgroup label="Week 10">
        <option value="18">Monday, 18 May 2020</option>
        <option value="19">Tuesday, 19 May 2020</option>
        <option value="21">Thursday, 21 May 2020</option>
        <option value="22">Friday, 22 May 2020</option>
    </optgroup>
    <optgroup label="Week 11">
        <option value="25">Monday, 25 May 2020</option>
        <option value="26">Tuesday, 26 May 2020</option>
        <option value="28">Thursday, 28 May 2020</option>
        <option value="29">Friday, 29 May 2020</option>
    </optgroup>
    `;
    document.getElementById('date').innerHTML = dayAvailable;
}

var patternIDNum = /^S{1}([0-9]{7})$/;


function validateFormChooseSlot(){
    var noErrChooseSlot = true;
    

    var firstPartnerId = document.getElementById('pid1').value;
    var secondPartnerId = document.getElementById('pid2').value;

    if(firstPartnerId !== ''){
        if(!patternIDNum.test(firstPartnerId)){
            document.getElementById('pid1Err').innerHTML='<small>Incorrect ID format (check uppercase S,...)</small>';
            noErrChooseSlot=false;
        }
    }else{
        document.getElementById('pid1Err').innerHTML='';
    }

    if(secondPartnerId !== ''){
        if(!patternIDNum.test(secondPartnerId)){
            document.getElementById('pid2Err').innerHTML='<small>Incorrect ID format (check uppercase S,...)</small>';
            noErrChooseSlot=false;
        }
    }else{
        document.getElementById('pid2Err').innerHTML='';
    }

    var dateElement = document.getElementById('date');
    var dateValue = dateElement.options[dateElement.selectedIndex].text;
    if(dateValue ==='Select date'){
        noErrChooseSlot=false;
        document.getElementById('dateErr').innerHTML='<small>Please pick a date</small>';
    }else{
        document.getElementById('dateErr').innerHTML='';
    }   

    var hourElement = document.getElementById('hour');
    var hourValue = hourElement.options[hourElement.selectedIndex].text;
    if(hourValue === 'Please select date first'||hourValue ==='Select time slot'){
        noErrChooseSlot = false;
        document.getElementById('hourErr').innerHTML='<small>Please pick an hour</small>';
    }else{
        document.getElementById('hourErr').innerHTML='';

    }

    return noErrChooseSlot;
}

function validateFormLogin(){
    var noErrLogin=true;

    var loginValue = document.getElementById('loginID').value;
    
    if(!patternIDNum.test(loginValue)){
        noErrLogin=false;
        document.getElementById('loginErr').innerHTML='<small>Incorrect ID format (check uppercase S,...)</small>';
    }else{
        document.getElementById('loginErr').innerHTML='';
    }

    return noErrLogin;
}