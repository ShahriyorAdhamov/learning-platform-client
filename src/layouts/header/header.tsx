import {
	Box,
	Button,
	Flex,
	HStack,
	Icon,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import { DarkLogo, LightLogo} from '../../icons';
import { BsFillMoonFill, BsFillSunFill, BsTranslate } from 'react-icons/bs';
import { MdOutlineContactSupport } from 'react-icons/md';
import { BiMenuAltLeft, BiUserCircle } from 'react-icons/bi';
import Link from 'next/link';
import { HeaderProps } from './header.props';
import { useTranslation } from 'react-i18next';
import { languages } from '../../config/constants';

const Header = ({ onToggle }: HeaderProps) => {
	const { toggleColorMode, colorMode } = useColorMode();
	const { t, i18n } = useTranslation();

	const onLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	return (
		<Box
			zIndex={1001}
			w={'full'}
			h={'10vh'}
			px={10}
			borderBottom={'1px'}
			pos={'fixed'}
			top={0}
			left={0}
			right={0}
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}
			borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
		>
			<Flex h={'full'} justify={'space-between'} align={'center'}>
				<HStack>
					<Icon as={BiMenuAltLeft} onClick={onToggle} w={6} h={6} cursor={'pointer'} />
					<Link href={'/'}>{colorMode === 'light' ? <DarkLogo /> : <LightLogo />}</Link>
				</HStack>
				<HStack>
					<IconButton aria-label='support' icon={<MdOutlineContactSupport />} colorScheme={'facebook'} variant={'ghost'} />
					<Menu placement='bottom'>
						<MenuButton as={Button} colorScheme={'facebook'} variant={'solid'} rightIcon={<BsTranslate/>}>{i18n.resolvedLanguage}</MenuButton>
						<MenuList>
							{
								languages.map((item) => (
									<MenuItem key={item.lng} icon=	{<item.icon/>} backgroundColor={i18n.resolvedLanguage === item.lng? 'facebook.500' : ''} onClick={() => onLanguage(item.lng)}>
										{item.nativeLng}
									</MenuItem>
								))
							}
						</MenuList>
					</Menu>
					<IconButton
						aria-label='color-mode'
						onClick={toggleColorMode}
						icon={colorMode == 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
						colorScheme={'facebook'}
						variant={'outline'}
					/>
					<Button rightIcon={<BiUserCircle />} colorScheme={'facebook'}>
					{t('login', {ns: 'layout'})}
					</Button>
				</HStack>
			</Flex>
		</Box>
	);
};

export default Header;