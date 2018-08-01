import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js';
import Clock from './Clock/Clock.js';
import './Header.css';
import homeLogo from '../../imgs/open-iconic-master/svg/home.svg';


class Header extends React.Component {   
    
    render() {
        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]); // Sort pages by order
        
        return (
            <div className="header">
                <div className="row">
                <span className="homeLink tooltip">
                    <Link to="/" style={{marginRight: '20px'}}></Link>
                    <div className="tooltiptext">home</div> 
                </span>

                {allPages.map((page) => {
                    if(page.slug != 'home') {
                        const newName = page.slug + " tooltip";
                        
                       return(
                           <span className={newName} key={page.id} >
                            <Link 
                                
                                to={`/${page.slug}`} 
                                style={{marginRight: '20px'}}
                            >
                                
                            </Link>
                            <div className="tooltiptext">{page.title.rendered}</div> 
                            </span>
                        )                     
                    }
                })}
                </div>
            </div>
        );
    }
}

export default Header;