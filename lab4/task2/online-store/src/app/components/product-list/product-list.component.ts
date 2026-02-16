import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent], 
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
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
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=353220100'
    },
     {
      id: 2,
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
      link: 'https://kaspi.kz/shop/p/asus-vivobook-15-x1504za-bq1364w-15-6-16-gb-ssd-512-gb-win-11-90nb1021-m02090-121433042/?c=353220100'
    },
    {
      id: 3,
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
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-slim-3-15-6-16-gb-ssd-1000-gb-win-11-pro-15irh8-83em004wrk-116139285/?c=353220100'
    },
    {
      id: 4,
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
      link: 'https://kaspi.kz/shop/p/acer-nx-j5ser-01w-16-16-gb-ssd-512-gb-win-11-pro-al16-52p-134587837/?c=353220100'
    },
    {
      id: 5,
      name: 'Попсокет 002 розовый',
      description: 'Самая интересная и лучшая игрушка для развития детей до 50 лет, улучшает навыки паркура, а также истребления человечества!!!!',
      price: 67,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pfd/p6d/47574716.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pa9/p6d/47574719.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p04/p6b/47574722.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p94/p6a/47574726.png?format=gallery-medium'
        ],
      link: 'https://kaspi.kz/shop/p/popsoket-002-rozovyi-122283935/?c=353220100'
    },
    {
      id: 6,
      name: 'Смарт-часы Garmin MARQ Commander Gen 2 Carbon Edition черный',
      description: 'тветьте на самый сложный вызов. MARQ COMMANDER – CARBON EDITION - это современные часы-инструмент, не похожие ни на какие другие, со сверхпрочным и легким корпусом из материала FUSED CARBON FIBER™',
      price: 1814990 ,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc8/h74/84477616979998.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h42/h08/84477617012766.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he9/hec/84477617045534.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he9/h1d/84477617078302.png?format=gallery-medium'
        ],
      link: 'https://kaspi.kz/shop/p/garmin-marq-commander-gen-2-carbon-edition-chernyi-114464404/?c=353220100'
    },
    {
      id: 7,
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
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-rozovyi-101161561/?c=353220100'
    },
    {
      id: 8,
      name: 'Графический планшет HUION Kamvas 22 черный',
      description: 'Графический планшет Huion Kamvas 22 – профессиональное творчество без границ!',
      price: 249900,
      rating: 4.1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p06/pb1/47553495.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe9/pb0/47553496.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pcd/pb0/47553497.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p95/pb0/47553499.png?format=gallery-medium'
        ],
      link: 'https://kaspi.kz/shop/p/huion-kamvas-22-chernyi-101001729/?c=353220100'
    },
    {
      id: 9,
      name: 'Проектор TOMMILI HY320',
      description: 'Отличный домашний проектор для семейного просмотра фильмов и видео на ютуб! Предлагаем Вам проектор, который превратит Вашу комнату в полноценный домашний кинотеатр',
      price: 34900,
      rating: 3.2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p76/p4f/93867947.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p76/p4f/93867947.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p29/pbe/61059317.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0d/pbe/61059318.png?format=gallery-medium'
        ],
      link: 'https://kaspi.kz/shop/p/proektor-tommili-hy320-116138799/?c=353220100'
    },
    {
      id: 10,
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
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=353220100'
    }
  ];
}