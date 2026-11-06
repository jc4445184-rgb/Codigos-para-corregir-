class JugadorCasino {
  constructor(nombre, saldoInicial) {
    this.nombre = nombre;
    this.saldo = saldoInicial;
  }

  depositar(cantidad) {
    this.saldo += cantidad;
    console.log(this.nombre + " depositó $" + cantidad + ". Saldo actual: $" + this.saldo);
  }

  jugarTragamonedas(apuesta) {
    if (this.saldo < apuesta) {
      console.log("No tienes suficiente saldo para apostar.");
      return;
    }

    this.saldo -= apuesta;
    let numeroGanador = Math.floor(Math.random() * 10);

    if (numeroGanador > 5) {
      let premio = apuesta * 2;
      this.saldo += premio;
      console.log("¡Felicidades " + this.nombre + "! Ganaste $" + premio);
    } else {
      console.log("Mala suerte " + this.nombre + ", perdiste $" + apuesta);
    }
  }
}

const jugador1 = new JugadorCasino("Pedro", 100);
jugador1.depositar(50);
jugador1.jugarTragamonedas(30);
jugador1.jugarTragamonedas(200);