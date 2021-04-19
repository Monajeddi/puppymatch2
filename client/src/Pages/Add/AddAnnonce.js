import React, { useState, useEffect }  from 'react';
import {Form, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { addAnnonce } from '../../JS/actions/annonce';
import './add.css'

const AddAnnonce = ({ history }) => {

    const annonceReducer = useSelector(state => state.annonceReducer.annonce)
    const user = useSelector((state) => state.userReducer.user);
    const isEdit = useSelector(state => state.annonceReducer.isEdit)

    const [annonce, setAnnonce] = useState({nom:"", race:"", age:0, sexe:"", vaccins:"",localisation:"", posterId: user._id})

    const dispatch = useDispatch()

     // handlechange
     const handleChange = (e) => {
        setAnnonce({ ...annonce, [e.target.name]: e.target.value })
    }

    // handleAdd function
    const handleAdd = () => {
        dispatch(addAnnonce(annonce))
    }


    return (
        
        <Form className="formulaire">
             <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Image" />
  </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text" placeholder="Nom"
          name="nom"
          value={annonce.nom}
          onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Race</Form.Label>
          <Form.Control as="select"
          name="race"
          value={annonce.race}
          onChange={handleChange}>
            <option> </option>
            <option>Labrador</option>
            <option>Toy Poodle</option>
            <option>Golden Retriever</option>
            <option>Berger Allemand</option>
            <option>Rottweiler</option>
            <option>Bichon Maltais</option>
            <option>Chow-Chow</option>
            <option>Jack Russell</option>
            <option>Siberian Husky</option>
            <option>Dobermann</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="Age" 
          name="age"
          value={annonce.age}
          onChange={handleChange}/>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Sexe</Form.Label>
          <Form.Control as="select"
          name="sexe"
          value={annonce.sexe}
          onChange={handleChange}>
           <option> </option>
            <option>Male</option>
            <option>Femelle</option> 
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Poils</Form.Label>
          <Form.Control as="select"
          name="poil"
          value={annonce.poil}
          onChange={handleChange}>
            <option> </option>
            <option>Court</option>
            <option>Moyen</option> 
            <option>Long</option> 
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Vaccins</Form.Label>
          <Form.Control as="select"
          name="vaccins"
          value={annonce.vaccins}
          onChange={handleChange}>
            <option> </option>
            <option>Oui</option>
            <option>Non</option> 
          </Form.Control>
        </Form.Group>
        

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} 
          name="description"
          value={annonce.description}
          onChange={handleChange}/>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Localisation</Form.Label>
          <Form.Control as="textarea" rows={1}
           name="localisation"
           value={annonce.localisation}
           onChange={handleChange}/>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Contact</Form.Label>
          <Form.Control type="number" placeholder="Contact"
           name="contact"
           value={annonce.contact}
           onChange={handleChange}/>
        </Form.Group>

        {isEdit? 
        <Button variant="light" type="submit">
        Modifier
      </Button>
      :
      <Button variant="light" type="submit"
      onClick={() => { handleAdd(); history.push("/profil") }}
      >
       Ajouter
      </Button>
      }

      </Form>
        
    )
}

export default AddAnnonce
