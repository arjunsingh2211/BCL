import React, { useState } from 'react';
import base_url from "./../api/bootapi";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {

    // function to save Message
    const[formData, setFormData]= useState({
        name:"",
        email:"",
        message:""
    });

    // form handler function to post data on server
    const handleSubmit =async (e) =>{
        e.preventDefault();
        if(!formData.name || !formData.email || !formData.message){
            toast.error("All fields are required.");
            return;
        }
        try {
            await axios.post(`${base_url}/addUser`, formData);
            toast.success("Request Submitted Successfully");
            // Clear form data after submission
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error)
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    return (
        <div className='container heading3'>
            <ToastContainer position="top-right" />
            <div className="row">
                <div className="col-md-6">
                <h1 style={{textAlign: 'left'}} className='heading2'>Contact Us</h1>
            
                <p className='para2' style={{
                        textAlign: 'left',
                        lineHeight: '30px',
                    }}>Let us tailor a service package that meets your needs. Tell us a little about your business, and we will get back to you with some ideas as soon as possible.</p>
                    <br />

                    <h4>Binary Code Labs</h4>
                    <p className='para2' style={{
                        textAlign: 'left',
                        lineHeight: '30px',
                    }}>#112, Discourse, 186/2 12th ward Muthanallur cross, Dommasandra village, Sarjapur - Marathahalli Rd, Bengaluru, Karnataka 562125</p>
                    <span>M.no: 8871169615</span>
                    <br /><br />

                    <h4>Hours</h4>
                    <span>Monday - Friday: 9am - 6pm</span><br />
                    <span>Saturday - Sunday: Closed</span>
                    <br /><br />

                    <form onSubmit={handleSubmit}>
                        <h4>Ask a Question or Get a Quote</h4>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" value={formData.name}
                            onChange={(e) => {
                                setFormData({ ...formData, name: e.target.value});
                            }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" value={formData.email}
                            onChange={(e) => {
                                setFormData({ ...formData, email: e.target.value});
                            }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="3" value={formData.message}
                            onChange={(e) => {
                                setFormData({ ...formData, message: e.target.value});
                            }} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </div>

                <div className="col-md-6">
                    <iframe title='Google Maps Location' width="100%" height="600" style={{ border: 0 }} scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=discourse.work%20-%20coworking%20,%20shared%20office%20space,%20virtual%20office+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">Your browser does not support iframes.</iframe>
                </div>

            </div>
        </div>
    )
}
