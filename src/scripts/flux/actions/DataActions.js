import axios from 'axios';
import alt   from 'flux/alt/alt.js';

class DataActions {

    constructor() {
        //const appUrl = 'http://andreypokrovskiy.com/projects/wp-api-react'; // Wordpress installation url
        //const appUrl = 'http://192.168.0.150:82/wordpress/';
        const appUrl = 'http://www.ie6.me/backend/';

        this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages`; // Endpoint for getting Wordpress Pages
        this.postsEndPoint = `${appUrl}/wp-json/wp/v2/posts`; // Endpoint for getting Wordpress Posts
        this.mediaEndPoint = `${appUrl}/wp-json/wp/v2/media`; // Endpoint for getting Wordpress Media
    }

    // Method for getting data from the provided end point url
    api(endPoint) {
        return new Promise((resolve, reject) => {
            axios.get(endPoint).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            }); 
        });     
    }

    // Method for getting Pages data
    getPages(cb){
        this.api(this.pagesEndPoint).then((response)=>{
            //console.log(response);
            this.getPosts(response, cb)
        });
        return true;
    }

    // Method for getting Posts data
    getPosts(pages, cb){
        this.api(this.postsEndPoint).then((response)=>{
            const posts     = response
            const payload   = { pages, posts };

            this.getMedia(payload, cb);
        });
        return true;
    }

    getMedia(prevPayload, cb) {
        this.api(this.mediaEndPoint).then((response)=>{
            const media     = response
            const payload   = {...prevPayload, media };

            this.getSuccess(payload); // Pass returned data to the store
            cb(payload); // This callback will be used for dynamic rout building
        });
        return true;
    }

    // This returnes an object with Pages and Posts data together
    // The Alt Store will listen for this method to fire and will store the returned data
    getSuccess(payload){
        return payload;
    }
}

export default alt.createActions(DataActions);