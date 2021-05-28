import styles from './Contact.module.scss';
import { Form } from '../components/Form';
import { Button } from '../components/Button';

const Contact = () => {
    const activeField = (e) => {
        const label = e.target.parentElement.firstElementChild;
        label.classList.add(styles.active);
    }

    const inactiveField = (e) => {
        const label = e.target.parentElement.firstElementChild;
        label.classList.remove(styles.active);
    }
    
    return (
        <div className={styles.contact}>
            <div className={styles.backgroundOverlay}>
                <div className={styles.intro}>
                    <h2><span>Contact</span> us</h2>
                    <p>
                        Don't be shy to ask questions. Please contact us by phone or email.
                    </p>        
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.sendMessage}>
                    <header>
                    <h3>Send Message</h3>
                    <i className="far fa-envelope"></i>
                    </header>
                    <Form>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">
                                Name
                            </label>
                            <input 
                                type="text" 
                                id="name" 
                                onFocus={activeField}
                                onBlur={inactiveField} 
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">
                                Email Address
                            </label>
                            <input
                                type="text"
                                id="email"
                                onFocus={activeField}
                                onBlur={inactiveField}
                             />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">
                                How can we help you?
                            </label>
                            <textarea
                                id="message" 
                                rows="3"
                                onFocus={activeField}
                                onBlur={inactiveField}    
                            />
                        </div>
                        <Button type="submit" className="btn">
                            Send
                        </Button>
                    </Form>
                </div>
                <div className={styles.contactInfo}>
                    <h3>Contact Information</h3>
                    <div className={styles.info}>
                        <div className={styles.infoItem}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="none" viewBox="0 0 24 24" stroke="#fff">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p>
                                65 Webb Road, Tighes Hill, New South Wales, Australia
                            </p>
                        </div>
                        <div className={styles.infoItem}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="none" viewBox="0 0 24 24" stroke="#fff">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <p>
                                +61 (02) 4917 8723
                            </p>
                        </div>
                    </div>
                    <div className={styles.socials}>
                        <h3>Follow Us</h3>
                        <div className={styles.icons}>
                            <Button type="button">
                                <i className="fab fa-instagram"></i>
                            </Button>
                            <Button type="button">
                                <i className="fab fa-twitter"></i>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
