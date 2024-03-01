import {
	Avatar,
	Box,
	Flex,
	Heading,
	Icon,
	Stack,
	Text,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { BsPlayCircle } from 'react-icons/bs';
import { FaStar, FaUserGraduate } from 'react-icons/fa';

const Mentor = () => {
	const { t } = useTranslation();

	return (
		<>
			<Heading mt={5}>{t('mentor', { ns: 'courses' })}</Heading>
			<Flex mt={5} gap={5} align={'center'}>
				<Avatar
					display={{ base: 'none', md: 'block' }}
					src='https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs'
					size={'2xl'}
				/>
				<Box>
					<Text fontWeight={'bold'} fontSize={'20px'}>
						Shahriyor Adhamov
					</Text>
					<Text>Software Engineer & Coding instructor</Text>
					<Stack
						direction={{ base: 'column', md: 'row' }}
						mt={2}
						gap={2}
						align={{ base: 'flex-start', md: 'center' }}
					>
						<Flex align={'center'} gap={1}>
							<Icon as={FaStar} color={'facebook.500'} />
							<Text as={'span'}>4.8 Reyting</Text>
						</Flex>
						<Flex align={'center'} gap={1}>
							<Icon as={FaUserGraduate} color={'facebook.500'} />
							<Text as={'span'}>+5,000 O'quvchi</Text>
						</Flex>
						<Flex align={'center'} gap={1}>
							<Icon as={BsPlayCircle} color={'facebook.500'} />
							<Text as={'span'}>10 Kurslar</Text>
						</Flex>
					</Stack>
				</Box>
			</Flex>
			<Text mt={4}>
				<Box as={'span'} fontWeight={'bold'} color={'facebook.500'}>
					Shahriyor Adhamov
				</Box>{' '}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto sapiente illo quod impedit? Quibusdam fugiat facilis neque veritatis molestiae perspiciatis consequatur laboriosam quis possimus! Doloremque quo reiciendis libero suscipit enim.
			</Text>
			<Text mt={4}>
				<Box as={'span'} fontWeight={'bold'} color={'facebook.500'}>
					Stack
				</Box>{' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius mollitia deleniti sunt eveniet facilis reiciendis vel sapiente? Ipsam nemo quo blanditiis. Quae est beatae quam voluptatibus, accusamus perspiciatis minus qui.
			</Text>
		</>
	);
};
export default Mentor;