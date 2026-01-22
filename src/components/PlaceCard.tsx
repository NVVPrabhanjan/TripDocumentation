import Link from 'next/link';
import { Trip } from '@/data/places';
import styles from './PlaceCard.module.css';

interface PlaceCardProps {
    trip: Trip;
}

export default function PlaceCard({ trip }: PlaceCardProps) {
    // We'll use a placeholder if no image, or try to load one.
    // Ideally, we'd have a specific thumbnail.
    // For now, simple placeholder with letter.

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                {/* In real app, we'd use Next Image here. */}
                <div className={styles.placeholder}>
                    {trip.title.charAt(0)}
                </div>
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{trip.title}</h2>
                <p className={styles.description}>{trip.description}</p>
                <div className={styles.rating}>
                    Recommendation: {trip.recommendationRating}/10
                </div>
                <Link href={`/${trip.slug}`} className={styles.link}>
                    Explore {trip.title}
                </Link>
            </div>
        </div>
    );
}
