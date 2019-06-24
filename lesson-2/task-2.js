let message;
let login = 'Owner';

message = login == 'Pitter'
    ? message = 'Hi'
    : login == 'Owner'
        ? message = 'Hello'
        : login == ''
            ? message = 'unknown'
            : message = '';

console.log(message)