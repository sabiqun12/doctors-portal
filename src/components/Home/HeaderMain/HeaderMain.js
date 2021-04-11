import React from 'react';
import chair from '../../../images/chair.png';
const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Your New Smile <br/>Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque temporibus iste eum possimus, 
                quis omnis saepe nesciunt, et iure, molestias illum incidunt ea voluptates. Optio suscipit alias vitae nisi recusandae.</p>
                <button style={{backgroundColor: '#2BD5D3'}} className="btn btn-light text-white">GET APPOINMENT</button>
    

            </div>
            <div className="div col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>

        </main>
    );
};

export default HeaderMain;