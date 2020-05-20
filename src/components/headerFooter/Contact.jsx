import React from 'react'
import './custom.scss'
import linkedin from './logosreseaux/linkedin.png'
import github from './logosreseaux/github.png'

const Contact = () => {
    return (
    <div className='contact'>
        <h3 className='contactTitle'> Contact us ! </h3> 

            <div className='laTeam'>

                <div className= "col1">
                    <div className="profil">
                        <p className='contactName'>Johanna Cas</p>
                        <a className= "lien" href='https://github.com/johanna-cs'> 
                        <img className="logogit" src={github} alt="github" width="25px"/>
                         github.com/johanna-cs 
                         </a>
                        <a className= "lien" href='https://www.linkedin.com/in/johanna-cas'>
                        <img className="logolinkedin" src={linkedin} alt="linkedin" width="20px"/>
                         linkedin.com/in/johanna-cas 
                         </a>
                    </div>

                    <div className="profil">
                        <p className='contactName'>Jean-Baptiste Bouillat</p>
                        <a className= "lien" href='https://github.com/jbb-dev'> 
                        <img className="logogit" src={github} alt="github" width="25px"/>
                        github.com/jbb-dev 
                        </a>
                        <a className= "lien" href='https://www.linkedin.com/in/jean-baptiste-bouillat/'> 
                        <img className="logolinkedin" src={linkedin} alt="linkedin" width="20px"/>
                        linkedin.com/in/jean-baptiste-bouillat 
                        </a>
                    </div>
                </div>

                <div className= "col2">
                    <div className="profil">
                        <p className='contactName'>Sabrina Bartoli</p>
                        <a className= "lien" href='https://github.com/sabgirl'>
                        <img className="logogit" src={github} alt="github" width="25px"/>
                        github.com/sabgirl
                        </a>
                        <a className= "lien" href='https://www.linkedin.com/in/sabrina-bartoli-b421b975'> 
                        <img className="logolinkedin" src={linkedin} alt="linkedin" width="20px"/>
                        linkedin.com/in/sabrina-bartoli-b421b975 
                        </a>
                    </div>

                    <div className="profil">
                        <p className='contactName'>Olivier Baveux</p>
                        <a className= "lien" href='https://github.com/lco23'> 
                        <img className="logogit" src={github} alt="github" width="25px"/>
                        github.com/lco23
                        </a>
                        <a className= "lien" href='https://www.linkedin.com/in/olivier-baveux'> 
                        <img className="logolinkedin" src={linkedin} alt="linkedin" width="20px"/>
                        linkedin.com/in/olivier-baveux
                        </a>
                    </div>
                </div>
                
            </div>
            </div>
    )}


export default Contact