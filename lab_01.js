console.log("TASK 1")

function addition(a , b)
{
    return a+b;
}

console.log("TASK 2");
function bitwiseAND(a, b){
    return a&b;
}

function bitwiseOR(a , b){
    return a|b;
}

function bitwiseXOR(a ,b){
    return a^b;
}

console.log("TASK 3");
function addUp(a) {
    return a*(a+1)/2;
}

console.log("TASK 4");
function progressBar(a){
    let fSlots = Math.floor(a/10);

    let display = "";
    for(let i = 0; i < 10; i++)
    {
        if(i< fSlots )
        {
            display+="#"
        }
        else{
            display+= "-";
        }
    }
    return display;
}
console.log("TASK 5");
function minMax(arr){

    if (arr.length === 0) {
        return [];
    }

    let min = arr[0];
    let max = arr[0];

    for(let i=0; i< arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        if(arr[i] > max){
            max = arr[i];
        }
    }

    return [min , max];
}

console.log("TASK 6");
function calculateRepoStats(repos)
{

    const star =repos.map(r =>r.stars);

    const minStars=Math.min(...star);
    const maxStars= Math.max(...star);
    let avgStars =0;

    for ( let i=0; i<star.length; i++)
    {
        avgStars  +=star[i];
    }
    avgStars =Math.floor(avgStars/star.length);
     const  varianceScore = Math.abs(maxStars - minStars);

    return [ maxStars, minStars, avgStars, varianceScore];
}

const repos = [ 
    { name: 'repo-a', stars: 12 }, 
    { name:'repo-b', stars: 45 }, 
    { name: 'repo-c', stars: 3 } ];


console.log("TASK - 7 ")

function roundto2(num) {
    return Math.round(num * 100) / 100;
}
function calculateFinalPrice(basePrice, taxRate, discountPercentage)
{
    let discountedprice =roundto2(basePrice * (1 - discountPercentage / 100));
    let finalprice =roundto2(discountedprice*(1 + taxRate / 100));
    let loyaltypoints =Math.ceil(finalprice);
    return [finalprice , loyaltypoints];
}  

console.log("TASK 8");

function paginateData(items, pageNumber, pageSize){
    const totalpages = Math.ceil(items.length / pageSize);
    const start = (pageNumber-1) *pageSize;
    const end = start + pageSize;

    const data = items.slice(start , end);

    return {
        data : data,
        currentPage : pageNumber,
        totalPages : totalpages,
        hasNext : pageNumber < totalpages,
        hasprev : pageNumber > 1

    };

}


