function DynamicDate() {
    const dateObj = new Date();
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const thisDay = weekdays[dateObj.getDay()];
    const thisDate = dateObj.getDate();
    const thisMonth = months[dateObj.getMonth()];
    const thisYear = dateObj.getFullYear();
    const today = `${thisDate} ${thisMonth} ${thisYear}`;
    document.querySelector('#today p:last-child').innerText = today;
    document.querySelector('#today p:first-child').innerText = thisDay;
}
DynamicDate();

// Dynamic color change

const colors = ['#FFDDDD', '#DDFFDD', '#DDDDFF', '#D0FFFF', '#FFFFD0', '#FFD0FF'];
document.querySelector("#theme-btn img").addEventListener('click', function() {
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * 6)];
})

// Activity clear 
document.querySelector("#activity-log button").addEventListener('click', function(event) {
    const btn = event.target;
    btn.parentNode.parentNode.querySelector('#activity-container').innerHTML = '';
});

// complete button actions
let count = 0;
document.getElementById('box-container').addEventListener('click', function(event) {
    if (event.target.classList.contains('btn')) {
        count++;
        let timeAP;
        if (new Date().getHours() < 12)
            timeAP = 'AM';
        else
            timeAP = 'PM';
        const time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} ${timeAP}`;
        const btn = event.target;
        const card = btn.closest('.card');
        const title = card.querySelector('h4').innerText;
        // Alert
        window.alert("Board updated successfully.");
        if (count === 6)
            window.alert("Congrats!!! You have completed all the Tasks Assigned.");
        // Incremental and decremental count
        const tasksAssigned = document.querySelector("#tasks-assigned h3");
        const tasksCompleted = document.querySelector("#tasks-completed p");
        tasksCompleted.innerText = parseInt(tasksCompleted.innerText) + 1;
        tasksAssigned.innerText = `0${parseInt(tasksAssigned.innerText) - 1}`;
        // Disable complete button
        btn.classList.add('text-opacity-50', 'bg-opacity-50');
        btn.setAttribute('disabled', undefined);
        // Add activity
        const activityContainer = document.getElementById('activity-container');
        const activity = document.createElement('div');
        activity.classList.add('p-2', 'rounded', 'bg-secondary', 'mx-4');
        activity.innerText = `You have completed the Task ${title} at ${time}`;
        activityContainer.appendChild(activity);
    }
});