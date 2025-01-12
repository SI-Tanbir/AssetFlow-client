import React from 'react';
import { TextField, Button, Box, Container, Typography, Paper } from '@mui/material';
import { useForm } from 'react-hook-form';

const AssetList = () => {
  // Initialize the useForm hook
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
    // You can send the data to an API or process it further here
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ padding: 4, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Add a New Asset
        </Typography>

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box mb={3}>
            <TextField
              id="product-name"
              label="Product Name"
              variant="outlined"
              fullWidth
              {...register('productName', { required: 'Product name is required' })}
              error={!!errors.productName}
              helperText={errors.productName?.message}
              sx={{
                '& .MuiInputBase-root': {
                  backgroundColor: '#ffffff',
                },
              }}
            />
          </Box>

          <Box mb={3}>
            <TextField
              id="product-type"
              label="Product Type"
              variant="outlined"
              fullWidth
              {...register('productType', { required: 'Product type is required' })}
              error={!!errors.productType}
              helperText={errors.productType?.message}
              sx={{
                '& .MuiInputBase-root': {
                  backgroundColor: '#ffffff',
                },
              }}
            />
          </Box>

          <Box mb={3}>
            <TextField
              id="product-quantity"
              label="Product Quantity"
              variant="outlined"
              type="number"
              fullWidth
              {...register('productQuantity', {
                required: 'Product quantity is required',
                valueAsNumber: true,
                min: { value: 1, message: 'Quantity must be at least 1' },
              })}
              error={!!errors.productQuantity}
              helperText={errors.productQuantity?.message}
              sx={{
                '& .MuiInputBase-root': {
                  backgroundColor: '#ffffff',
                },
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              sx={{
                padding: '10px 20px',
                fontSize: '16px',
                backgroundColor: '#00796b', // Greenish color
                '&:hover': {
                  backgroundColor: '#004d40', // Darker green
                },
              }}
            >
              Add Asset
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default AssetList;
