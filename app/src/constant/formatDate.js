
export function formatDate(inputDate) {
    const options = { year: 'numeric', month: 'short', day: '2-digit', hour12: true };
    const formattedDate = new Date(inputDate).toLocaleDateString('en-US', options);
    return formattedDate;
  }
  
  export function formatTime(inputTime) {
    // Split the input time into hours and minutes
    const [hours, minutes] = inputTime.split(':');
    
    // Convert hours to an integer
    const hoursInt = parseInt(hours, 10);
  
    // Determine whether it's AM or PM
    const period = hoursInt >= 12 ? 'PM' : 'AM';
  
    // Convert hours to 12-hour format
    const formattedHours = hoursInt % 12 === 0 ? 12 : hoursInt % 12;
  
    // Create the formatted time string
    const formattedTime = `${formattedHours}:${minutes} ${period}`;
  
    return formattedTime;
  }
  

  