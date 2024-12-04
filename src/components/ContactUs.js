import React from 'react'

export default function ContactUs() {
    return (
        <div className='container heading3'>
            <div className="row">
                <div className="col-md-6">
                <h1 style={{textAlign: 'left'}} className='heading2'>Contact Us</h1>
            
                <p className='para2' style={{
                        textAlign: 'left',
                        lineHeight: '30px',
                    }}>Let us tailor a service package that meets your needs. Tell us a little about your business, and we will get back to you with some ideas as soon as possible.</p>
                    <br />

                    <h4>Twin-Code Solutions</h4>
                    <p className='para2' style={{
                        textAlign: 'left',
                        lineHeight: '30px',
                    }}>The Ripple, Bangalore</p>
                    <br />
                    <span>8871169615</span>
                    <br /><br />

                    <h4>Hours</h4>
                    <span>Monday - Friday: 9am - 6pm</span><br />
                    <span>Saturday - Sunday: Closed</span>


                </div>

                <div className="col-md-6">
                <iframe title='iframe' width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=the%20ripple,%20bangalore+(Twin-Code%20Solutions)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
                </div>
            </div>
            

            
        </div>
    )
}
