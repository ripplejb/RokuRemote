const rokuUri = "http://192.168.1.94:8060/keypress/";

function SendCommand(command) {
    var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function()
        {
        }
        xmlHttp.open("post", rokuUri + command); 
        xmlHttp.send(); 
}


