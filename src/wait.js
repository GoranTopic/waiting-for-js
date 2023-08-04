class wait {
  static for(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }

  static async shortTime() {
    const randomTime = Math.random() * 2000 + 500; // Random time between 500ms and 2500ms
    return new Promise((resolve) => setTimeout(resolve, randomTime));
  }

  static async longTime() {
    const randomTime = Math.random() * 10000 + 5000; // Random time between 5000ms and 15000ms
    return new Promise((resolve) => setTimeout(resolve, randomTime));
  }

  static async defaultWait() {
    const randomTime = Math.random() * 3000 + 1000; // Random time between 1000ms and 4000ms
    return new Promise((resolve) => setTimeout(resolve, randomTime));
  }

    static async until(func) {
        while (!func()) {
            await this.defaultWait();
        }
    }

  static async wait() {
    const randomWait = Math.random();
    if (randomWait < 0.33) {
      return this.shortTime();
    } else if (randomWait < 0.66) {
      return this.longTime();
    } else {
      return this.defaultWait();
    }
  }
}

module.exports = wait;
