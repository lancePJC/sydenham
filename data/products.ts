export interface Product {
  id: number;
  name: string;
  retail: number;
  wholesale: number;
  type: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Tamu Coffee Medium/Dark Roast Beans 250g",
    retail: 800,
    wholesale: 550,
    type: "beans",
  },
  {
    id: 2,
    name: "Tamu Coffee Medium/Dark Roast Beans 500g",
    retail: 1500,
    wholesale: 1000,
    type: "beans",
  },
  {
    id: 3,
    name: "Tamu Coffee Medium/Dark Roast Beans 1Kg",
    retail: 2800,
    wholesale: 1900,
    type: "beans",
  },
  {
    id: 4,
    name: "Tamu Coffee Medium/Dark Roast Fine Grind 250g",
    retail: 800,
    wholesale: 550,
    type: "grind",
  },
  {
    id: 5,
    name: "Tamu Coffee Medium/Dark Roast Fine Grind 325g",
    retail: 900,
    wholesale: 610,
    type: "grind",
  },
  {
    id: 6,
    name: "Tamu Coffee Medium/Dark Roast Fine Grind 500g",
    retail: 1500,
    wholesale: 1000,
    type: "grind",
  },
  {
    id: 7,
    name: "Tamu Coffee Medium/Dark Roast Fine Grind 1Kg",
    retail: 2800,
    wholesale: 1900,
    type: "grind",
  },
  {
    id: 8,
    name: "Tamu Coffee Instant Coffee 50g",
    retail: 300,
    wholesale: 214,
    type: "instant",
  },
  {
    id: 9,
    name: "Tamu Coffee Instant Coffee 100g",
    retail: 520,
    wholesale: 400,
    type: "instant",
  },
  {
    id: 10,
    name: "Tamu Coffee 100g Ground Coffee",
    retail: 99,
    wholesale: 75,
    type: "grind",
  },
];