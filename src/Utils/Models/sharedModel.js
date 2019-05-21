import theme from '../theme';
import { productApi } from '../Constants/Api';
import axios from "axios";

export default {
  state: {
    loading:{
      progress:0,
      total:0
  },
  searchTerm:"",
  Language: 'En',
  Theme: theme['Main'],
}, 
  reducers: {
    // handle state changes with pure functions
    setLoadingProgress(state, payload) {
      // console.log(payload)
      return {
        ...state,
        loading: payload
      }
    },
    setSearchTerm(state, payload) {

      return {
        ...state,
        searchTerm: payload.target.value,
      }
    },
    resetSearchTerm(state, payload) {
      return {
        ...state,
        searchTerm: "",
      }
    }
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async asyncSetLoadingProgress(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      this.setLoadingProgress(payload)
    },
    async uploadFileAsync({data,cb}, rootState) {
      console.log(data)

      const documentPath = await Promise.all(data.map(async file => {
        const signedUrl = await productApi.post('/upload-signed-url',{srcKey:file.srcKey,fileName:file.name,fileType:file.type})

        console.log('signedUrl',signedUrl)
         await axios.put(signedUrl.data.uploadURL,file,{
          headers: {
            'Content-Type': file.type
          }
        })

        return signedUrl.data.path
      }) )
      
      // console.log('file data',documentPath)
        cb(documentPath)
        // console.log(data)
      // return new Promise(resolve=>data);
    }
  })
}





