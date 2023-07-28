// Function to find dates in text
function findDatesInText(text) {
    const datePattern = /\b\d{1,2}\.\d{1,2}\.\d{4}\b/g;
    const dates = text.match(datePattern) || [];
    return dates;
  }
  
