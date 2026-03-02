import { Injectable } from '@angular/core';
import { Category } from '../models/catrgory.models';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  categories: Category[] = [
    {id: 1, name: 'Смартфоны'},
    {id: 2, name: 'Ноутбуки'},
    {id: 3, name: 'Наушники' },
    {id: 4, name: 'Аксессуары'}
  ];

  products: Product[] = [
    {
      id: 1,
      categoryId: 2,
      name: 'Ноутбук Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63RU/A',
      description: 'Первый чип, разработанный специально для Mac. Поразительно, но система на чипе Apple M1 вмещает 16 миллиардов транзис­торов и объединяет центральный и графи­ческий процессоры, систему Neural Engine, контроллеры ввода-вывода и множество других компонентов. ',
      price: 399983,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3a/h0d/64213216755742.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hdb/hb3/64213181169694.jpg?format=gallery-medium'
      ],
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=353220100'
    },
     {
      id: 2,
      categoryId: 2,
      name: 'Ноутбук ASUS VivoBook 15 X1504ZA-BQ1364W 15.6" / 16 Гб / SSD 512 Гб / Win 11 / 90NB1021-M02090',
      description: 'для работы и развлечений. Он станет вашим надежным помощником в любых задачах — от учебы до просмотра фильмов.',
      price: 309900,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0b/hd3/86542194966558.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf7/h2a/86542195097630.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hdf/hfe/86542195163166.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfa/hb9/86542195228702.png?format=gallery-medium'
      ],
      likes:0,
      link: 'https://kaspi.kz/shop/p/asus-vivobook-15-x1504za-bq1364w-15-6-16-gb-ssd-512-gb-win-11-90nb1021-m02090-121433042/?c=353220100'
    },
    {
      id: 3,
      categoryId: 2,
      name: 'Ноутбук Lenovo IdeaPad Slim 3 15.6" / 16 Гб / SSD 1000 Гб / Win 11 Pro / 15IRH8 / 83EM004WRK',
      description: 'Представляем Lenovo IdeaPad Slim 3 — ультрабук, который идеально сочетает высокую производительность и стильный дизайн. С процессором Intel Core i7-13620H и 16 Гб оперативной памяти вы сможете легко справляться с любыми задачами, будь то работа или учёба.',
      price: 448989,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3d/h23/84991833899038.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9e/ha1/84991833964574.jpg?format=gallery-medium',
         'https://resources.cdn-kaspi.kz/img/m/p/h7c/h29/84991834030110.jpg?format=gallery-medium',
         'https://resources.cdn-kaspi.kz/img/m/p/h88/h73/84991834161182.jpg?format=gallery-medium'
        ],
        likes:0,
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-slim-3-15-6-16-gb-ssd-1000-gb-win-11-pro-15irh8-83em004wrk-116139285/?c=353220100'
    },
    {
      id: 4,
      categoryId: 2,
      name: 'Ноутбук Acer NX.J5SER.01W 16" / 16 Гб / SSD 512 Гб / Win 11 Pro / AL16-52P',
      description: 'Ноутбук Acer NX.J5SER.01W — это мощное и стильное устройство, идеально подходящее для работы и развлечений. С 16 Гб оперативной памяти и SSD на 512 Гб вы получите быструю загрузку и плавную многозадачность.',
      price: 319967,
      rating: 4.2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa2/p74/24463336.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pbe/p74/24463337.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pdb/p74/24463338.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf7/p74/24463339.jpg?format=gallery-medium'
        ],
      likes:0,
      link: 'https://kaspi.kz/shop/p/acer-nx-j5ser-01w-16-16-gb-ssd-512-gb-win-11-pro-al16-52p-134587837/?c=353220100'
    },
    {
      id: 5,
      categoryId: 2,
      name: 'Ноутбук Apple MacBook Pro 16 2024 16.2" / 48 Гб / SSD 512 Гб / macOS / MX2Y3',
      description: 'New 2024 16 inch MacBook Pro - Space Black16-inch Li uid Retina XDR display2Standard displayApple M4 Pro chip with 14 core CPU, 20 core GPU',
      price: 1768790,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p2c/pb7/15675993.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p48/pb7/15675994.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p65/pb7/15675995.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p81/pb7/15675996.png?format=gallery-medium'
    ],
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2024-16-2-24-gb-ssd-512-gb-macos-mx2t3ru-a-132224821/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_goods_for_hunting_and_shooting_diving_and_spearfishing&gbraid=0AAAAAC7-v7iOODr_abGazQwmCQK89CQAS&gclid=CjwKCAiAh5XNBhAAEiwA_Bu8FQPgHZazew-p0uInyF6dvjvaPoVVc7-N-6bGI0QaeqbFH-auHy8sbBoCBIsQAvD_BwE'
    },
    {
      id: 6,
      categoryId: 3,
      name: 'Наушники Apple AirPods Max розовый',
      description: 'Bluetooth гарнитура Apple AirPods Max сможет полностью изменить ваше представление о полноразмерных наушниках. Данная модель разработана с применением первоклассных материалов и передовых технологий',
      price: 348800,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5b/h11/64019769753630.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h72/64019772047390.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbc/hb8/64019774210078.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/hce/64019776307230.jpg?format=gallery-medium'
    ],
      likes: 0,
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-rozovyi-101161561/?c=353220100'
    },
     {
      id: 7,
      categoryId: 3,
      name: 'Наушники Marshall Major V бежевый',
      description: 'Представляем вам наушники Marshall Major V — идеальный выбор для тех, кто ценит высокое качество звука и стильный дизайн. Эти накладные наушники обеспечивают чистое звучание и удобство использования в любых условиях.',
      price: 42952,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pbb/p86/32893179.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p27/p89/32893180.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p44/p89/32893181.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbb/p86/32893179.jpg?format=gallery-medium'
    ],
      likes: 0,
      link: 'https://kaspi.kz/shop/p/naushniki-marshall-major-v-bezhevyi-129797584/?c=353220100'
    },

    {
      id: 8,
      categoryId: 3,
      name: 'Наушники Marshall Motif II A.N.C. черный',
      description: 'Наушники Marshall Motif II A.N.C. — идеальный выбор для тех, кто ценит превосходный звук и комфорт в каждой детали.',
      price: 113966,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4c/hec/84718055850014.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hbb/h5f/84718055915550.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha7/hc9/84718055981086.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7f/hfa/84718056046622.png?format=gallery-medium'
    ],
      likes: 0,
      link: 'https://kaspi.kz/shop/p/naushniki-marshall-motif-ii-a-n-c-chernyi-115355341/?c=353220100'
    },

    {
      id: 9,
      categoryId: 3,
      name: 'Наушники Sony WF-1000XM5 черный',
      description: 'Наушники WF-1000XM5 подавляют внешние шумы благодаря широкой пропускной способности: от низких до высоких частот.',
      price: 108771,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/h8d/83155236028446.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h38/h9c/83155236683806.jpg?format=gallery-medium',
    ],
      likes: 0,
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wf-1000xm5-chernyi-112854077/?c=353220100'
    },

    {
      id: 10,
      categoryId: 3,
      name: 'Наушники Sony WH-1000XM6 синий',
      description: 'Наушники Sony WH-1000XM6 — это эталон комфорта и качества звука в мире беспроводных наушников. ',
      price: 193038,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p92/pb6/43642143.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p75/pb6/43642144.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p59/pb6/43642145.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p3d/pb6/43642146.jpg?format=gallery-medium',
    ],
      likes: 0,
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm6-sinii-140045251/?c=353220100'
    },  
    {
      id: 11,
      categoryId: 1,
      name: 'Смартфон Apple iPhone 15 128Gb черный',
      description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн',
      price: 383999,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium'
    ],
      likes:0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=353220100'
    },

    {
      id: 12,
      categoryId: 1,
      name: 'Смартфон Google Pixel 9a 8 ГБ/128 ГБ черный',
      description: 'Смартфон Google Pixel 9a — это мощное устройство с высокой производительностью и современными функциями, которое идеально подходит для повседневного использования и развлечений.',
      price: 632500,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p0a/p16/37517984.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pbd/p12/37517993.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p11/p13/37517990.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd2/p15/37517986.jpg?format=gallery-medium'
    ],
      likes:0,
      link: 'https://kaspi.kz/shop/p/google-pixel-9a-8-gb-128-gb-chernyi-138348536/?c=353220100'
    },

    {
      id: 13,
      categoryId: 1,
      name: 'Смартфон OnePlus 15 16 ГБ/512 ГБ черный',
      description: 'Ну короче норм телефоне пойдет был у меня такой когда-то, но я пожалел что взял его',
      price: 608759,
      rating: 4.2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p22/p9f/78743998.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p06/p9f/78743999.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd6/p58/78744000.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf2/p58/78744001.jpg?format=gallery-medium'
    ],
      likes:0,
      link: 'https://kaspi.kz/shop/p/oneplus-15-16-gb-512-gb-chernyi-149783993/?c=353220100'
    },

    {
      id: 14,
      categoryId: 1,
      name: 'Смартфон Samsung Galaxy S24 Ultra 5G DS 12 ГБ/256 ГБ серый',
      description: 'Флагманский смартфон Samsung Galaxy S24 Ultra 5G (12/256 ГБ, серый титан) оснащен 6.8-дюймовым дисплеем Dynamic AMOLED 2X (120 Гц), мощным процессором Snapdragon 8 Gen 3 и камерой 200 МП',
      price: 749790,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5c/hc7/85135956770846.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h91/he8/85135956836382.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb1/h53/85135956901918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb6/h85/85135956967454.jpg?format=gallery-medium'
    ],
      likes:0,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-ds-12-gb-256-gb-seryi-116534706/?c=353220100'
    },

     {
      id: 15,
      categoryId: 1,
      name: 'Смартфон Xiaomi Redmi Note 13 Pro 5G 12 ГБ/512 ГБ фиолетовый',
      description: 'Xiaomi Redmi Note 13 Pro 5G 12 ГБ/512 ГБ — это мощный и стильный смартфон с передовыми технологиями, созданный для тех, кто ценит высокую производительность и яркий дизайн.',
      price: 700000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h50/h41/84949401436190.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p1a/p64/64532671.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfe/p63/64532672.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe2/p63/64532673.png?format=gallery-medium'
    ],
      likes:0,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-12-gb-512-gb-fioletovyi-115993250/?c=353220100'
    },

     {
      id: 16,
      categoryId: 4,
      name: 'Кварцевые Gevril 12113B нержавеющая сталь',
      description: 'Наручные часы Gevril 12113B — это символ элегантности и стиля, которые идеально подойдут для любого случая.',
      price: 185000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb1/hcb/86049388265502.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h77/h0a/86049388331038.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8f/h89/86049388462110.jpg?format=gallery-medium',
    ],
      likes:0,
      link: 'https://kaspi.kz/shop/p/kvartsevye-gevril-12113b-nerzhavejuschaja-stal--119552204/?c=353220100'
    },

    {
      id: 17,
      categoryId: 4,
      name: 'Miu Miu солнцезащитные очки овальные однотонные',
      description: 'олнцезащитные очки Miu Miu овальной формы с однотонными линзами — это воплощение изысканного итальянского стиля (производятся Luxottica Group).',
      price: 398990,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p58/p15/48734264.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p20/p15/48734266.jpg?format=gallery-medium',
    ],
      likes:0,
      link: 'https://kaspi.kz/shop/p/miu-miu-miu-54zs-zvn50d-53-oval-nye-odnotonnye-141316455/?c=353220100'
    },

    {
      id: 18,
      categoryId: 4,
      name: 'Miu Miu New Collection 2025 кошачий глаз однотонные',
      description: 'Miu Miu 2025 «кошачий глаз однотонные» — это не что-то кричащее, а серьёзная реинтерпретация классической ретро-формы.',
      price: 338900,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa7/p4d/48650550.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc4/p4d/48650551.jpg?format=gallery-medium',
    ],
      likes:0,
      link: 'https://kaspi.kz/shop/p/miu-miu-miu-09ws-14l20i-53-koshachii-glaz-odnotonnye-141294738/?c=353220100'
    },

    {
      id: 19,
      categoryId: 4,
      name: 'Шарф Calvin Klein шерсть, полиамид 100 x 10 см',
      description: 'Узкий шарф Calvin Klein из смеси шерсти и полиамида сохраняет тепло и остаётся практичным в носке',
      price: 48290,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb2/p1a/4334625.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pea/p1a/4334627.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p8f/p1d/4334630.jpg?format=gallery-medium',
    ],
      likes:0,
      link: 'https://kaspi.kz/shop/p/sharf-calvin-klein-k60k612610-beh-poliamid-sherst-100-x-10-sm-128833954/?c=353220100'
    },

    {
      id: 20,
      categoryId: 4,
      name: 'Рюкзак Calvin Klein полиуретан черный',
      description: 'Стильный чёрный рюкзак Calvin Klein выполнен из прочного полиуретана, который устойчив к влаге и износу в повседневной носке.',
      price: 128990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p22/pca/66193903.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pcd/pc9/66193906.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p95/pc9/66193908.jpg?format=gallery-medium',
    ],
      likes:0,
      link: 'https://kaspi.kz/shop/p/rjukzak-calvin-klein-lv04d3155g-ub1-poliuretan-chernyi-146062035/?c=353220100'
    },

  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  } 
}