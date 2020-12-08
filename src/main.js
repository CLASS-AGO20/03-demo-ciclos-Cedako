export default class App {
    sumarParesFor() {
        let suma = 0;
        for (let i=1; i<=20; i++) {
            if(i%2 === 0){
                suma = suma + i;
            }
        }
        return suma;
    }

    contarImparesFor(inicio, fin) {
        if(inicio>=fin){
            let t=inicio;
            inicio=fin;
            fin=t;
        }
        let impares=0;
        for (let i=inicio; i<=fin; i++) {
            if (i%2 !== 0) {
                impares++;
            }
        }
        return Math.trunc(impares);
    }

    sumarParesWhile() {
        let i=1;
        let suma=0;
        while(i<=20) {
            if (i%2===0) {
                suma = suma + i;
            }
            i= i + 1;
        }
        return suma;
    }
    
    contarImparesWhile(inicio, fin) {
        if(inicio>=fin){
            let t=inicio;
            inicio=fin;
            fin=t;
        }
        let i=inicio;
        let impares=0;
        while(i<=fin) {
            if (i%2 !== 0) {
                impares++;
            }
            i++
        }
        return Math.trunc(impares);
    }

    sumarParesDo() {
        let i=1;
        let suma=0;
        do {
            if(i%2 === 0) {
                suma= suma + i;
            }
            i++
        }
        while(i<=20);
        return suma;
    }

    contarImparesDo(inicio, fin) {
        if(inicio>fin){
            let t=inicio;
            inicio=fin;
            fin=t;
        }
        let i=inicio;
        let impares=0;
        do {
            if (i%2 !== 0) {
                impares++
            }
            i++
        }
        while (i<=fin);
        return Math.trunc(impares);
    }
}

let app = new App();

console.log(app.sumarParesFor());
console.log(app.contarImparesFor(1, 800));
console.log(app.sumarParesWhile());
console.log(app.contarImparesWhile(888, 999));
console.log(app.sumarParesDo());
console.log(app.contarImparesDo(120, 1924));
//github and npm are having some problems...