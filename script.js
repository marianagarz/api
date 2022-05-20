
function getRequest() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        console.log(this.responseText)
    };
    xhttp.open('GET', "api.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send();
}