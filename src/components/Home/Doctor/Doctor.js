import React, { useEffect, useState } from 'react';
import img from '../../../images/doctor-sm.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = ({ doctor }) => {

    return (
        <div className="col-md-4 text-center">
            {   doctor.image ?
                <img style={{ height: '200px' }} className="img-fluid mb-3" src={`data:image/png;base64,${doctor.image.img}`} alt="" />
                :
                <img style={{ height: '200px' }} className="img-fluid mb-3" src={`http://localhost:5000/${doctor.img}`} alt="" />
            }
            <h4>{doctor.name}</h4>
            <p> <FontAwesomeIcon className="text-info" icon={faPhoneAlt} /> +880-188-934789</p>
        </div>

    );
};
// 
export default Doctor;