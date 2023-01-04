// pedir una fecha por pantalla que sera mostrada de la siguiente forma dd/mm/año 
// y imprimir mensaje "el dia de hoy es dd de mm del anio aaaa"

let fechas = prompt("Ingrese la fecha de hoy (dd/mm/anio): ")
var fecha = fechas.split("/")
let dia = fecha[0];
let mes = fecha[1];
let anio = fecha[2];
let estado = true


if (((dia.length >= 1) && (mes.length >= 1) && (anio.length >= 1)) || ((dia.length >= 1) && (mes.length >= 1) && (anio.length >= 1))) {
    switch (parseInt(mes)) {
        case 1: dmax = 31; break;
        case 2: if (anio % 4 == 0) dmax = 29; else dmax = 28;
            break;
        case 3: dmax = 31; break;
        case 4: dmax = 30; break;
        case 5: dmax = 31; break;
        case 6: dmax = 30; break;
        case 7: dmax = 31; break;
        case 8: dmax = 31; break;
        case 9: dmax = 30; break;
        case 10: dmax = 31; break;
        case 11: dmax = 30; break;
        case 12: dmax = 31; break;
    }

    dmax != "" ? dmax : dmax = -1; if ((dia >= 1) && (dia <= dmax) && (mes >= 1) && (mes <= 12)) {
        for (var i = 0; i < fecha[0].length; i++) {
            diaC = fecha[0].charAt(i).charCodeAt(0);
            (!((diaC > 47) && (diaC < 58))) ? estado = false : '';
            mesC = fecha[1].charAt(i).charCodeAt(0);
            (!((mesC > 47) && (mesC < 58))) ? estado = false : '';
        }
    

    console.log(`El dia de hoy es ${dia} de ${mes} del anio ${anio}`)
}else{
    console.log("Ingrese una fecha valida")
}
}else{
    console.log("Ingrese una fecha valida")
}


