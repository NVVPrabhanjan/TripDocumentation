import { trips } from '@/data/places';
import PlaceCard from '@/components/PlaceCard';
import styles from './home.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Explore the World</h1>
        <p className={styles.subtitle}>
          Discover curated itineraries for your next adventure. From spiritual journeys to hill station retreats.
        </p>
      </section>

      <div className={styles.grid}>
        {trips.map((trip) => (
          <PlaceCard key={trip.slug} trip={trip} />
        ))}
      </div>
    </main>
  );
}
