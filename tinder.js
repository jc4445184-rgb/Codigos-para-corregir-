class UsuarioTinder {
  constructor(nombre, edad, ciudad) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
  }

  buscarCita() {
    console.log("Buscando posibles parejas en " + this.ciudad + " para " + this.nombre);
  }
}

class UsuarioPremium extends UsuarioTinder {
  constructor(nombre, edad, ciudad, superLikes) {
    super(nombre, edad, ciudad);
    this.superLikes = superLikes;
  }

  enviarSuperLike(otroUsuario) {
    if (this.superLikes > 0) {
      console.log(this.nombre + " ha enviado un Super Like a " + otroUsuario);
      this.superLikes--;
    } else {
      console.log("No te quedan Super Likes.");
    }
  }
}

const usuario1 = new UsuarioTinder("Ana", 23, "Bogotá");
const usuario2 = new UsuarioPremium("Carlos", 26, "Medellín", 5);

usuario2.buscarCita();
usuario2.enviarSuperLike(usuario1.nombre);