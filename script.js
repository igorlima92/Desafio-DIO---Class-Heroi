class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }

    atacar() {
        let ataque;
    
        switch (this.tipo) {
          case 'mago':
            ataque = 'magia';
            break;
          case 'guerreiro':
            ataque = 'espada';
            break;
          case 'monge':
            ataque = 'artes marciais';
            break;
          case 'ninja':
            ataque = 'shuriken';
            break;
          default:
            ataque   
     = 'uma habilidade secreta';
        }
    
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
      }
    }
    
    // Criando instâncias de diferentes heróis
    const mago = new Heroi('Gandalf', 2000, 'mago');
    const guerreiro = new Heroi('Conan', 30, 'guerreiro');
    const monge = new Heroi('Liu Kang', 35, 'monge');
    const ninja = new Heroi('Hanzo Hasashi', 30, 'ninja');
    
    // Chamando o método atacar para cada herói
    mago.atacar();
    guerreiro.atacar();
    monge.atacar();
    ninja.atacar();