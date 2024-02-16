import { Icon } from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import { sponsorshipCarousel } from '../../config/carousel';
import { trustedCompany } from '../../config/constants';
import SectionTitle from '../section-title/section-title';
import { useTranslation } from 'react-i18next';

const Sponsorship = () => {
	const { t } = useTranslation();

	return (
		<>
			<SectionTitle title='' subtitle={t('sponsor_title', { ns: 'home' })} textAlign={'center'} mb={5} />
			<Carousel responsive={sponsorshipCarousel} arrows={false} showDots={false} infinite autoPlay={true} autoPlaySpeed={1000}>
				{trustedCompany.map((item, idx) => (
					<Icon key={idx} as={item} fontSize={50} />
				))}
			</Carousel>
		</>
	);
};

export default Sponsorship;