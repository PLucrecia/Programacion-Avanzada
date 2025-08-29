

const traficoRed = {
"08:00": 1250, // MB transferidos
"09:00": 1870,
"10:00": 2100,
"11:00": 1950,
"12:00": 1600,
"13:00": 1300,
"14:00": 1700,
"15:00": 2200,
"16:00": 1800,
"17:00": 1500
};


let total = 0;
let horamax = "";
let maxtrafico = 0;

for (let hora in traficoRed){
    const valor =traficoRed[hora];
    total += valor;

    if (valor > maxtrafico) {
        maxtrafico = valor;
        horamax = hora;
    }
}

console.log(total);
console.log(horamax);