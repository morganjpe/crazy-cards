type Card = {
  id: number;
  apr: number;
  name: string;
  BTOD: number;
  POD: number;
  creditAvailable: number;
};

type Cards = Card[];

export const MockCards: Cards = [
  {
    id: 1,
    name: "Student Life",
    apr: 18.9,
    BTOD: 0,
    POD: 6,
    creditAvailable: 1200,
  },
  {
    id: 2,
    name: "Anywhere Card",
    apr: 33.9,
    BTOD: 0,
    POD: 6,
    creditAvailable: 300,
  },
  {
    id: 3,
    name: "Liquid Card",
    apr: 33.9,
    BTOD: 12,
    POD: 6,
    creditAvailable: 3000,
  },
];
