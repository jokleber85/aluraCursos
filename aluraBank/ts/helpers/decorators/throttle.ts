export function throttle(milissegundos = 500) {

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){

        const medotoOriginal = descriptor.value;

        let timer = 0;

        descriptor.value = function(...args: any[]){
            if (event) event.preventDefault();

            clearInterval(timer);
            timer = setTimeout(() => 
                medotoOriginal.apply(this, args), milissegundos); // entre as chamadas t1 e t2 ele chama o método original
        }

        return descriptor;
    } 
}