
import { Box, CircularProgress, Typography } from '@mui/material';
import useCart from './../../hooks/useCart';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';

export default function Cart() {
 const {data, isLoading, isError, error} = useCart();
 if(isLoading) return <CircularProgress/>
 if(isError) return <Typography color='red'>{error}</Typography>

  return (
    <Box sx={{ maxWidth: 900, margin: "40px auto", p: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
        سلة المشتريات
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>اسم المنتج</TableCell>
            <TableCell>السعر</TableCell>
            <TableCell>الكمية</TableCell>
            <TableCell>الإجمالي</TableCell>
            <TableCell>الإجراءات</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.productName}</TableCell>
              <TableCell>${item.price}</TableCell>
              <TableCell>{item.count}</TableCell>
              <TableCell>${item.totalPrice}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ borderRadius: "8px", fontWeight: "bold" }}
                >
                  حذف
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
