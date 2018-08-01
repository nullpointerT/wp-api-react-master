import DataStore from 'flux/stores/DataStore.js';
import './Home.css';

class Home extends React.Component {
    render() {
        //let pageData = DataStore.getPageBySlug('sample-page');
      

        return (
            <div className="home">
                
                <h2>Wenqian's Space</h2>
                {/* <h1>{pageData.title.rendered}</h1> */}

                {/* <div dangerouslySetInnerHTML={{__html: pageData.excerpt.rendered}} /> */}
                {/* <div>{pageData.acf.text}</div> */}
            </div>
        );
    }
}

export default Home;
