import axios from 'axios';
import {useEffect,useState} from 'react';
import ElementsArticle from './ElementsArticleTable';
import { Link } from 'react-router-dom';
import {Button} from '@mui/material';

function ListArticles() {
    const[articles,setArticles]=useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/articles")
        .then((response)=>{setArticles(response.data)});
       }, []);
    return ( 
        <>
        
          <Button variant="contained" style={{ backgroundColor: 'black' }}>
          <Link to="/articlesa/add" style={{ color: 'white', textDecoration : 'none'}}>
          <i className="fa-solid fa-plus-square"></i> Nouveau
          </Link>
          </Button>
       
        <h2>Liste des articles </h2>

        <ElementsArticle articles={articles} setArticles={setArticles}/>

        </>
     );
}

export default ListArticles;
