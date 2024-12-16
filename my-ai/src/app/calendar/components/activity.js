export class Activity {
  constructor(name, start, end) {
    this.name = name;
    this.start = start;
    this.end = end;
    this.startInMinutes = this.convertTimeToMinutes(start);
    this.endInMinutes = this.convertTimeToMinutes(end);
    this.isEmpty = false;
    this.height = this.calculateCoveredHeight();
    console.log('Activity:', this);
  }

  calculateCoveredHeight() {
    console.log('Calculating covered height');
    let time = this.endInMinutes - this.startInMinutes;
    console.log('Time:', time);
    let height = time / 1440
    console.log('Height:', height);
    if (height < 0) {
      return 100
    }
    return height;
  }

  convertTimeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }
}

export class EmptyActivity {
  constructor(start, end) {
    this.startInMinutes = start;
    this.endInMinutes = end;
    this.isEmpty = true;
    this.height = this.calculateCoveredHeight();
  }

  calculateCoveredHeight() {
    console.log('Calculating covered height');
    let time = this.endInMinutes - this.startInMinutes;
    console.log('Time:', time);
    let height = time / 1440
    console.log('Height:', height);
    if (height < 0) {
      
      return 100
    }
    return height;

  }
}