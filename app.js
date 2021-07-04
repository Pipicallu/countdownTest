const countdown = () => {
    const countDate = new Date('May 23, 2023 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // calculate
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % day) / minute);
    const textSecond = Math.floor((gap % day) / second);
    console.log(textDay);
    console.log(textHour);
    console.log(textMinute);
    console.log(textSecond);


}

countdown();