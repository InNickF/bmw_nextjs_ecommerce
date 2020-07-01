const colors = [
  {
    value: "#000000",
    title: "NEGRO",
  },
  {
    value: "#2468AF",
    title: "AZUL",
  },
  {
    value: "#FFFFFF",
    title: "BLANCO",
  },
  {
    value: "#FF001F",
    title: "ROJO",
  },
  {
    value: "#9B9B9B",
    title: "GRIS",
  },
  {
    value: "#8B572A",
    title: "CAFÉ",
  },
  {
    value: "#FCDFC6",
    title: "BEIGE",
  },
  {
    value: "#388E3C",
    title: "VERDE",
  },
  {
    value: "#FF5722",
    title: "NARANJA",
  },
  {
    value: "#F8E71C",
    title: "AMARILLO",
  },
  {
    value: "#F8E71C",
    title: "Amarillo",
  },
];

const sortItems = [
  {
    value: "createdAt-ASC",
    text: "--",
  },
  {
    value: "price-ASC",
    text: "Precio de menor a mayor",
  },
  {
    value: "price-DESC",
    text: "Precio de mayor a menor",
  },
  {
    value: "createdAt-DESC",
    text: "Lo más nuevo",
  },
  {
    value: "name-ASC",
    text: "De la A a la Z",
  },
  {
    value: "discountPercentage-DESC",
    text: "En promoción",
  },
];

const genderItems = [
  {
    value: "Todos",
    text: "Todos",
  },
  {
    value: "Masculino",
    text: "Masculino",
  },
  {
    value: "Femenino",
    text: "Femenino",
  },
  {
    value: "Niños",
    text: "Niños",
  },
  {
    value: "Unisex",
    text: "Unisex",
  },
];

const filters = {
  motorrad: {
    "TRAJES DE PROTECCIÓN": ["Talla", "Color", "Colección"],
    CASCOS: ["Talla", "Color", "Género"],
    JET: ["Talla", "Color", "Género"],
    ABATIBLE: ["Talla", "Color", "Género"],
    INTEGRAL: ["Talla", "Color", "Género"],
    GUANTES: ["Talla", "Color", "Género"],
    "TRAJES DE PROTECCIÓN": ["Talla", "Color", "Tipo"],
    BOTAS: ["Talla", "Color", "Género"],
    "ROPA PARA MOTOCICLISTA": ["Talla", "Color", "Género", "Tipo"],
    "ACCESORIOS PARA MOTOS": [""],
    "CAMISAS Y CAMISETAS": ["Talla", "Color", "Género", "Tipo"],
    "GORRAS Y GORROS": ["Talla", "Color", "Género", "Tipo"],
    "CHAQUETAS Y CHALECOS": ["Talla", "Color", "Género", "Tipo"],
    VARIEDADES: ["Talla", "Color", "Tipo"],
    LLANTAS: ["Escala", "Width", "Flatness", "Runflat"]
  },
  mini: {
    CAMISETAS: ["Género", "Talla", "Color", "Colección"],
    "BILLETERAS Y MALETAS": ["Color", "Colección", "Propósito"],
    MALETAS: ["Color", "Colección"],
    BILLETERAS: ["Color", "Colección"],
    MINIATURAS: ["Color", "Escala"],
    VARIEDADES: ["Talla", "Color", "Colección", "Tipo"],
    "HOGAR Y OFICINA": ["Color", "Colección", "Tipo"],
    "CHAQUETAS Y BUZOS": ["Color", "Género", "Precio", "Colección", "Talla"],
    GORRAS: ["Color", "Colección"],
    LLANTAS: ["Escala", "Width", "Flatness", "Runflat"]
  },
  bmw: {
    MINIATURAS: ["Color", "Escala"],
    "MONTBLANC PARA BMW": ["Color", "Tipo"],
    "CHAQUETAS Y BUZOS": ["Género", "Talla", "Color", "Colección"],
    CHAQUETAS: ["Género", "Talla", "Color", "Colección"],
    CHALECOS: ["Género", "Talla", "Color", "Colección"],
    BUZOS: ["Género", "Talla", "Color", "Colección"],
    "CAMISETAS Y POLOS": ["Género", "Talla", "Color", "Colección"],
    GORRAS: ["Género", "Color", "Talla", "Tipo", "Colección"],
    "BILLETERAS Y VIAJE": ["Color", "Colección"],
    MALETAS: ["Color", "Colección"],
    BILLETERAS: ["Color", "Colección"],
    RELOJES: ["Género", "Color", "Colección"],
    VARIEDADES: ["Color", "Talla", "Colección", "Tipo"],
    TENIS: ["Género", "Color", "Talla", "Colección"],
    "HOGAR Y OFICINA": ["Colección", "Tipo"],
    LLANTAS: ["Escala", "Width", "Flatness", "Runflat"]
    /* "INTERIOR": ["Color"],
        "EXTERIOR": ["Color"], */
    /* "M PERFORMANCE PARTS": ['Color'] */
  },
};

const colections = {
  1: [],
  2: ["MINI COLLECTION", "MINI 60 AÑOS", "JOHN COOPER WORKS"],
  3: [
    "GOLFSPORT",
    "Yatchsport",
    "ACTIVE",
    "M MOTORSPORT",
    "BMW M",
    "BMW X",
    "BMW I",
    "CLÁSICA",
  ],
};

const colorsPicker = {
  NEGRO: {
    value: "#000000",
    title: "Negro",
  },
  AZUL: {
    value: "#2468AF",
    title: "Azul",
  },
  BLANCO: {
    value: "#FFFFFF",
    title: "Blanco",
  },
  ROJO: {
    value: "#FF001F",
    title: "Rojo",
  },
  GRIS: {
    value: "#9B9B9B",
    title: "Gris",
  },
  CAFÉ: {
    value: "#8B572A",
    title: "Café",
  },
  BEIGE: {
    value: "#FCDFC6",
    title: "Beige",
  },
  VERDE: {
    value: "#388E3C",
    title: "Verde",
  },
  NARANJA: {
    value: "#FF5722",
    title: "Naranja",
  },
  "AZUL OSCURO": {
    value: "#182173",
    title: "Azul Oscuro",
  },
  AMARILLO: {
    value: "#F8E71C",
    title: "Amarillo",
  },
  "AMARILLO NEÓN": {
    value: "#F8E71C",
    title: "Amarillo",
  },
  "MARRÓN CLARO": {
    value: "#CDA683",
    title: "Marrón Claro",
  },
  "GRIS OSCURO": {
    value: "#4A4A4A",
    title: "Gris Oscuro",
  },
  MULTICOLOR: {
    value: "Multicolor.png",
    title: "Multicolor",
    image: true,
  },
  BRONCE: {
    value: "Bronce.png",
    title: "Bronce",
    image: true,
  },
  COBRE: {
    value: "Cobre.png",
    title: "Cobre",
    image: true,
  },
  PLATEADO: {
    value: "Plateado.png",
    title: "Plateado",
    image: true,
  },
  CORAL: {
    value: "#e93439",
    title: "coral",
  },
  VINOTINTO: {
    value: "#5e2129",
  },
  MORADO: {
    value: "#8c004b",
  },
};

const sizes = [
  "44",
  "50",
  "56",
  "62",
  "68",
  "74",
  "80",
  "86",
  "92",
  "86",
  "92",
  "98",
  "104",
  "110",
  "116",
  "122",
  "128",
  "134",
  "140",
  "146",
  "152",
  "158",
  "164",
  "170",
  "XXXS",
  "XXS",
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "XXL",
  "XXL",
  "2XL",
  "3XL",
  "ÚNICA",
]

const tireBrands = [
  "bridgestone.png",
  "goodyear.png",
  "michelin.png",
  "pirelli.png",
  "hankook.png",
  "dunlop.png",
  "continental.png",
];

export { colors, sortItems, genderItems, filters, colections, colorsPicker, sizes, tireBrands };
