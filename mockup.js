import { theme } from './src/constants/theme';

export const data = [
    {
        img: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        color: 'red',
    },
    {
        img: 'https://images.pexels.com/photos/10883402/pexels-photo-10883402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        color: 'green',
    },
    {
        img: 'https://images.pexels.com/photos/6752365/pexels-photo-6752365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        color: 'blue',
    },
    {
        img: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        color: 'black',
    },
    {
        img: 'https://images.pexels.com/photos/708488/pexels-photo-708488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        color: 'orange',
    },
];
/// stackoverflow START
/// quuestion :https://stackoverflow.com/questions/71476444/react-native-how-to-add-images-with-map
/// answer by Fiston Emmanuel : https://stackoverflow.com/users/12431576/fiston-emmanuel
export const bannerImage = [
    {
        imgLink: require('./src/assets/image/banner-mobile-1.jpg'),
    },
    {
        imgLink: require('./src/assets/image/banner-mobile-2.jpg'),
    },
    {
        imgLink: require('./src/assets/image/banner-mobile-3.jpg'),
    },
    {
        imgLink: require('./src/assets/image/banner-mobile-4.jpg'),
    },
];
export const secondBannerImage = [
    {
        path: require('./src/assets/image/second-banner-1.jpg'),
        label: 'Gà rán',
    },
    {
        path: require('./src/assets/image/second-banner-2.jpeg'),
        label: 'Đồ uống lạnh',
    },
    {
        path: require('./src/assets/image/second-banner-3.jpg'),
        label: 'Pizza',
    },
    {
        path: require('./src/assets/image/second-banner-4.jpg'),
        label: 'Gà Rán - Burger',
    },
    {
        path: require('./src/assets/image/second-banner-5.jpeg'),
        label: 'Trà sữa',
    },
    {
        path: require('./src/assets/image/second-banner-6.jpeg'),
        label: 'Cơm tấm',
    },
];
/// stackoverflow END

export const content = [
    {
        label: 'Rau sạch',
        tag: 'be healty and eat healty',
        color: theme.colors.green,
    },
    {
        label: 'Cà phê',
        tag: 'we have the best coffee in town',
        color: theme.colors.cyan,
    },
    {
        label: 'Thịt bò',
        tag: 'indulge your tongue',
        color: theme.colors.warning,
    },
    {
        label: 'Nước trái cây',
        tag: 'many varieties of juices',
        color: theme.colors.error,
    },
];
export const Ordertype = [
    {
        label: 'Dùng bữa ngay',
        tag: 'Cảm thấy hài lòng về việc đặt hàng tại nhà hàng của chúng tôi',
        color: theme.colors.blue,
        icon: 'local-dining',
    },
    {
        label: 'Đặt đồ ăn',
        tag: 'Ngại đi ra ngoài? Thư giãn, bạn có thể đặt đồ ăn',
        color: theme.colors.deepPurple,
        icon: 'delivery-dining',
    },
];
export const dataCard = [
    {
        title: 'Bundling Package - Healty Chalange',
        price: '65000',
        review: '1k review',
        location: 'Njabon, kediri',
        tag: 'asian food',
        path: require('./src/components/Asset/posterLandscape_1.png'),
    },
    {
        title: 'Premium Coffee - Bundling Price',
        review: '1.5k review',
        location: 'Mbabal, ngadi',
        price: '34000',
        tag: 'makan siang',
        path: require('./src/components/Asset/posterLandscape_2.png'),
    },
    {
        title: 'Family Burger Universe',
        review: '345 review',
        location: 'Botoran, tulungagung',
        price: '56500',
        tag: 'khas nusantara',
        path: require('./src/components/Asset/posterLandscape_3.png'),
    },
];
export const sectionData = [
    {
        title: 'Bán chạy nhất',
        data: [
            {
                id: '14',
                label: 'Pizza Mercury',
                price: 12000,
                review: '4.5',
                isDeliver: true,
                isDineIn: true,
                images: [
                    {
                        imgLink:
                            'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                    {
                        imgLink:
                            'https://images.pexels.com/photos/1049620/pexels-photo-1049620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                    {
                        imgLink:
                            'https://images.pexels.com/photos/166451/pexels-photo-166451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                ],
                desc: 'Est minim veniam proident id laboris cupidatat cillum in dolore nulla ea. variant="titleLarge Laborum consequat exercitation ut officia proident dolore elit eu ad ipsum voluptate. Est quis do enim in. Occaecat amet ex consectetur cupidatat. Voluptate reprehenderit tempor duis cupidatat anim pariatur esse aliqua aliqua laborum. Duis adipisicing exercitation pariatur ad id minim proident incididunt ex exercitation duis. Cupidatat occaecat culpa est ipsum deserunt et qui est esse nisi. Do veniam dolor nulla excepteur sit commodo Lorem consequat cillum ipsum qui cupidatat excepteur.',
                imgLink:
                    'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                id: '15',
                label: 'Cappucino Ice',
                price: 32000,
                isDeliver: true,
                isDineIn: true,
                images: [
                    {
                        imgLink:
                            'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                    {
                        imgLink:
                            'https://images.pexels.com/photos/186857/pexels-photo-186857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                    {
                        imgLink:
                            'https://images.pexels.com/photos/1473714/pexels-photo-1473714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                ],
                review: '4.1',
                desc: 'Est minim veniam proident id laboris cupidatat cillum in dolore nulla ea. variant="titleLarge Laborum consequat exercitation ut officia proident dolore elit eu ad ipsum voluptate. Est quis do enim in. Occaecat amet ex consectetur cupidatat. Voluptate reprehenderit tempor duis cupidatat anim pariatur esse aliqua aliqua laborum. Duis adipisicing exercitation pariatur ad id minim proident incididunt ex exercitation duis. Cupidatat occaecat culpa est ipsum deserunt et qui est esse nisi. Do veniam dolor nulla excepteur sit commodo Lorem consequat cillum ipsum qui cupidatat excepteur.',
                imgLink:
                    'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                id: '16',
                label: 'Noodle Spicy',
                isDeliver: true,
                isDineIn: true,
                price: 9800,
                images: [
                    {
                        imgLink:
                            'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                    {
                        imgLink:
                            'https://images.pexels.com/photos/154145/pexels-photo-154145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                    {
                        imgLink:
                            'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                ],
                review: '4.6',
                desc: 'Est minim veniam proident id laboris cupidatat cillum in dolore nulla ea. variant="titleLarge Laborum consequat exercitation ut officia proident dolore elit eu ad ipsum voluptate. Est quis do enim in. Occaecat amet ex consectetur cupidatat. Voluptate reprehenderit tempor duis cupidatat anim pariatur esse aliqua aliqua laborum. Duis adipisicing exercitation pariatur ad id minim proident incididunt ex exercitation duis. Cupidatat occaecat culpa est ipsum deserunt et qui est esse nisi. Do veniam dolor nulla excepteur sit commodo Lorem consequat cillum ipsum qui cupidatat excepteur.',
                imgLink:
                    'https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                id: '17',
                label: 'Chicken Strip',
                isDeliver: false,
                isDineIn: true,
                price: 5500,
                images: [
                    {
                        imgLink:
                            'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                    {
                        imgLink:
                            'https://images.pexels.com/photos/5724555/pexels-photo-5724555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                    {
                        imgLink:
                            'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                ],
                review: '4.9',
                desc: 'Est minim veniam proident id laboris cupidatat cillum in dolore nulla ea. variant="titleLarge Laborum consequat exercitation ut officia proident dolore elit eu ad ipsum voluptate. Est quis do enim in. Occaecat amet ex consectetur cupidatat. Voluptate reprehenderit tempor duis cupidatat anim pariatur esse aliqua aliqua laborum. Duis adipisicing exercitation pariatur ad id minim proident incididunt ex exercitation duis. Cupidatat occaecat culpa est ipsum deserunt et qui est esse nisi. Do veniam dolor nulla excepteur sit commodo Lorem consequat cillum ipsum qui cupidatat excepteur.',
                imgLink:
                    'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
        ],
    },
    {
        title: 'Gợi ý cho bạn',
        data: [
            {
                id: '1',
                label: 'Rice Bowl',
                price: 2300,
                isDeliver: true,
                isDineIn: false,
                images: [
                    {
                        imgLink:
                            'https://images.pexels.com/photos/812868/pexels-photo-812868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                    {
                        imgLink: 'https://images.pexels.com/photos/2284604/pexels-photo-2284604.jpeg',
                    },
                    {
                        imgLink:
                            'https://images.pexels.com/photos/2942319/pexels-photo-2942319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                ],
                review: '4.7',
                desc: 'Est minim veniam proident id laboris cupidatat cillum in dolore nulla ea. variant="titleLarge Laborum consequat exercitation ut officia proident dolore elit eu ad ipsum voluptate. Est quis do enim in. Occaecat amet ex consectetur cupidatat. Voluptate reprehenderit tempor duis cupidatat anim pariatur esse aliqua aliqua laborum. Duis adipisicing exercitation pariatur ad id minim proident incididunt ex exercitation duis. Cupidatat occaecat culpa est ipsum deserunt et qui est esse nisi. Do veniam dolor nulla excepteur sit commodo Lorem consequat cillum ipsum qui cupidatat excepteur.',
                imgLink:
                    'https://images.pexels.com/photos/1320917/pexels-photo-1320917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                id: '12',
                label: 'Beef Melt',
                price: 5500,
                isDeliver: false,
                isDineIn: true,
                images: [
                    {
                        imgLink:
                            'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                    {
                        imgLink:
                            'https://images.pexels.com/photos/6166801/pexels-photo-6166801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                    {
                        imgLink:
                            'https://images.pexels.com/photos/128401/pexels-photo-128401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                ],
                review: '4.3',
                desc: 'Est minim veniam proident id laboris cupidatat cillum in dolore nulla ea. variant="titleLarge Laborum consequat exercitation ut officia proident dolore elit eu ad ipsum voluptate. Est quis do enim in. Occaecat amet ex consectetur cupidatat. Voluptate reprehenderit tempor duis cupidatat anim pariatur esse aliqua aliqua laborum. Duis adipisicing exercitation pariatur ad id minim proident incididunt ex exercitation duis. Cupidatat occaecat culpa est ipsum deserunt et qui est esse nisi. Do veniam dolor nulla excepteur sit commodo Lorem consequat cillum ipsum qui cupidatat excepteur.',
                imgLink:
                    'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                id: '190',
                label: 'Orange Juice',
                price: 9000,
                isDeliver: false,
                isDineIn: true,
                images: [
                    {
                        imgLink:
                            'https://images.pexels.com/photos/3584/healthy-grass-orange-juice-health.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                    {
                        imgLink:
                            'https://images.pexels.com/photos/4725692/pexels-photo-4725692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                    {
                        imgLink:
                            'https://images.pexels.com/photos/3603/healthy-breakfast-orange-juice-health.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                ],
                review: '4.1',
                desc: 'Est minim veniam proident id laboris cupidatat cillum in dolore nulla ea. variant="titleLarge Laborum consequat exercitation ut officia proident dolore elit eu ad ipsum voluptate. Est quis do enim in. Occaecat amet ex consectetur cupidatat. Voluptate reprehenderit tempor duis cupidatat anim pariatur esse aliqua aliqua laborum. Duis adipisicing exercitation pariatur ad id minim proident incididunt ex exercitation duis. Cupidatat occaecat culpa est ipsum deserunt et qui est esse nisi. Do veniam dolor nulla excepteur sit commodo Lorem consequat cillum ipsum qui cupidatat excepteur.',
                imgLink:
                    'https://images.pexels.com/photos/158053/fresh-orange-juice-squeezed-refreshing-citrus-158053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                id: '13',
                label: 'Salad',
                price: 20000,
                isDeliver: true,
                isDineIn: true,
                images: [
                    {
                        imgLink:
                            'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                    {
                        imgLink:
                            'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                    {
                        imgLink:
                            'https://images.pexels.com/photos/3026019/pexels-photo-3026019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                ],
                review: '4.8',
                desc: 'Est minim veniam proident id laboris cupidatat cillum in dolore nulla ea. variant="titleLarge Laborum consequat exercitation ut officia proident dolore elit eu ad ipsum voluptate. Est quis do enim in. Occaecat amet ex consectetur cupidatat. Voluptate reprehenderit tempor duis cupidatat anim pariatur esse aliqua aliqua laborum. Duis adipisicing exercitation pariatur ad id minim proident incididunt ex exercitation duis. Cupidatat occaecat culpa est ipsum deserunt et qui est esse nisi. Do veniam dolor nulla excepteur sit commodo Lorem consequat cillum ipsum qui cupidatat excepteur.',
                imgLink:
                    'https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
        ],
    },
];
export const secondSectionData = [
    {
        title: 'Bữa sáng',
        data: [
            {
                id: '14',
                label: 'Noodle Midlle',
                price: 12000,
                review: '4.6',
                isDeliver: true,
                isDineIn: true,
                images: [
                    {
                        imgLink:
                            'https://images.pexels.com/photos/101533/pexels-photo-101533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                    {
                        imgLink: 'https://images.pexels.com/photos/793785/pexels-photo-793785.jpeg',
                    },
                    {
                        imgLink: 'https://images.pexels.com/photos/2205270/pexels-photo-2205270.jpeg',
                    },
                ],
                desc: 'Est minim veniam proident id laboris cupidatat cillum in dolore nulla ea. variant="titleLarge Laborum consequat exercitation ut officia proident dolore elit eu ad ipsum voluptate. Est quis do enim in. Occaecat amet ex consectetur cupidatat. Voluptate reprehenderit tempor duis cupidatat anim pariatur esse aliqua aliqua laborum. Duis adipisicing exercitation pariatur ad id minim proident incididunt ex exercitation duis. Cupidatat occaecat culpa est ipsum deserunt et qui est esse nisi. Do veniam dolor nulla excepteur sit commodo Lorem consequat cillum ipsum qui cupidatat excepteur.',
                imgLink:
                    'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                id: '15',
                label: 'Bread Egg',
                price: 32000,
                isDeliver: true,
                isDineIn: true,
                images: [
                    {
                        imgLink:
                            'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                    {
                        imgLink:
                            'https://images.pexels.com/photos/186857/pexels-photo-186857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                    {
                        imgLink:
                            'https://images.pexels.com/photos/1473714/pexels-photo-1473714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                ],
                review: '4.9',
                desc: 'Est minim veniam proident id laboris cupidatat cillum in dolore nulla ea. variant="titleLarge Laborum consequat exercitation ut officia proident dolore elit eu ad ipsum voluptate. Est quis do enim in. Occaecat amet ex consectetur cupidatat. Voluptate reprehenderit tempor duis cupidatat anim pariatur esse aliqua aliqua laborum. Duis adipisicing exercitation pariatur ad id minim proident incididunt ex exercitation duis. Cupidatat occaecat culpa est ipsum deserunt et qui est esse nisi. Do veniam dolor nulla excepteur sit commodo Lorem consequat cillum ipsum qui cupidatat excepteur.',
                imgLink:
                    'https://images.pexels.com/photos/2297961/pexels-photo-2297961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                id: '16',
                label: 'Noodle Spicy',
                isDeliver: true,
                isDineIn: true,
                price: 9800,
                images: [
                    {
                        imgLink:
                            'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                    {
                        imgLink:
                            'https://images.pexels.com/photos/154145/pexels-photo-154145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                    {
                        imgLink:
                            'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                ],
                review: '4.5',
                desc: 'Est minim veniam proident id laboris cupidatat cillum in dolore nulla ea. variant="titleLarge Laborum consequat exercitation ut officia proident dolore elit eu ad ipsum voluptate. Est quis do enim in. Occaecat amet ex consectetur cupidatat. Voluptate reprehenderit tempor duis cupidatat anim pariatur esse aliqua aliqua laborum. Duis adipisicing exercitation pariatur ad id minim proident incididunt ex exercitation duis. Cupidatat occaecat culpa est ipsum deserunt et qui est esse nisi. Do veniam dolor nulla excepteur sit commodo Lorem consequat cillum ipsum qui cupidatat excepteur.',
                imgLink:
                    'https://images.pexels.com/photos/5745757/pexels-photo-5745757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                id: '17',
                label: 'Soup Megh',
                isDeliver: false,
                isDineIn: true,
                price: 5500,
                images: [
                    {
                        imgLink:
                            'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                    {
                        imgLink:
                            'https://images.pexels.com/photos/5724555/pexels-photo-5724555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                    {
                        imgLink:
                            'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                ],
                review: '4.2',
                desc: 'Est minim veniam proident id laboris cupidatat cillum in dolore nulla ea. variant="titleLarge Laborum consequat exercitation ut officia proident dolore elit eu ad ipsum voluptate. Est quis do enim in. Occaecat amet ex consectetur cupidatat. Voluptate reprehenderit tempor duis cupidatat anim pariatur esse aliqua aliqua laborum. Duis adipisicing exercitation pariatur ad id minim proident incididunt ex exercitation duis. Cupidatat occaecat culpa est ipsum deserunt et qui est esse nisi. Do veniam dolor nulla excepteur sit commodo Lorem consequat cillum ipsum qui cupidatat excepteur.',
                imgLink:
                    'https://images.pexels.com/photos/1703272/pexels-photo-1703272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
        ],
    },
    {
        title: 'Bữa tối',
        data: [
            {
                id: '1',
                label: 'Egg Rice',
                price: 2300,
                isDeliver: true,
                isDineIn: false,
                images: [
                    {
                        imgLink:
                            'https://images.pexels.com/photos/812868/pexels-photo-812868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                    {
                        imgLink: 'https://images.pexels.com/photos/2284604/pexels-photo-2284604.jpeg',
                    },
                    {
                        imgLink:
                            'https://images.pexels.com/photos/2942319/pexels-photo-2942319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                ],
                review: '4.1',
                desc: 'Est minim veniam proident id laboris cupidatat cillum in dolore nulla ea. variant="titleLarge Laborum consequat exercitation ut officia proident dolore elit eu ad ipsum voluptate. Est quis do enim in. Occaecat amet ex consectetur cupidatat. Voluptate reprehenderit tempor duis cupidatat anim pariatur esse aliqua aliqua laborum. Duis adipisicing exercitation pariatur ad id minim proident incididunt ex exercitation duis. Cupidatat occaecat culpa est ipsum deserunt et qui est esse nisi. Do veniam dolor nulla excepteur sit commodo Lorem consequat cillum ipsum qui cupidatat excepteur.',
                imgLink:
                    'https://images.pexels.com/photos/1410236/pexels-photo-1410236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                id: '12',
                label: 'Potato',
                price: 5500,
                isDeliver: false,
                isDineIn: true,
                images: [
                    {
                        imgLink:
                            'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                    {
                        imgLink:
                            'https://images.pexels.com/photos/6166801/pexels-photo-6166801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                    {
                        imgLink:
                            'https://images.pexels.com/photos/128401/pexels-photo-128401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                ],
                review: '4.7',
                desc: 'Est minim veniam proident id laboris cupidatat cillum in dolore nulla ea. variant="titleLarge Laborum consequat exercitation ut officia proident dolore elit eu ad ipsum voluptate. Est quis do enim in. Occaecat amet ex consectetur cupidatat. Voluptate reprehenderit tempor duis cupidatat anim pariatur esse aliqua aliqua laborum. Duis adipisicing exercitation pariatur ad id minim proident incididunt ex exercitation duis. Cupidatat occaecat culpa est ipsum deserunt et qui est esse nisi. Do veniam dolor nulla excepteur sit commodo Lorem consequat cillum ipsum qui cupidatat excepteur.',
                imgLink:
                    'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                id: '190',
                label: 'Pan Cake',
                price: 9000,
                isDeliver: false,
                isDineIn: true,
                images: [
                    {
                        imgLink:
                            'https://images.pexels.com/photos/3584/healthy-grass-orange-juice-health.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                    {
                        imgLink:
                            'https://images.pexels.com/photos/4725692/pexels-photo-4725692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                    {
                        imgLink:
                            'https://images.pexels.com/photos/3603/healthy-breakfast-orange-juice-health.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                ],
                review: '4.9',
                desc: 'Est minim veniam proident id laboris cupidatat cillum in dolore nulla ea. variant="titleLarge Laborum consequat exercitation ut officia proident dolore elit eu ad ipsum voluptate. Est quis do enim in. Occaecat amet ex consectetur cupidatat. Voluptate reprehenderit tempor duis cupidatat anim pariatur esse aliqua aliqua laborum. Duis adipisicing exercitation pariatur ad id minim proident incididunt ex exercitation duis. Cupidatat occaecat culpa est ipsum deserunt et qui est esse nisi. Do veniam dolor nulla excepteur sit commodo Lorem consequat cillum ipsum qui cupidatat excepteur.',
                imgLink:
                    'https://images.pexels.com/photos/6773051/pexels-photo-6773051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                id: '13',
                label: 'Chiken Geprek',
                price: 20000,
                isDeliver: true,
                isDineIn: true,
                images: [
                    {
                        imgLink:
                            'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                    {
                        imgLink:
                            'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                    {
                        imgLink:
                            'https://images.pexels.com/photos/3026019/pexels-photo-3026019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    },
                ],
                review: '4.2',
                desc: 'Est minim veniam proident id laboris cupidatat cillum in dolore nulla ea. variant="titleLarge Laborum consequat exercitation ut officia proident dolore elit eu ad ipsum voluptate. Est quis do enim in. Occaecat amet ex consectetur cupidatat. Voluptate reprehenderit tempor duis cupidatat anim pariatur esse aliqua aliqua laborum. Duis adipisicing exercitation pariatur ad id minim proident incididunt ex exercitation duis. Cupidatat occaecat culpa est ipsum deserunt et qui est esse nisi. Do veniam dolor nulla excepteur sit commodo Lorem consequat cillum ipsum qui cupidatat excepteur.',
                imgLink:
                    'https://images.pexels.com/photos/14098784/pexels-photo-14098784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
        ],
    },
];
export const category = [
    {
        label: 'Ăn Vặt',
        value: 'AnVat',
    },
    {
        label: 'Gà rán',
        value: 'GaRan',
    },
    {
        label: 'Cháo',
        value: 'Chao',
    },
    {
        label: 'Gà',
        value: 'Ga',
    },
    {
        label: 'Mỳ Ý',
        value: 'MyY',
    },
    {
        label: 'Rau trộn',
        value: 'RauTron',
    },
    {
        label: 'Thịt',
        value: 'Thit',
    },
    {
        label: 'Bánh Mì',
        value: 'BanhMy',
    },
    {
        label: 'Cơm',
        value: 'Com',
    },
    {
        label: 'Trà sữa',
        value: 'TraSua',
    },
    {
        label: 'Đồ uống lạnh',
        value: 'DoUongLanh',
    },
];
export const topRated = [
    {
        label: 'Miễn phí giao hàng',
        value: 'free_delivery',
    },
    {
        label: 'Top thực đơn',
        value: 'top_menu',
    },
    {
        label: 'Kích thước lớn hơn',
        value: 'bigger_size',
    },
];
export const product = [
    {
        label: 'Burger Giant',
        price: 12000,
        isDeliver: true,
        isDineIn: true,
        review: '4.6',
        desc: 'Est minim veniam proident id laboris cupidatat cillum in dolore nulla ea. variant="titleLarge Laborum consequat exercitation ut officia proident dolore elit eu ad ipsum voluptate. Est quis do enim in. Occaecat amet ex consectetur cupidatat. Voluptate reprehenderit tempor duis cupidatat anim pariatur esse aliqua aliqua laborum. Duis adipisicing exercitation pariatur ad id minim proident incididunt ex exercitation duis. Cupidatat occaecat culpa est ipsum deserunt et qui est esse nisi. Do veniam dolor nulla excepteur sit commodo Lorem consequat cillum ipsum qui cupidatat excepteur.',
        imgLink:
            'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        images: [
            {
                imgLink:
                    'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                imgLink:
                    'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                imgLink:
                    'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
        ],
    },
    {
        label: 'Burger Armagedon Best In This Town',
        price: 6000,
        isDeliver: true,
        isDineIn: true,
        review: '4.6',
        images: [
            {
                imgLink:
                    'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                imgLink:
                    'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                imgLink:
                    'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
        ],
        imgLink:
            'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        label: 'Potato Stick',
        price: 5000,
        isDeliver: true,
        isDineIn: false,
        review: '4.5',
        images: [
            {
                imgLink:
                    'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                imgLink:
                    'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                imgLink:
                    'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
        ],
        imgLink:
            'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        label: 'Burger + Ice Drink',
        price: 7600,
        review: '4.5',
        isDeliver: false,
        isDineIn: true,
        images: [
            {
                imgLink:
                    'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                imgLink:
                    'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                imgLink:
                    'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
        ],
        imgLink:
            'https://images.pexels.com/photos/11344983/pexels-photo-11344983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        label: 'Pizza With Egg',
        price: 15500,
        review: '4.5',
        images: [
            {
                imgLink:
                    'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                imgLink:
                    'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                imgLink:
                    'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
        ],
        imgLink:
            'https://images.pexels.com/photos/845808/pexels-photo-845808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        label: 'Hot Dog Cogan',
        price: 12000,
        isDeliver: true,
        isDineIn: false,
        review: '4.5',
        images: [
            {
                imgLink:
                    'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                imgLink:
                    'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                imgLink:
                    'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
        ],
        imgLink:
            'https://images.pexels.com/photos/4113464/pexels-photo-4113464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        label: 'Happy Burger Meal',
        price: 9500,
        isDeliver: true,
        isDineIn: true,
        review: '4.5',
        images: [
            {
                imgLink:
                    'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                imgLink:
                    'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                imgLink:
                    'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
        ],
        imgLink:
            'https://images.pexels.com/photos/2280573/pexels-photo-2280573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        label: 'Soup',
        price: 20100,
        isDeliver: true,
        isDineIn: true,
        review: '4.5',
        images: [
            {
                imgLink:
                    'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                imgLink:
                    'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                imgLink:
                    'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
        ],
        imgLink:
            'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        label: 'Tuna',
        price: 5500,
        isDeliver: true,
        isDineIn: true,
        review: '4.5',
        images: [
            {
                imgLink:
                    'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                imgLink:
                    'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                imgLink:
                    'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
        ],
        imgLink:
            'https://images.pexels.com/photos/952647/pexels-photo-952647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        label: 'Bread',
        price: 2500,
        review: '4.5',
        isDeliver: true,
        isDineIn: true,
        images: [
            {
                imgLink:
                    'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                imgLink:
                    'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                imgLink:
                    'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
        ],
        imgLink:
            'https://images.pexels.com/photos/2983104/pexels-photo-2983104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        label: 'Ice Tea',
        price: 12500,
        isDeliver: true,
        isDineIn: true,
        review: '4.5',
        images: [
            {
                imgLink:
                    'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                imgLink:
                    'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                imgLink:
                    'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
        ],
        imgLink:
            'https://images.pexels.com/photos/792613/pexels-photo-792613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        label: 'Beef Burger',
        price: 4500,
        isDeliver: false,
        isDineIn: true,
        review: '4.5',
        images: [
            {
                imgLink:
                    'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                imgLink:
                    'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                imgLink:
                    'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
        ],
        imgLink:
            'https://images.pexels.com/photos/2089717/pexels-photo-2089717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
];
