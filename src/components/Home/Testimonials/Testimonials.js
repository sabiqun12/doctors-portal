import React from 'react';

const Testimonials = ({testData}) => {
    return (
        <div className="card shadow-sm">
            <div className="card-text text-center">
                <p className="">{testData.quote}</p>
            </div>
            <div className="card-footer d-flex align-items-center">
                <img className="mx-3" src={testData.img} alt="" width="60px"/>
                <div className="">
                    <h6 className="mt-2" style={{color: '#1CC7C1'}}>{testData.name}</h6>
                    <p className="font-weight-bold text-secondary">{testData.from}</p>
                </div>
            </div>
            
        </div>
    );
};

export default Testimonials;