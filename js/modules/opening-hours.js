export default class OpeningHours {
  constructor({ openingDays }) {
    this.openingDays = document.querySelector(openingDays);
    this.activeClass = 'opened';
  }

  openingHoursData() {
    this.weekdays = this.openingDays.dataset.weekdays.split(',').map(Number);
    this.weeklySchedule = this.openingDays.dataset.schedule.split(',').map(Number);
  }

  currentTimeData() {
    this.currentDate = new Date();
    this.currentDay = this.currentDate.getDay();
    this.currentTime = this.currentDate.getUTCHours() - 3;
  }

  isOpen() {
    this.openWeek = this.weekdays.indexOf(this.currentDay) !== -1;
    this.openTime = (this.currentTime >= this.weeklySchedule[0] && this.currentTime < this.weeklySchedule[1]);
  
    return this.openWeek && this.openTime;
  }

  activeOpened() {
    if (this.isOpen) {
      this.openingDays.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.openingDays) {
      this.openingHoursData();
      this.currentTimeData();
      this.activeOpened();
    }

    return this;
  }
}
