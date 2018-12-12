import React, {Component} from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AgregarCita extends Component{

    //Refs

    nombreMascotaRef = React.createRef();
    duenoMascotaRef = React.createRef();
    fechaMascotaRef = React.createRef();
    horaMascotaRef = React.createRef();
    sintomaMascotaRef = React.createRef();

    //Los hijos tambien pueden tener state, en este caso error para el manejo de exepciones
    state = { 
        error:false
    }

    //Funcion en el componente AgregarCita

    crearNuevaCita = e => {
        e.preventDefault();

        //Creando el object literal

        const mascota = this.nombreMascotaRef.current.value,
        propietario = this.duenoMascotaRef.current.value,
        fecha = this.fechaMascotaRef.current.value,
        hora = this.horaMascotaRef.current.value,
        sintoma = this.sintomaMascotaRef.current.value;

        if(mascota === '' || propietario === '' || fecha === '' || hora === '' || sintoma === ''){
            this.setState({
                error:true
            })
        }

        else
        {
            const nuevaCita = {
                id : uuid(),
                mascota,
                propietario,
                fecha,
                hora,
                sintoma
            }
    
            //Se envia el objeto hacia el padre para actualizar el state
            this.props.crearCita(nuevaCita);
    
            //Reiniciar el formulario, esto es para limpiar los campos despues de mandar la nueva cita
            e.currentTarget.reset();

            //Eliminar el error (si hubo o no error aun asi lo limpio)
            this.setState({
                error: false
            })

        }

        
    }

    render(){

        const existeError = this.state.error;

        return(
            <div className="card mt-5">
                <div className="card-body"> 
                    <h2 className="card-title text-center mb-5">Agrega las citas aquì</h2>
                    <form onSubmit={this.crearNuevaCita}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input ref={this.nombreMascotaRef} type="text" className="form-control" placeholder="Nombre Mascota" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input ref={this.duenoMascotaRef} type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input ref={this.fechaMascotaRef} type="date" className="form-control" />
                            </div>                            

                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input ref={this.horaMascotaRef} type="time" className="form-control" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea ref={this.sintomaMascotaRef} className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="form-group row justify-content-end">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-success w-100">Agregar</button>
                            </div>
                        </div>
                    </form>
                    {/* Campos Obligatorios */}
                    {existeError ? <div className="alert alert-danger text-center">Campos Requeridos!</div> : ''}
                </div>
            </div>
        )
    }
}

//Para documentar mi aplicacion se utiliza PropTypes

AgregarCita.propTypes = {
    crearCita : PropTypes.func.isRequired
}

export default AgregarCita;