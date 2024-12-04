import React from 'react'

export default function AboutUs() {

  return (
    <div>
       <h1 className='heading2'>About us</h1>

<div className="container">
    <div className="row justify-content-center g-4">
        <div className="col-lg-3 col-md-4 col-sm-6 text-center">
            <img src="/images/tech1.jpg" alt="Tech Experience" className='imgStyle' />
            <h3 className="my-4 heading3">Technical Experience</h3>
            <p className='para2'>
            We specialize in various design patterns, frameworks, and databases, offering cloud-based services. Our expertise spans a wide range of technologies commonly used by small businesses. From small to large-scale projects, we support clients through all phases of development.
            </p>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 ms-lg-4 text-center">
            <img src="/images/tech2.jpg" alt="High ROI" className='imgStyle' />
            <h3 className="my-4 heading3">High ROI</h3>
            <p className='para2'>
            Are maintenance costs consuming your IT budget? Many businesses struggle with limited resources for new technology due to ongoing system upkeep. By outsourcing your IT management to us, you can concentrate on what matters most—growing your business.
            </p>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 ms-lg-4 text-center">
            <img src="/images/tech3.jpg" alt="Deliver Value" className='imgStyle' />
            <h3 className="my-4 heading3">Deliver Value</h3>
            <p className='para2'>
            We focus on maximizing resource utilization and eliminating redundant processes to deliver value. By following best-in-class methodologies like Agile, we ensure faster time-to-market. An efficient process, in our view, naturally leads to profitability.
            </p>
        </div>
    </div>
</div>

<br /><br /><br /><br />
<div className="container">
                <div className="row justify-content-center g-4">
                    <div className="col-lg-3 col-md-4 col-sm-6 text-center">
                        <img src="/images/tech4.jpg" alt="Tech Experience" className='imgStyle' />
                        <h3 className="my-4 heading3">Our Vision</h3>
                        <p className='para2'>
                        We prioritize career growth for our team and deliver technology-driven business accelerators for our customers.                        </p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 ms-lg-4 text-center">
                        <img src="/images/tech5.jpg" alt="High ROI" className='imgStyle' />
                        <h3 className="my-4 heading3">Our Mission</h3>
                        <p className='para2'>
                        We deliver sustainable, functional application solutions using modern technologies efficiently, professionally, and on time.
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 ms-lg-4 text-center">
                        <img src="/images/tech6.jpg" alt="Deliver Value" className='imgStyle' />
                        <h3 className="my-4 heading3">Satisfaction Guaranteed</h3>
                        <p className='para2'>
                        Technology moves fast and can feel overwhelming. That’s why we tailor our services to your company’s needs. Regardless of budget, we deliver professional customer service and guarantee your satisfaction.
                        </p>
                    </div>
                </div>
            </div>

    </div>
  )
}
