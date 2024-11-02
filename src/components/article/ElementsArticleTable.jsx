import { useMemo } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ElementsArticle = ({articles,setArticles})  => {

    const navigate=useNavigate();

    const columns = useMemo(
        () => [
            {
                accessorKey: 'imageart', 
                header: 'Image',
                Cell: ({ cell }) => (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                        }}
                    >
                        <img
                            alt=""
                            height={60}
                            src={cell.getValue()}
                            loading="lazy"
                            style={{ borderRadius: '20%' }}
                        /></Box>),
            },
            {
                accessorKey: 'reference', 
                header: 'Référence',
                size: 100,
            },
            {
                accessorKey: 'designation',
                header: 'Désignation',
                size: 100,
            },
            {
                accessorKey: 'marque', 
                header: 'Marque',
                size: 100,
            },
            {
                accessorKey: 'prix',
                header: 'Prix',
                size: 100,
            },
            {
                accessorKey: 'qtestock',
                header: 'Stock',
                size: 100,
            },
            {
                accessorKey: '_id',
                header: 'actions',
                size: 10,
                Cell: ({ cell, row }) => (
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }}>
                        <Button
                            onClick={() => {navigate(`/articlea/edit/${cell.row.original.id}`)}}
                            size="small"
                            variant="contained"
                            color="success"
                           >
                            <i className="fa-solid fa-pen-to-square"></i>
                        </Button>
                        <Button
                            onClick={() => {deleteProd(cell.row.original.id)}}
                            size="small"
                            variant="contained"
                            color="error"
                           >
                            <i className="fa fa-trash"></i>
                        </Button>
                    </div>
                )
                
            },
        ],
        [articles],
    );

    const table = useMaterialReactTable({
        columns,
        data : articles
      });

      const deleteProd = async (id) => {
        if (!window.confirm("Are you sure you want to delete")) {
          return;
        }
    
        axios.delete(`http://localhost:8000/api/articles/${id}`)
          .then(() => {
            console.log('successfully deleted!')
            setArticles(prevArticles => prevArticles.filter((article) => article.id !== id));
          }).catch((error) => {
            console.log(error)
          })
    
      }

  return (
    <div className='container'>
     {articles && articles.length > 0 && <MaterialReactTable table={table} /> } 
    </div>
  )
}

export default ElementsArticle
