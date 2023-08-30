const userId = 1234;
const status = true;
let state;

/*
    number => 2 to power 53
    bigint
    string => ""
    boolean => true/false
    null => standalone value
    undefined => undefined
    symbol => unique
*/

console.table([typeof userId, typeof status, typeof state, typeof undefined, typeof null])