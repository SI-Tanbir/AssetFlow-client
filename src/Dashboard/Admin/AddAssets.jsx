import React from "react";
import {
  TextField,
  Button,
  Box,
  Container,
  Typography,
  Paper,
  FormHelperText,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useForm } from "react-hook-form";
import baseUrl from "../../Hooks/baseUrlAxiosInstance";
import { toast, ToastContainer } from "react-toastify";

const AddAssets = () => {
  // Initialize the useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    // You can send the data to an API or process it further here

    baseUrl.post("/addassets", data).then((res) => {
      console.log(res);

      if (res.data.acknowledged) {
        toast.success("Successful login!");
      }
    });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ padding: 4, backgroundColor: "#f5f5f5" }}>
        <Typography variant="h5" align="center" gutterBottom>
          Add a New Asset
        </Typography>

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <ToastContainer />

          <Box mb={3}>
            <TextField
              id="product-name"
              label="Product Name"
              variant="outlined"
              fullWidth
              {...register("productName", {
                required: "Product name is required",
              })}
              error={!!errors.productName}
              helperText={errors.productName?.message}
              sx={{
                "& .MuiInputBase-root": {
                  backgroundColor: "#ffffff",
                },
              }}
            />
          </Box>

          <Box mb={3}>
            <FormControl
              fullWidth
              error={!!errors.productType}
              variant="outlined"
            >
              <InputLabel id="product-type-label">Product Type</InputLabel>
              <Select
                labelId="product-type-label"
                id="product-type"
                label="Product Type"
                defaultValue=""
                {...register("productType", {
                  required: "Product type is required",
                })}
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor: "#ffffff",
                  },
                }}
              >
                <MenuItem value="returnable">Returnable</MenuItem>
                <MenuItem value="non-returnable">Non-returnable</MenuItem>
              </Select>
              <FormHelperText>{errors.productType?.message}</FormHelperText>
            </FormControl>
          </Box>

          <Box mb={3}>
            <TextField
              id="product-quantity"
              label="Product Quantity"
              variant="outlined"
              type="number"
              fullWidth
              {...register("productQuantity", {
                required: "Product quantity is required",
                valueAsNumber: true,
                min: { value: 1, message: "Quantity must be at least 1" },
              })}
              error={!!errors.productQuantity}
              helperText={errors.productQuantity?.message}
              sx={{
                "& .MuiInputBase-root": {
                  backgroundColor: "#ffffff",
                },
              }}
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#00796b", // Greenish color
                "&:hover": {
                  backgroundColor: "#004d40", // Darker green
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

export default AddAssets;
