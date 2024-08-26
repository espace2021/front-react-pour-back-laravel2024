import React,{useState,useEffect} from 'react'
import {fetchcategories} from './services/categorieservice'

const Liste = () => {

const [categories, setCategories] = useState([]);

    const fetchCateg = async () => {
        try {
          const res = await fetchcategories()
          setCategories(res.data);
       
        } catch (error) {
          console.log(error);
        }
      };
     useEffect(() => {
       
      fetchCateg();
      }, []);

  return (
    <div>
         <table >
    
    <thead>
    <tr>
        <th>Image</th>
        <th>Nom</th>
    </tr>
    </thead>
    <tbody>
      {
       categories.map(categorie => <tr key={categorie.id}>
                <td><img src ={categorie.imagecategorie} width={80} height={80} /></td>
                <td>{categorie.nomcategorie}</td>
               </tr> )
      }
      </tbody>
      </table>
    </div>
  )
}

export default Liste
