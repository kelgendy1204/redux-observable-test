import faker from 'faker';

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export function fetchTodo() {
    return new Promise((resolve, reject) => {
        const timeByMilliSeconds = getRandomNumber(1000, 3000);
        setTimeout(() => {
            resolve(faker.hacker.phrase());
        }, timeByMilliSeconds);
    });
}
