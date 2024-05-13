import { v4 as uuidv4 } from "uuid";

export const CATEGORIES = [
  {
    title: "Categories",
    uid: uuidv4(),
    data: [],
  },
  {
    title: "New In",
    uid: uuidv4(),
    data: [],
  },
  {
    title: "Sale",
    uid: uuidv4(),
    data: [],
  },
  {
    title: "Women Clothing",
    uid: uuidv4(),
    data: [],
  },
  {
    title: "Beachwear",
    uid: uuidv4(),
    data: [],
  },
  {
    title: "Men's Clothing",
    uid: uuidv4(),
    data: [],
  },
  {
    title: "Kids",
    uid: uuidv4(),
    data: [],
  },
  {
    title: "Home and Kitchen",
    uid: uuidv4(),
    data: [],
  },
  {
    title: "Jewellery & Accessories",
    uid: uuidv4(),
    data: [],
  },
  {
    title: "Shoes",
    uid: uuidv4(),
    data: [],
  },
  {
    title: "Beauty & Health",
    uid: uuidv4(),
    data: [],
  },
  {
    title: "Home Textile",
    uid: uuidv4(),
    data: [],
  },

  {
    title: "Sports & Outdoor",
    uid: uuidv4(),
    data: [],
  },
  {
    title: "Electronics",
    uid: uuidv4(),
    data: [],
  },
  {
    title: "Bags & Luggage",
    uid: uuidv4(),
    data: [],
  },
  {
    title: "Baby & Maternity",
    uid: uuidv4(),
    data: [],
  },
  {
    title: "Toys & Games",
    uid: uuidv4(),
    data: [],
  },
  {
    title: "Office & School Supplies",
    uid: uuidv4(),
    data: [],
  },
];

export const NEWINCATEGORIES: {
  title: string;
  img: string;
  url: string;
}[] = [
  {
    title: "View All",
    img: "https://img.ltwebstatic.com/images3_ccc/2023/12/12/92/17023521447c1e3dc62e98bc38b64afae4b83f1771.png",
    url: "/",
  },
  {
    title: "Dresses",
    img: "https://img.ltwebstatic.com/images3_abc/2024/04/26/ae/1714145851d9c05cee8340d20fde9f9a61cc0f5ffc.png",
    url: "/",
  },
  {
    title: "Tops",
    img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
    url: "/",
  },
  {
    title: "Blouses",
    img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
    url: "/",
  },
  {
    title: "T-shirts",
    img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
    url: "/",
  },
  {
    title: "Bottoms",
    img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
    url: "/",
  },
  {
    title: "Denim",
    img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
    url: "/",
  },
  {
    title: "Beachwear",
    img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
    url: "/",
  },
  {
    title: "Co-ords",
    img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
    url: "/",
  },
  {
    title: "Jumpsuits",
    img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
    url: "/",
  },
  {
    title: "Bodysuits",
    img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
    url: "/",
  },
  {
    title: "Suits",
    img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
    url: "/",
  },
  {
    title: "Sweaters",
    img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
    url: "/",
  },
  {
    title: "Sweatshirts",
    img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
    url: "/",
  },
  {
    title: "Outerwear",
    img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
    url: "/",
  },
  {
    title: "Wedding",
    img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
    url: "/",
  },
  {
    title: "Party wear",
    img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
    url: "/",
  },
  {
    title: "Sleep & lounge",
    img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
    url: "/",
  },
];

export const DUMMYCATEGORIESDATA = {
  "New In Curvy Categories": [
    {
      title: "View All",
      img: "https://img.ltwebstatic.com/images3_ccc/2023/12/12/92/17023521447c1e3dc62e98bc38b64afae4b83f1771.png",
      url: "/",
    },
    {
      title: "Dresses",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/26/2a/1714144893044dae726de8322d9f69b44590574484.png",
      url: "/",
    },
    {
      title: "Tops",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/29/22/1714331014e8f3bde12bfd7b07b34e6833c481953c.png",
      url: "/",
    },
    {
      title: "Blouses",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/26/05/1714145492a25d5f8456d36875b6dff0da3646cbdf.png",
      url: "/",
    },
    {
      title: "T-shirts",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/18/10/1713455852fc83fe69e0f21b090df41543b0b5cc8f.png",
      url: "/",
    },
    {
      title: "Bottoms",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Denim",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/29/ab/1714334793c609bc9f20442ba54fb679bd72dcec32.png",
      url: "/",
    },
    {
      title: "Beachwear",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Co-ords",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Jumpsuits",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Bodysuits",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Suits",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Sweaters",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Sweatshirts",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Outerwear",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Wedding",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Party wear",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Sleep & lounge",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
  ],
  "#Sheincollabs": [
    {
      title: "View All",
      img: "https://img.ltwebstatic.com/images3_ccc/2023/12/12/92/17023521447c1e3dc62e98bc38b64afae4b83f1771.png",
      url: "/",
    },
    {
      title: "Dresses",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/26/2a/1714144893044dae726de8322d9f69b44590574484.png",
      url: "/",
    },
    {
      title: "Tops",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/29/22/1714331014e8f3bde12bfd7b07b34e6833c481953c.png",
      url: "/",
    },
    {
      title: "Blouses",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/26/05/1714145492a25d5f8456d36875b6dff0da3646cbdf.png",
      url: "/",
    },
    {
      title: "T-shirts",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/18/10/1713455852fc83fe69e0f21b090df41543b0b5cc8f.png",
      url: "/",
    },
    {
      title: "Bottoms",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Denim",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/29/ab/1714334793c609bc9f20442ba54fb679bd72dcec32.png",
      url: "/",
    },
    {
      title: "Beachwear",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Co-ords",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Jumpsuits",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Bodysuits",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Suits",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Sweaters",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Sweatshirts",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Outerwear",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Wedding",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Party wear",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Sleep & lounge",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
  ],
  "#Shein X": [
    {
      title: "View All",
      img: "https://img.ltwebstatic.com/images3_ccc/2023/12/12/92/17023521447c1e3dc62e98bc38b64afae4b83f1771.png",
      url: "/",
    },
    {
      title: "Dresses",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/26/2a/1714144893044dae726de8322d9f69b44590574484.png",
      url: "/",
    },
    {
      title: "Tops",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/29/22/1714331014e8f3bde12bfd7b07b34e6833c481953c.png",
      url: "/",
    },
    {
      title: "Blouses",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/26/05/1714145492a25d5f8456d36875b6dff0da3646cbdf.png",
      url: "/",
    },
    {
      title: "T-shirts",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/18/10/1713455852fc83fe69e0f21b090df41543b0b5cc8f.png",
      url: "/",
    },
    {
      title: "Bottoms",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Denim",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/29/ab/1714334793c609bc9f20442ba54fb679bd72dcec32.png",
      url: "/",
    },
    {
      title: "Beachwear",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Co-ords",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Jumpsuits",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Bodysuits",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Suits",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Sweaters",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Sweatshirts",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Outerwear",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Wedding",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Party wear",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
    {
      title: "Sleep & lounge",
      img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
      url: "/",
    },
  ],
};

export const CAROUSALIMAGES = [
  "https://img.ltwebstatic.com/images3_ccc/2024/05/06/20/1714962720d3f2856e1271e3881c00a76291fb0391_thumbnail_2000x.webp",
  "https://img.ltwebstatic.com/images3_ccc/2024/05/06/1e/17149828072ee36406f86b7fabae98c16503bc561c_thumbnail_2000x.webp",
  "https://img.ltwebstatic.com/images3_ccc/2024/04/29/dd/171437133742b0053c51a39a2190d5382d3703b527_thumbnail_2000x.webp",
  "https://img.ltwebstatic.com/images3_ccc/2024/04/26/89/171409632456ac001b4d31db48c2da752c64b03ff6_thumbnail_2000x.webp",
];

export const WEEKLYPRODUCTS: {
  imageUrl: string;
  price: string;
}[] = [
  {
    imageUrl:
      "https://img.ltwebstatic.com/images3_spmp/2024/02/22/21/170857112662c972938ed7db92d175c8c148282126_square_thumbnail_144x.webp",
    price: "CA$4.39",
  },
  {
    imageUrl:
      "https://img.ltwebstatic.com/images3_pi/2023/03/23/1679560846e500b80b0cee328b17294ac5e430a7ef_thumbnail_144x.webp",
    price: "CA$2.39",
  },
  {
    imageUrl:
      "https://img.ltwebstatic.com/images3_spmp/2024/04/23/f5/1713862301bcd67882f4a7517809e72d0192fc2481_thumbnail_144x.webp",
    price: "CA$5.39",
  },
  {
    imageUrl:
      "https://img.ltwebstatic.com/images3_spmp/2023/05/16/168422858665bce3431b18d00e8edb76c025edc93e_thumbnail_144x.webp",
    price: "CA$2.39",
  },
  {
    imageUrl:
      "https://img.ltwebstatic.com/images3_spmp/2024/04/04/d3/1712223587c7634d5db30e9c9c2860f14c1e154d04_square_thumbnail_144x.webp",
    price: "CA$5.39",
  },
  {
    imageUrl:
      "https://img.ltwebstatic.com/images3_spmp/2024/04/03/c1/17121215816925ff45d26392c5f901bcaf0eb5d5f4_square_thumbnail_144x.webp",
    price: "CA$5.39",
  },
];

export const MAINCATEGORIES: {
  imageUrl: string;
  name: string;
  url: string;
}[] = [
  {
    imageUrl: "",
    url: "/",
    name: "Women",
  },
  {
    imageUrl: "",
    url: "/",
    name: "Curve",
  },
  {
    imageUrl: "",
    url: "/",
    name: "Kids",
  },
  {
    imageUrl: "",
    url: "/",
    name: "Men",
  },
  {
    imageUrl: "",
    url: "/",
    name: "Tops",
  },
  {
    imageUrl: "",
    url: "/",
    name: "Dresses",
  },
  {
    imageUrl: "",
    url: "/",
    name: "Sports & Outdoors",
  },
  {
    imageUrl: "",
    url: "/",
    name: "Underwear & Sleeper",
  },
  {
    imageUrl: "",
    url: "/",
    name: "Beachwear",
  },
  {
    imageUrl: "",
    url: "/",
    name: "Accessories & Jewelry",
  },
  {
    imageUrl: "",
    url: "/",
    name: "Home & Living",
  },
  {
    imageUrl: "",
    url: "/",
    name: "Beauty & Health",
  },
  {
    imageUrl: "",
    url: "/",
    name: "Shoes & Bags",
  },
];
