let id= 0;
let string = "";

async function fetchAdvice() {
    const response = await fetch(
        'https://api.adviceslip.com/advice'
    );
    const data = await response.json();

    id = data.slip.id;
    string = data.slip.advice;
    console.log(id,string);
    
        $("#n").html(id);
        $("#advice-quote").html(`"${string}"`);
        

   
}
fetchAdvice();

$("#submit").click(()=>{
    fetchAdvice();
})



