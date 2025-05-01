import { useState } from 'react';
import Trainer from './Trainer';
import styles from './AuthorSlider.module.css';


const TrainerSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const authors = [
        { imageSrc: '/cardimg1.png', name: 'Daniel H. Pink', 
             btn: 'View Tutorial',description:'Group Culture and Musician Education' },
        { imageSrc: '/cardimg1.png', name: 'Daniel H. Pink',  btn: 'View Tutorial',description:'Group Culture and Musician Education' },
        { imageSrc: '/cardimg1.png', name: 'Daniel H. Pink',  btn: 'View Tutorial',description:'Group Culture and Musician Education' },
        { imageSrc: '/cardimg1.png', name: 'Daniel H. Pink',  btn: 'View Tutorial',description:'Group Culture and Musician Education' },
        { imageSrc: '/cardimg1.png', name: 'Daniel H. Pink',  btn: 'View Tutorial',description:'Group Culture and Musician Education' },
        { imageSrc: '/cardimg1.png', name: 'Daniel H. Pink',  btn: 'View Tutorial',description:'Group Culture and Musician Education' },
    ];

    const itemsToShow = 4; // Number of items to show

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (authors.length - itemsToShow + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + (authors.length - itemsToShow + 1)) % (authors.length - itemsToShow + 1));
    };

    return (
        <div className={styles.slider}>
            <div 
                className={styles.slides}
                style={{ transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)` }}>
                {authors.map((author, index) => (
                    <div className={styles.slide} key={index}>
                        <Trainer
                            imageSrc={author.imageSrc}
                            name={author.name}
                            btn={author.btn}
                            description={author.description}
                            className="top-20 left-4 md:left-20"
                        />
                    </div>
                ))}
            </div>
            <div className={styles.controls}>
                <button className={styles.controlButton} onClick={prevSlide}>&#10094;</button>
                <button className={styles.controlButton} onClick={nextSlide}>&#10095;</button>
            </div>
        </div>
    );
};

export default TrainerSlider;