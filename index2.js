// let arr=[2,4,6,3];
// let mult=arr.reduce((accumulator,curElem)=>{
// return accumulator+=curElem;
// },7);//at first of the array 7 is get added

// let arr2=arr.map((curElem,index,array)=>{
//     return `the curnt element: +${curElem}+the arrya+${array}`; 
// });
// console.log(arr);
// console.log(mult);

// let maxelem=arr.map((curElem)=>curElem*2).filter((curElem)=>curElem>=10).reduce((accumulator,curElem)=>accumulator+=curElem)
// console.log(maxelem);

const arr =[['zone1','zone2'],
        ['zone3','zone4'],['zone5','zone6']];
        let flat=arr.reduce((accum,curElem)=>
        {
             return accum.concat(curElem);
        })
        console.log(flat);

// const my= "The tanuj is a very bad boy";
// console.log(my.indexOf('a',10));

