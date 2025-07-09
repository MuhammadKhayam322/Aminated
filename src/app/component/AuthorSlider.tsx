// components/AuthorSlider.tsx
import { useState } from 'react';
import AuthorCard from './AuthorCard';
import styles from './AuthorSlider.module.css';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

const AuthorSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [apiData, setApiData] = useState<  Post[]>([]);


    const fetchData = async () => {
        try {   
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setApiData(data);
        }
        catch (error) { 
            console.error('Error fetching data:', error);
        }
    };
    const authors = [
        { imageSrc: '/cardimg1.png', name: 'Daniel H. Pink', title: 'American writer', duration: '2 hours 58 minutes' },
        { imageSrc: '/cardimg2.png', name: 'Author Two', title: 'Writer', duration: '2 hours 30 minutes' },
        { imageSrc: '/cardimg1.png', name: 'Author Three', title: 'Author', duration: '3 hours 15 minutes' },
        { imageSrc: '/cardimg1.png', name: 'Author Four', title: 'Author', duration: '1 hour 45 minutes' },
        { imageSrc: '/cardimg2.png', name: 'Author Five', title: 'Author', duration: '2 hours 50 minutes' },
        { imageSrc: '/cardimg1.png', name: 'Author Six', title: 'Author', duration: '1 hour 35 minutes' },
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
                        <AuthorCard
                            imageSrc={author.imageSrc}
                            name={author.name}
                            title={author.title}
                            duration={author.duration}
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

export default AuthorSlider;