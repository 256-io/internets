type QuantitativeValue = {
    value: number;
    unit: string;
}

type Price = {
    value: number;
    currency: string;
}

type Dataplan = {
    providerId: string;
    serviceId: string;
    name: string;
    description: string;
    website?: string;
    logo?: string;
    banner?: string;
    price:Price
    volume: QuantitativeValue
    duration: QuantitativeValue
    speed?: QuantitativeValue
}

type InternetService = {
    providerId: string;
    serviceId: string;
    name: string;
    description: string;
    website?: string;
    logo?: string;
    banner?: string;
    technologies: string[];
}

type InternetServiceProvider = {
    providerId: string;
    name: string;
    description: string;
    website?: string;
    logo?: string;
    banner?: string;
    address: string;
}