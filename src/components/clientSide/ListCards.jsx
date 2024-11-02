import axios from 'axios';
import { useEffect, useState } from 'react';
import ElementArticleCard from './ElementsArticleCard';
import HeaderCard from './HeaderCard';

function ListArticlesCard() {
  const [articles, setArticles] = useState([]);
  const [scategories, setScategories] = useState([]);
  const [initialArticles, setInitialArticles] = useState([]);

const fetchArticles=()=>{
  axios.get('http://localhost:8000/api/articles')
  .then((res) => {
    const data = res.data;
    setArticles(data);
    setInitialArticles(data);
  })
  .catch((error) => {
    console.error(error);
  });
 
}

const fetchScategories=()=>{
  axios.get('http://localhost:8000/api/scategories')
  .then((res) => {
    const data = res.data;
    setScategories(data);
    
  })
  .catch((error) => {
    console.error(error);
  });
}

  useEffect(() => {
    fetchArticles();
    fetchScategories();
  }, []);

   return (
    <div className="container">
          <HeaderCard scategories={scategories} setArticles={setArticles} initialArticles={initialArticles} /> 
          <ElementArticleCard articles={articles} />
    </div>
  );
}

export default ListArticlesCard;
