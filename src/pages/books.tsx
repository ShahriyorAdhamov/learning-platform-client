import { withLayout } from 'src/layouts/layout';
import BooksPageComponent from 'src/page-components/books-page-component/books-page-component';


const Books = () => {
	return <BooksPageComponent />;
};

export default withLayout(Books);