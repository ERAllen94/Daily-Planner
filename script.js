

function loadPage() {
    
    const currentDate = moment().startOf('day');
    const timeNow = moment().startOf('hour');
    for (var i = 0; i < 16; i++) {
        const currentTaskTime = moment().startOf('day').add(8+i, 'hours');
        console.log('bruh', currentTaskTime.format('MMM Do YYYY HH:SS'), timeNow.format('MMM Do YYYY HH:SS'));
        const task = localStorage.getItem(`task-${i}`);
        $('#currentDay').text(currentDate.format('MMM Do YYYY'));
        //if(currenttasktime){ = 
        if (currentTaskTime.isSame(timeNow)) {
            console.log('olo', i)
            $(`#load-${i}`).addClass('bg-danger');
        } else if(currentTaskTime.isAfter(timeNow)) {
            console.log('olo-again', i)
            $(`#load-${i}`).addClass('bg-success');
        } else {
            $(`#load-${i}`).addClass('bg-secondary');
            console.log('olo the third', i)
        }
        if(task) {
            $(`#load-${i}`).val(task);            
        }
    }
}


$( document ).ready(loadPage);

$('.save').on('click',function() {
var temporaryKey=$(this).siblings(".hour").attr("id");
var temporaryText= $(this).siblings(".calendar-text").val();
localStorage.setItem(temporaryKey,temporaryText)
})

