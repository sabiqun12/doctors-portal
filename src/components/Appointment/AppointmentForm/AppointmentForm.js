import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import './AppointmentForm.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        //console.log(data);
        data.service = appointmentOn;
        data.date = date;
        data.createdAppointment = new Date();

        fetch('http://localhost:5000/addAppointment',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                closeModal();
                alert('Appointment done successfully');
            }
        })
    

    } 


    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-center text-brand">{appointmentOn}</h2>
                <p className="text-center text-secondary"><small>{date.toDateString()}</small></p>
                <form className="appointment-form p-4 " onSubmit={handleSubmit(onSubmit)}>
                    {/* {/* <div className="form-group">
                    <input name="name" className="form-control" {...register('name', { required: true })} type="text" name="firstname" placeholder="Your Name"/>
                    {/* {errors.firstname && <span className="text-danger">Name is required </span>} */}
                    {/* <ErrorMessage errors={errors} name="name" message="This is required" />   
                    </div> */}
                    {/* <input name="name" {...register('name',{ required: true})} />
                    <ErrorMessage errors={errors} name="name" message="This is required" /> */}
                    <div className="form-group">
                        <input className="form-control" {...register('name', { required: true })} type="text" placeholder="Your name" />
                        {errors.name && <span className="text-danger"><small>Name is required</small></span>}
                    </div>
                    <div className="form-group">
                        <input className="form-control" {...register('phone', { required: true })} type="tel"  placeholder="Phone number" />
                        {errors.phone && <span className="text-danger"><small>Phone number is required</small></span>}
                    </div>
                    <div className="form-group">
                        <input className="form-control" {...register('email', { required: true })} type="email" placeholder="Email" />
                        {errors.email && <span className="text-danger"><smaill>Email is required</smaill></span>}
                    </div>
                    {/* <div className="form-group">
                        <input className="form-control" {...register('date', { required: true })} type="text" placeholder="mm/dd/yy" />
                        {errors.date && <span className="text-danger"><smaill>Date is required</smaill></span>}
                    </div> */}
                    <div className="form-group">
                        <select className="form-control" {...register('gender', { required: true })} type="text" placeholder="">
                            <option value="Not set" disabled={true}>Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Not set">Not set</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input className="form-control" {...register('age', { required: true })} type="number" placeholder="Age" />
                        {errors.age && <span className="text-danger"><smaill>Age is required</smaill></span>}
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-brand">Submit</button>
                    </div>
                </form>
            </Modal>

        </div>
    );
};

export default AppointmentForm;