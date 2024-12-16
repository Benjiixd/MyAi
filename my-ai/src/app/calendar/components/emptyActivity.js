export class EmptyActivity {
  constructor( start, end) {
    //this.start = start;
    //this.end = end;
    //this.startInMinutes = this.convertTimeToMinutes(start);
    //this.endInMinutes = this.convertTimeToMinutes(end);
    this.startInMinutes = start
    this.endInMinutes = end
    this.isEmpty = true;

  }

  convertTimeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  isWithinTimeRange(minutes) {
    return minutes >= this.startInMinutes && minutes < this.endInMinutes;
  }

  calculateCoveredHeight() {
    console.log('Calculating covered height');
    let time = this.endInMinutes - this.startInMinutes;
    console.log('Time:', time);
    let height = time / 1440
    console.log('Height:', height);
  }

  getActivity() {
    return this;
  }
}