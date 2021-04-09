import { UPLOAD_PICTURE} from "../actionTypes/user";



const initialState = {
    annonce: [],
    
  };

  const annonceReducer=(state=initialState,{type,payload})=>{
      switch (type) {
        case UPLOAD_PICTURE:
            return {
              ...state,
              picture: payload.picture,
            };

          default:
              return state;
      }
  };

export default annonceReducer;