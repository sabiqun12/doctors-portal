import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const BookAppointment = ({date}) => {
    const bookingData = [
        {
            id: 1,
            subject: 'Teeth Orthodontics',
            visitingHour: '8.00 AM - 9.00 PM',
            totalSpace: 10
        },
        {
            id: 2,
            subject: 'Cosmetic Dentistry',
            visitingHour: '8.00 AM - 9.00 PM',
            totalSpace: 10
        },
        {
            id: 3,
            subject: 'Teeth Orthodontics',
            visitingHour: '8.00 AM - 9.00 PM',
            totalSpace: 10
        },
        {
            id: 4,
            subject: 'Cavit Orthodontics',
            visitingHour: '8.00 AM - 9.00 PM',
            totalSpace: 10
        },
        {
            id: 5,
            subject: 'Teeth Orthodontics',
            visitingHour: '8.00 AM - 9.00 PM',
            totalSpace: 10
        },
        { 
            id: 6,
            subject: 'Teeth Orthodontics',
            visitingHour: '8.00 AM - 9.00 PM',
            totalSpace: 10
        }
    ];
    return (
       <section>
           <h2 className="text-center text-brand mb-5">Available Appointments on {date.toDateString()}</h2>
           <div className="row">
           {
               bookingData.map( booking => <BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)
           }

           </div>
          

       </section>
    );
};

export default BookAppointment;