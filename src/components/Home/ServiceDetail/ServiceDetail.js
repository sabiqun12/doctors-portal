import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '60px'}} src={service.image} alt=""/>
            <h6 style={{color: '#3A4256'}} className="mt-3 mb-3">{service.title}</h6>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sit fugiat! Quae harum suscipit aut</p>
            
        </div>
    );
};

export default ServiceDetail;