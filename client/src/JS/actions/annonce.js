import {UPLOAD_PICTURE,  UPLOAD_ERROR } from '../actionTypes/user';
import axios from 'axios';

// upload picture 
export const uploadPicture = (data, id) => {
    return (dispatch) => {
      return axios
        .post("/api/annonces/upload", data)
        .then((res) => {
          if (res.data.errors) {
            dispatch({ type: UPLOAD_ERROR, payload: res.data.errors });
          } else {
            return axios
              .get(`/api/annonces/${id}`)
              .then((res) => {
                dispatch({ type: UPLOAD_PICTURE, payload: res.data.picture });
              });
          }
        })
        .catch((err) => console.log(err));
    };
  };