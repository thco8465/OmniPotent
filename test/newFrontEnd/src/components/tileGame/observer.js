// Observer.js
export default class Observer {
    constructor() {
      this.observers = [];
    }
  
    subscribe(callback) {
      this.observers.push(callback);
    }
  
    notify(data) {
      this.observers.forEach(observer => observer(data));
    }
  }
  