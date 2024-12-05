import React from 'react'
import { Link } from "react-router-dom";

function Contact() {
    return (
        <div className='home-contact'>
            <div className='home-contact-container'>
                <section>
                    <h2>Creating Solutions Together</h2>
                    <p>Let’s discuss how we can help your business achieve its goals.</p>
                </section>
                <Link to="/contact" className="transparent-button">
                    Contact Us
                </Link>
            </div>
        </div>
    )
}

export default Contact