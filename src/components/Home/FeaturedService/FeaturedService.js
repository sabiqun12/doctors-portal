import React from 'react';
import feature from '../../../images/feature.png';

const FeaturedService = () => {
    return (
        <section className="feature-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={feature} alt="" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental Care, on Your Terms</h1>
                        <p className="text-secondary my-5">Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Harum rerum quos enim pariatur cupiditate nobis veniam velit ullam ad doloremque totam,
                        dolor magni inventore a eaque nostrum perferendis maxime cumque natus illum molestiae necessitatibus expedita!
                        Odio laborum optio dolorem sapiente!</p>
                        <button style={{backgroundColor:'#2BD5D3'}} className="btn btn-light text-white">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;