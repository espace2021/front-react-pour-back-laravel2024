
const HeaderCard = ({ initialArticles, scategories, setArticles }) => {

  const handleFilter = (scatId) => { 
    if (scatId === "all") {
      setArticles(initialArticles); 
    } else {
      setArticles(initialArticles.filter(el => el.scategories && el.scategorieID === parseInt(scatId)));
    }
  };

  return (
    <div>
      <select className="form-select" size="3" aria-label="size 3 select example" onChange={(e) => handleFilter(e.target.value)}>
        <option value="all">All Products</option>
        {scategories && scategories.map((scat) => (
          <option key={scat.id} value={scat.id}>
            {scat.nomscategorie}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HeaderCard;
