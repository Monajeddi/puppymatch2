import React, {useState , useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {getAnnonces} from '../../JS/actions/annonce';


const Description = ({match}) => {
    const [annonce, setAnnonce] = useState({});
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAnnonces.find(annonce => annonce._id === Number(match.params._id)))
    }, [dispatch,match.params._id]);

    return (
        <div>
            <h2 className="title">Descriptions</h2>
              <h4>{annonce.nom}</h4> 
              <p>{annonce.race}</p>
              <p>{annonce.age}</p>
            
            <br/>
            <Link to="/annonces">
            <Button variant="secondary">Go back</Button>
            </Link>
        </div>
    )
}

export default Description
