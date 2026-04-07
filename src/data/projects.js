const gallery = (slug) => [
  `/assets/projects/featured/${slug}/1.png`,
  `/assets/projects/featured/${slug}/2.png`,
  `/assets/projects/featured/${slug}/3.png`,
  `/assets/projects/featured/${slug}/4.png`,
]

export const projectsContent = {
  introTitle: 'Project Experience Across Multiple Sectors',
  introBody:
    'KenTar-Builders & Engineering Services has handled a range of construction, design-build, and engineering design projects in different parts of the Philippines. The company’s portfolio reflects experience in site implementation, renovation, structural works, and complete design services.',
  items: [
    {
      name: 'Maynilad All Works Projects',
      image: gallery('maynilad-all-works')[0],
      gallery: gallery('maynilad-all-works'),
      scope: 'Sewer pipe laying and services connections',
      location: 'Central B - Manila City Area',
      client: 'Maynilad Water Services, Inc.',
      role: 'Project Engineer (PE)',
      dateStarted: 'January 2017',
      dateFinished: 'April 2018',
      contractAmount: '300 Million',
      description:
        'A major infrastructure-related project involving sewer pipe laying and services connections in the Manila area.',
    },
    {
      name: 'One Eastwood Avenue Tower 2',
      image: gallery('one-eastwood-avenue-tower-2')[0],
      gallery: gallery('one-eastwood-avenue-tower-2'),
      scope: 'Supply and installation of accu frame and cover, 24 units per floor from 8th floor to 51st floor, total of 700 units installed',
      location: 'E. Rodriguez Jr. Ave., Bagumbayan, Quezon City',
      client: 'Megaworld Corporation',
      dateStarted: 'May 2018',
      dateFinished: 'January 2020',
      contractAmount: '15 Million',
      description:
        'A high-rise residential project involving the supply and installation of accu frame and cover units across multiple floors.',
    },
    {
      name: 'Clark Cityfront Towers',
      image: gallery('clark-cityfront-towers')[0],
      gallery: gallery('clark-cityfront-towers'),
      scope: 'Supply and installation of alfresco balcony railings for Clark Green Frontier Project',
      location: 'M.A. Roxas Highway, Angeles City, Clark Freeport Zone, Pampanga',
      client: 'Megaworld Corporation',
      dateStarted: 'October 2019',
      dateFinished: 'April 2021',
      contractAmount: '3.3 Million',
      description:
        'A multi-tower project involving balcony railing installation works for the Clark Green Frontier development.',
    },
    {
      name: 'Modular Kitchen Countertop, Painting Works, Tiling Works and Gate Renovation',
      image: gallery('modular-kitchen-gate-renovation')[0],
      gallery: gallery('modular-kitchen-gate-renovation'),
      scope: 'Modular kitchen countertop, painting works, tiling works and gate renovation',
      location: 'Quezon City',
      client: 'Private',
      role: 'Project in Charge (PIC)',
      dateStarted: 'October 05, 2020',
      dateFinished: 'October 28, 2020',
      contractAmount: '200,000.00',
      description:
        'A residential improvement project covering kitchen works, tiling, painting, and gate renovation.',
    },
    {
      name: 'Construction of Two Storey Residential House',
      image: gallery('two-storey-residential-house')[0],
      gallery: gallery('two-storey-residential-house'),
      scope: 'Design and build',
      location: 'Alicia, Isabela',
      client: 'Private',
      dateStarted: 'December 2019',
      dateFinished: 'March 2020',
      contractAmount: '1,300,000.00',
      description:
        'A completed two-storey residential house delivered through a full design and build approach.',
    },
    {
      name: '4 Storey Residential Exterior Waterproofing',
      image: gallery('four-storey-residential-exterior-waterproofing')[0],
      gallery: gallery('four-storey-residential-exterior-waterproofing'),
      scope: 'Residential exterior waterproofing',
      location: 'Quezon City',
      client: 'Private',
      dateStarted: 'December 2019',
      dateFinished: 'April 2020',
      contractAmount: '150,000 (Labor Works Only)',
      description:
        'A waterproofing project focused on protecting and restoring the exterior envelope of a four-storey residence.',
    },
    {
      name: 'Tondominium 1 & 2',
      image: gallery('tondominium-1-2')[0],
      gallery: gallery('tondominium-1-2'),
      scope: 'Supply and installation of metal handrail and stair nosing',
      location: 'VIB Compound, Vitas Tondo, Manila',
      client: 'City of Manila',
      dateStarted: 'September 2021',
      dateFinished: 'February 2022',
      contractAmount: '900,000.00',
      description:
        'A 15-storey residential building project involving metal handrail and stair nosing installation works.',
    },
    {
      name: 'Binondominium',
      image: gallery('binondominium')[0],
      gallery: gallery('binondominium'),
      scope: 'Supply and installation of metal handrail and stair nosing',
      location: 'Delpan St., Binondo, Manila City',
      client: 'City of Manila',
      dateStarted: 'September 2021',
      dateFinished: 'February 2022',
      contractAmount: '450,000.00',
      description:
        'A 15-storey residential building project with stair and handrail installation works completed for the City of Manila.',
    },
    {
      name: '3 Storey Residence with RoofDeck',
      image: gallery('three-storey-residence-roofdeck')[0],
      gallery: gallery('three-storey-residence-roofdeck'),
      scope: 'Design and build',
      location: '218 Bisig ng Kabataan St., Sangandaan, Caloocan City',
      client: 'Mr. & Mrs. Benjie Tacurda',
      dateStarted: 'September 2022',
      dateFinished: 'August 2023',
      contractAmount: '4.10 Million',
      description:
        'A completed residential design and build project featuring a three-storey structure with roof deck.',
    },
    {
      name: '2 Storey Commercial Building',
      image: gallery('two-storey-commercial-building')[0],
      gallery: gallery('two-storey-commercial-building'),
      scope: 'Design and build',
      location: 'Brgy. Rizal, Santiago City, Isabela',
      client: 'Mr. & Mrs. Karl G. Julio',
      dateStarted: 'March 2025',
      dateFinished: 'Ongoing (Bare Finished)',
      contractAmount: '3.5 Million',
      description:
        'An ongoing commercial design and build project that demonstrates the company’s continuing construction capability.',
    },
  ],
  categories: [
    ['Construction Projects', 'Implementation of residential, commercial, and specialty construction works.'],
    ['Design and Build Projects', 'Complete project delivery from planning and design to construction.'],
    ['Structural Design Services', 'Engineering design and analysis for residential, commercial, and specialized structural requirements.'],
    ['Plumbing Design Services', 'Complete plumbing and sanitary design solutions for various building types.'],
  ],
  moreProjects: [
    {
      title: 'Complete Package Design',
      items: [
        {
          description: 'Renovation Two Storey Residence With Terrace',
          location: 'Rimaven Homes, Dau, Mabalacat City, Pampanga',
          owner: 'Mr./Mrs. Joannah A. Aquino',
        },
        {
          description: 'Renovation Two Storey Residence With Terrace',
          location: '44 Jaguar St., Fairview Park, Quezon City',
          owner: 'Mr./Mrs. Roger Tan',
        },
        {
          description: 'As-Built Plan Two Storey Commercial Building',
          location: 'U.N. Ave., Cor. Churruca St., Ermita, Manila City',
          owner: 'ANGEO INC.',
        },
        {
          description: 'Three Storey Residence with Roof Deck',
          location: '218 Bisig ng Kabataan St., Sangandaan, Caloocan City',
          owner: 'Mr. & Mrs. Benjie Tacurda',
        },
        {
          description: 'Bungalow Extension Alimasa Residence',
          location: '35 Mercury St., Sta. Maria Subd. Phase 3, Ampid 1, San Mateo, Rizal',
          owner: 'Mr. & Mrs. Jeffrey J. Alimasa',
        },
        {
          description: '2 Storey Commercial Building',
          location: 'Brgy. Rizal, Santiago City, Isabela',
          owner: 'Mr. & Mrs. Karl G. Julio',
        },
        {
          description: 'Two-Bedroom Residential House with Loft',
          location: 'Tandiangan, Tuba, Benguet',
          owner: 'Mr./Mrs. Razel John E. Dela Cruz',
        },
        {
          description: 'Two Storey Residential Building',
          location: 'Masaya Centro, San Agustin, Isabela',
          owner: 'Mr./Mrs. Rowena A. Bocaya',
        },
      ],
    },
    {
      title: 'Structural Design Services',
      items: [
        {
          description: 'Structural Design and Analysis Two Storey Residence with Roof Deck',
          location: 'Bagong Pook, Lipa City, Batangas',
          owner: 'Mr./Mrs. Mary Joy R. Galleposo',
        },
        {
          description: 'Structural Design and Analysis Two Storey with Roof Deck Radstake Residence',
          location: 'Brgy. Maunong, Calamba, Laguna',
          owner: 'Mr./Mrs. Frank Radstake',
        },
        {
          description: 'Structural Design and Analysis Bungalow Building',
          location: 'Brgy. Olo-Olo, Lobo, Batangas',
          owner: 'Mr./Mrs. Dunmille H. Ortile',
        },
        {
          description: 'Structural Design and Analysis Santiago Commercial Building',
          location: 'Santiago City, Isabela',
          owner: 'Private',
        },
        {
          description: 'Structural Design and Analysis Proposed Malabon Warehouse',
          location: 'Malabon City, Metro Manila',
          owner: 'Private',
        },
        {
          description: 'Shear Bars Structural Analysis Embedment Depth East Ave. Sewage Treatment Plant',
          location: 'East Avenue, Quezon City',
          owner: 'Private',
        },
        {
          description: 'Structural Design and Analysis Roofing Renovation, Wood to Steel Truss',
          location: 'Orense St., Makati City, Metro Manila',
          owner: 'Guadalupe Catholic School',
        },
        {
          description: 'Structural Design and Analysis Bungalow Residence',
          location: 'Kapayapaan Ville, Canlubang, Laguna',
          owner: 'Engr. Ronie Tapeno',
        },
        {
          description: 'Corbel and Baseplate Design Calculation Guadalupe Catholic Church',
          location: 'Orense St., Makati City, Metro Manila',
          owner: 'Guadalupe Catholic School',
        },
        {
          description: 'Structural Design and Analysis Two Storey Residence',
          location: 'S. Green Plains, Cauayan, Angeles City, Pampanga',
          owner: 'Mr. & Mrs. Jefferson and Dinia D. Ruedas',
        },
        {
          description: 'Structural Design and Analysis Two Storey Residence',
          location: 'Gibraltar, Baguio City',
          owner: 'Mr. & Mrs. Mark Santos',
        },
        {
          description: 'Structural Design and Analysis for a Proposed Stage at Indoor Sports Center',
          location: 'Isabela State University, San Fabian, Echague',
          owner: 'Isabela State University',
        },
        {
          description: 'One Storey Residential House Steel Frame Structure',
          location: 'Brgy. Sta. Luciana, Cauayan City, Isabela',
          owner: 'Private',
        },
        {
          description: 'Three (3) Storey Residential Building',
          location: '6 Dama de Noche St., Greenpark Village, Brgy. San Isidro, Cainta, Rizal',
          owner: 'Mr. Marvin Conrad G. Favis',
        },
        {
          description: 'Four (4) Storey Residential Building',
          location: '71-A Kamagong St., Espiritu Subdivision, Gatchalian, Sucat, Paranaque City',
          owner: 'Mr. Leopoldo D. Carigara & Mrs. Leonora E. Carigara',
        },
      ],
    },
    {
      title: 'Plumbing Design Services',
      items: [
        {
          description: 'Complete Plumbing/Sanitary Design Two Storey Residence with Roof Deck',
          location: 'Bagong Pook, Lipa City, Batangas',
          owner: 'Mr./Mrs. Mary Joy R. Galleposo',
        },
        {
          description: 'Complete Plumbing/Sanitary Design Bungalow Residence',
          location: 'Sibut, San Jose City, Nueva Ecija',
          owner: 'Mr./Mrs. Jane Galang',
        },
        {
          description: 'Complete Plumbing/Sanitary Design Two Storey Residence',
          location: 'Capitangan, Abucay, Bataan',
          owner: 'Mr./Mrs. Cherry Rose Carreon',
        },
        {
          description: 'Complete Plumbing/Sanitary Design Bungalow Building',
          location: 'Brgy. Olo-Olo, Lobo, Batangas',
          owner: 'Mr./Mrs. Dunmille H. Ortile',
        },
        {
          description: 'Complete Plumbing/Sanitary Design Renovation Commercial Container Van',
          location: 'G. Luna St., Sabang, Lipa City, Batangas',
          owner: 'Mr. Nelson Receno',
        },
        {
          description: 'Complete Plumbing/Sanitary Design Proposed 2nd Floor Extension',
          location: '15 Mira Verde, Nangka, Marikina City',
          owner: 'Mr./Mrs. Joan & Erwin Rafael',
        },
        {
          description: 'Proposed Storage Facility',
          location: 'Congressional Avenue Ext., Culiat, Quezon City',
          owner: 'Ma’am Micah Manikis Shi',
        },
      ],
    },
  ],
}
