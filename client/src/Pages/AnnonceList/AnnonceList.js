import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getAnnonces} from '../../JS/actions/annonce';
import AnnonceCard from '../AnnonceCards/AnnonceCard';

import './list.css'

const AnnonceList = () => {
    const annonces = useSelector(state => state.annonceReducer.annonces)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAnnonces())
    }, [dispatch]);
    return (
        <div>
            <div className="annonce-content" >
                <div className="annonce-list">
                    {annonces.map(annonce =>
                        <AnnonceCard annonce={annonce} key={annonce._id} />
                    )}
            </div>
             
                </div>
        </div>
    )
}

export default AnnonceList
