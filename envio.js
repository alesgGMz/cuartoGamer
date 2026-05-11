export function calcularEnvio(cantidad) {
    if (cantidad < 3) {
        return "Error: no se permiten compras menores a 3 preoductos.";
    } else if (cantidad >= 3 && cantidad <= 10) {
        return 15;
    } else {
        return 0; // Gratis
    }
}