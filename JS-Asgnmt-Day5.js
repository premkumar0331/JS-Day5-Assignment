// Do the below programs in anonymous function & IIFE
// Print odd numbers in an array
// Convert all the strings to title caps in a string array
// Sum of all numbers in an array
// Return all the prime numbers in an array
// Return all the palindromes in an array   
// Return median of two sorted arrays of the same size
// Remove duplicates from an array
// Rotate an array by k times

//Q1. 

//i) Print odd numbers in an array?
//a) as a anonymous function type
let arr1 = [1,2,3,4,5,6,7];
let temp =[];
const odd = function(arr){
    for(let i=0;i<arr.length;i++){
    if(arr[i]%2!==0){
        temp.push(arr[i]);
    }
}
    return temp;
}

console.log(odd(arr));

//b)as IIFE type.
let arr =[1,2,3,4];
let temp=[];
(function(arr){
    for(let i=0;i<arr.length;i++){
    if(arr[i]%2!==0){
        temp.push(arr[i]);
    }
}
    return console.log(temp);
})(arr);

//ii)Convert all the strings to title caps in a string array?
//a) as a anonymous function type
let arr = ["prem","kumar","devandla"];
let temp = [];
const cap = function(arr){
    for(let i=0;i<arr.length;i++){
        temp.push(arr[i].toUpperCase());
    }
    return temp;
}
console.log(cap(arr));

//b)as IIFE type.
let arr = ["prem","kumar","devandla"];
let temp = [];
(function(arr){
    for(let i=0;i<arr.length;i++){
        temp.push(arr[i].toUpperCase());
    }
    return console.log(temp);
})(arr);

//iii)Sum of all numbers in an array?
//a) as a anonymous function type
let arr1 = [2,4,6,3,4];
let sum =0;
const add = function(arr){
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(add(arr1));

//b)as IIFE type.
let arr1 = [2,4,6,3,4];
let sum =0;
(function(arr){
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return console.log(sum);
})(arr1);

//iv)Return all the prime numbers in an array?

let arr2 = [2,4,3,5,7,11,22,555,19];
const isprime = function(num){
    if(num<2){
        return false;
    }else{
        for(let i=2;i<num;i++){
            if(num%i==0){
                return false;
            }
        }
        return true;
    }
}

//a) as a anonymous function type
let temp =[];
const prime = function(arr){
    for(let i=0;i<arr.length;i++){
        if(isprime(arr[i])){
            temp.push(arr[i]);
        }
    }
    return temp;
}
console.log(prime(arr2));

//b)as IIFE type.
let temp =[];
(function(arr){
    for(let i=0;i<arr.length;i++){
        if(isprime(arr[i])){
            temp.push(arr[i]);
        }
    }
    return console.log(temp);
})(arr2);

//v) Return all the palindromes in an array?

const ispalindrome = function(a){
    let temp = [];
   const p = a.split("");
    for(let i=a.length-1;i>=0;i--){
        temp.push(p[i]);
    }
    const x = temp.join("");
    if(a==x){
        return true
    }else {
        return false;
    }
}

//a) as a anonymous function type
let arr1 = ["malayalam","tenet","Prem","kumar","12321"];
const palindrome = function(arr){
    let temp1=[];
    for(let i=0;i<arr.length;i++){
        if(ispalindrome(arr[i])){            
            temp1.push(arr[i]);
        }
    }
    return temp1;
}

//b)as IIFE type.
let arr1 = ["malayalam","tenet","Prem","kumar","12321"];
(function(arr){
    let temp1=[];
    for(let i=0;i<arr.length;i++){
        if(ispalindrome(arr[i])){            
            temp1.push(arr[i]);
        }
    }
    return console.log(temp1);
})(arr);

console.log(palindrome(arr1));

//vi) Return median of two sorted arrays of the same size?
//a) as a anonymous function type
let a = [2,4,6,8];
const median = function(arr){
    let m=0;
    if(arr.length%2===0){
    let p = arr.length/2
        m = (arr[p-1]+arr[p])/2;
    }else{
        m = arr[((arr.length+1)/2)-1];
    }
 return m;
}
console.log(median(a));

//b)as IIFE type.
let a = [2,4,6,8];
(function(arr){
    let m=0;
    if(arr.length%2===0){
    let p = arr.length/2
        m = (arr[p-1]+arr[p])/2;
    }else{
        m = arr[((arr.length+1)/2)-1];
    }
 return console.log(m);
})(a);


//vii) Remove duplicates from an array?
//a) as a anonymous function type
let a = [22,32,43,23,23,22,32,45,56];
const dup = function(arr){
    for(let i=0;i<arr.length;i++){
        let e = arr[i];
        for(let j=i+1;j<arr.length;j++){
            if(e===arr[j]){
                arr.splice(j,1);
            }
        }
    }
    return arr;
}
console.log(dup(a));

//b)as IIFE type.
let a = [22,32,43,23,23,22,32,45,56];
(function(arr){
    for(let i=0;i<arr.length;i++){
        let e = arr[i];
        for(let j=i+1;j<arr.length;j++){
            if(e===arr[j]){
                arr.splice(j,1);
            }
        }
    }
    return console.log(arr);
})(a);


//viii) Rotate an array by k times
//a) as a anonymous function type
let a =[1,2,3,4];
const rotate = function(arr,k){
    let n = k%arr.length;
    for(let i=0;i<n;i++){
        let temp = arr[0];
        for(let j=1;j<arr.length;j++){
            arr[j-1]= arr[j];
        }
        arr[arr.length-1] =temp;
    }
    return arr;
}
console.log(rotate(a,2));

//b)as IIFE type.
let a =[1,2,3,4];
(function(arr,k){
    let n = k%arr.length;
    for(let i=0;i<n;i++){
        let temp = arr[0];
        for(let j=1;j<arr.length;j++){
            arr[j-1]= arr[j];
        }
        arr[arr.length-1] =temp;
    }
    return console.log(arr);
})(a,2);


//Q3. Do the below programs in arrow functions.

// a) Print odd numbers in an array
let arr1 = [1,2,3,4,5,6,7];
let temp =[];
const odd = (arr)=>{
    for(let i=0;i<arr.length;i++){
    if(arr[i]%2!==0){
        temp.push(arr[i]);
    }
}
    return temp;
}

console.log(odd(arr1));

// b) Convert all the strings to title caps in a string array
let arr = ["prem","kumar","devandla"];
let temp = [];
const cap = (arr)=>{
    for(let i=0;i<arr.length;i++){
        temp.push(arr[i].toUpperCase());
    }
    return temp;
}
console.log(cap(arr));

// c) Sum of all numbers in an array
let arr1 = [2,4,6,3,4];
let sum =0;
const add = (arr)=>{
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(add(arr1));

// d) Return all the prime numbers in an array
let arr2 = [2,4,3,5,7,11,22,555,19];
const isprime = (num)=>{
    if(num<2){
        return false;
    }else{
        for(let i=2;i<num;i++){
            if(num%i==0){
                return false;
            }
        }
        return true;
    }
}
let temp =[];
const prime = (arr)=>{
    for(let i=0;i<arr.length;i++){
        if(isprime(arr[i])){
            temp.push(arr[i]);
        }
    }
    return temp;
}
console.log(prime(arr2));

// e) Return all the palindromes in an array
const ispalindrome = (a)=>{
    let temp = [];
   const p = a.split("");
    for(let i=a.length-1;i>=0;i--){
        temp.push(p[i]);
    }
    const x = temp.join("");
    if(a==x){
        return true
    }else {
        return false;
    }
}
let arr1 = ["malayalam","tenet","Prem","kumar","12321"];
const palindrome = (arr)=>{
    let temp1=[];
    for(let i=0;i<arr.length;i++){
        if(ispalindrome(arr[i])){            
            temp1.push(arr[i]);
        }
    }
    return temp1;
}

console.log(palindrome(arr1));

