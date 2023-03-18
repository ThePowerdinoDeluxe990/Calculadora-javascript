document.getElementById("suma").onclick = function(){
let num1 = document.getElementById("1rnumero").value
let num2 = document.getElementById("1rnumero").value

let resultado = Number(num1)+Number(num2)

document.getElementById('result').innerHTML = resultado;



}
document.getElementById("resta").onclick = function(){
    let num1 = document.getElementById("1rnumero").value
    let num2 = document.getElementById("1rnumero").value
    
    let resultado = Number(num1)-Number(num2)
    
    document.getElementById('result').innerHTML = resultado;
    
    
    
    }
    document.getElementById("multiplicacion").onclick = function(){
        let num1 = document.getElementById("1rnumero").value
        let num2 = document.getElementById("1rnumero").value
        
        let resultado = Number(num1)*Number(num2)
        
        document.getElementById('result').innerHTML = resultado;
        
        
        
        }
        document.getElementById("division").onclick = function(){
            let num1 = document.getElementById("1rnumero").value
            let num2 = document.getElementById("1rnumero").value
            
            let resultado = Number(num1)/Number(num2)
            
            document.getElementById('result').innerHTML = resultado;
            
            
            
            }