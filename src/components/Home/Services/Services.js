import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import teeth from '../../../images/teeth.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const serviceData = [
    {
        image: fluoride,
        title:'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quos possimus nisi autem maxime obcaecati sed eos itaque quibusdam.' 
    },
    {
        image: cavity,
        title:'Cavity Filling',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quos possimus nisi autem maxime obcaecati sed eos itaque quibusdam.' 
    },
    {
        image: teeth,
        title:'Teeth Whitening',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quos possimus nisi autem maxime obcaecati sed eos itaque quibusdam.' 
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style= {{color:'#1CC7C1'}}>OUR SERVICES</h5>
                <h2  style= {{color:'#3A4256'}}>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center ">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                }

            </div>
        </div>
        </section>
    );
};

export default Services;
