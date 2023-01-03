import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import toronto from '../../assets/images/toronto.jpg'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={"About Me".split("")} idx={15} />
                </h1>
                <p>Hey there! My name is William Von Hagen, a second year Computer Science student working towards a Bachelor's 
                    degree at Toronto Metropolitan University. I am continually striving to better myself in programming ability.
                    This website, or React app, was created as one such example of this, and so was my discord bot project.</p>
                <p>In my free time, I enjoy exploring the world and seeing what sights lie within the city that I live in,
                    often taking pictures to remember the places I've been. I also love playing exploration-focused games in my 
                    spare time such as Elden Ring or Risk of Rain 2.
                </p>
            </div>
            <div className='images'>
                <img src={toronto} alt="Toronto" />
            </div>
        </div>
        <Loader type="line-scale" />
        </>
    )

};

export default About