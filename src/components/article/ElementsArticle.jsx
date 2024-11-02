const ElementsArticle = ({articles}) => {

     return (
    <div className='container'>
       <table className="table table-dark table-striped-columns">
    <thead>
      <tr>
      <th>Désignation</th>
      <th>Prix</th>
      <th>Image</th>
      </tr>
    </thead>
    <tbody>
 {
 articles && articles.length >0 && articles.map((art)=>{
    return <tr key={art.id}>
     <td> {art.designation} </td>
     <td>  {art.prix} </td>
     <td>  <img src={art.imageart} alt="" width="80" height="80"/></td>
    </tr>
  })
 }
 </tbody>
 </table>
    </div>
  )
}

export default ElementsArticle
