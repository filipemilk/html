var xmlhttp = getXmlHttpRequest()

function getXmlHttpRequest() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest()
    } else if (window.ActiveXObject) {
        return ActiveXObject("Microsoft.XMLHTTP")
    }
}

function alteraURL(url) {
    document.getElementById("carregando").innerHTML = "<img scr='carregando.gif'>"
    xmlhttp.open("POST", url, true)
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
            document.getElementById("urlContent").innerHTML = xmlhttp.responseText
            document.getElementById("carregando").innerHTML = ""
        }
    }
    xmlhttp.send(null)
}