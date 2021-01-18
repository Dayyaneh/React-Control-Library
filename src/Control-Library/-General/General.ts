const classNames = (Array: string[]): string => Array.reduce((acc, value)=> {
    return value ? acc.concat(value).concat(' ') : acc}, ''); 

export default classNames; 