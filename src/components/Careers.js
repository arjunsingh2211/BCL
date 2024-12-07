import React from 'react'

export default function Careers() {
    return (
        <div className='container'>
            <h1 className='heading2'>We are Hiring</h1>

            <div className="row justify-content-center">
                <div className="col-md-3">
                    <img className='imgStyle' src="/images/tech25.png" alt="carrer" />
                </div>

                <div className="col-md-6">
                    <br />
                    <h4 className='heading3'>Come join us</h4>
                    <p className='para2' style={{
                        textAlign: 'left',
                        lineHeight: '30px',
                    }}>We are seeking experienced IT professionals to join our dynamic and dedicated team. If you're interested, please send your CV to <a href="mailto:bcltech.mail.com">bcltech.mail.com</a></p>
                    <br /><br /><br />
                    <h4 className='heading3'>Develop and Enhance your Career</h4>
                    <p className='para2' style={{
                        textAlign: 'left',
                        lineHeight: '30px',
                    }}>We offer opportunities to grow your skills and achieve your career goals in a supportive environment.</p>
                    <br />
                    <h4 className='heading3'>Learning and Development</h4>
                    <p className='para2' style={{
                        textAlign: 'left',
                        lineHeight: '30px',
                    }}>Looking to learn new technologies and expand your horizons? We are passionate about exploring the latest industry innovations and incorporating them to deliver value to our customers.</p>
                    <br />
                    <h4 className='heading3'>Equal Employment Opportunity</h4>
                    <p className='para2' style={{
                        textAlign: 'left',
                        lineHeight: '30px',
                    }}>We are committed to fostering a diverse and inclusive work environment. We uphold the principles of equal employment opportunity, ensuring no discrimination or harassment based on factors such as age, race, gender, religion, disability, sexual orientation, or any other protected characteristic. This policy applies to all aspects of employment, including recruitment, hiring, promotion, compensation, and training.</p>
                    <br />
                </div>
            </div>
        </div>

    )
}
