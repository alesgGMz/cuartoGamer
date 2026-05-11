export function calcularDescuento(total) {
    if (total < 200) {
        return 200 - total; //Retornamos lo que falta para la promo
    } else if (total >= 200 && total <= 500) {
        return 0.05 // 5%
    } else {
        return 0.12 // 12%
    }
}