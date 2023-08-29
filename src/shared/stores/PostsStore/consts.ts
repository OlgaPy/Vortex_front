import pic1 from '@/widgets/trends-feed-widget/img/Comments dark.jpg'
import pic2 from '@/widgets/trends-feed-widget/img/home dark 1.1 (2).jpg'
import pic3 from '@/widgets/trends-feed-widget/img/upscale_4.png'
import pic4 from '@/widgets/trends-feed-widget/img/Pictures.png'
import type { IPost } from './types'

const initialPost: IPost = {
	uuid: '1',
	title: `Сытно и просто - картофель по-деревенски! 🥔✨`,
	content: {
		0: {
			type: 'img',
			value: pic1
		},
		1: {
			type: 'text',
			value: `
	Нарежьте картошку кубиками, посыпьте розмарином, солью и перцем, добавьте немного растительного масла. Выпекайте в разогретой духовке до золотистой корки. Этот домашний деликатес прекрасно подходит к мясным блюдам или просто с огоньком кетчупа! 🍅🔥
	`
		}
	},
	tags: ['Меню', 'Баян', 'Без рейтинга'],
	rating: 12345
}

export const initialPosts: IPost[] = [
	initialPost,
	{
		...initialPost,
		uuid: '2',
		content: {
			...initialPost.content,
			0: {
				...initialPost.content[0],
				value: pic2
			}
		}
	},
	{
		...initialPost,
		uuid: '3',
		content: {
			...initialPost.content,
			0: {
				...initialPost.content[0],
				value: pic3
			}
		}
	},
	{
		...initialPost,
		uuid: '4',
		content: {
			...initialPost.content,
			0: {
				...initialPost.content[0],
				value: pic4
			}
		}
	}
]
