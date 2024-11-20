
import Banner from './Banner';
import AdvantureExp from './AdvantureExp';
import PageTitle from './PageTitle';

const Home = () => {
    return (
        <div>
            <PageTitle title={'Montora | Home'}></PageTitle>
            <Banner></Banner>
            <AdvantureExp></AdvantureExp>
        </div>
    );
};

export default Home;