import alt          from 'flux/alt/alt.js';
import DataActions  from 'flux/actions/DataActions.js';

class DataStore {
    constructor() {
        this.data = {};

        this.bindListeners({
            // Listen to the getSuccess() in DataActions.js
            handleSuccess: DataActions.GET_SUCCESS
        });

        this.exportPublicMethods({
            getAll:         this.getAll,
            getAllPages:    this.getAllPages,
            getAllPosts:    this.getAllPosts,
            getPageBySlug:  this.getPageBySlug,
            getMediaByParentId:  this.getMediaByParentId,
            getMediaListByParentId: this.getMediaListByParentId
        });
    }

    // Store data returned by getSuccess() in DataActions.js
    handleSuccess(data) {
        this.setState({ data });
    }

    // Returns all pages and posts
    getAll() { 
        return this.getState().data; 
    }

    // Returns all Pages
    getAllPages() { 
        return this.getState().data.pages; 
    }

    // Returns all Posts
    getAllPosts() { 
        return this.getState().data.posts; 
    }

    // Returns a Page by provided slug
    getPageBySlug(slug){
        const pages = this.getState().data.pages;
        return pages[Object.keys(pages).find((page, i) => {
            return pages[page].slug === slug;
        })] || {};
    }

    getMediaByParentId(id) {
        const media = this.getState().data.media;
        return media[Object.keys(media).find((m, i) => {
            return media[m].post === id;
        })] || {};
    }
    getMediaListByParentId(id) {
        //console.log(id);
        const media = this.getState().data.media;
        //console.log(media);
        //console.log(media.filter(m => m.post === id));
        return media.filter(m => m.post === id) || {};
    }

}

export default alt.createStore(DataStore, 'DataStore');