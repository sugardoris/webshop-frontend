import { Listing } from '../model/listing';
import { Categories } from '../model/categories';

export const MockListings: Listing[] = [
  {
    id: 1,
    title: 'Navy Blue Irish Crochet Handbag',
    info: {
      description:
        'Unique handmade Irish crochet handbag with white and peach colored details. ' +
        'Decorated with floral irish lace patterns, this navy blue piece is the perfect accent item for your wardrobe ' +
        'and is sure to make you stand out in a crowd!',
      materials: 'crochet cotton thread, cotton linen, sailors rope',
      height: 24,
      width: 30,
      depth: 12,
    },
    price: 370,
    category: Categories.BAGS,
    imageUrl: '../../assets/images/thumb/navy-blue-bag.png',
    amount: 1,
  },
  {
    id: 2,
    title: 'Handmade Irish Crochet Handbag',
    info: {
      description:
        'Unique handmade Irish crochet handbag with leather handles. This bag is one of a kind (literally - there is only one!), ' +
        'with a completely unique and original design. Decorated with inlayed stones and irish lace patterns, this dreamy lilac ' +
        'purple bag is the perfect statement piece for your wardrobe and is sure to make you stand out in a crowd!',
      materials: 'crochet cotton thread, cotton linen, leather',
      height: 23,
      width: 24,
      depth: 10,
    },
    price: 420,
    category: Categories.BAGS,
    imageUrl: '../../assets/images/thumb/lilac-bag.png',
    amount: 1,
  },
  {
    id: 3,
    title: 'Red Handmade Irish Crochet Handbag',
    info: {
      description:
        'Unique handmade Irish crochet handbag with matte gold details. This bag is one of a kind (literally - there is only one!), ' +
        'with a completely unique and original design. Decorated with flower motifs, this vibrant red piece is ' +
        'the perfect statement piece for your wardrobe and is sure to make you stand out in a crowd!!',
      materials: 'crochet cotton thread, cotton linen, sailors rope',
      height: 24,
      width: 24,
      depth: 10,
    },
    price: 420,
    category: Categories.BAGS,
    imageUrl: '../../assets/images/thumb/red-bag.png',
    amount: 1,
  },
  {
    id: 4,
    title: 'Christmas Irish Crochet Doily',
    info: {
      description:
        'High quality handmade Irish crochet doily. Design by Kathryn White. ' +
        'This beautiful Christmas themed doily is the perfect centerpiece for your holiday home decor!',
      materials: 'crochet cotton thread',
      height: 48,
      width: 43,
    },
    price: 90,
    category: Categories.DOILIES,
    imageUrl: '../../assets/images/thumb/doily4.png',
    amount: 1,
  },
  {
    id: 5,
    title: 'Handmade Designer Crochet Doily',
    info: {
      description:
        'High quality handmade Irish crochet doily. Design by Dot Drake. ' +
        'This beautiful doily is the perfect centerpiece for your home decor!',
      materials: 'crochet cotton thread',
      height: 34,
      width: 34,
    },
    price: 70,
    category: Categories.DOILIES,
    imageUrl: '../../assets/images/thumb/doily-1.png',
    amount: 1,
  },
  {
    id: 6,
    title: 'Handmade Designer Crochet Doily',
    info: {
      description:
        'High quality handmade crochet doily. Design by Patricia Kristoffersen. ' +
        'This beautiful rich doily is the perfect centerpiece for your home decor!',
      materials: 'crochet cotton thread',
      height: 40,
      width: 40,
    },
    price: 70,
    category: Categories.DOILIES,
    imageUrl: '../../assets/images/thumb/doily2.png',
    amount: 1,
  },
  {
    id: 7,
    title: 'Handmade Designer Irish Crochet Doily',
    info: {
      description:
        'High quality handmade crochet doily. Design by Patricia Kristoffersen. ' +
        'This beautiful rich doily is the perfect centerpiece for your home decor!',
      materials: 'crochet cotton thread',
      height: 38,
      width: 38,
    },
    price: 70,
    category: Categories.DOILIES,
    imageUrl: '../../assets/images/thumb/doily3.png',
    amount: 1,
  },
  {
    id: 8,
    title: 'Cross Stitch Bookmark',
    info: {
      description:
        'Cross-stitch bookmark with crocheted edging, Chinese tassel theme.',
      materials: 'cotton floss, crochet cotton thread, aida canvas',
      height: 22.5,
      width: 7,
    },
    price: 30,
    category: Categories.BOOKMARKS,
    imageUrl: '../../assets/images/thumb/bookmark1.png',
    amount: 1,
  },
  {
    id: 9,
    title: 'Cross Stitch Bookmark',
    info: {
      description:
        'Cross-stitch bookmark with crocheted edging, Chinese tassel theme.',
      materials: 'cotton floss, crochet cotton thread, aida canvas',
      height: 22,
      width: 7.5,
    },
    price: 30,
    category: Categories.BOOKMARKS,
    imageUrl: '../../assets/images/thumb/bookmark2.png',
    amount: 1,
  },
  {
    id: 10,
    title: 'Cross Stitch Bookmark',
    info: {
      description:
        'Cross-stitch bookmark with crocheted edging, Chinese tassel theme.',
      materials: 'cotton floss, crochet cotton thread, aida canvas',
      height: 23,
      width: 8.5,
    },
    price: 30,
    category: Categories.BOOKMARKS,
    imageUrl: '../../assets/images/thumb/bookmark3.png',
    amount: 1,
  },
  {
    id: 11,
    title: 'Cross Stitch Christmas Bookmark',
    info: {
      description:
        'Cross-stitch bookmark with crocheted edging, Christmas theme.',
      materials:
        'cotton floss, crochet cotton thread, aida canvas, metallic thread',
      height: 21,
      width: 7.5,
    },
    price: 30,
    category: Categories.BOOKMARKS,
    imageUrl: '../../assets/images/thumb/xmas-bookmark.png',
    amount: 1,
  },
  {
    id: 12,
    title: 'Cross Stitch Christmas Ornament',
    info: {
      description:
        'Luxury handmade cross stitch Christmas ornament. Covered with acrylic coat for longer duration.',
      materials:
        'cotton thread, perforated paper, glass beads, acrylic coat, felt',
      height: 9,
      width: 6,
    },
    price: 35,
    category: Categories.ORNAMENTS,
    imageUrl: '../../assets/images/thumb/mandolin-xmas.png',
    amount: 1,
  },
  {
    id: 13,
    title: 'Beaded Cross Stitch Christmas Ornament',
    info: {
      description:
        'Luxury handmade cross stitch Christmas ornament. Covered with acrylic coat for longer duration.',
      materials:
        'cotton thread, perforated paper, glass beads, acrylic coat, felt',
      height: 9,
      width: 5,
    },
    price: 35,
    category: Categories.ORNAMENTS,
    imageUrl: '../../assets/images/thumb/violin-xmas.png',
    amount: 1,
  },
  {
    id: 14,
    title: 'Beaded Cross Stitch Christmas Ornament',
    info: {
      description:
        'Luxury handmade cross stitch Christmas ornament. Covered with acrylic coat for longer duration.',
      materials:
        'cotton thread, perforated paper, glass beads, acrylic coat, felt',
      height: 9,
      width: 5,
    },
    price: 35,
    category: Categories.ORNAMENTS,
    imageUrl: '../../assets/images/thumb/drum-xmas.png',
    amount: 1,
  },
  {
    id: 15,
    title: 'Beaded Cross Stitch Christmas Ornament',
    info: {
      description:
        'Luxury handmade cross stitch Christmas ornament. Covered with acrylic coat for longer duration.',
      materials:
        'cotton thread, perforated paper, glass beads, acrylic coat, felt',
      height: 9,
      width: 5,
    },
    price: 35,
    category: Categories.ORNAMENTS,
    imageUrl: '../../assets/images/thumb/harp-xmas.png',
    amount: 1,
  },
  {
    id: 16,
    title: 'Halloween Cross-Stitch Magnet',
    info: {
      description:
        'High quality handmade cross-stitch magnet with Halloween theme.',
      materials: 'cotton thread, plastic canvas, magnetic sheet',
      height: 6,
      width: 5,
    },
    price: 20,
    category: Categories.MAGNETS,
    imageUrl: '../../assets/images/thumb/cauldron.png',
    amount: 1,
  },
  {
    id: 17,
    title: 'Halloween Cross-Stitch Magnet',
    info: {
      description:
        'High quality handmade cross-stitch magnet with Halloween theme.',
      materials: 'cotton thread, plastic canvas, magnetic sheet',
      height: 8,
      width: 5,
    },
    price: 20,
    category: Categories.MAGNETS,
    imageUrl: '../../assets/images/thumb/jack-o-lantern.png',
    amount: 1,
  },
  {
    id: 18,
    title: 'Halloween Cross-Stitch Magnet',
    info: {
      description:
        'High quality handmade cross-stitch magnet with Halloween theme.',
      materials: 'cotton thread, plastic canvas, magnetic sheet',
      height: 8,
      width: 5,
    },
    price: 20,
    category: Categories.MAGNETS,
    imageUrl: '../../assets/images/thumb/moon.png',
    amount: 1,
  },
  {
    id: 19,
    title: 'Halloween Cross-Stitch Magnet',
    info: {
      description:
        'High quality handmade cross-stitch magnet with Halloween theme.',
      materials: 'cotton thread, plastic canvas, magnetic sheet',
      height: 8,
      width: 5,
    },
    price: 20,
    category: Categories.MAGNETS,
    imageUrl: '../../assets/images/thumb/house.png',
    amount: 1,
  },
];
