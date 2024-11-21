
import Banner from './Banner';
import AdvantureExp from './AdvantureExp';
import PageTitle from './PageTitle';
import TopService from './TopService';

const Home = () => {
    return (
        <div>
            <PageTitle title={'Montora | Home'}></PageTitle>
            <Banner></Banner>
            <AdvantureExp></AdvantureExp>
            <TopService></TopService>
        </div>
    );
};

export default Home;