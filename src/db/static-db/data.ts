import { ServiceProvider, Service } from '../interface';


const data: {
  serviceProviders: ServiceProvider[];
  services: Service[];
} = {
  serviceProviders: [
    {
      id: 'one',
      name: 'Airtel Uganda',
      description: 'Accusantium odit neque voluptates laboriosam repudiandae incidunt id voluptatum et. Aliquam provident incidunt. Tempora repellendus et. Amet enim quisquam corporis. Et ex laborum eos.',
      website: 'https://airtel.ug',
      banner: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Bharti_Airtel_Limited_logo.svg/1280px-Bharti_Airtel_Limited_logo.svg.png',
      logo: 'https://upload.wikimedia.org/wikipedia/en/1/14/Bharti_Airtel_Limited.svg',
    }, {
      id: 'two',
      name: 'MTN Uganda',
      description: 'Excepturi et veniam perspiciatis porro consequatur molestiae voluptatem. Labore velit aut omnis sint esse aperiam. Qui consectetur temporibus. Non reiciendis voluptate corrupti maxime modi assumenda voluptas. Doloremque blanditiis doloribus consectetur voluptates voluptates aliquid.',
      website: 'https://mtn.ug',
      banner: 'https://wba-wpengine.netdna-ssl.com/wp-content/uploads/2016/05/MTN-Logo-1024x576.jpg',
      logo: 'https://seeklogo.com/images/M/MTN-logo-459AAF9482-seeklogo.com.png',
    }, {
      id: 'three',
      name: 'Africell Uganda',
      description: 'Non minima ullam numquam dolorem. Quis culpa alias eos reprehenderit illo unde aut quia. Sed iste quis non dolorem sequi. Odit distinctio quo fugit totam molestiae. Ea omnis sed.',
      website: 'https://africell.ug',
      banner: 'http://www.accessgambia.com/information/large/africell-logo-1.jpg',
      logo: 'http://www.connectenterprise.ug/sites/default/files/africell.jpg',
    },
  ],
  services: [
    {
      id: 'Handmade',
      providerId: 'one',
      name: 'Handmade Service',
      description: 'Amet amet consectetur ipsum commodo ea consectetur cupidatat commodo consectetur ullamco occaecat proident amet. Ex in proident cupidatat culpa. Enim est officia minim aliqua irure veniam sit ut. Voluptate irure minim duis id non sint aliqua aliquip. Est consectetur ullamco commodo minim dolor amet et velit nisi cillum est non sit.',
      banner: 'http://lorempixel.com/960/480/business/Handmade',
      technology: ['4G/LTE', '3G/UMTS', 'WCDMA'],
    },
    {
      id: 'Small',
      providerId: 'one',
      name: 'Small Service',
      description: 'Pariatur sit qui irure dolore culpa enim qui. Cillum duis consequat nisi sit labore cillum officia exercitation aliqua irure nisi ea culpa ea. Mollit nisi excepteur adipisicing ipsum ullamco. Dolor id in reprehenderit eiusmod incididunt cupidatat ad. Nostrud nisi et sit nisi commodo sit excepteur irure ullamco sunt Lorem. Duis consequat aliquip enim ea duis aute consectetur tempor in laborum. Elit est ad ea deserunt sint Lorem fugiat nisi laborum exercitation in mollit.',
      banner: 'http://lorempixel.com/960/480/business/Small',
      technology: ['4G/LTE', '3G/UMTS', 'WCDMA'],
    },
    {
      id: 'Intelligent',
      providerId: 'two',
      name: 'Intelligent Service',
      description: 'Amet ullamco anim duis esse commodo mollit nisi id consequat ipsum enim. Ut consequat sit reprehenderit aute culpa. Adipisicing amet exercitation amet aute cupidatat non. Reprehenderit occaecat pariatur velit ullamco eiusmod labore proident ea sunt qui labore labore sit. Sunt labore sint mollit sit labore sint.',
      banner: 'http://lorempixel.com/960/480/business/Intelligent',
      technology: ['4G/LTE', '3G/UMTS', 'WCDMA'],
    },
    {
      id: 'Incredible',
      providerId: 'two',
      name: 'Incredible Service',
      description: 'Anim et do do elit nostrud quis pariatur exercitation id dolor eu aute magna commodo. Pariatur laborum irure incididunt laborum voluptate nulla occaecat officia dolore elit. Occaecat deserunt ut magna Lorem eiusmod officia consequat ipsum cillum. Amet exercitation fugiat laborum incididunt est consectetur. Qui excepteur enim consequat velit aliqua consequat voluptate. Elit ad proident dolor aliqua officia cillum.',
      banner: 'http://lorempixel.com/960/480/business/Incredible',
      technology: ['4G/LTE', '3G/UMTS', 'WCDMA'],
    },
    {
      id: 'Handmade',
      providerId: 'three',
      name: 'Handmade Service',
      description: 'Sint excepteur dolore consequat nulla qui aute anim magna do qui occaecat aliquip. Tempor nisi occaecat laborum duis officia mollit esse deserunt officia nisi quis laborum sunt. Quis Lorem dolor elit tempor tempor sit incididunt commodo sint dolore sunt et eu ipsum. Esse ipsum sint et eu dolor in voluptate dolor dolor Lorem tempor culpa pariatur. Proident consectetur voluptate labore ullamco aliqua nostrud laborum non irure velit adipisicing quis.',
      banner: 'http://lorempixel.com/960/480/business/three',
      technology: ['4G/LTE', '3G/UMTS', 'WCDMA'],
    },
    {
      id: 'Generic',
      providerId: 'three',
      name: 'Generic Service',
      description: 'Nulla quis cillum deserunt consectetur sit labore et cillum est pariatur ullamco mollit. Fugiat labore sint ad tempor mollit mollit magna ad consequat occaecat laboris consequat magna irure. Anim laborum cillum ipsum dolore qui nulla laborum anim aliqua laboris Lorem do. Duis sit cupidatat reprehenderit minim nisi enim in eiusmod nostrud. Nulla nulla proident commodo velit ullamco est laborum. Quis velit Lorem officia in velit. Eiusmod dolore labore qui ad proident proident sunt labore reprehenderit.',
      banner: 'http://lorempixel.com/960/480/business/Generic',
      technology: ['4G/LTE', '3G/UMTS', 'WCDMA'],
    },
  ],
};

export default data;
