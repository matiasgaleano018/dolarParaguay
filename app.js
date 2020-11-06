const inputDolar = document.getElementById("inputDolar");
const info = document.getElementById("info");
const ButtonCambiar = document.getElementById("botonEnviar");
async function traer(){
    return fetch("https://dolar.melizeche.com/api/1.0/")
        .then(data => data.json())
}
async function ejecutar(valor){
    const Dolar = await traer();
    const DolarKeys = Object.keys(Dolar.dolarpy);
    const DolarValues = Object.values(Dolar.dolarpy);
    for(let i = 0; i <= DolarKeys.length; i++){
        let elDolarVenta = DolarValues[i].venta;
        let elDolarCompra = DolarValues[i].compra;
        let dolarVenta = parseInt(elDolarVenta);
        let dolarCompra = parseInt(elDolarCompra);
        info.innerHTML += `
        <div class="info__item">
            <h2>${(DolarKeys[i]).toUpperCase()}</h2>
            <p>Compra: ${(dolarCompra)*valor}₲</p>
            <p>Venta: ${(dolarVenta)*valor}₲</p>
        </div>
        `
    }
}
ejecutar(1);
ButtonCambiar.addEventListener("click", ()=>{
    if(inputDolar.value > 0){
        info.textContent = "";
        ejecutar(inputDolar.value);
    }else if(inputDolar.value < 0){
        alert("Monto no valido")
    }else{
        alert("Ingrese un monto que desea cambiar")
    }
    console.log(inputDolar.value.length)
})
