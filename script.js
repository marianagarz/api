let test= "test";
function getRequest() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        let response = JSON.parse(this.responseText);
        let quoteBody = document.getElementById('quote');
        quoteBody.innerHTML = response['quote'];
        console.log(response);
    };
    xhttp.open('GET', "api.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send();
}

const obj= JSON.parse(test);
document.getElementById("quote").innerHTML=obj.quote;