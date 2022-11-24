import { useState } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { v4 as uuid } from "uuid";
import { useFormik } from 'formik';
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  FormHelperText,
  Grid,
  MenuItem,
  Switch,
  TextField,
  Typography
} from '@mui/material';
import { FileDropzone } from '../../file-dropzone';
import { QuillEditor } from '../../quill-editor';
import { storage } from '../../../lib/firebase';
import { useAuth } from '../../../hooks/use-auth';
import { API_SERVICE } from '../../../config';

const categoryOptions = [
  {
    label: 'Healthcare',
    value: 'healthcare'
  },
  {
    label: 'Makeup',
    value: 'makeup'
  },
  {
    label: 'Dress',
    value: 'dress'
  },
  {
    label: 'Skincare',
    value: 'skincare'
  },
  {
    label: 'Jewelry',
    value: 'jewelry'
  },
  {
    label: 'Blouse',
    value: 'blouse'
  }
];

export const ProductCreateForm = (props) => {
  const router = useRouter();
  const { user } = useAuth();
  const [files, setFiles] = useState([]);
  const [firebaseUrl, setFirebaseUrl] = useState('')
  const formik = useFormik({
    initialValues: {
      // barcode: '925487986526',
      category: '',
      // description: '',
      cover: '',
      name: '',
      price: 0,
      link: "",
      handlingTime: "",
      shippingTime: "",
      // sku: 'IYV-8745',
      submit: null
    },
    validationSchema: Yup.object({
      // barcode: Yup.string().max(255),
      category: Yup.string().max(255),
      // description: Yup.string().max(5000),
      cover: Yup.string().max(555),
      name: Yup.string().max(255).required(),
      link: Yup.string().required(),
      handlingTime: Yup.string().required(),
      shippingTime: Yup.string().required(),
      price: Yup.number().min(0).required(),
      // sku: Yup.string().max(255)
    }),
    onSubmit: async (values, helpers) => {
      try {
        values.cover = firebaseUrl
        console.log(values)
        console.log(values.cover.length)
        // NOTE: Make API request
        try {
          const response = await fetch(`${API_SERVICE}/add_product`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...values,
              userId: user?.id,
            }),
          });
          const data = response.json();
          if (data) {
            console.log(data)
            if (values.cover != '') {
              toast.success('Product created!');
              router.push('/dashboard/products')
            } else {
              toast.error('Please Upload Image');
            }
          }
          // setToggler(!toggler);
        } finally {
        }
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong!');
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });

  const uploadImage = () => {
    if (files[0] === null) return;

    // if (files[0]) {
    //   const desertRef = storage.refFromURL(files[0]);

    //   desertRef
    //     .delete()
    //     .then(function () {
    //       // File deleted successfully
    //       console.log("Deleted");
    //     })
    //     .catch(function (error) {
    //       // Uh-oh, an error occurred!
    //       console.log(error);
    //     });
    // }

    const name = uuid();
    storage
      .ref(`ugcsass/products/${name}`)
      .put(files[0])
      .on("state_changed", alert("uploading"), alert, () => {
        storage
          .ref("ugcsass")
          .child("products")
          .child(name)
          .getDownloadURL()
          .then((url) => {
            console.log(url)
            toast.success('Image Uploaded')
            setFirebaseUrl(url)
            // setNewProduct({ ...newProduct, cover: url });
          });
      });
  };

  // const addProduct = async (product) => {
  //   try {
  //     const response = await fetch(`${API_SERVICE}/add_product`, {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         ...product,
  //         category: product?.selectedCategory,
  //         userId: user?.id,
  //       }),
  //     });
  //     const data = response.json();
  //     setToggler(!toggler);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleDrop = (newFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    console.log(newFiles[0])
  };

  const handleRemove = (file) => {
    setFiles((prevFiles) => prevFiles.filter((_file) => _file.path !== file.path));
    setFirebaseUrl('')
  };

  const handleRemoveAll = () => {
    setFiles([]);
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      {...props}>
      <Card>
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={4}
              xs={12}
            >
              <Typography variant="h6">
                Basic details
              </Typography>
            </Grid>
            <Grid
              item
              md={8}
              xs={12}
            >
              <TextField
                sx={{
                  mb: 2,
                  mt: 3
                }}
                error={Boolean(formik.touched.name && formik.errors.name)}
                fullWidth
                helperText={formik.touched.name && formik.errors.name}
                label="Product Name"
                name="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <TextField
                sx={{
                  mb: 2,
                  mt: 3
                }}
                error={Boolean(formik.touched.link && formik.errors.link)}
                fullWidth
                helperText={formik.touched.link && formik.errors.link}
                label="Product link"
                name="link"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.link}
              />
              <TextField
                sx={{
                  mb: 2,
                  mt: 3
                }}
                error={Boolean(formik.touched.shippingTime && formik.errors.shippingTime)}
                fullWidth
                helperText={formik.touched.shippingTime && formik.errors.shippingTime}
                label="Shipping Time"
                name="shippingTime"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.shippingTime}
              />
              <TextField
                sx={{
                  mb: 2,
                  mt: 3
                }}
                error={Boolean(formik.touched.handlingTime && formik.errors.handlingTime)}
                fullWidth
                helperText={formik.touched.handlingTime && formik.errors.handlingTime}
                label="Handling Time"
                name="handlingTime"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.handlingTime}
              />
              {/* <Typography
                color="textSecondary"
                sx={{
                  mb: 2,
                  mt: 3
                }}
                variant="subtitle2"
              >
                Description
              </Typography>
              <QuillEditor
                onChange={(value) => {
                  formik.setFieldValue('description', value);
                }}
                placeholder="Write something"
                sx={{ height: 400 }}
                value={formik.values.description}
              />
              {(formik.touched.description && formik.errors.description) && (
                <Box sx={{ mt: 2 }}>
                  <FormHelperText error>
                    {formik.errors.description}
                  </FormHelperText>
                </Box>
              )} */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={4}
              xs={12}
            >
              <Typography variant="h6">
                Images
              </Typography>
              <Typography
                color="textSecondary"
                variant="body2"
                sx={{ mt: 1 }}
              >
                Images will appear in the store front of your website.
              </Typography>
            </Grid>
            <Grid
              item
              md={8}
              xs={12}
            >
              <FileDropzone
                accept="image/*"
                files={files}
                disabled={files.length > 0 ? true : false}
                onUpload={uploadImage}
                onDrop={handleDrop}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={4}
              xs={12}
            >
              <Typography variant="h6">
                Pricing
              </Typography>
            </Grid>
            <Grid
              item
              md={8}
              xs={12}
            >
              <TextField
                error={Boolean(formik.touched.price && formik.errors.price)}
                fullWidth
                label="Price"
                name="price"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="number"
                value={formik.values.price}
              />
              <Box sx={{ mt: 2 }}>
                <FormControlLabel
                  control={<Switch />}
                  label="Keep selling when stock is empty"
                />
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={4}
              xs={12}
            >
              <Typography variant="h6">
                Category
              </Typography>
            </Grid>
            <Grid
              item
              md={8}
              xs={12}
            >
              <TextField
                error={Boolean(formik.touched.category && formik.errors.category)}
                fullWidth
                label="Category"
                name="category"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                select
                value={formik.values.category}
              >
                {categoryOptions.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              {/* <TextField
                disabled
                error={Boolean(formik.touched.barcode && formik.errors.barcode)}
                fullWidth
                label="Barcode"
                name="barcode"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                sx={{ mt: 2 }}
                value={formik.values.barcode}
              />
              <TextField
                disabled
                error={Boolean(formik.touched.sku && formik.errors.sku)}
                fullWidth
                label="SKU"
                name="sku"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                sx={{ mt: 2 }}
                value={formik.values.sku}
              /> */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          mx: -1,
          mb: -1,
          mt: 3
        }}
      >
        {/* <Button
          color="error"
          sx={{
            m: 1,
            mr: 'auto'
          }}
        >
          Delete
        </Button> */}
        <Button
          sx={{ m: 1 }}
          variant="outlined"
        >
          Cancel
        </Button>
        <Button
          sx={{ m: 1 }}
          type="submit"
          variant="contained"
        >
          Create
        </Button>
      </Box>
    </form>
  );
};
