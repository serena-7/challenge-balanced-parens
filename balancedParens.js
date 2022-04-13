// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:
function has_balanced_parens(str){
    let open = 0;
    let close = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === '('){
            open++;
        } else if (str[i] === ')'){
            close++;
        }
    }
    return(open === close);
}

//more condensed version
const has_balanced_parens2 = str => str.split('(').length === str.split(')').length;

console.log(has_balanced_parens2(sample1));
console.log(has_balanced_parens2(sample2));
console.log(has_balanced_parens2(sample3));
console.log(has_balanced_parens2(sample4));