import React from 'react';
import './ServiceDetail.css'

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img className="services-icon mt-3" src={service.image} alt="Services" />
            <h5 className="mt-3">{service.name}</h5>
            <p className="mt-3 text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam iure laboriosam placeat. Ducimus, laudantium dignissimos.</p>
        </div>
    );
};

export default ServiceDetail;