import React from 'react';
import './Blog.css'

const Blog = () => {
    return (

        <div className='question' >
            <h1>Question & Answer</h1>
            <div className='question-info'>

                <div>
                    <h3>1. Difference between authorization and authentication? </h3>
                    <p><b>Authentication:</b>
                        Authentication verifies who the user is.
                        Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.
                        Authentication is the first step of a good identity and access management process.
                        Authentication is visible to and partially changeable by the user.
                        Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.
                    </p>
                    <p><b>Authorization:</b>
                        Authorization determines what resources a user can access.Authorization works through settings that are implemented and maintained by the organization.
                        Authorization always takes place after authentication.
                        Authorization isn't visible to or changeable by the user.Example: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.
                    </p>
                </div>
                <div>
                    <h3>2. Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p><b>Firebase:</b>Owned by Google, Firebase is a complete package of products that allows to build web and mobile apps, improve the app quality and help your clients grow their business.
                        Firebase by Google can be used for the following Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc., you can use Firebase.</p>
                    <p><b>What other options do you have to implement authentication:</b>There are many other company to implement authentication or alternative of firebase they are:
                        1. Okta
                        2. OneLogin
                        3. JumpCloud
                        4. Centrify
                        5. Auth0
                        6. Microsoft Azure</p>

                </div>
                <div>
                    <h3>3. What other services does firebase provide other than authentication?</h3>
                    <p>
                        Firebase is a authentication solution company. But Beside it they supply many other services:
                        1. Cloud Functions.
                        2. Cloud Firestore
                        3. Hosting
                        4. Cloud Storage.
                        5. Google Analytics.
                        6. Predictions
                        7. Cloud Messaging
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;