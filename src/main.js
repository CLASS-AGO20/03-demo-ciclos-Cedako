export default class App {
    sumarParesFor() {
        let suma = 0;
        for (let i=1; i<=20; i = i++) {
            if(i%2 === 0){
                suma = suma + i;
            }
        }
        return suma;
    }

    contarImparesFor(inicio, fin) {
        if(inicio>fin){
            let t=inicio;
            inicio=fin;
            fin=t;
        }
        let impares=0;
        for (let i=inicio; i<=fin; i = i++) {
            if (i%2 !== 0) {
                impares++;
            }
        }
        return impares;
    }

    sumarParesWhile() {
        let i=1;
        let suma=0;
        while(i<=20) {
            if (i%2 === 0) {
                suma=suma+i;
            }
            i++;
        }
        return suma;
    }
}

let app = new App();

console.log(app.sumarParesFor());
console.log(app.contarImparesFor(1, 800));
console.log(app.sumarParesWhile());