/* Transform the following js code int ts code 
	let contaBancaria = {
    	saldo: 3456,
    	depositar(valor) {
        	this.saldo += valor
    	}
	}
 
	let correntista = {
    	nome: 'Ana Silva',
    	contaBancaria: contaBancaria,
    	contatos: ['34567890', '98765432']
	}
 
	correntista.contaBancaria.depositar(3000)
	console.log(correntista)
*/

type contaBancaria = {saldo : number, depositar : (valor : number) => void} 

let conta : contaBancaria = {
	saldo: 3456,
	depositar(valor : number) {
		this.saldo += valor
	}
}

let correntista : {nome : string, contaBancaria: contaBancaria, contatos: string[]}
correntista = {
	nome: "Ana Silva",
	contaBancaria: conta,
	contatos:['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)
