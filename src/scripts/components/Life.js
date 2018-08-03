import DataStore from 'flux/stores/DataStore.js';
import { Document, Page } from 'react-pdf/build/entry.webpack';
import './Life.css';
class Life extends React.Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }
    onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages });
    }
    
    render() {
        let pageData = DataStore.getPageBySlug('life');
        let photosList = DataStore.getMediaListByParentId(pageData.id);
        console.log(photosList);
        let photos = (
            <div className="photos">
                {photosList.map((p,index) => {
                    return <img src={p.source_url} key={index}/>
                })}
            </div>
        );
        //console.log(DataStore.getMediaListByParentId(pageData.id));
        
        const { pageNumber, numPages } = this.state;
   
        return (
            <div>
                {/* <div className="download" ><a href={DataStore.getMediaByParentId(pageData.id).source_url} download="resume.pdf" target="_blank">DOWNLOAD</a></div> */}
                
                {photos}    
                
            </div>    
        );
    }
}

export default Life;