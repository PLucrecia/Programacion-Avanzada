const dispositivos = [
    { id: 1, nombre: "PC-Desarrollo", ip: "192.168.1.5", tipo: "Estación de trabajo" },
{ id: 2, nombre: "PC-Marketing", ip: "192.168.1.7", tipo: "Estación de trabajo" },
{ id: 3, nombre: "Servidor-Web", ip: "192.168.1.10", tipo: "Servidor" },
{ id: 4, nombre: "Servidor-BD", ip: "192.168.1.11", tipo: "Servidor" }
];

const conexionesActivas = [
{ origen: "192.168.1.5", destino: "192.168.1.10", protocolo: "HTTP", bytes: 8500 },
{ origen: "192.168.1.7", destino: "192.168.1.11", protocolo: "MySQL", bytes: 12000 },
{ origen: "192.168.1.5", destino: "192.168.1.11", protocolo: "MySQL", bytes: 9200 }
];

// Crea un informe que combine la información de dispositivos y conexiones
const informeActividad = conexionesActivas.map(conexion => {
// Encuentra los dispositivos de origen y destino
     const dispositivoOrigen = dispositivos.find(d => d.ip === conexion.origen);
     const dispositivoDestino = dispositivos.find(d => d.ip === conexion.destino);

// Tu código aquí
// Retorna un objeto con la información combinada
return {
// Tu código aquí
    origen: dispositivoOrigen ? dispositivoOrigen.nombre : conexion.origen,
    destino: dispositivoDestino ? dispositivoDestino.nombre : conexion.destino,
    protocolo: conexion.protocolo,
    datosTransferidos: conexion.bytes + " bytes"
};
});

console.log("Informe de actividad de red:", informeActividad);