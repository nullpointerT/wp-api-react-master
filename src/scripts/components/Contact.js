import DataStore from 'flux/stores/DataStore.js'
import './Contact.css';
import Instgram from '../../imgs/instagram.svg';
import LinkedIn from '../../imgs/linkedin.svg';
import Facebook from '../../imgs/facebook.svg';
import Gmail from '../../imgs/gmail.svg';
class Contact extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug('contact');

        return (
            <div className="contactInfo">
                <ul className="container">
                    <a className="item" href="mailto:wenqiantao90@gmail.com"><li className="item"><img src={Gmail}></img></li></a>
                    <a className="item" target="_blank" href="https://www.linkedin.com/in/wenqian-tao-329474b0/"><li><img src={LinkedIn}></img></li></a>
                    <a className="item" target="_blank" href="https://www.instagram.com/null_pointer123/"><li className="item"><img src={Instgram}></img></li></a>
                    <a className="item" target="_blank" href="https://www.facebook.com/lovepeach320"><li className="item"><img src={Facebook}></img></li></a>
                    <li className="item douban"><svg xmlns="http://www.w3.org/2000/svg" height="59px" 
                    viewBox="0 0 512 512" 
                    width="50px">
                    <path fill="white" d="M95.6 90.7h320.9v39.6H95.6V90.7zM256.1 311.8h-67.1 -1.8 -0.6l36.3 69.6 0.3 0.3h33 33l0.3-0.6 36.3-69.3H256.1zM349 195.7H163v78h186V195.7zM333 381.7h91.9v39.9H256.1 87.1v-39.9h91.9l-36.6-69.9h-26.9V157.6h140.6 140.6v154.2h-26.6 -0.6L333 381.7zM25.7 512h460.9c13.9 0 25.4-11.5 25.4-25.4V25.7C512 11.5 500.5 0 486.6 0H25.7C11.5 0 0 11.5 0 25.7v460.9C0 500.5 11.5 512 25.7 512L25.7 512z" fill="#000"/></svg>
                    </li>
                </ul>
                {/* <h1>{pageData.title.rendered}</h1> */}

                <div dangerouslySetInnerHTML={{__html: pageData.excerpt.rendered}} />
                <div>{pageData.acf.text}</div>
            </div>
        );
    }
}

export default Contact;
