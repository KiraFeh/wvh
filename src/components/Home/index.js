import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = " William,".split("");
    const jobArray = "A CS Student".split("");

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <span className={`${letterClass} _13`}>,</span>
                <br />
                <span className={`${letterClass} _14`}>I</span>
                <span className={`${letterClass} _15`}>'m</span>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={16}/>
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={23} />
                </h1>
                <h2>Java / HTML / CSS / JavaScript</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <div className='logo-drawing'>
                <svg width="510" height="510" viewBox="0 0 510 510" id="desktop-logo" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="screen">
                        <rect id="large-rectangle" x="59" y="9" width="393" height="271" rx="30" stroke-width="10"/>
                    </g>
                    <g id="slash">
                        <rect id="forward-slash" x="222.407" y="215.965" width="156.005" height="5.69363" rx="2.84681" transform="rotate(-68.2554 222.407 215.965)" />
                    </g>
                    <g id="w">
                        <rect id="w-left" x="219.569" y="503.751" width="138.36" height="5.69363" rx="2.84681" transform="rotate(-113.337 219.569 503.751)" />
                        <rect id="w-mid-to-left" x="283.437" y="506.551" width="142.566" height="5.69363" rx="2.84681" transform="rotate(-113.337 283.437 506.551)" />
                        <rect id="w-mid-to-right" x="218.422" y="503.179" width="142.276" height="5.69363" rx="2.84681" transform="rotate(-65.9724 218.422 503.179)" />
                        <rect id="w-right" x="281.621" y="503.34" width="142.276" height="5.69363" rx="2.84681" transform="rotate(-65.9724 281.621 503.34)" />
                    </g>
                    <g id="monitor-stand">
                        <rect id="left-leg" x="220" y="346" width="66" height="5" rx="2.5" transform="rotate(-90 220 346)" />
                        <rect id="monitor-bottom" x="191" y="343" width="126" height="6" rx="3" />
                        <rect id="right-leg" x="283" y="346" width="66" height="6" rx="3" transform="rotate(-90 283 346)" />
                    </g>
                    <g id="left-bracket">
                        <rect id="left-bracket-top" x="101.383" y="143.915" width="102.424" height="5.69363" rx="2.84681" transform="rotate(-30.0042 101.383 143.915)" />
                        <rect id="left-bracket-bottom" x="103.296" y="141.662" width="102.424" height="5.69363" rx="2.84681" transform="rotate(28.6797 103.296 141.662)" />
                    </g>
                    <g id="right-bracket">
                        <rect id="right-bracket-top" x="317.126" y="92.6963" width="102.424" height="5.69363" rx="2.84681" transform="rotate(28.6797 317.126 92.6963)" />
                        <rect id="right-bracket-bottom" x="316.352" y="191.172" width="102.424" height="5.69363" rx="2.84681" transform="rotate(-30.0042 316.352 191.172)" />
                    </g>
                </svg>
            </div>
        </div>
        <Loader type="line-scale" />
        </>
    );
}

export default Home