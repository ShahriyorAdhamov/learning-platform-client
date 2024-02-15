import { AiFillAmazonCircle, AiOutlineDashboard, AiOutlineDollar } from 'react-icons/ai';
import { FaApplePay, FaBookReader, FaDraftingCompass, FaQuestionCircle } from 'react-icons/fa';
import { CiViewList } from 'react-icons/ci';
import { MdImportContacts, MdOutlineContactMail } from 'react-icons/md';
import { AnnouncementIcons, CodingIcons, DesignIcons, EngIcons, LaptopIcons, PersonIcons, PrintIcons, RusIcons, UzbIcons } from '../icons';
import { SiAmd, SiCisco, SiLogitech, SiSpotify } from 'react-icons/si';
import { CourseType } from 'src/interfaces/course.interface';

export const navigation = [
	{
		title: 'General',
		links: [
			{
				label: 'Explore',
				route: '/',
				icon: AiOutlineDashboard,
			},
			{
				label: 'Courses',
				route: '/courses',
				icon: CiViewList,
			},
			{
				label: 'Books',
				route: '/books',
				icon: FaBookReader,
			},
			{
				label: 'Articles',
				route: '/articles',
				icon: MdImportContacts,
			},
		],
	},
	{
		title: 'Pages',
		links: [
			{
				label: 'About',
				route: '/about',
				icon: FaDraftingCompass,
			},
			{
				label: 'Contact',
				route: '/contact',
				icon: MdOutlineContactMail,
			},
			{
				label: 'Pricing',
				route: '/pricing',
				icon: AiOutlineDollar,
			},
			{
				label: 'FAQ',
				route: '/faq',
				icon: FaQuestionCircle,
			},
		],
	},
];

export const categories = [
	{
		name: 'Creative Design',
		id: 1,
		icon: DesignIcons,
	},
	{
		name: 'Sales Marketing',
		id: 2,
		icon: AnnouncementIcons,
	},
	{
		name: 'Development IT',
		id: 3,
		icon: CodingIcons,
	},
	{
		name: 'Engineering Architecture',
		id: 4,
		icon: PrintIcons,
	},
	{
		name: 'Personal Development',
		id: 5,
		icon: PersonIcons,
	},
	{
		name: 'Finance Accounting',
		id: 6,
		icon: LaptopIcons,
	},
];

export const trustedCompany = [AiFillAmazonCircle, SiAmd, SiCisco, FaApplePay, SiLogitech, SiSpotify];

export const languages = [
	{ nativeLng: "O'zbek", lng: 'uz', icon: UzbIcons },
	{ nativeLng: 'Русский', lng: 'ru', icon: RusIcons },
	{ nativeLng: 'English', lng: 'en', icon: EngIcons },
];

export const coursesFilter = [
	{
		title: 'filter_category_title',
		id: 'category',
		categoryList: [
			{ name: 'filter_category_item_1', id: 'web-developments' },
			{ name: 'filter_category_item_2', id: 'mobile-application' },
			{ name: 'filter_category_item_3', id: 'graphic-design' },
			{ name: 'filter_category_item_4', id: 'artificial-intelligence' },
		],
	},
	{
		title: 'filter_rating_title',
		id: 'rating',
		categoryList: [
			{ name: 'filter_rating_item_1', id: '4.5' },
			{ name: 'filter_rating_item_2', id: '4' },
			{ name: 'filter_rating_item_3', id: '3.5' },
			{ name: 'filter_rating_item_4', id: '3' },
		],
	},
	{
		title: 'filter_language_title',
		id: 'language',
		categoryList: [
			{ name: 'filter_language_item_1', id: 'en' },
			{ name: 'filter_language_item_2', id: 'ru' },
			{ name: 'filter_language_item_3', id: 'uz' },
			{ name: 'filter_language_item_4', id: 'tr' },
		],
	},
	{
		title: 'filter_level_title',
		id: 'level',
		categoryList: [
			{ name: 'filter_level_item_1', id: 'beginner' },
			{ name: 'filter_level_item_2', id: 'medium' },
			{ name: 'filter_level_item_3', id: 'professional' },
		],
	},
];

export const courses: CourseType[] = [
	{
		image: 'https://media.graphassets.com/3gf746AKRbWNjB8OCoEB',
		title: 'JavaScript full course',
		lessonCount: 96,
		totalHour: 13.6,
		level: 'Beginner',
		price: 20,
		reviewAverage: 4.5,
		reviewCount: 200,
		author: {
			firstName: 'Samar',
			lastName: 'Badriddinov',
			avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
		},
	},
	{
		image: 'https://media.graphassets.com/54vR0DStGoFuZBVkFwWQ',
		title: 'VueJS full course',
		lessonCount: 30,
		totalHour: 10.6,
		level: 'Beginner',
		price: 20,
		reviewAverage: 4.5,
		reviewCount: 250,
		author: {
			firstName: 'Shahriyor',
			lastName: 'Adhamov',
			avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
		},
	},
	{
		image: 'https://media.graphassets.com/65rcPxsLT9ysJDisXF80',
		title: 'ReactJS full course',
		lessonCount: 70,
		totalHour: 19,
		level: 'Beginner',
		price: 20,
		reviewAverage: 4.5,
		reviewCount: 150,
		author: {
			firstName: 'Shahriyor',
			lastName: 'Adhamov',
			avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
		},
	},
	{
		image: 'https://media.graphassets.com/xactyo8TtyTIkAcMWvSm',
		title: 'VueX full course',
		lessonCount: 120,
		totalHour: 24.6,
		level: 'Beginner',
		price: 20,
		reviewAverage: 5,
		reviewCount: 250,
		author: {
			firstName: 'Shahriyor',
			lastName: 'Adhamov',
			avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
		},
	},
	{
		image: 'https://media.graphassets.com/Ql2hDpJhQsaBT3inNuZ4',
		title: 'Redux full course',
		lessonCount: 39,
		totalHour: 8.2,
		level: 'Beginner',
		price: 20,
		reviewAverage: 4.9,
		reviewCount: 120,
		author: {
			firstName: 'Shahriyor',
			lastName: 'Adhamov',
			avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
		},
	},
	{
		image: 'https://media.graphassets.com/mDcwhbguQpyM74jb18M5',
		title: 'NodeJS full course',
		lessonCount: 56,
		totalHour: 20.6,
		level: 'Beginner',
		price: 20,
		reviewAverage: 5,
		reviewCount: 250,
		author: {
			firstName: 'Shahriyor',
			lastName: 'Adhamov',
			avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
		},
	},
];

export const booksCategory = [
	{
		label: 'filter_all_category',
		id: 'all-categories',
	},
	{
		label: 'filter_programming',
		id: 'programming',
	},
	{
		label: 'filter_design',
		id: 'design',
	},
	{
		label: 'filter_business',
		id: 'business',
	},
	{
		label: 'filter_history',
		id: 'history',
	},
	{
		label: 'filter_writing',
		id: 'writing',
	},
	{
		label: 'filter_lifestyle',
		id: 'lifestyle',
	},
];