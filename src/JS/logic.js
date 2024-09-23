// variable that stores total amount of time in mints
const mints = 1; //testing purpose

// function that takes time in mints and returns in seconds
export const mintsToSeconds = (mints) => {
  return mints * 60; // 60 seconds in a minute * 1000 milliseconds in a second
};

// function that takes the given time and decrease it after each second and log it sequentially
export const countDown = (seconds) => {
  let currentSecond = seconds
  if(currentSecond === 0){
    console.log('Time is up!');
    return;
  }else{
    console.log(currentSecond);
    setTimeout(() => countDown(currentSecond - 1), 1000); // decrease the second and call the function again after 1 second
  }
};

export const timeFormatter = (seconds) =>{
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes < 10? '0' : ''}${minutes}:${remainingSeconds < 10? '0' : ''}${remainingSeconds}`;
}


console.log(timeFormatter(1234));

