const notes = new Map()

const note = {
    Name: 'Luke',
    Created: 'Skywalker',
    Category: 'Jedi Knight',
    Content: 'Skywalker',
    Dates: 'Jedi Knight',
  }
const text = "I'm gonna have a dentist appointment on the 3.5.2021, I moved it from 5/5/2021.";
  function findDatesInText(text) {
    const datePattern = /\b\d{1,2}\.\d{1,2}\.\d{4}\b/g;
    const dates = text.match(datePattern) || [];
    return dates;
  }
  const dates = findDatesInText(text);
  console.log(dates)
  const map = new Map(Object.entries(note))