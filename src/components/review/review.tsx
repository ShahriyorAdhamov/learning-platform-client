import {
	Avatar,
	Box,
	Button,
	Center,
	Flex,
	Heading,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { formatDistance } from 'date-fns';
import { useTranslation } from 'react-i18next';
import ReactStars from 'react-stars';


const Review = () => {
	const { t } = useTranslation();

	return (
		<>
			<Heading mt={10}>{t('review', { ns: 'courses' })}</Heading>
			{data.map((item, idx) => (
				<Flex key={idx} gap={4} mt={6} borderBottomWidth={'1px'} pb={2}>
					<Avatar
						bg={useColorModeValue('gray.200', 'gray.600')}
						display={{ base: 'none', md: 'block' }}
						size={'md'}
					/>
					<Box>
						<Flex align={'center'} gap={2} mt={1}>
							<Text fontWeight={'bold'}>{item.name}</Text>
							<Text>
								{formatDistance(new Date('20:20:2023'), new Date())} 
								{t('ago', { ns: 'courses' })}
							</Text>
						</Flex>
						<ReactStars edit={false} value={Number(item.rating)} />
						<Text mt={2}>{item.summary}</Text>
					</Box>
				</Flex>
			))}
			<Center mt={5}>
				{data.length >= 5 && (
					<Button
						size={'sm'}
						colorScheme={'facebook'}
						variant={'outline'}
						fontWeight={'bold'}
					>
						{t('more', { ns: 'courses' })}...
					</Button>
				)}
			</Center>
		</>
	);
};

export default Review;

const data = [
	{
		name: 'Aziz Rohimov',
		rating: '5',
		summary: 'rahmat',
	},
	{
		name: 'Axmadjon Mustafayev',
		rating: '5',
		summary: 'kurs ajoyib rahmat',
	},

	{
		name: 'Nurillo Mahmudjonov ',
		rating: '5',
		summary: "aka katta rahmat ancha narsa o'rgandim kurdan",
	},
	{
		name: "Aziz faxriddin o'g'li",
		rating: '5',
		summary: 'rahmat',
	},
	{
		name: 'Shahriyor Adhamov',
		rating: '5',
		summary: 'cool',
	},
];