export function logarTempoDeExecucao(emSegundos: boolean = false) {

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){

        const medotoOriginal = descriptor.value;

        descriptor.value = function(...args: any[]){
            let unidade = "ms";
            let divisor = 1;

            if(emSegundos){
                unidade = "s";
                divisor = 1000;
            }

            console.log("---------------------------");
            console.log(`Parâmetros passado para o método ${propertyKey}: ${JSON.stringify(args)}`);
            const t1 = performance.now();

            const retorno = medotoOriginal.apply(this, args); // entre as chamadas t1 e t2 ele chama o método original

            const t2 = performance.now();
            console.log(`O retorno do método é: ${propertyKey} é ${JSON.stringify(retorno)}`);
            console.log(`O método ${propertyKey} demorou ${(t2 - t1) / divisor} ${unidade}`);
            return retorno;
        }

        return descriptor;
    } 
}