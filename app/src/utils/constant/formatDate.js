
export function formatDate(inputDate) {
    const options = { year: 'numeric', month: 'short', day: '2-digit', hour12: true };
    const formattedDate = new Date(inputDate).toLocaleDateString('en-US', options);
    return formattedDate;
  }
  