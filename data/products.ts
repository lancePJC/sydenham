// import Coffee1 from '/public/images/Coffee/Coffee1.jpg';
// import Coffee2 from '/public/images/Coffee/Coffee2.jpg';
// import Coffee3 from '/public/images/Coffee/Coffee3.jpg';
import Coffee4 from '/public/images/Coffee/Coffee4.jpg';
import Coffee5 from '/public/images/Coffee/Coffee5.jpg';
import Coffee6 from '/public/images/Coffee/Coffee6.jpg';
import Coffee6a from '/public/images/Coffee/Coffee6a.jpg';
// import Coffee7 from '/public/images/Coffee/Coffee7.jpg';
// import Coffee8 from '/public/images/Coffee/Coffee8.jpg';
// import Coffee9 from '/public/images/Coffee/Coffee9.jpg';
import Coffee10 from '/public/images/Coffee/Coffee10.jpg';
import Coffee11 from '/public/images/Coffee/Coffee11.jpg';
import Coffee12 from '/public/images/Coffee/Coffee12.jpg';
// import Coffee13 from '/public/images/Coffee/Coffee13.jpg';
// import Coffee14 from '/public/images/Coffee/Coffee14.jpg';
// import Coffee15 from '/public/images/Coffee/Coffee15.jpg';
// import Coffee16 from '/public/images/Coffee/Coffee16.jpg';
// import Coffee17 from '/public/images/Coffee/Coffee17.jpg';
// import Coffee18 from '/public/images/Coffee/Coffee18.jpg';
import Coffee19 from '/public/images/Coffee/Coffee19.jpg';
import Coffee20 from '/public/images/Coffee/Coffee20.jpg';
import Coffee21 from '/public/images/Coffee/Coffee21.jpg';
import Coffee21a from '/public/images/Coffee/Coffee21a.jpg';
import Coffee22 from '/public/images/Coffee/Coffee22.jpg';
import Coffee23 from '/public/images/Coffee/Coffee23.jpg';
import Coffee24 from '/public/images/Coffee/Coffee24.jpg';
// import Coffee25 from '/public/images/Coffee/Coffee25.jpg';
// import Coffee26 from '/public/images/Coffee/Coffee26.jpg';
// import Coffee27 from '/public/images/Coffee/Coffee27.jpg';
// import Coffee28 from '/public/images/Coffee/Coffee28.jpg';
// import Coffee29 from '/public/images/Coffee/Coffee29.jpg';
// import Coffee30 from '/public/images/Coffee/Coffee30.jpg';

export interface Product {
  id: number;
  name: string;
  retail: number;
  wholesale: number;
  type: string;
  images: StaticImageData[];
}

export const products: Product[] = [
  // {
  //   id: 1,
  //   name: "Tamu Coffee Medium/Dark Roast Beans 250g",
  //   retail: 800,
  //   wholesale: 550,
  //   type: "beans",
  //   images: [Coffee1, Coffee2, Coffee3],
  // },
  {
    id: 2,
    name: "Tamu Coffee Medium/Dark Roast Beans 500g",
    retail: 1500,
    wholesale: 1000, //complete
    type: "beans",
    images: [Coffee4, Coffee5, Coffee6, Coffee6a],
  },
  // {
  //   id: 3,
  //   name: "Tamu Coffee Medium/Dark Roast Beans 1Kg",
  //   retail: 2800,
  //   wholesale: 1900,
  //   type: "beans",
  //   images: [Coffee7, Coffee8, Coffee9],
  // },
  {
    id: 4,
    name: "Tamu Coffee Medium/Dark Roast Fine Grind 250g",
    retail: 800,
    wholesale: 550, //complete
    type: "grind",
    images: [Coffee10, Coffee11, Coffee12],
  },
  // {
  //   id: 5,
  //   name: "Tamu Coffee Medium/Dark Roast Fine Grind 325g",
  //   retail: 900,
  //   wholesale: 610,
  //   type: "grind",
  //   images: [Coffee13, Coffee14, Coffee15],
  // },
  // {
  //   id: 6,
  //   name: "Tamu Coffee Medium/Dark Roast Fine Grind 500g",
  //   retail: 1500,
  //   wholesale: 1000,
  //   type: "grind",
  //   images: [Coffee16, Coffee17, Coffee18],
  // },
  {
    id: 7,
    name: "Tamu Coffee Medium/Dark Roast Fine Grind 1Kg",
    retail: 2800,
    wholesale: 1900, //complete
    type: "grind",
    images: [Coffee19, Coffee20, Coffee21, Coffee21a],
  },
  {
    id: 8,
    name: "Tamu Coffee Instant Coffee 50g",
    retail: 300,
    wholesale: 214,  //complete
    type: "instant",
    images: [Coffee22, Coffee23, Coffee24],
  },
  // {
  //   id: 9,
  //   name: "Tamu Coffee Instant Coffee 100g",
  //   retail: 520,
  //   wholesale: 400,
  //   type: "instant",
  //   images: [Coffee25, Coffee26, Coffee27],
  // },
  // {
  //   id: 10,
  //   name: "Tamu Coffee 100g Ground Coffee",
  //   retail: 99,
  //   wholesale: 75,
  //   type: "grind",
  //   images: [Coffee28, Coffee29, Coffee30],
  // },
];
