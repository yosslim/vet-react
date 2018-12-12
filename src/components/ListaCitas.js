
import React, { Component } from 'react';

class ListaCitas extends Component {
  
    render() {
        const citas = this.props.citas;

        console.log( Object.keys(citas).length );

    return (
      <div>
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center">{mensaje}</h2>
            </div>
        </div>
      </div>
    )
  }
}

export default ListaCitas;
