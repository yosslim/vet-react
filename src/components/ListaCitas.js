
import React, { Component } from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

class ListaCitas extends Component {
  
    render() {
        const citas = this.props.citas;

        // console.log( Object.keys(citas).length );
        const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra tus Citas Aquì';

    return (
      <div>
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center">{mensaje}</h2>
                <div className="Lista-citas">
                    {/* Con map vamos a recorrer el arreglo y a retornar los valores...mapearemos todas las citas que existen
                        con foreach se recorre el arreglo pero no retorna nada */}
                    {Object.keys(this.props.citas).map(cita =>(
                        <Cita
                            key={cita}
                            // se envia info al componente cita para ser procesado
                            info={this.props.citas[cita]}
                            // borrarCita recibira el id a borrar del componente cita para ser mandado a la App (padre)
                            // ahi se realizara la eliminaciòn...cascada 
                            borrarCita = {this.props.borrarCita} 
                        />
                    ))}
                </div>
            </div>
        </div>
      </div>
    )
  }
}

//Para documentar mi aplicacion se utiliza PropTypes

ListaCitas.propTypes = {
    citas : PropTypes.array.isRequired,
    borrarCita : PropTypes.func.isRequired
}

export default ListaCitas;
