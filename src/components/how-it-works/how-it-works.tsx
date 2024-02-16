import { Flex, Icon, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { Fragment } from 'react';
import { FinishRightIcon, OnlineCourseIcon, OnlineLearningIcon, OnlineStudentIcon, RightLineIcon } from '../../icons';
import SectionTitle from '../section-title/section-title';
import { useTranslation } from 'react-i18next';


const HowItWorks = () => {
	const backgroundColor = useColorModeValue('gray.200', 'gray.700');
	const { t } = useTranslation();

	return (
		<>
			<SectionTitle
				textAlign={'center'}
				title={t('how_it_works_title', { ns: 'home' })}
				subtitle={t('how_it_works_description', { ns: 'home' })}
			/>

			<SimpleGrid mt={10} columns={5} spacing={10} alignItems={'center'}>
				{data.map((item, idx) => {
					const odd = idx % 2;

					return (
						<Fragment key={idx}>
							{!odd ? (
								<Stack justify={'center'} align={'center'}>
									<Flex
										w={100}
										h={100}
										justify={'center'}
										align={'center'}
										backgroundColor={backgroundColor}
										borderRadius={'full'}
									>
										{item.icon}
									</Flex>
									{/* <Text textAlign={'center'}>{t(item.title, { ns: 'home' })}</Text> */}
								</Stack>
							) : (
								<Stack justify={'center'}>
									{item.icon}
								</Stack>
							)}
						</Fragment>
					);
				})}
			</SimpleGrid>
		</>
	);
};

export default HowItWorks;

const data = [
	{ title: 'Signup Platform', icon: <OnlineCourseIcon /> },
	{ icon: <RightLineIcon /> },
	{ title: 'Find Courses', icon: <OnlineLearningIcon /> },
	{ icon: <FinishRightIcon /> },
	{ title: 'Learn Relaxing', icon: <OnlineStudentIcon /> },
];
