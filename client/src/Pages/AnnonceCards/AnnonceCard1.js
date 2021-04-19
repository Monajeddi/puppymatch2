import React from 'react'
import {Card, Button} from 'react-bootstrap';

import { Link } from "react-router-dom";
import './cards.css'

const AnnonceCard1 = ({annonce}) => {
    return (
        
            
            <div className="annonce-card">
             


<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.eleveurs-online.com/data/race/331.300.webp" />
  <Card.Body>
    <Card.Title>{annonce.nom}</Card.Title>
    <Card.Text>
    {annonce.race}
    </Card.Text>
    
        {/* <a href className="btn btn-outline-danger btn-sm"><i className="far fa-heart" /></a>
    */}
    
  </Card.Body>
</Card>

        </div>
    )
}

export default AnnonceCard1
