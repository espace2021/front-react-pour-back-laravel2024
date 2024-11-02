import React, { useState, useEffect } from 'react';
import { fetcharticles } from './services/articleservice';

const Liste = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // État pour gérer le chargement

  const fetchProducts = async () => {
    try {
      const res = await fetcharticles();
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // Arrêter l'état de chargement une fois les données récupérées
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) {
    return <div>Loading Data please wait...</div>; // Message de chargement
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Référence</th>
            <th>Désignation</th>
            <th>Marque</th>
            <th>Quantité</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id}>
              <td><img src={article.imageart} width={80} height={80} alt="Article" /></td>
              <td>{article.reference}</td>
              <td>{article.designation}</td>
              <td>{article.marque}</td>
              <td>{article.qtestock}</td>
              <td>{article.prix}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Liste;
