import React from 'react';

export default function Home() {
    const styles = {
        heading1: {
            fontFamily: "'Libre Baskerville', sans-serif",
            fontSize: '57px',
        },
        para1: {
            fontFamily: "'Libre Baskerville', sans-serif",
            fontSize: '25px',
        },
        para2: {
            fontFamily: "'Libre Baskerville', sans-serif",
            fontSize: '18px',
            textAlign: 'center',
        },
    };

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-4 text-center">
                    <h3 className='heading3'>Empowering</h3>
                    <h3 className='heading3'>Through</h3>
                    <h3 className='heading3'>Technology</h3><br />
                    <p className='para2'>
                    We are committed to delivering exceptional, tailor-made applications designed to meet the unique needs of each client. Our focus is on excellence in every aspect of the design process, ensuring high-quality, innovative solutions.
                    </p>
                </div>
                <div className="col-md-8">
                    <img src="/images/tech.png" alt="demo" className='imgStyle' />
                </div>
            </div>
                      
        </div>
    );
}