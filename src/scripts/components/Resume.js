import DataStore from 'flux/stores/DataStore.js';
//import { Document, Page } from 'react-pdf';
import { Document, Page } from 'react-pdf/build/entry.webpack';
import './Resume.css';

class Resume extends React.Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }
    onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages });
    }
    
    render() {
        let pageData = DataStore.getPageBySlug('resume');
        console.log(DataStore.getMediaByParentId(pageData.id));
        
        const { pageNumber, numPages } = this.state;
   
        return (
            <div>
                <div className="download" ><a href={DataStore.getMediaByParentId(pageData.id).source_url} download="resume.pdf" target="_blank">DOWNLOAD</a></div>
                <div className="resumeBody">
                    <Document
                        file={DataStore.getMediaByParentId(pageData.id).source_url}
                        onLoadSuccess={this.onDocumentLoad}
                    >
                        <Page pageNumber={pageNumber} scale={1.25}/>
                    </Document>
                    
                </div>
            </div>    
        );
    }
}

export default Resume;
