import React, { Component } from 'react';
import Header from './components/header';
import AgregarCita from './components/AgregarCita';
import ListaCitas from './ListaCitas';

class App extends Component {

  state = {
    citas:[]
  }

  crearCita = (nuevaCita) => {

    //Spread operatos (obtiene todas las citas anteriores 
    //y le inserta la nueva cita al final), si queremos insertarla al
    //inicio solo movemos al inicio
    const citas = [...this.state.citas, nuevaCita];

    this.setState({
      citas
    });

    console.log(citas);
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
              citas = {this.state.citas}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
