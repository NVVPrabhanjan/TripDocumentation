import fs from 'fs';
import path from 'path';
import styles from './Contributors.module.css';

// Type for contributor data
interface Contributor {
    name: string;
    id: string; // The university ID
    imagePath: string;
}

const ID_MAPPING: Record<string, string> = {
    'Aditya Natarajan': '1BM22IS012',
    'Ananya Bhaskar': '1BM22IS027',
    'Anirudh Rao': '1BM22IS031',
    'Apoorva SP': '1BM22IS036',
    'Darshan ND': '1BM22IS060',
    'Darshan S': '1BM22IS061',
    'Heman Gowda': '1BM22IS089',
    'NVV Prabhanjan': '1BM22IS247',
};

async function getContributors(): Promise<Contributor[]> {
    const creatorsDir = path.join(process.cwd(), 'public', 'images', 'creators');

    try {
        // Check if directory exists
        if (!fs.existsSync(creatorsDir)) {
            return [];
        }

        const files = await fs.promises.readdir(creatorsDir);

        // Filter for image files
        const imageFiles = files.filter(file =>
            /\.(jpg|jpeg|png|webp|gif)$/i.test(file)
        );

        return imageFiles.map(file => {
            // Remove extension for name
            const rawName = file.replace(/\.[^/.]+$/, "");
            // Normalize name: replace underscores/dashes with spaces if needed
            // Assuming filenames match keys in ID_MAPPING closely
            const cleanName = rawName.replace(/[-_]/g, " ").trim();

            // Lookup ID
            console.log(`Mapping check: '${cleanName}' -> ${ID_MAPPING[cleanName]}`);
            const id = ID_MAPPING[cleanName] || 'Contributor';

            return {
                name: cleanName,
                id: id,
                imagePath: `/images/creators/${file}`
            };
        }).sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically

    } catch (error) {
        console.error('Error reading creators directory:', error);
        return [];
    }
}

export default async function Contributors() {
    const contributors = await getContributors();

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Meet the Trip Crew</h1>

            {contributors.length === 0 ? (
                <div style={{ textAlign: 'center', color: '#64748b' }}>
                    <p>No contributors found yet.</p>
                    <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
                        Add images to public/images/creators/ to see them here.
                    </p>
                </div>
            ) : (
                <div className={styles.grid}>
                    {contributors.map((contributor) => (
                        <div key={contributor.name} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src={contributor.imagePath}
                                    alt={contributor.name}
                                    className={styles.image}
                                    loading="lazy"
                                />
                            </div>
                            <div className={styles.info}>
                                <h2 className={styles.name}>{contributor.name}</h2>
                                <div className={styles.id}>{contributor.id}</div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}
