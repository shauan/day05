
// Get the elements and store in a variable
let theCheck = document.getElementById('checkBox');
let usrName = document.getElementById('usr_name');
let usrLast = document.getElementById('usr_lname');
let usrNumber = document.getElementById('usr_number');
let rewardText = document.getElementById('reward-text');


// Click function to display or hide the forms if
// is not checked or checked
theCheck.addEventListener('click', function() {
    if (theCheck.checked != true) {
        usrName.className += 'hide-forms';
        usrLast.className += 'hide-forms';
        usrNumber.className += 'hide-forms';
        rewardText.className += 'hide-forms';
    } else {
        usrName.classList.remove('hide-forms');
        usrLast.classList.remove('hide-forms');
        usrNumber.classList.remove('hide-forms');
        rewardText.classList.remove('hide-forms');
    }
})