import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./insertarticle.css"
import { useParams,useNavigate } from 'react-router-dom';

const Editarticle = () => {

  const navigate=useNavigate();
  const { id } = useParams();
console.log(id)

  const[article,setArticle]=useState({})
  const[scategories,setScategories]=useState([])

  const loadscategories=async()=>{
    axios.get("http://localhost:8000/api/scategories")
    .then((response)=>{console.log(response.data) ;setScategories(response.data)})
   .catch ((error)=> {
    console.log(error);
  })
}

  const loadarticle=async()=>{
    axios.get(`http://localhost:8000/api/articles/${id}`)
    .then((response)=>{console.log(response.data) ;setArticle(response.data)})
   .catch ((error)=> {
    console.log(error);
  })
}

  useEffect(() => {
    
    loadscategories() 
    loadarticle() 
  }, [])

  const handleSubmit = async(event) => {
    event.preventDefault();
   //faire le put dans la BD
axios.put(`http://localhost:8000/api/articles/${id}`,article)
.then(res => {  
console.log(res);
navigate("/articles")
  })   
.catch(error=>{
    console.log(error)
    alert("Erreur ! Insertion non effectuée")
    })

  };

  return (
    <div className="form-container">
     
   
      <form  className="article-form">
  
 <h2>Modifier Article</h2>


        <div className="form-grid">
        
          <div className="form-group">
            <label htmlFor="title">Référence</label>
            <input
              type="text"
              id="reference"
              value={article.reference}
              onChange={(e) => setArticle({...article,reference:e.target.value})}
              className="form-input"
              placeholder="Entrez référence article"
            />
          
          </div>
          <div className="form-group">
            <label htmlFor="description">Désignation</label>
            <input
            type="text"
              id="designation"
              value={article.designation}
              onChange={(e) => setArticle({...article,designation:e.target.value})}
              className="form-input"
              placeholder="Entrez la désignation article"
            />
          </div>
          <div className="form-group">
            <label htmlFor="marque">Marque</label>
            <input
              type="text"
              id="marque"
              value={article.marque}
              onChange={(e) => setArticle({...article,marque:e.target.value})}
              className="form-input"
              placeholder="Entrez marque"
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantite">Quantité</label>
            <input
              type="number"
              id="qtestock"
              value={article.qtestock}
              onChange={(e) => setArticle({...article,qtestock:e.target.value})}
              className="form-input"
              placeholder="Entrez quantité stock"
            />
          </div>
          <div className="form-group">
            <label htmlFor="prix">Prix</label>
            <input
              type="number"
              required
              id="prix"
              value={article.prix}
              onChange={(e) => setArticle({...article,prix:e.target.value})}
              className="form-input"
              placeholder="Entrez Prix"
            />
          </div>

          <div className="form-group">
            <label htmlFor="prix">S/Catégorie</label>
            <select
                id="category"
                className="form-control"
                value={article.scategorieID}
                onChange={(e) => setArticle({...article,scategorieID:e.target.value})}
              >
                {scategories.map((scat,index)=>
                <option key={index} value={scat.id}>{scat.nomscategorie}</option>
              )}
               </select>
            
          </div>
          <div className="form-group">
            <label htmlFor="prix">Image</label>
            <input
              type="text"
              required
              id="imageart"
              value={article.imageart}
              onChange={(e) => setArticle({...article,imageart:e.target.value})}
              className="form-input"
              placeholder="Image"
            />
            {article.imageart? <img src={article.imageart} alt="image" width="70"/>:null}
          </div>
        </div>
        
 
        <button type="button" className="form-submit-button" onClick={(e)=>handleSubmit(e)}>Enregistrer</button>
 
  
      </form>

    </div>
  );
}

export default Editarticle
