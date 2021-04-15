import React from 'react';
import { Link } from 'react-router-dom';
import './admin.css'

const ListeAnnonce = () => {
    return (
        <div>
               <div className="contaiiner mt-4">
  <div className="row">
    <div className="col-lg-3 my-lg-0 my-md-1">
      <div id="sidebar" className="bg-purple">
        <div className="h4 text-white">Dashboard</div>
        <ul>
            <Link to="/admin">
                <li > <a href="#" className="text-decoration-none d-flex align-items-start">
              <div className="far fa-user pt-2 me-3" />
              <div className="d-flex flex-column">
                <div className="link"> Profil</div>
                <div className="link-desc">Modifier les informations du profil</div>
              </div>
            </a> </li>
            </Link>
          
            <Link to="/listeannonce">
            <li className="active"> <a href="#" className="text-decoration-none d-flex align-items-start">
              <div className="fas fa-paw pt-2 me-3" />
              <div className="d-flex flex-column">
                <div className="link">Liste des annonces</div>
                <div className="link-desc">Voir &amp; Contrôler les annonces</div>
              </div>
            </a> </li>
            </Link>
          
          <Link to="/listeutilisateurs">
          <li> <a href="#" className="text-decoration-none d-flex align-items-start">
              <div className="fas fa-users pt-2 me-3" />
              <div className="d-flex flex-column">
                <div className="link">Liste des utilisateurs</div>
                <div className="link-desc">Voir la liste des utilisateurs</div>
              </div>
            </a> </li>
          </Link>
          
          
          
        </ul>
      </div>
    </div>

    <div className="col-lg-9 my-lg-0 my-1">
      <div id="main-content" className="bg-white border">
        <div className="d-flex flex-column">
          <div className="h7">Hello Jhon,</div>
          <div>Logged in as: someone@gmail.com</div>
        </div>

        <div className="d-flex my-4 flex-wrap">

          
        </div>

        <div className="text-uppercase">Annonces</div>
        <div className="order my-3 bg-light">
          <div className="row">
            <div className="col-lg-4">
              <div className="d-flex flex-column justify-content-between order-summary">
                <div className="d-flex align-items-center">
                  <div className="text-uppercase">Order #fur10001</div>
                  
                </div>
                <div className="fs-8">Products #03</div>
                <i class="far fa-trash-alt"></i>
                
              </div>
            </div>
            
             
                
                
            
          </div>
        </div>



       
        
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default ListeAnnonce
