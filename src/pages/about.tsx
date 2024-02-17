import { withLayout } from 'src/layouts/layout';
import { AboutPageComponent } from '../page-components';

const AboutPage = () => {
	return <AboutPageComponent />;
};

export default withLayout(AboutPage);