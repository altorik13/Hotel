const rooms = [
  //template object to store info about each room

  {
    type: 'VIP suite',
    title: 'Glass window suite',
    slug: 'glass-window-suite',
    people: '4',
    price: {
      currency: '$',
      value: '90',
    },
    //room page
    photos: [
      {
        src: '/_assets/img/other/image6.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image1.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image7.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image2.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image3.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image10.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image6.jpg',
        alt: 'Photo Alt',
      },
    ],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, repudiandae blanditiis? Maiores cum ex neque ad aspernatur culpa minus ducimus aperiam, explicabo fuga molestias omnis quod labore. Aliquam, aliquid quod!',
    amenities: {
      additional: ['1111', '111'],
      abscent: ['2222'],
    },
  },
  {
    type: 'VIP suite',
    title: 'Pool suite',
    slug: 'pool-suite',
    people: '5',
    price: {
      currency: '$',
      value: '130',
    },
    //room page
    photos: [
      {
        src: '/_assets/img/other/image9.jpg',
        alt: 'Photo Alt',
      },
    ],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, repudiandae blanditiis? Maiores cum ex neque ad aspernatur culpa minus ducimus aperiam, explicabo fuga molestias omnis quod labore. Aliquam, aliquid quod!',
    amenities: {
      additional: '',
      abscent: '',
    },
  },
  {
    type: 'VIP suite',
    title: 'Lux suite',
    slug: 'lux-suite',
    people: '2',
    price: {
      currency: '$',
      value: '150',
    },
    //room page
    photos: [
      {
        src: '/_assets/img/other/image11.jpg',
        alt: 'Photo Alt',
      },
    ],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, repudiandae blanditiis? Maiores cum ex neque ad aspernatur culpa minus ducimus aperiam, explicabo fuga molestias omnis quod labore. Aliquam, aliquid quod!',
    amenities: {
      additional: '',
      abscent: '',
    },
  },
  {
    type: 'Room',
    title: 'Comfortable room',
    slug: 'comfortable-room',
    people: '3',
    price: {
      currency: '$',
      value: '60',
    },
    //room page
    photos: [
      {
        src: '/_assets/img/other/image12.jpg',
        alt: 'Photo Alt',
      },
    ],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, repudiandae blanditiis? Maiores cum ex neque ad aspernatur culpa minus ducimus aperiam, explicabo fuga molestias omnis quod labore. Aliquam, aliquid quod!',
    amenities: {
      additional: '',
      abscent: '',
    },
  },
  {
    type: 'Room',
    title: 'Comfortable large room',
    slug: 'comfortable-large-room',
    people: '5',
    price: {
      currency: '$',
      value: '70',
    },
    //room page
    photos: [
      {
        src: '/_assets/img/other/image13.jpg',
        alt: 'Photo Alt',
      },
    ],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, repudiandae blanditiis? Maiores cum ex neque ad aspernatur culpa minus ducimus aperiam, explicabo fuga molestias omnis quod labore. Aliquam, aliquid quod!',
    amenities: {
      additional: '',
      abscent: '',
    },
  },
]

export default rooms