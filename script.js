let test= "test";
function getRequest() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        test=(this.responseText);
        console.log(test);
    };
    xhttp.open('GET', "api.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send();
}

const obj= JSON.parse(test);
document.getElementById("quote").innerHTML=obj.quote;