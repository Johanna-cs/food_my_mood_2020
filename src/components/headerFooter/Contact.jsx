import React from 'react'
import './custom.scss'

const Contact = () => {
    return (
    <div className='contact'>
        <h3 className='contactTitle'> Contact us ! </h3> 

            <div className='laTeam'>

                <div className= "col1">
                    <div className="profil">
                        <p>Johanna Cas</p>
                        <a href='https://github.com/johanna-cs' />
                        <a href='https://www.linkedin.com/in/johanna-cas'/>
                    </div>

                    <div className="profil">
                        <p>Jean-Baptiste Bouillat</p>
                        <a href='https://github.com/jbb-dev'/>
                        <a href='https://www.linkedin.com/in/jean-baptiste-bouillat-b2258450/'/>
                    </div>

                <div className= "col2">
                    <div className="profil">
                        <p>Sabrina Bartoli</p>
                        <a href='https://github.com/sabgirl'/>
                        <a href='https://www.linkedin.com/in/sabrina-bartoli-b421b975/'/>
                    </div>

                    <div className="profil">
                        <p>Olivier Baveux</p>
                        <a href='https://github.com/lco23'/>
                        <a href='https://www.linkedin.com/in/olivier-baveux-05560113/'/>
                    </div>
                </div>
                </div>
            </div>
            </div>
    )}


export default Contact