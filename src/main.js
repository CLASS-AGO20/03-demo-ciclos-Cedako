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
        let impares=0;
        for (let i=inicio; i<=fin; i = i++) {
            if (i%2 !== 0) {
                impares++;
            }
        }
        return impares;
    }

    sumarParesWhile(inicio, fin) {

    }
}

let app = new App();

console.log(app.sumarParesFor());
console.log(app.contarImparesFor(1, 800));