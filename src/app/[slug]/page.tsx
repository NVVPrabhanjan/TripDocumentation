import { trips } from '@/data/places';
import styles from './TripDetail.module.css';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';

export async function generateStaticParams() {
    return trips.map((trip) => ({
        slug: trip.slug,
    }));
}

async function getPlaceImages(folderName: string) {
    const imagesDir = path.join(process.cwd(), 'public', 'images', 'places', folderName);
    try {
        if (!fs.existsSync(imagesDir)) return [];
        const files = await fs.promises.readdir(imagesDir);
        return files.filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
            .map(file => `/images/places/${folderName}/${file}`);
    } catch (error) {
        return [];
    }
}

export default async function TripPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    console.log('TripPage params:', slug);
    const trip = trips.find((t) => t.slug === slug);
    console.log('Trip found:', trip?.title);

    if (!trip) {
        console.error('Trip not found for slug:', slug);
        notFound();
    }

    const images = await getPlaceImages(trip.folderName);
    // Split images: Top 3 for hero, rest for gallery
    const heroImages = images.slice(0, 3);
    const galleryImages = images.slice(3);

    return (
        <main className={styles.container}>
            <Link href="/" className={styles.backLink}>
                ← Back to Destinations
            </Link>

            {/* Top Hero Images */}
            {heroImages.length > 0 && (
                <section className={styles.heroImages}>
                    {heroImages.map((img, i) => (
                        <div key={i} className={styles.heroImageWrapper}>
                            <img src={img} alt={`${trip.title} View ${i + 1}`} className={styles.heroImage} />
                        </div>
                    ))}
                </section>
            )}

            <div className={styles.hero}>
                <h1 className={styles.title}>{trip.title}</h1>
                <div className={styles.rating}>Recommendation: {trip.recommendationRating}/10</div>
                <p className={styles.description}>{trip.description}</p>
            </div>

            <section className={styles.itinerary}>
                <h2 className={styles.sectionTitle}>3-Day Itinerary</h2>
                {trip.itinerary.map((day) => (
                    <div key={day.day} className={styles.dayCard}>
                        <div className={styles.dayNumber}>Day {day.day}</div>
                        <h3 className={styles.dayTitle}>{day.title}</h3>
                        <ul className={styles.activityList}>
                            {day.activities.map((activity, index) => (
                                <li key={index}>{activity}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            {galleryImages.length > 0 && (
                <section>
                    <h2 className={styles.sectionTitle}>More Photos</h2>
                    <div className={styles.gallery}>
                        {galleryImages.map((img, i) => (
                            <div key={i} className={styles.galleryItem}>
                                <img src={img} alt={`${trip.title} Gallery ${i + 1}`} loading="lazy" />
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}
