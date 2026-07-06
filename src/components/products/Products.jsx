
import { CircularProgress, Typography } from '@mui/material';
import useProducts from './../../hooks/useProducts';
import { Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { Link } from 'react-router';

export default function Products() {
    const {data, isLoading, isError, error} = useProducts();
    console.log(data);
    if(isLoading) return <CircularProgress/>
    if(isError) return <Typography color='red'>{error}</Typography>
  return (
    <>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
         Products
        </Typography>
   <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
  {data.response.data.map((product) => (
    <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: "none" }}>
    <Card
      key={product.id}
      sx={{
        width: 250,
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="160"
        image={product.image || "https://via.placeholder.com/250x160"}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description || "وصف قصير للمنتج"}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ mt: 1, color: "#1976d2", fontWeight: "bold" }}
        >
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ borderRadius: "8px" }}
        >
          أضف للسلة
        </Button>
      </CardActions>
    </Card>
    </Link>
  ))}
</div>


    </>
  )
}
