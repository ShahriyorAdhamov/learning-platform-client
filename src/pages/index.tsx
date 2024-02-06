import { withLayout } from '../layouts/layout';
import HomePageComponent from '../page-components/home-page-component/home-page-component';

const Home = () => {
	return <HomePageComponent />;
};

export default withLayout(Home);