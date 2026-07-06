
import { Typography, CircularProgress } from '@mui/material';
import useProductDetails from './../../hooks/userProductDetails';
import { useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { Rating } from '@mui/material';

export default function Product() {
     const { productId } = useParams();
    const {data, isLoading, isError, error} = useProductDetails(productId);
    console.log(data);
    if(isLoading) return <CircularProgress/>
    if (isError) return (
  <div>
    <Typography color="red">{error.message}</Typography>
    <pre>{JSON.stringify(error, null, 2)}</pre>
  </div>
)

  return (
   <Box sx={{ maxWidth: 900, margin: "40px auto", p: 3 }}>
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <img
          src={data.response.image || "https://placehold.co/600x400"}
          alt={data.response.name}
          style={{ maxWidth: "100%", borderRadius: "12px" }}
        />
      </Box>

      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
        {data.response.name}
      </Typography>

      <Typography variant="h4" sx={{ color: "primary.main", fontWeight: "bold", mb: 1 }}>
        ${data.response.price}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        الكمية المتوفرة: {data.response.quantity}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <Rating value={data.response.rate} readOnly />
        <Typography variant="body2" sx={{ ml: 1 }}>
          ({data.response.reviews.length} مراجعة)
        </Typography>
      </Box>

      <Button
        variant="contained"
        color="secondary"
        sx={{ borderRadius: "8px", fontWeight: "bold", px: 4, mb: 4 }}
      >
        اضف للسلة
      </Button>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          المراجعات
        </Typography>
        {data.response.reviews.map((review, index) => (
          <Box key={index} sx={{ mb: 2, p: 2, borderBottom: "1px solid #ddd" }}>
            <Typography variant="body2" sx={{ mt: 1 }}>
              {review.comment}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              بواسطة: {review.userName}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
