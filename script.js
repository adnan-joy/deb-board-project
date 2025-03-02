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