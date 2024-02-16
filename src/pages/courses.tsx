import { withLayout } from 'src/layouts/layout';
import CoursesPageComponent from 'src/page-components/courses-page-component/courses-page-component';


const Courses = () => {
	return <CoursesPageComponent />;
};

export default withLayout(Courses);