const value = 'c';

(value === 'a')
    ? console.log('a')
    : (value === 'b' || value === 'c' || value === 'd' || value === 'e')
            ? console.log('others')
            : console.log('unknown');