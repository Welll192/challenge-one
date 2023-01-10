const input = document.getElementById("input");
const buttonEncriptar = document.getElementById("buttonencriptar");
const buttonDesencriptar = document.getElementById("buttondesencriptar");
const smsEncript = document.getElementById("mensaje");
const derecha = document.getElementById("derecha")
const nuevoparrafo = document.createElement("p")
const buttoncopiar = document.createElement("button")
input.addEventListener("change",(e)=>{
    let mensaje  = e.target.value.toLowerCase();
    let mensajeNuevo = mensaje
   

        buttonEncriptar.addEventListener("click",()=>{
            let smsNuevo  = encriptar(mensaje, mensajeNuevo);
            
            while(derecha.hasChildNodes()){
                derecha.removeChild(derecha.lastChild)
            }
            derecha.appendChild(nuevoparrafo);
            nuevoparrafo.className="nuevoparrafo";
            nuevoparrafo.textContent = smsNuevo;
            nuevoparrafo.id = "nuevoparrafo"

            derecha.appendChild(buttoncopiar)
            buttoncopiar.className = "buttoncopiar";
            buttoncopiar.textContent = "copiar"
        });
        buttonDesencriptar.addEventListener("click",()=>{
            let smsNuevo  = desencriptar(mensaje, mensajeNuevo);
                   
            while(derecha.hasChildNodes()){
                derecha.removeChild(derecha.lastChild)
            }
            derecha.appendChild(nuevoparrafo);
            nuevoparrafo.className="nuevoparrafo";
            nuevoparrafo.textContent = smsNuevo;
            nuevoparrafo.id = "nuevoparrafo" 

            derecha.appendChild(buttoncopiar)
            buttoncopiar.className = "buttoncopiar";
            buttoncopiar.textContent = "copiar"
            
        });
  
        
    e.target.value = ""

})

buttoncopiar.addEventListener("click",()=>{
    var aux = document.createElement("div");
    aux.setAttribute("contentEditable", true);
    aux.innerHTML = document.getElementById("nuevoparrafo").innerHTML;
    aux.setAttribute("onfocus", "document.execCommand('selectAll',false,null)"); 
    document.body.appendChild(aux);
    aux.focus();
    document.execCommand("copy");
    document.body.removeChild(aux);
    alert("mensaje copiado!!")
})

const encriptar = (mensaje, mensajeNuevo)=> {
    for(let i in mensaje){
    
        switch (mensaje[i]) {
            
            case "a":
            
            mensajeNuevo = mensajeNuevo.replace("a","ai")
    
                break;
            
            case "e":
            

            mensajeNuevo = mensajeNuevo.replace("e","enter")
                break;
                
            case "i":
    
            mensajeNuevo = mensajeNuevo.replace("i","imes")
                break;                
            case "o":
                
    
            mensajeNuevo = mensajeNuevo.replace("o","ober")
                
                break;                
            case "u":
                mensajeNuevo = mensajeNuevo.replace("u","ufat")
                break;
            default:
                break;
        }
}
    return mensajeNuevo;
}

const desencriptar = (mensaje, mensajeNuevo)=> {
    for(let i in mensaje){
    
        switch (mensaje[i]) {
            
            case "a":
            
            mensajeNuevo = mensajeNuevo.replace("ai","a")
    
                break;
            
            case "e":
            

            mensajeNuevo = mensajeNuevo.replace("enter","e")
                break;
                
            case "i":
    
            mensajeNuevo = mensajeNuevo.replace("imes","i")
                break;                
            case "o":
                
    
            mensajeNuevo = mensajeNuevo.replace("ober","o")
                
                break;                
            case "u":
                mensajeNuevo = mensajeNuevo.replace("ufat","u")
                break;
            default:
                break;
        }
}
    return mensajeNuevo;
}