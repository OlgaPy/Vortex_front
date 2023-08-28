import pic1 from '@/widgets/trends-feed-widget/img/Comments dark.jpg';
import pic2 from '@/widgets/trends-feed-widget/img/home dark 1.1 (2).jpg';
import pic3 from '@/widgets/trends-feed-widget/img/upscale_4.png';
import pic4 from '@/widgets/trends-feed-widget/img/Pictures.png';
import type { IPost } from './types';

const initialPost: IPost = {
	title: `Сытно и просто - картофель по-деревенски! 🥔✨`,
	body: `
	Нарежьте картошку кубиками, посыпьте розмарином, солью и перцем, добавьте немного растительного масла. Выпекайте в разогретой духовке до золотистой корки. Этот домашний деликатес прекрасно подходит к мясным блюдам или просто с огоньком кетчупа! 🍅🔥
	`,
	tags: ['Меню', 'Баян', 'Без рейтинга'],
	id: 1,
	img: pic1,
};

export const initialPosts = [
	initialPost,
	{
		...initialPost,
		id: 2,
		img: pic2,
	},
	{
		...initialPost,
		id: 3,
		img: pic3,
	},
	{
		...initialPost,
		id: 4,
		img: pic4,
	}
];
