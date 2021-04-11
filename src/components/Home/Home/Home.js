import React from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
           <Header></Header> 
           <Services></Services>
           <FeaturedService></FeaturedService>
           <MakeAppointment></MakeAppointment>
           <Testimonial></Testimonial>
           <Blogs></Blogs>
           <Doctors></Doctors>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;