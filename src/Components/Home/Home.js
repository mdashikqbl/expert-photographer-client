import React, { useEffect, useState } from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';

const Home = () => {
    const [services, setService] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className='container'>
            <Banner></Banner>
            <h1 className='center'>OUR SERVICES</h1>
            <div className='services' >
                {
                    services.map(service => <Service key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;