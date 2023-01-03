import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    // send an email given a form event using emailjs
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            // create the email using template id and public key
            .sendForm(
                'default_service',
                'template_bsz1pd8',
                refForm.current,
                'BHlK1pax5AYffYbsP'
            )
            // alert user that the form was sent properly and reload
            .then(
                (result) => {
                    alert('Message sent!');
                },
                () => {
                    alert('Failed to send message, please retry.');
                }
            )
    }

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <div className='info-map'>
                    William Von Hagen<br />
                    Canada<br />
                    Toronto, Ontario<br />
                    <span>williamvonhagen@gmail.com</span> 
                </div>
                <h1 className="contactMe">
                    <AnimatedLetters letterClass={letterClass} strArray={"Contact Me".split("")} idx={15} />
                </h1>
                <p>
                    I am currently looking for internships or co-op placements in Computer Science related positions for the summer of 2023.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="from_name" placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type="email" name="reply_to" placeholder='Email' required />
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder="Subject" required/>
                            </li>
                            <li>
                                <textarea name="message" placeholder="Message" required/>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[43.6529, -79.3849]} zoom={10} scrollWheelZoom={false}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[43.6529, -79.3849]}>
                        <Popup>Toronto, Ontario</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="line-scale" />
        </>
    )
};

export default Contact