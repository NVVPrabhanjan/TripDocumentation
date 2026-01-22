export interface Trip {
    slug: string;
    title: string;
    description: string;
    recommendationRating: number; // 1-5 or 1-10
    folderName: string; // matches public/images/places/{folderName}
    itinerary: {
        day: number;
        title: string;
        activities: string[];
    }[];
}

export const trips: Trip[] = [
    {
        slug: 'mantralaya',
        title: 'Mantralaya',
        description: 'A spiritual journey to the holy town of Mantralaya, famous for the Brindavana of Saint Raghavendra Swami. A place of peace and devotion on the banks of the Tungabhadra River. Highly recommended for a divine experience and serene atmosphere.',
        recommendationRating: 9,
        folderName: 'mantralaya',
        itinerary: [
            { day: 1, title: 'Arrival & Darshan', activities: ['Reach Mantralaya', 'Check into hotel', 'Evening Darshan of Rayaru'] },
            { day: 2, title: 'Temple Sevas', activities: ['Morning Pooja', 'Parimala Prasadam', 'Visit Panchamukhi Anjaneya Temple'] },
            { day: 3, title: 'Departure', activities: ['Morning walk by Tungabhadra', 'Buy souvenirs', 'Return journey'] }
        ]
    },
    {
        slug: 'yercaud',
        title: 'Yercaud',
        description: 'Known as the "Jewel of the South," Yercaud is a serene hill station nestled in the Shevaroy Hills. Famous for its sprawling orange groves, aromatic coffee plantations, and the emerald Yercaud Lake, it offers a perfect refreshing escape from the city heat.',
        recommendationRating: 8,
        folderName: 'yercaud',
        itinerary: [
            { day: 1, title: 'Lake & Garden', activities: ['Boating in Yercaud Lake', 'Anna Park', 'Deer Park'] },
            { day: 2, title: 'Viewpoints', activities: ['Pagoda Point', 'Lady\'s Seat', 'Killiyur Falls'] },
            { day: 3, title: 'Plantations', activities: ['Visit Coffee Plantations', 'Shevaroy Temple', 'Shopping for spices'] }
        ]
    },
    {
        slug: 'mangalore',
        title: 'Mangalore',
        description: 'Experience the ultimate coastal vibe with spicy seafood and pristine sands. Mangalore is a vibrant port city known for its historic temples, diverse culture of Tulunadu, and beautiful golden beaches perfect for sunset views.',
        recommendationRating: 9,
        folderName: 'mangalore',
        itinerary: [
            { day: 1, title: 'Beaches', activities: ['Panambur Beach', 'Tannirbhavi Beach', 'Sunset/Seafood dinner'] },
            { day: 2, title: 'Temples & Churches', activities: ['Kudroli Gokarnanatha', 'St. Aloysius Chapel', 'Mangaladevi Temple'] },
            { day: 3, title: 'City & Food', activities: ['Try Pabbas Ice Cream', 'Visit Pilikula Nisargadhama', 'Departure'] }
        ]
    },



    {
        slug: 'mysore',
        title: 'Mysore',
        description: 'The "City of Palaces," Mysore exudes royalty and grandeur at every turn. From the magnificent Mysore Palace to the Chamundi Hill, it is a cultural capital famous for its heritage, silk, sandalwood, and the grand Dasara festivities.',
        recommendationRating: 10,
        folderName: 'mysore',
        itinerary: [
            { day: 1, title: 'Royalty', activities: ['Mysore Palace', 'Jaganmohan Palace', 'Chamundi Hill'] },
            { day: 2, title: 'Nature & Zoo', activities: ['Mysore Zoo', 'Karanji Lake', 'Brindavan Gardens (Evening)'] },
            { day: 3, title: 'Culture', activities: ['St. Philomena\'s Church', 'Railway Museum', 'Buy Mysore Silk/Sandalwood'] }
        ]
    }
];

export const contributors = [
    // Example contributors - placeholders
    { name: 'Aditya', role: 'Developer & Traveler', image: 'aditya.jpg' },
    { name: 'Friend 1', role: 'Photographer', image: 'friend1.jpg' },
    { name: 'Friend 2', role: 'Logistics', image: 'friend2.jpg' },
    // User can fill this later or we pull dynamically if needed, but static is easier.
];
