import React from 'react'

export default function Services() {

    return (
        <div className='container'>
            <h1 className='heading2'>Our Services</h1>

            <div className="row justify-content-center">
                <div className="col-md-4">
                    <img className='imgStyle' src="/images/tech7.jpg" alt="tech" />
                </div>
                <div className="col-md-4 my-5 text-center">
                    <h4 className='heading3'>Design and Development</h4>
                    <p className='para2'>We specialize in designing and developing custom business applications from scratch, tailored to meet your specific needs. </p>
                </div>
            </div><br/><br/>

            <div className="row justify-content-center">
            <div className="col-md-4 my-5 text-center">
                    <h4 className='heading3'>Application Support & Maintenance</h4>
                    <p className='para2'>We offer comprehensive setup and maintenance services for your business applications, along with troubleshooting and support for your existing systems.</p>
                </div>

                <div className="col-md-4">
                    <img className='imgStyle' src="/images/tech8.jpg" alt="tech" />
                </div>
                
            </div>
        </div>
    )
}
