
// eslint-disable-next-line import/prefer-default-export
export interface Model {
  getServiceProviders: () => Promise<any>;
  getServiceProviderById: (id: string) => Promise<ServiceProvider>;

  getServices: () => Promise<Service[]>;
  getProviderServices: (id: string) => Promise<Service[]>;
  getServiceById: (serviceId: string, providerId?: string) => Promise<Service>;

  getPlans: () => Promise<Plan[]>;
  getServicePlans: (serviceId: string, providerId?: string) => Promise<Plan[]>;
  getProviderPlans: (providerId: string) => Promise<Plan[]>;
  getPlanById: (planId: string, serviceId?: string, providerId?: string) => Promise<Plan>;

}

export interface Thing {
  id: string;
  name: string;
  description: string;
  website?: string;
  banner?: string;
  logo?: string;
}

export interface ServiceProvider extends Thing {
  logo: string;
  banner: string;
  address?: string;
  website: string;
}

export interface Service extends Thing {
  providerId: string;
  technology: string[];
}

export interface Plan extends Thing {
  providerId: string;
  serviceId: string;
  price: {
    value: number;
    currency: string;
    relativeMagnitude: number;
  };
  volume: {
    value: number | 'Unlimited';
    unit: string;
    relativeMagnitude: number;
  };
  duration: {
    value: number;
    unit: string;
    relativeMagnitude: number;
  };
}
