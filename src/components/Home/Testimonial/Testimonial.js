import React from 'react';
import wilson from '../../../images/Ellipse 1.png';
import ema from '../../../images/Ellipse 2.png';
import aliza from '../../../images/Ellipse 3.png';
import Testimonials from '../Testimonials/Testimonials';
import './Testimonial.css';

const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Wilson Harry',
        from: 'California',
        img: wilson
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Ema Gomez',
        from: 'California',
        img: ema
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Aliza Farari',
        from: 'California',
        img: aliza
    }
]

const Testimonial = () => {
    return (
        <section  className="testimonial my-5 py-5">
            <div className="container">
                <div className="header">
                    <h6 style={{color: '#1CC7C1'}}>TESTIMONIALS</h6>
                    <h1>What's Our Patients <br />Says</h1>

                </div>
                <div className="card-deck mt-5">
                    {
                        testimonialData.map(testData => <Testimonials testData={testData}></Testimonials>)
                    }


                </div>
            </div>
        </section>
    );
};

export default Testimonial;