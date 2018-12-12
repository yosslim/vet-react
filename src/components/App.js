import React, { Component } from 'react';

//Componentes
import Header from './header';
import AgregarCita from './AgregarCita';
import ListaCitas from './ListaCitas';

class App extends Component {

  state = {
    citas:[]
  }

  //para trabajar con localStorage

  //de lo que tenemos en componentDidUpdate, lo usaremos aqui para cargarlo en la pagina
  //tenemos que obtener con getItem y aparte convertir el string ahora en arreglo (usando parse)
  componentDidMount(){

    const citasLS = localStorage.getItem('citas');
    if(citasLS){
      this.setState({
        citas: JSON.parse(citasLS)
      })

    }

    console.log('Esta listo');
  }

  // componentWillMount(){
  //   console.log('Yo me ejecuto antes');
  // }

  // componentWillUnmount(){
  //   console.log('Yo hasta que cierra el componente');
  // }

  componentDidUpdate(){
    //una vez q hagamos un cambio en el formulario se agrege al storage

    //Nota: storage solo puede almacenar cadenas de texo, por eso lo ponemos de tipo json.stringify 
    //convertira el arreglo en un string
    localStorage.setItem(
      'citas',
      JSON.stringify(this.state.citas)
    )

    console.log('Algo cambio!!');
  }

  //Funciones importantes en la aplicaciòn

  crearCita = (nuevaCita) => {

    //Spread operatos (obtiene todas las citas anteriores 
    //y le inserta la nueva cita al final), si queremos insertarla al
    //inicio solo movemos al inicio (nuevaCita)
    const citas = [...this.state.citas, nuevaCita];

    this.setState({
      citas
    });    
  }

  borrarCita = id => {
    console.log(id);
    //obtener copia del state
    const citasActuales = [...this.state.citas];
    console.log(citasActuales);
    //borrar el elemento del state
    //Usaremos filter para eliminar el id deseado del arreglo
    //(si fuera un objeto usaremos delete)

    const citas = citasActuales.filter(cita => cita.id !== id);
    console.log(citas);

    //Actualizar el State

    this.setState({
      citas
    })

  }

  render() {
    return (
      <div className="container">
        <Header
          titulo={'Administrador de pasientes de Veterinaria'}
        />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita 
              crearCita={this.crearCita}
            />
          </div>
          <div className="col-md-6">
            <ListaCitas 
             // se envia citas al componente ListaCita
              citas = {this.state.citas}
              // borrarCita recibira el id a borrar del componente ListaCita
              borrarCita={this.borrarCita}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
