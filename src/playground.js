import { Observable } from 'rxjs';

const observable$ = Observable.create(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
        observer.next(4);
        observer.complete();
    }, 1000);
});

const interval$ = Observable.create(observer => {
    const interval = setInterval(() => {
        observer.next('hi');
    }, 1000);

    return function unsubscribe() {
        clearInterval(interval);
        console.log('unsubscribe');
    };
});

observable$.subscribe({
    next: data => console.log('observable 1 : ', data),
    complete: () => console.log('observable 1 : ', 'completed'),
    error: err => console.error('observable 1 : ', err)
});

observable$.subscribe({
    next: data => console.log('observable 2 : ', data * 2),
    complete: () => console.log('observable 2 : ', 'completed'),
    error: err => console.error('observable 2 : ', err)
});

const intervalsubscribtion = interval$.subscribe(
    data => console.log('interval observable : ', data),
    () => console.log('interval observable : ', 'completed'),
    err => console.error('interval observable : ', err)
);

setTimeout(() => intervalsubscribtion.unsubscribe(), 3000);
