import {Component} from '@angular/core';


let events = [
  {
    "meetingDate": "2024-08-02T18:30:00",
    "startDate": "2024-08-02T19:00:00",
    "name": "Sfilata dei carri",
    "duration": 60,
    "color": "#DC143CAA"
  },
  {
    "meetingDate": "2024-08-02T21:30:00",
    "startDate": "2024-08-02T21:30:00",
    "name": "Taglio del ceppo",
    "duration": 60,
    "color": "#8A2BE2AA"
  },
  {
    "meetingDate": "2024-08-03T10:30:00",
    "startDate": "2024-08-03T11:00:00",
    "name": "Corsa nei sacchi",
    "duration": 60,
    "color": "#FF8C00AA"
  },
  {
    "meetingDate": "2024-08-03T15:00:00",
    "startDate": "2024-08-03T15:30:00",
    "name": "Strade mate",
    "duration": 60,
    "color": "#FFD700AA"
  },
  {
    "meetingDate": "2024-08-03T19:00:00",
    "startDate": "2024-08-03T19:30:00",
    "name": "Staffetta",
    "duration": 60,
    "color": "#FF4500AA"
  },
  {
    "meetingDate": "2024-08-04T08:30:00",
    "startDate": "2024-08-04T09:00:00",
    "name": "Cibbe",
    "duration": 240,
    "color": "#FF6347AA"
  },
  {
    "meetingDate": "2024-08-04T15:30:00",
    "startDate": "2024-08-04T16:00:00",
    "name": "Bocce",
    "duration": 120,
    "color": "#DC1934AA"
  },
  {
    "meetingDate": null,
    "startDate": "2024-08-05T20:00:00",
    "name": "Calcio eliminatorie",
    "duration": 60,
    "color": "#FF03F0AA"
  },
  {
    "meetingDate": null,
    "startDate": "2024-08-05T21:00:00",
    "name": "Calcio eliminatorie",
    "duration": 60,
    "color": "#A11004AA"

  },
  {
    "meetingDate": null,
    "startDate": "2024-08-06T20:00:00",
    "name": "Calcio eliminatorie",
    "duration": 60,
    "color": "#0FFFF0AA"
  },
  {
    "meetingDate": null,
    "startDate": "2024-08-06T21:00:00",
    "name": "Calcio eliminatorie",
    "duration": 60,
    "color": "#803386AA"

  },
  {
    "meetingDate": null,
    "startDate": "2024-08-07T20:00:00",
    "name": "Calcio eliminatorie",
    "duration": 60,
    "color": "#AFCA06AA"
  },
  {
    "meetingDate": null,
    "startDate": "2024-08-07T21:00:00",
    "name": "Calcio eliminatorie",
    "duration": 60,
    "color": "#7DDAB9AA"
  },
  {
    "meetingDate": null,
    "startDate": "2024-08-08T20:00:00",
    "name": "Calcio eliminatorie",
    "duration": 60,
    "color": "#E07D17AA"
  },
  {
    "meetingDate": null,
    "startDate": "2024-08-08T21:00:00",
    "name": "Calcio eliminatorie",
    "duration": 60,
    "color": "#E6648BAA"
  },
  {
    "meetingDate": "2024-08-09T20:30:00",
    "startDate": "2024-08-09T20:30:00",
    "name": "Calcio finali 3^/4^ posto",
    "duration": 60,
    "color": "#1E2539AA"
  },
  {
    "meetingDate": "2024-08-09T21:30:00",
    "startDate": "2024-08-09T21:30:00",
    "name": "Calcio finali 1^/2^ posto",
    "duration": 60,
    "color": "#C81EB7AA"
  },
  {
    "meetingDate": "2024-08-10T08:00:00",
    "startDate": "2024-08-10T08:30:00",
    "name": "Pallavolo",
    "duration": 600,
    "color": "#d93f43AA"
  },
  {
    "meetingDate": "2024-08-11T14:30:00",
    "startDate": "2024-08-11T15:00:00",
    "name": "Freccette",
    "duration": 240,
    "color": "#3f145dAA"
  },
  {
    "meetingDate": "2024-08-11T20:30:00",
    "startDate": "2024-08-11T21:00:00",
    "name": "Sfilata di moda",
    "duration": 60,
    "color": "#61fcf0AA"
  },
  {
    "meetingDate": "2024-08-12T20:00:00",
    "startDate": "2024-08-12T20:30:00",
    "name": "Briscola",
    "duration": 180,
    "color": "#1E2539AA"
  },
  {
    "meetingDate": "2024-08-13T20:00:00",
    "startDate": "2024-08-13T20:30:00",
    "name": "Morra",
    "duration": 180,
    "color": "#3f145dAA"
  },
  {
    "meetingDate": "2024-08-14T14:00:00",
    "startDate": "2024-08-14T14:30:00",
    "name": "Bale pignote jr",
    "duration": 240,
    "color": "#3f145dAA"
  },
  {
    "meetingDate": "2024-08-14T20:30:00",
    "startDate": "2024-08-14T21:00:00",
    "name": "Intesa vincente",
    "duration": 60,
    "color": "#4908e9AA"
  },
  {
    "meetingDate": "2024-08-15T10:30:00",
    "startDate": "2024-08-15T11:00:00",
    "name": "Camerieri",
    "duration": 120,
    "color": "#ae0915AA"
  },
  {
    "meetingDate": "2024-08-15T14:00:00",
    "startDate": "2024-08-15T14:30:00",
    "name": "Balem pignote sr",
    "duration": 240,
    "color": "#19a547AA"
  }
]

export type Event = {
  name: string
  startDate: string
  duration: number
  description?: string
  meetingDate?: string | null
  color: string
}


@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {

  days = Array.from({length: 15}, (_, i) => new Date(2024, 7, i + 2))
  events = events as Event[]
  hours = Array.from({length: 15}, (_, i) => i + 8)
  today = this.days[1]
  height = (<any>this).$refs?.heightRefEl?.clientHeight

  formatHour(date: Date) {
    return date.toLocaleTimeString('it-IT', {hour: '2-digit', minute: '2-digit'})
  }

  toWeekday(date: Date) {
    return date.toLocaleDateString('it-IT', {weekday: 'short'})
  }

  isToday(date: Date) {
    return date.toDateString() === this.today.toDateString()
  }

  toDate(date: any) {
    return new Date(date)
  }

  findDayIndex(event: any) {
    return this.days.findIndex(d => d.toDateString() === new Date(event.startDate).toDateString())
  }
}
