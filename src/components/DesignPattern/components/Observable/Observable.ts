import Observer from '../../../../Interface/observerInterface';
export default class Observable<T> {
    private observers: Observer<T>[] = [];
    constructor() {
        this.observers = [];
    }
    subscribe(observer: Observer<T>) {  
        this.observers.push(observer);
    }
    unsubscribe(observer: Observer<T>) {
        this.observers = this.observers.filter(o => o !== observer);
    }
    notifyObservers(data: T) {
        this.observers.forEach(observer => observer.update(data));
    }
} 