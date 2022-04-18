import React from 'react';
import './About.css'
import me1 from '../../images/me/me1.jpg'
const About = () => {
    return (
        <div className='image'>
            <img src={me1} alt="" />
            <div className='text-info'>
                <h1>Name:Ashik Iqbal</h1>
                <p>I am Ashiq Iqbal. I am a student. My dream is to be a good quality developer. I started doing this course to realize that dream. In the next six months, my plan is to work as a front end developer in any company. We are moving forward with that foundation. I am working hard because I need the job in a few months.</p>

            </div>

        </div>
    );
};

export default About;