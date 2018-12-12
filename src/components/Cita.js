import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Cita extends Component {  


  //Aqui al hace onclick llenamos el prop borrarCita y la regresamos con papa ListaCita con el id a eliminar como parametro
  eliminarCita = () => {
    this.props.borrarCita(this.props.info.id);
 
  } 

  render() {
    const {fecha, hora, mascota, propietario,sintoma} = this.props.info;
    return (
      <div className="media mt-3">
          <div className="media-body">
            <h3 className="mt-0">{mascota}</h3>
            <p className="card-text"><span>Nombre del Dueño: </span>{propietario}</p>
            <p className="card-text"><span>Fecha: </span>{fecha}</p>
            <p className="card-text"><span>Hora: </span>{hora}</p>
            <p className="card-text"><span>Sintomas: </span>{sintoma}</p>
            <p className="card-text">{sintoma}</p>
          
            <button onClick={this.eliminarCita} className="btn btn-danger">Borrar &times; </button>

          </div>        
      </div>
    )
  }
}

//Para documentar mi aplicacion se utiliza PropTypes

Cita.propTypes = {
    info: PropTypes.shape({
        fecha : PropTypes.string.isRequired,
        hora: PropTypes.string.isRequired,
        mascota: PropTypes.string.isRequired,
        propietario: PropTypes.string.isRequired,
        sintoma: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired

    }),

    borrarCita : PropTypes.func.isRequired
}
