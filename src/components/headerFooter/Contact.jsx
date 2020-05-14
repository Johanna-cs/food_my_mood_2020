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
                        <a>https://github.com/johanna-cs</a>
                        <a>https://www.linkedin.com/in/johanna-cas/</a>
                    </div>

                    <div className="profil">
                        <p>Jean-Baptiste Bouillat</p>
                        <a>https://github.com/jbb-dev</a>
                        <a>https://www.linkedin.com/in/jean-baptiste-bouillat-b2258450/</a>
                    </div>
                </div>

                <div className= "col2">
                    <div className="profil">
                        <p>Sabrina Bartoli</p>
                        <a>https://github.com/sabgirl</a>
                        <a>https://www.linkedin.com/in/sabrina-bartoli-b421b975/</a>
                        
                    </div>

                    <div className="profil">
                        <p>Olivier Baveux</p>
                        <a>https://github.com/lco23</a>
                        <a>https://www.linkedin.com/in/olivierbaveux/</a>
                    </div>
                </div>

            </div>
    </div>
    )}


export default Contact