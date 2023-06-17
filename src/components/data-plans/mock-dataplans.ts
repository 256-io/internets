type Dataplan = {
    providerId: string;
    serviceId: string;
    name: string;
    description: string;
    website?: string;
    logo?: string;
    banner?: string;
    price: {
        value: number;
        currency: string;
    }
    volume: {
        value: number;
        unit: string;
    }
    duration: {
        value: number;
        unit: string;
    }
    speed?: {
        value: number;
        unit: string;
    }
}
const mockDataplans: Dataplan[] = [
    {
        providerId: 'vodafone',
        serviceId: 'gigabit',
        name: 'Gigabit',
        description: 'Gigabit internet for a great price',
        website: 'https://vodafone.co.nz',
        logo: 'https://cdn.ispcompare.xyz/logos/vodafone.svg',
        banner: 'https://cdn.ispcompare.xyz/banners/vodafone.svg',
        price: {
            value: 99.99,
            currency: 'USD'
        },
        volume: {
            value: 1000,
            unit: 'GB'
        },
        duration: {
            value: 30,
            unit: 'days'
        },
        speed: {
            value: 1000,
            unit: 'Mbps'
        }
    },
    {
        providerId: 'spark',
        serviceId: 'ultrafast',
        name: 'Ultrafast',
        description: 'Ultrafast internet for a great price',
        website: 'https://spark.co.nz',
        logo: 'https://cdn.ispcompare.xyz/logos/spark.svg',
        banner: 'https://cdn.ispcompare.xyz/banners/spark.svg',
        price: {
            value: 99.99,
            currency: 'USD'
        },
        volume: {
            value: 1000,
            unit: 'GB'
        },
        duration: {
            value: 30,
            unit: 'days'
        },
        speed: {
            value: 1000,
            unit: 'Mbps'
        }
    },
    {
        providerId: '2degrees',
        serviceId: 'ultrafast',
        name: 'Ultrafast',
        description: 'Ultrafast internet for a great price',
        website: 'https://2degrees.nz',
        logo: 'https://cdn.ispcompare.xyz/logos/2degrees.svg',
        banner: 'https://cdn.ispcompare.xyz/banners/2degrees.svg',
        price: {
            value: 99.99,
            currency: 'USD'
        },
        volume: {
            value: 1000,
            unit: 'GB'
        },
        duration: {
            value: 30,
            unit: 'days'
        },
        speed: {
            value: 1000,
            unit: 'Mbps'
        }
    },
    {
        providerId: 'bigpipe',
        serviceId: 'ultrafast',
        name: 'Ultrafast',
        description: 'Ultrafast internet for a great price',
        website: 'https://bigpipe.nz',
        logo: 'https://cdn.ispcompare.xyz/logos/bigpipe.svg',
        banner: 'https://cdn.ispcompare.xyz/banners/bigpipe.svg',
        price: {
            value: 99.99,
            currency: 'USD'
        },
        volume: {
            value: 1000,
            unit: 'GB'
        },
        duration: {
            value: 30,
            unit: 'days'
        },
        speed: {
            value: 1000,
            unit: 'Mbps'
        }
    },
]

export default mockDataplans;