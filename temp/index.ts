import { TReview } from "@/state/categories/types";
// import { TProduct } from "@/types";
// import { v4 as uuidv4 } from "uuid";

// export const CATEGORIES = [
//   {
//     title: "Categories",
//     uid: uuidv4(),
//     data: [],
//   },
//   {
//     title: "New In",
//     uid: uuidv4(),
//     data: [],
//   },
//   {
//     title: "Sale",
//     uid: uuidv4(),
//     data: [],
//   },
//   {
//     title: "Women Clothing",
//     uid: uuidv4(),
//     data: [],
//   },
//   {
//     title: "Beachwear",
//     uid: uuidv4(),
//     data: [],
//   },
//   {
//     title: "Men's Clothing",
//     uid: uuidv4(),
//     data: [],
//   },
//   {
//     title: "Kids",
//     uid: uuidv4(),
//     data: [],
//   },
//   {
//     title: "Home and Kitchen",
//     uid: uuidv4(),
//     data: [],
//   },
//   {
//     title: "Jewellery & Accessories",
//     uid: uuidv4(),
//     data: [],
//   },
//   {
//     title: "Shoes",
//     uid: uuidv4(),
//     data: [],
//   },
//   {
//     title: "Beauty & Health",
//     uid: uuidv4(),
//     data: [],
//   },
//   {
//     title: "Home Textile",
//     uid: uuidv4(),
//     data: [],
//   },

//   {
//     title: "Sports & Outdoor",
//     uid: uuidv4(),
//     data: [],
//   },
//   {
//     title: "Electronics",
//     uid: uuidv4(),
//     data: [],
//   },
//   {
//     title: "Bags & Luggage",
//     uid: uuidv4(),
//     data: [],
//   },
//   {
//     title: "Baby & Maternity",
//     uid: uuidv4(),
//     data: [],
//   },
//   {
//     title: "Toys & Games",
//     uid: uuidv4(),
//     data: [],
//   },
//   {
//     title: "Office & School Supplies",
//     uid: uuidv4(),
//     data: [],
//   },
// ];

// export const NEWINCATEGORIES: {
//   title: string;
//   img: string;
//   url: string;
// }[] = [
//   {
//     title: "View All",
//     img: "https://img.ltwebstatic.com/images3_ccc/2023/12/12/92/17023521447c1e3dc62e98bc38b64afae4b83f1771.png",
//     url: "/",
//   },
//   {
//     title: "Dresses",
//     img: "https://img.ltwebstatic.com/images3_abc/2024/04/26/ae/1714145851d9c05cee8340d20fde9f9a61cc0f5ffc.png",
//     url: "/",
//   },
//   {
//     title: "Tops",
//     img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//     url: "/",
//   },
//   {
//     title: "Blouses",
//     img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//     url: "/",
//   },
//   {
//     title: "T-shirts",
//     img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//     url: "/",
//   },
//   {
//     title: "Bottoms",
//     img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//     url: "/",
//   },
//   {
//     title: "Denim",
//     img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//     url: "/",
//   },
//   {
//     title: "Beachwear",
//     img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//     url: "/",
//   },
//   {
//     title: "Co-ords",
//     img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//     url: "/",
//   },
//   {
//     title: "Jumpsuits",
//     img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//     url: "/",
//   },
//   {
//     title: "Bodysuits",
//     img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//     url: "/",
//   },
//   {
//     title: "Suits",
//     img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//     url: "/",
//   },
//   {
//     title: "Sweaters",
//     img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//     url: "/",
//   },
//   {
//     title: "Sweatshirts",
//     img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//     url: "/",
//   },
//   {
//     title: "Outerwear",
//     img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//     url: "/",
//   },
//   {
//     title: "Wedding",
//     img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//     url: "/",
//   },
//   {
//     title: "Party wear",
//     img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//     url: "/",
//   },
//   {
//     title: "Sleep & lounge",
//     img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//     url: "/",
//   },
// ];

// export const DUMMYCATEGORIESDATA = {
//   "New In Curvy Categories": [
//     {
//       title: "View All",
//       img: "https://img.ltwebstatic.com/images3_ccc/2023/12/12/92/17023521447c1e3dc62e98bc38b64afae4b83f1771.png",
//       url: "/",
//     },
//     {
//       title: "Dresses",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/26/2a/1714144893044dae726de8322d9f69b44590574484.png",
//       url: "/",
//     },
//     {
//       title: "Tops",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/29/22/1714331014e8f3bde12bfd7b07b34e6833c481953c.png",
//       url: "/",
//     },
//     {
//       title: "Blouses",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/26/05/1714145492a25d5f8456d36875b6dff0da3646cbdf.png",
//       url: "/",
//     },
//     {
//       title: "T-shirts",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/18/10/1713455852fc83fe69e0f21b090df41543b0b5cc8f.png",
//       url: "/",
//     },
//     {
//       title: "Bottoms",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Denim",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/29/ab/1714334793c609bc9f20442ba54fb679bd72dcec32.png",
//       url: "/",
//     },
//     {
//       title: "Beachwear",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Co-ords",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Jumpsuits",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Bodysuits",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Suits",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Sweaters",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Sweatshirts",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Outerwear",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Wedding",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Party wear",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Sleep & lounge",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//   ],
//   "#Sheincollabs": [
//     {
//       title: "View All",
//       img: "https://img.ltwebstatic.com/images3_ccc/2023/12/12/92/17023521447c1e3dc62e98bc38b64afae4b83f1771.png",
//       url: "/",
//     },
//     {
//       title: "Dresses",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/26/2a/1714144893044dae726de8322d9f69b44590574484.png",
//       url: "/",
//     },
//     {
//       title: "Tops",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/29/22/1714331014e8f3bde12bfd7b07b34e6833c481953c.png",
//       url: "/",
//     },
//     {
//       title: "Blouses",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/26/05/1714145492a25d5f8456d36875b6dff0da3646cbdf.png",
//       url: "/",
//     },
//     {
//       title: "T-shirts",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/18/10/1713455852fc83fe69e0f21b090df41543b0b5cc8f.png",
//       url: "/",
//     },
//     {
//       title: "Bottoms",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Denim",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/29/ab/1714334793c609bc9f20442ba54fb679bd72dcec32.png",
//       url: "/",
//     },
//     {
//       title: "Beachwear",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Co-ords",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Jumpsuits",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Bodysuits",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Suits",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Sweaters",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Sweatshirts",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Outerwear",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Wedding",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Party wear",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Sleep & lounge",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//   ],
//   "#Shein X": [
//     {
//       title: "View All",
//       img: "https://img.ltwebstatic.com/images3_ccc/2023/12/12/92/17023521447c1e3dc62e98bc38b64afae4b83f1771.png",
//       url: "/",
//     },
//     {
//       title: "Dresses",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/26/2a/1714144893044dae726de8322d9f69b44590574484.png",
//       url: "/",
//     },
//     {
//       title: "Tops",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/29/22/1714331014e8f3bde12bfd7b07b34e6833c481953c.png",
//       url: "/",
//     },
//     {
//       title: "Blouses",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/26/05/1714145492a25d5f8456d36875b6dff0da3646cbdf.png",
//       url: "/",
//     },
//     {
//       title: "T-shirts",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/18/10/1713455852fc83fe69e0f21b090df41543b0b5cc8f.png",
//       url: "/",
//     },
//     {
//       title: "Bottoms",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Denim",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/29/ab/1714334793c609bc9f20442ba54fb679bd72dcec32.png",
//       url: "/",
//     },
//     {
//       title: "Beachwear",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Co-ords",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Jumpsuits",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Bodysuits",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Suits",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Sweaters",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Sweatshirts",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Outerwear",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Wedding",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Party wear",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//     {
//       title: "Sleep & lounge",
//       img: "https://img.ltwebstatic.com/images3_abc/2024/04/28/38/1714288473f47cf988a511225163f3575ceab8b59e.png",
//       url: "/",
//     },
//   ],
// };

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

// export const MAINCATEGORIES: {
//   imageUrl: string;
//   name: string;
//   url: string;
// }[] = [
//   {
//     imageUrl: "",
//     url: "/",
//     name: "Women",
//   },
//   {
//     imageUrl: "",
//     url: "/",
//     name: "Curve",
//   },
//   {
//     imageUrl: "",
//     url: "/",
//     name: "Kids",
//   },
//   {
//     imageUrl: "",
//     url: "/",
//     name: "Men",
//   },
//   {
//     imageUrl: "",
//     url: "/",
//     name: "Tops",
//   },
//   {
//     imageUrl: "",
//     url: "/",
//     name: "Dresses",
//   },
//   {
//     imageUrl: "",
//     url: "/",
//     name: "Sports & Outdoors",
//   },
//   {
//     imageUrl: "",
//     url: "/",
//     name: "Underwear & Sleeper",
//   },
//   {
//     imageUrl: "",
//     url: "/",
//     name: "Beachwear",
//   },
//   {
//     imageUrl: "",
//     url: "/",
//     name: "Accessories & Jewelry",
//   },
//   {
//     imageUrl: "",
//     url: "/",
//     name: "Home & Living",
//   },
//   {
//     imageUrl: "",
//     url: "/",
//     name: "Beauty & Health",
//   },
//   {
//     imageUrl: "",
//     url: "/",
//     name: "Shoes & Bags",
//   },
// ];

export const FOOTERLINKS = {
  "COMPANY INFO": [
    {
      title: "About SHEIN",
      url: "/",
    },
    {
      title: "Fashion Blogger",
      url: "/",
    },
    {
      title: "Social Responsibility",
      url: "/",
    },
    {
      title: "Supplier Code of Conduct",
      url: "/",
    },
    {
      title: "Careers",
      url: "/",
    },
    {
      title: "Student Discount",
      url: "/",
    },
  ],
  "HELP & SUPPORT": [
    {
      title: "Shipping Info",
      url: "/",
    },
    {
      title: "Free Returns",
      url: "/",
    },
    {
      title: "How To Order",
      url: "/",
    },
    {
      title: "How To Track",
      url: "/",
    },
    {
      title: "Size Guide",
      url: "/",
    },
    {
      title: "SHEIN VIP",
      url: "/",
    },
    {
      title: "Refund",
      url: "/",
    },
  ],
  "Customer Care": [
    {
      title: "Contact us",
      url: "/",
    },
    {
      title: "Payment Method",
      url: "/",
    },
    {
      title: "Bonus Point",
      url: "/",
    },
  ],
};

export const FOOTERSOCIALS = [
  {
    title: "facebook",
    url: "/",
  },
  { title: "instagram", url: "" },
  {
    title: "twitter",
    url: "/",
  },
  { title: "youtube", url: "" },
  { title: "pinterest", url: "/" },
  { title: "tiktok", url: "/" },
];

export const FOOTERAPPS = [
  {
    title: "Apple",
    url: "/",
  },
  { title: "Android", url: "/" },
];

export const PAYMENTOPTIONS = [
  "https://img.ltwebstatic.com/images3_pi/2021/03/09/161528368123dd7a35ad8708b0dfc74b3630526891.webp",
  "https://img.ltwebstatic.com/images2_pi/2018/06/06/15282732803587566708.webp",
  "https://img.ltwebstatic.com/images2_pi/2018/06/06/15282732983375743706.webp",
  "https://img.ltwebstatic.com/images2_pi/2018/06/06/15282730981571339584.webp",
  "https://img.ltwebstatic.com/images2_pi/2018/06/06/1528273036537082707.webp",
  "https://img.ltwebstatic.com/images2_pi/2018/06/06/1528273151799711689.webp",
  "https://img.ltwebstatic.com/images2_pi/2018/06/06/15282719811871317559.webp",
  "https://img.ltwebstatic.com/images3_pi/2020/09/23/1600828366fdedf14c91b84e675f838988a91f7ad0.webp",
  "https://img.ltwebstatic.com/images3_pi/2022/10/18/16660594394d907d6daba551d56e4ab4dacfb5ba38.webp",
  "https://img.ltwebstatic.com/images2_pi/2018/08/31/15356946304173589516.webp",
  "https://img.ltwebstatic.com/images3_pi/2021/01/15/1610701410b3781f00695b77b833e6b6a5e38331a3.webp",
];

export const FOOTERPAGESLINKS = [
  {
    title: "Privacy Policy",
    url: "/",
  },
  {
    title: "Privacy & Cookie Policy",
    url: "/",
  },
  {
    title: "Manage Cookies",
    url: "/",
  },
  {
    title: "Terms & Conditions",
    url: "/",
  },
  {
    title: "IP Notice",
    url: "/",
  },
  {
    title: "Imprint",
    url: "/",
  },
  {
    title: "Ad Choice",
    url: "/",
  },
];

export const SUPERDEALPRODUCTS = [
  {
    mainImage:
      "https://img.ltwebstatic.com/images3_pi/2024/05/14/00/17156779375a56446fd6e9d081e501df3673463717_thumbnail_405x552.webp",
    subMainImage:
      "https://img.ltwebstatic.com/images3_pi/2024/05/09/3b/171524377564864580e7a5bd9b0f73d3153848e32c_thumbnail_405x552.webp",
    price: "CA$8.99",
    label: "Hot Deal",
  },
  {
    mainImage:
      "https://img.ltwebstatic.com/images3_spmp/2024/05/06/ef/1714978348f28d03d7cba8503bd6ffebbbfaa12234.webp",
    subMainImage:
      "https://img.ltwebstatic.com/images3_spmp/2024/04/11/f5/1712820705d3ce009369e7410ecae5bf3caad8e2a9_thumbnail_405x552.webp",
    price: "CA$18.60",
    label: "Hot Deal",
  },
  {
    mainImage:
      "https://img.ltwebstatic.com/images3_pi/2024/03/13/72/17102993912d8b896b6bb10264b123d880c69c2097_thumbnail_405x552.webp",
    subMainImage:
      "https://img.ltwebstatic.com/images3_pi/2024/01/31/95/17066690308b05d58cf1466dc7f5c09375d6db4efa_thumbnail_405x552.webp",
    price: "CA$20.99",
    label: "Hot Deal",
  },
  {
    mainImage:
      "https://img.ltwebstatic.com/images3_pi/2024/01/16/0e/1705369283a2c6ab1d5bb33f71b8445badf7fa506e_thumbnail_405x552.webp",
    subMainImage:
      "https://img.ltwebstatic.com/images3_pi/2024/01/16/8c/17053692878cba39abc97879a59fbc3df3bc01c39b_thumbnail_405x552.webp",
    price: "CA$9.49",
    label: "Hot Deal",
  },
  {
    mainImage:
      "https://img.ltwebstatic.com/images3_spmp/2023/11/11/8f/169971833648e4cf9902974541ba4add7d606f60d7_thumbnail_405x552.webp",
    subMainImage:
      "https://img.ltwebstatic.com/images3_spmp/2023/11/11/3a/16997183522125a29efc7e633323ebd376f5e2362c_thumbnail_405x552.webp",
    label: "Hot Deal",
    price: "CA$2.00",
  },
  {
    mainImage:
      "https://img.ltwebstatic.com/images3_pi/2024/01/31/6e/1706693855ed1313e229c8adea3c1354e5d65a88f2_thumbnail_405x552.webp",
    subMainImage:
      "https://img.ltwebstatic.com/images3_pi/2024/01/31/bd/1706693857659550989558990db0e149b0f8dadbee_thumbnail_405x552.webp",
    label: "Hot Deal",
    price: "CA$8.99",
  },
  {
    mainImage:
      "https://img.ltwebstatic.com/images3_spmp/2023/11/11/8f/169971833648e4cf9902974541ba4add7d606f60d7_thumbnail_405x552.webp",
    subMainImage:
      "https://img.ltwebstatic.com/images3_spmp/2023/11/11/3a/16997183522125a29efc7e633323ebd376f5e2362c_thumbnail_405x552.webp",
    label: "Hot Deal",
    price: "CA$2.00",
  },
  {
    mainImage:
      "https://img.ltwebstatic.com/images3_pi/2024/01/31/6e/1706693855ed1313e229c8adea3c1354e5d65a88f2_thumbnail_405x552.webp",
    subMainImage:
      "https://img.ltwebstatic.com/images3_pi/2024/01/31/bd/1706693857659550989558990db0e149b0f8dadbee_thumbnail_405x552.webp",
    label: "Hot Deal",
    price: "CA$8.99",
  },
  {
    mainImage:
      "https://img.ltwebstatic.com/images3_pi/2024/05/14/00/17156779375a56446fd6e9d081e501df3673463717_thumbnail_405x552.webp",
    subMainImage:
      "https://img.ltwebstatic.com/images3_pi/2024/05/09/3b/171524377564864580e7a5bd9b0f73d3153848e32c_thumbnail_405x552.webp",
    price: "CA$8.99",
    label: "Hot Deal",
  },
  {
    mainImage:
      "https://img.ltwebstatic.com/images3_spmp/2024/05/06/ef/1714978348f28d03d7cba8503bd6ffebbbfaa12234.webp",
    subMainImage:
      "https://img.ltwebstatic.com/images3_spmp/2024/04/11/f5/1712820705d3ce009369e7410ecae5bf3caad8e2a9_thumbnail_405x552.webp",
    price: "CA$18.60",
    label: "Hot Deal",
  },
];

export const SALEPRODUCTS: {
  [key: string]: {
    mainImage: string;
    subMainImage: string;
    price: string;
    sale: number;
  }[];
} = {
  "Starting from CA$1": [
    {
      mainImage:
        "https://img.ltwebstatic.com/images3_pi/2023/12/01/f7/17014033229129958082185d7bf5dffb28d86607b5_thumbnail_288x.webp",
      subMainImage:
        "https://img.ltwebstatic.com/images3_pi/2023/07/21/1689933601c1fdcdd829f586babc9049d879da6ff0_thumbnail_288x.webp",
      price: "CA$8.25",
      sale: -45,
    },
    {
      mainImage:
        "https://img.ltwebstatic.com/images3_pi/2024/01/05/54/1704439928485bbfe2399ac84143f89e3eacee7bb4_thumbnail_288x.webp",
      subMainImage:
        "https://img.ltwebstatic.com/images3_pi/2024/01/05/e1/1704439933fcbab273739b033a6e0454ae624cb898_thumbnail_288x.webp",
      price: "CA$17.49",
      sale: -17,
    },
    {
      mainImage:
        "https://img.ltwebstatic.com/images3_pi/2023/05/30/1685440313ab5c3ca7fe02df731396321a89fb8b59_thumbnail_288x.webp",
      subMainImage:
        "https://img.ltwebstatic.com/images3_pi/2023/05/30/1685440315c29f4678104ab67568314e2e2378081d_thumbnail_288x.webp",
      price: "CA$14.62",
      sale: -25,
    },
    {
      mainImage:
        "https://img.ltwebstatic.com/images3_pi/2021/12/31/164092062211880b8bfc8c5438512814020189884d_thumbnail_288x.webp",
      subMainImage:
        "https://img.ltwebstatic.com/images3_pi/2021/12/31/16409206230acdb9e0ab574752fba586a69431f94e_thumbnail_288x.webp",
      price: "CA$10.19",
      sale: -15,
    },
    {
      mainImage:
        "https://img.ltwebstatic.com/images3_pi/2024/01/18/9b/1705582934104d44c9806cd01b293d8fe66cdbb270_thumbnail_288x.webp",
      subMainImage:
        "https://img.ltwebstatic.com/images3_pi/2024/01/18/cb/17055829389a28a356b725be8294f9240dad132818_thumbnail_288x.webp",
      price: "CA$14.24",
      sale: -25,
    },
    {
      mainImage:
        "https://img.ltwebstatic.com/images3_pi/2023/12/14/14/170254876706c5be2e6a0425ef29a8fdc7e0a4b533_thumbnail_288x.webp",
      subMainImage:
        "https://img.ltwebstatic.com/images3_pi/2023/12/14/18/17025487726145bde5be821841fa08a08d45209a21_thumbnail_288x.webp",
      price: "CA$12.99",
      sale: -19,
    },
  ],
  "Shoes Sale": [
    {
      mainImage:
        "https://img.ltwebstatic.com/images3_pi/2023/04/25/168239102837f11288222898dbf0412e8415a20a80_thumbnail_288x.webp",
      subMainImage:
        "https://img.ltwebstatic.com/images3_pi/2023/04/25/1682391090630b932eb4cff8b8bf39a2e46a02534e_thumbnail_288x.webp",
      price: "CA$37.60",
      sale: 0,
    },
    {
      mainImage:
        "https://img.ltwebstatic.com/images3_pi/2023/09/21/44/16953016122c75bd72fe766c3b4a7432c1894640f2_thumbnail_288x.webp",
      subMainImage:
        "https://img.ltwebstatic.com/images3_pi/2023/09/21/22/16953016144b8b97f0a7ec53f5166ab2e5158e5fbc_thumbnail_288x.webp",
      price: "CA$27.54",
      sale: -40,
    },
    {
      mainImage:
        "https://img.ltwebstatic.com/images3_pi/2021/01/12/16104320080b525ebd25bdade6617ba3d8547c6be8_thumbnail_288x.webp",
      subMainImage:
        "https://img.ltwebstatic.com/images3_pi/2021/01/12/1610432011f3daf4baad40ccd34639ed26158ce9e0_thumbnail_288x.webp",
      price: "CA$29.76",
      sale: -40,
    },
    {
      mainImage:
        "https://img.ltwebstatic.com/images3_pi/2022/07/25/1658716258b26f29058f501f90bdc1f532c074ac83_thumbnail_288x.webp",
      subMainImage:
        "https://img.ltwebstatic.com/images3_pi/2022/07/25/16587162608ea3c720eb15885f821bb37f9008891e_thumbnail_288x.webp",
      price: "CA$39.80",
      sale: -7,
    },
    {
      mainImage:
        "https://img.ltwebstatic.com/images3_pi/2023/08/28/57/16932150817c6146cb2764b4679e55b6b3a402b1b6_thumbnail_288x.webp",
      subMainImage:
        "https://img.ltwebstatic.com/images3_pi/2023/08/28/71/1693215083b90b90a822223880742e7b562e14c1b5_thumbnail_288x.webp",
      price: "CA$40.80",
      sale: -15,
    },
    {
      mainImage:
        "https://img.ltwebstatic.com/images3_pi/2023/07/10/168895709009affb3a9b35b0adc932b8e816b07751_thumbnail_288x.webp",
      subMainImage:
        "https://img.ltwebstatic.com/images3_pi/2023/07/10/16889570926a15c1a8a189690f6ef6a89ce2aafcfc_thumbnail_288x.webp",
      price: "CA$16.32",
      sale: -15,
    },
  ],
};

export const SPOTLIGHT = [
  {
    imageUrl:
      "https://img.ltwebstatic.com/images3_ccc/2024/05/11/bb/171540965500e1d61f09c90ca714e52a7e4a7d142a_thumbnail_336x.webp",
    redirect: "/",
  },
  {
    imageUrl:
      "https://img.ltwebstatic.com/images3_ccc/2024/05/06/b4/17149640440aa9298c723773784e28a6c310dca762.webp",
    redirect: "/",
  },
  {
    imageUrl:
      "https://img.ltwebstatic.com/images3_ccc/2024/05/11/dc/1715408279cce819469ae375656b662926d7fc4e9d.webp",
    redirect: "/",
  },
  {
    imageUrl:
      "https://img.ltwebstatic.com/images3_ccc/2024/05/11/f7/1715408237e0d9ca4b24126df4d070672b7302de10.webp",
    redirect: "/",
  },
  {
    imageUrl:
      "https://img.ltwebstatic.com/images3_ccc/2024/05/11/29/17154134436e80d4302c0e9a753f8aca2099b2bee2_thumbnail_336x.webp",
    redirect: "/",
  },
  {
    imageUrl:
      "https://img.ltwebstatic.com/images3_ccc/2024/05/13/2d/1715568035392d44df5bda18e187d3780f9aa38baf_thumbnail_336x.webp",
    redirect: "/",
  },
  {
    imageUrl:
      "https://img.ltwebstatic.com/images3_ccc/2024/05/06/be/1714962945818360c0d2c0ac5bf5c47a4eb245f61b_thumbnail_336x.webp",
    redirect: "/",
  },
  {
    imageUrl:
      "https://img.ltwebstatic.com/images3_ccc/2024/04/26/1a/17140955852fb1cb4545f525df94b50b876b1b548d.webp",
    redirect: "/",
  },
  {
    imageUrl:
      "https://img.ltwebstatic.com/images3_ccc/2024/05/06/31/171497447097ee01943ff016539ebb922b7502b328.webp",
    redirect: "/",
  },
  {
    imageUrl:
      "https://img.ltwebstatic.com/images3_ccc/2024/05/06/84/1714963744fe88f9bc9f73027837b9dd8ea68ca113.webp",
    redirect: "/",
  },
  {
    imageUrl:
      "https://img.ltwebstatic.com/images3_ccc/2024/05/06/84/1714963744fe88f9bc9f73027837b9dd8ea68ca113.webp",
    redirect: "/",
  },
];

export const BRANDS = [
  {
    imageUrl:
      "https://img.ltwebstatic.com/images3_ccc/2024/05/06/f9/171496339950b2b4c04e63aa1767fa19f9094924a5.webp",
    redirect: "/",
  },
  {
    imageUrl:
      "https://img.ltwebstatic.com/images3_ccc/2024/05/13/62/17155678227d1e7cd5d84c3c8503939c6a8eb12b16.webp",
    redirect: "/",
  },
  {
    imageUrl:
      "https://img.ltwebstatic.com/images3_ccc/2024/05/06/78/1714977420d231253454fa0e9bf2391ba7687c8eed.webp",
    redirect: "/",
  },
  {
    imageUrl:
      "https://img.ltwebstatic.com/images3_ccc/2024/04/01/70/1711941594604730aaf0d5ec80cdc4a1b7bef42911.webp",
    redirect: "/",
  },
  {
    imageUrl:
      "https://img.ltwebstatic.com/images3_ccc/2024/04/26/06/17140955108cd78ed57d435eae09236ec5edf4dc59.webp",
    redirect: "/",
  },
  {
    imageUrl:
      "https://img.ltwebstatic.com/images3_ccc/2024/05/06/33/171496344926d8717e150d4ac453b54c4209b6fd7b.webp",
    redirect: "/",
  },
  {
    imageUrl:
      "https://img.ltwebstatic.com/images3_ccc/2024/03/04/90/1709521414a429f65fc8ac0391d1076ad8dc9fb546.webp",
    redirect: "/",
  },
];

// export const RECOMMENDED: TProduct[] = [
//   {
//     sku: "1",
//     name: "Manfinity Homme Men's Gradient Coconut Tree Printed Short Sleeve T-Shirt",
//     images: [
//       "https://img.ltwebstatic.com/images3_pi/2024/02/26/28/1708940109fe3a8d175e4301ecfff3ca9bcb5a20ce_thumbnail_336x.webp",
//       "https://img.ltwebstatic.com/images3_pi/2024/02/26/c3/1708940113cb65e9f7a7dbba0a5d8cf741dc22f2e3_thumbnail_336x.webp",
//     ],
//     price: "CA$15.49",
//     sale: -16,
//     isOnSale: true,
//     sizes: [
//       { size: "S", description: "" },
//       { size: "M", description: "" },
//       { size: "L", description: "" },
//       { size: "XL", description: "" },
//     ],
//   },
//   {
//     sku: "2",
//     name: "Manfinity Homme Men Letter Graphic Colorblock Tee",
//     images: [
//       "https://img.ltwebstatic.com/images3_pi/2023/09/07/0b/1694050282aa7096a0bcb587cf42e3bcdfbdbd35ea_thumbnail_336x.webp",
//       "https://img.ltwebstatic.com/images3_pi/2023/09/07/01/1694050285325c3168b79414f0056ceb7cba00d40f_thumbnail_336x.webp",
//     ],
//     price: "CA$7.25",
//     sale: -48,
//     isOnSale: true,
//     sizes: [
//       { size: "S", description: "" },
//       { size: "M", description: "" },
//       { size: "L", description: "" },
//       { size: "XL", description: "" },
//     ],
//   },
//   {
//     sku: "3",
//     name: "Manfinity Homme Men T-Shirts Fit Crew Neck Short Sleeve Eagle Casual Simple Summer Polyester",
//     images: [
//       "https://img.ltwebstatic.com/images3_pi/2023/08/02/1690948818a53974e82d3baf58655b3212c360d651_thumbnail_336x.webp",
//       "https://img.ltwebstatic.com/images3_pi/2023/08/02/1690948822a173c118d9562d48167bd01c6ee619ee_thumbnail_336x.webp",
//     ],
//     price: "CA$14.49",
//     sale: -17,
//     isOnSale: true,
//     sizes: [
//       { size: "S", description: "" },
//       { size: "M", description: "" },
//       { size: "L", description: "" },
//       { size: "XL", description: "" },
//     ],
//   },
//   {
//     sku: "4",
//     name: "SHEIN LUNE Gradient V-Neck Short Sleeve T-Shirt For Summer",
//     images: [
//       "https://img.ltwebstatic.com/images3_pi/2024/04/12/3a/1712889276a136a33dda04c49933d4a8a01b886cf7_thumbnail_336x.webp",
//       "https://img.ltwebstatic.com/images3_pi/2024/04/12/9b/1712889279b2965a099e5c5fbf8eb79c1673d98e0f_thumbnail_336x.webp",
//     ],
//     price: "CA$11.49",
//     sale: -17,
//     isOnSale: false,
//     sizes: [
//       { size: "S", description: "" },
//       { size: "M", description: "" },
//       { size: "L", description: "" },
//       { size: "XL", description: "" },
//     ],
//   },
//   {
//     sku: "5",
//     name: " Men's Quick Dry Gym Running Athletic Shirt Set, T-Shirt, Workout Short Sleeves, Lightweight, Breathable Gym Clothes Men Basic T Shirt",
//     images: [
//       "https://img.ltwebstatic.com/images3_pi/2024/04/08/ff/1712574307e55688e57b5a28f545e63f4ae341e778_thumbnail_336x.webp",
//       "https://img.ltwebstatic.com/images3_pi/2024/04/08/5a/1712574312169f6639d10734bb104354534e58be05_thumbnail_336x.webp",
//     ],
//     price: "CA$13.99",
//     sale: -18,
//     isOnSale: true,
//     sizes: [
//       { size: "S", description: "" },
//       { size: "M", description: "" },
//       { size: "L", description: "" },
//       { size: "XL", description: "" },
//     ],
//   },
//   {
//     sku: "6",
//     name: "Manfinity Homme Men's Gradient Coconut Tree Printed Short Sleeve T-Shirt",
//     images: [
//       "https://img.ltwebstatic.com/images3_pi/2024/02/26/28/1708940109fe3a8d175e4301ecfff3ca9bcb5a20ce_thumbnail_336x.webp",
//       "https://img.ltwebstatic.com/images3_pi/2024/02/26/c3/1708940113cb65e9f7a7dbba0a5d8cf741dc22f2e3_thumbnail_336x.webp",
//     ],
//     price: "CA$15.49",
//     sale: -16,
//     isOnSale: true,
//     sizes: [
//       { size: "S", description: "" },
//       { size: "M", description: "" },
//       { size: "L", description: "" },
//       { size: "XL", description: "" },
//     ],
//   },
//   {
//     sku: "7",
//     name: "Manfinity Homme Men Letter Graphic Colorblock Tee",
//     images: [
//       "https://img.ltwebstatic.com/images3_pi/2023/09/07/0b/1694050282aa7096a0bcb587cf42e3bcdfbdbd35ea_thumbnail_336x.webp",
//       "https://img.ltwebstatic.com/images3_pi/2023/09/07/01/1694050285325c3168b79414f0056ceb7cba00d40f_thumbnail_336x.webp",
//     ],
//     price: "CA$7.25",
//     sale: -48,
//     isOnSale: true,
//     sizes: [
//       { size: "S", description: "" },
//       { size: "M", description: "" },
//       { size: "L", description: "" },
//       { size: "XL", description: "" },
//     ],
//   },
//   {
//     sku: "8",
//     name: "Manfinity Homme Men T-Shirts Fit Crew Neck Short Sleeve Eagle Casual Simple Summer Polyester",
//     images: [
//       "https://img.ltwebstatic.com/images3_pi/2023/08/02/1690948818a53974e82d3baf58655b3212c360d651_thumbnail_336x.webp",
//       "https://img.ltwebstatic.com/images3_pi/2023/08/02/1690948822a173c118d9562d48167bd01c6ee619ee_thumbnail_336x.webp",
//     ],
//     price: "CA$14.49",
//     sale: -17,
//     isOnSale: true,
//     sizes: [
//       { size: "S", description: "" },
//       { size: "M", description: "" },
//       { size: "L", description: "" },
//       { size: "XL", description: "" },
//     ],
//   },
//   {
//     sku: "9",
//     name: "SHEIN LUNE Gradient V-Neck Short Sleeve T-Shirt For Summer",
//     images: [
//       "https://img.ltwebstatic.com/images3_pi/2024/04/12/3a/1712889276a136a33dda04c49933d4a8a01b886cf7_thumbnail_336x.webp",
//       "https://img.ltwebstatic.com/images3_pi/2024/04/12/9b/1712889279b2965a099e5c5fbf8eb79c1673d98e0f_thumbnail_336x.webp",
//     ],
//     price: "CA$11.49",
//     sale: -17,
//     isOnSale: false,
//     sizes: [
//       { size: "S", description: "" },
//       { size: "M", description: "" },
//       { size: "L", description: "" },
//       { size: "XL", description: "" },
//     ],
//   },
//   {
//     sku: "10",
//     name: " Men's Quick Dry Gym Running Athletic Shirt Set, T-Shirt, Workout Short Sleeves, Lightweight, Breathable Gym Clothes Men Basic T Shirt",
//     images: [
//       "https://img.ltwebstatic.com/images3_pi/2024/04/08/ff/1712574307e55688e57b5a28f545e63f4ae341e778_thumbnail_336x.webp",
//       "https://img.ltwebstatic.com/images3_pi/2024/04/08/5a/1712574312169f6639d10734bb104354534e58be05_thumbnail_336x.webp",
//     ],
//     price: "CA$13.99",
//     sale: -18,
//     isOnSale: true,
//     sizes: [
//       { size: "S", description: "" },
//       { size: "M", description: "" },
//       { size: "L", description: "" },
//       { size: "XL", description: "" },
//     ],
//   },
// ];

export const SHOPGALLERY = [
  {
    imageUrl:
      "https://img.ltwebstatic.com/images3_app/2023/09/26/de/16956911338bba0f8fa606ea8ec226cb2423c3eedd_thumbnail_350x.webp",
    redirect: "/",
  },
  {
    imageUrl:
      "https://img.ltwebstatic.com/images3_app/2023/10/11/40/1696987107862324e5216199cd681d30924a878a1a_thumbnail_350x.webp",
    redirect: "/",
  },
  {
    imageUrl:
      "https://img.ltwebstatic.com/images3_app/2023/09/28/4e/1695863864b2096a7a2d27c41f92525885517f348a_thumbnail_350x.webp",
    redirect: "/",
  },
  {
    imageUrl:
      "https://img.ltwebstatic.com/images3_app/2023/10/27/8c/16983696236e45e5339897aaded6ada727d0a5e524_thumbnail_350x.webp",
    redirect: "/",
  },
  {
    imageUrl:
      "https://img.ltwebstatic.com/images3_app/2023/09/28/25/169586391489027043266aa76800eba81d01175f24_thumbnail_350x.webp",
    redirect: "/",
  },
];

export const PRODUCTCHOOSE = [
  {
    sku: "4",
    name: "SHEIN LUNE Gradient V-Neck Short Sleeve T-Shirt For Summer",
    images: [
      "https://img.ltwebstatic.com/images3_pi/2024/04/12/3a/1712889276a136a33dda04c49933d4a8a01b886cf7_thumbnail_336x.webp",
      "https://img.ltwebstatic.com/images3_pi/2024/04/12/9b/1712889279b2965a099e5c5fbf8eb79c1673d98e0f_thumbnail_336x.webp",
    ],
    price: "CA$11.49",
    sale: -17,
    isOnSale: false,
  },
  {
    sku: "4",
    name: "SHEIN LUNE Gradient V-Neck Short Sleeve T-Shirt For Summer",
    images: [
      "https://img.ltwebstatic.com/images3_pi/2024/04/12/3a/1712889276a136a33dda04c49933d4a8a01b886cf7_thumbnail_336x.webp",
      "https://img.ltwebstatic.com/images3_pi/2024/04/12/9b/1712889279b2965a099e5c5fbf8eb79c1673d98e0f_thumbnail_336x.webp",
    ],
    price: "CA$11.49",
    sale: -17,
    isOnSale: false,
  },
  {
    sku: "4",
    name: "SHEIN LUNE Gradient V-Neck Short Sleeve T-Shirt For Summer",
    images: [
      "https://img.ltwebstatic.com/images3_pi/2024/04/12/3a/1712889276a136a33dda04c49933d4a8a01b886cf7_thumbnail_336x.webp",
      "https://img.ltwebstatic.com/images3_pi/2024/04/12/9b/1712889279b2965a099e5c5fbf8eb79c1673d98e0f_thumbnail_336x.webp",
    ],
    price: "CA$11.49",
    sale: -17,
    isOnSale: false,
  },
  {
    sku: "4",
    name: "SHEIN LUNE Gradient V-Neck Short Sleeve T-Shirt For Summer",
    images: [
      "https://img.ltwebstatic.com/images3_pi/2024/04/12/3a/1712889276a136a33dda04c49933d4a8a01b886cf7_thumbnail_336x.webp",
      "https://img.ltwebstatic.com/images3_pi/2024/04/12/9b/1712889279b2965a099e5c5fbf8eb79c1673d98e0f_thumbnail_336x.webp",
    ],
    price: "CA$11.49",
    sale: -17,
    isOnSale: false,
  },
];

export const CATEGORYFILTERS = {
  name: "",

  children: [
    {
      name: "Fruits",
      children: [
        { name: "Avocados" },
        { name: "Bananas" },
        { name: "Berries" },
        { name: "Oranges" },
        { name: "Pears" },
      ],
    },
    {
      name: "Drinks",
      children: [
        {
          name: "Hot drinks",
          children: [
            {
              name: "Non-alcohol",
              children: [
                {
                  name: "Tea",
                  children: [
                    {
                      name: "Black Tea",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Vegetables",
      children: [{ name: "Beets" }],
    },
  ],
};

export const SIZEFILTER = [
  { id: 21, filterOptions: "XXS", filterId: 7 },
  { id: 22, filterOptions: "XS", filterId: 7 },
  { id: 23, filterOptions: "S", filterId: 7 },
  { id: 24, filterOptions: "M", filterId: 7 },
  { id: 25, filterOptions: "L", filterId: 7 },
  { id: 26, filterOptions: "XL", filterId: 7 },
];

export const CARTITEMS = [
  {
    name: "LUNE Summer Casual  Sleeve Mini Dress",
    price: 9.44,
    image:
      "data:image/jpeg;base64,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",

    id: 1,
  },
  {
    name: "LUNE Summer Casual  Sleeve Mini Dress",
    price: 9.44,
    image:
      "data:image/jpeg;base64,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",
    id: 2,
  },
  {
    name: "LUNE Summer Casual  Sleeve Mini Dress",
    price: 9.44,
    image:
      "data:image/jpeg;base64,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",
    id: 3,
  },
  {
    name: "LUNE Summer Casual  Sleeve Mini Dress",
    price: 9.44,
    image:
      "data:image/jpeg;base64,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",
    id: 4,
  },
  {
    name: "LUNE Summer Casual  Sleeve Mini Dress",
    price: 9.44,
    image:
      "data:image/jpeg;base64,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",
    id: 5,
  },
  {
    name: "LUNE Summer Casual  Sleeve Mini Dress",
    price: 9.44,
    image:
      "data:image/jpeg;base64,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",
    id: 6,
  },
  {
    name: "LUNE Summer Casual  Sleeve Mini Dress",
    price: 9.44,
    image:
      "data:image/jpeg;base64,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",
    id: 7,
  },
  {
    name: "LUNE Summer Casual  Sleeve Mini Dress",
    price: 9.44,
    image:
      "data:image/jpeg;base64,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",
    id: 8,
  },
  {
    name: "LUNE Summer Casual  Sleeve Mini Dress",
    price: 9.44,
    image:
      "data:image/jpeg;base64,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",
    id: 9,
  },
];

export const PRODUCTREVIEWS: TReview[] = [
  {
    id: 21,
    customerName: "o***7",
    reviewDesc: "It was nice and I like it great for the day",
    review: 4.5,
    date: "15 Jun,2023",
  },
  {
    id: 22,
    customerName: "o***7",
    reviewDesc: "It was nice and I like it great for the day",
    review: 4.5,
    date: "15 Jun,2023",
  },
  {
    id: 23,
    customerName: "o***7",
    reviewDesc: "It was nice and I like it great for the day",
    review: 4.5,
    date: "15 Jun,2023",
  },
  {
    id: 24,
    customerName: "o***7",
    reviewDesc: "It was nice and I like it great for the day",
    review: 4.5,
    date: "15 Jun,2023",
  },
  {
    id: 25,
    customerName: "o***7",
    reviewDesc: "It was nice and I like it great for the day",
    review: 4.5,
    date: "15 Jun,2023",
  },
  {
    id: 26,
    customerName: "o***7",
    reviewDesc: "It was nice and I like it great for the day",
    review: 4.5,
    date: "15 Jun,2023",
  },
  {
    id: 27,
    customerName: "o***7",
    reviewDesc: "It was nice and I like it great for the day",
    review: 4.5,
    date: "15 Jun,2023",
  },
  {
    id: 28,
    customerName: "o***7",
    reviewDesc: "It was nice and I like it great for the day",
    review: 4.5,
    date: "15 Jun,2023",
  },
  {
    id: 29,
    customerName: "o***7",
    reviewDesc: "It was nice and I like it great for the day",
    review: 4.5,
    date: "15 Jun,2023",
  },
  {
    id: 30,
    customerName: "o***7",
    reviewDesc: "It was nice and I like it great for the day",
    review: 4.5,
    date: "15 Jun,2023",
  },
];
