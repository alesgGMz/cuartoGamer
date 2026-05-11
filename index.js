import { calcularEnvio } from "./envio.js";
import { calcularDescuento } from "./descuentos.js";
import { esVIP } from "./vip.js";

//datos
const nombre = "alejandro";
const cantidad = 8;
const montoTotal = 250;
//--------------------------------------------------------

console.log(`Recibo de Tienda Gamer`);
console.log(`Hola ${nombre}`);

const costoEnvio = calcularEnvio(cantidad);
const resultadoDescuento = calcularDescuento(montoTotal);
const vipStatus = esVIP(cantidad, montoTotal);

//Envio
if (typeof costoEnvio === "string") {
    console.log(costoEnvio);
} else {
    console.log(`Costo de envío: $${costoEnvio} USD`);
}

//Descuento y total
let totalFinal = montoTotal;
if (typeof resultadoDescuento === "number" && resultadoDescuento < 1) {
    const ahorro = montoTotal * resultadoDescuento;
    totalFinal = (montoTotal - ahorro) + (typeof costoEnvio === "number" ? costoEnvio : 0);
    console.log(`Tienes un descuento del ${resultadoDescuento * 100}%`);
    console.log(`Nuevo total: $${totalFinal.toFixed(2)} USD`);
} else {
    console.log(`Te faltan $${resultadoDescuento} USD para un descuento.`);
}
if (vipStatus) console.log("Status: CLIENTE VIP");