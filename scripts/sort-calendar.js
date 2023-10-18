const theCalendar = document.getElementById('cal')

class newEvent {
  constructor(name, date, timeOfDay, place) {
    this.name = name
    this.date = date
    this.timeOfDay = timeOfDay
    this.place = place
  }
}

class Calendar {
  constructor(events) {
    this.events = events
  }
}

const myCalendar = new Calendar([
  new newEvent('Det Nye NSB & Schola Cantorum - Peer Gynt Suite & Ibsensangene', '22.11.21', '20.00', 'Cosmopolite, Oslo'),
  new newEvent('NSBs Jul', '09.12.21', '20.00', 'Hamar Kulturhus'),
  new newEvent('NSBs Jul', '13.12.21', '20.30', 'USF Verftet, Bergen'),
  new newEvent('NSBs Jul', '14.12.21', '20.00', 'Parkteateret, Oslo'),
  new newEvent('NSBs Jul', '15.12.21', '20.00', 'Dokkhuset, Trondheim'),
  new newEvent('NSBs Jul', '17.12.21', '20.00', 'St.Croix, Fredrikstad')
])

for (let i = 0; i < myCalendar.events.length; i++) {
  const newEvent = document.createElement('a')
  const eventInQ = myCalendar.events[i]

  newEvent.innerText = eventInQ.name + ', ' + eventInQ.date + ', ' + eventInQ.timeOfDay + ', ' + eventInQ.place
  theCalendar.appendChild(newEvent)
}
















