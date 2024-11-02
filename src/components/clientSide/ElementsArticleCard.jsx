import './Style.css';


const ElementsArticleCard= (props)=> {

 
    return ( 
     <>

<div className="row">
       {props.articles && props.articles.map((product) => (
         
<article className="col-sm-3" key={product.id}>
<div className="card">
<img
 src={product.imageart}
 className="card-img-top p-5"
 alt={product.designation}
/>
</div>
<div className="text-center">
<div>{product.designation.substr(0,20)} ... </div>
<div>Prix : {product.prix} TND </div>
</div>
<div className="text-center">
<button
disabled={product.qtestock <= 1}
className="btn btn-warning"
>
Add to Cart
</button>

</div>
</article>
        
       ))}
     </div>
     </>

  );
}

export default ElementsArticleCard;
