// short query function
function q(el){
    if(document.querySelectorAll(`${el}`).length === 1) element = document.querySelector(`${el}`)
    else if(document.querySelectorAll(`${el}`).length >= 2) element = document.querySelectorAll(`${el}`)
    if(typeof(element) != 'undefined' && element != null){
        return element
    }
    else{
        return new Error("elemen undefined")
    }
}