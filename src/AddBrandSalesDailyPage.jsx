import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

function AddBrandSalesDailyPage() {
  const history = useNavigate();

  const validationSchema = Yup.object().shape({
    brand: Yup.string().required("Brand is required"),
    totalOrders: Yup.number()
      .typeError("Total Orders must be a number")
      .required("Total Orders is required")
      .positive("Total Orders must be a positive number"),
    totalOrderValue: Yup.number()
      .typeError("Total Order Value must be a number")
      .required("Total Order Value is required")
      .positive("Total Order Value must be a positive number"),
    grossMarginPercentage: Yup.number()
      .typeError("Gross Margin Percentage must be a number")
      .required("Gross Margin Percentage is required")
      .min(0, "Gross Margin Percentage must be between 0 and 100")
      .max(100, "Gross Margin Percentage must be between 0 and 100"),
  });

  const initialValues = {
    brand: "",
    totalOrders: "",
    totalOrderValue: "",
    grossMarginPercentage: "",
  };

  const handleSubmit = (values) => {
    axios
      .post("http://localhost:5000/api/v1/brand_sales_daily", {
        brand: values.brand,
        totalOrders: parseInt(values.totalOrders),
        totalOrderValue: parseInt(values.totalOrderValue),
        grossMarginPercentage: parseInt(values.grossMarginPercentage),
        date: new Date(),
      })
      .then(() => {
        history("/get-brand-sales-daily");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Stack spacing={4}>
            <Field name="brand">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.brand && form.touched.brand}
                >
                  <FormLabel htmlFor="brand">Brand</FormLabel>
                  <Input {...field} id="brand" placeholder="Brand" />
                  <ErrorMessage name="brand" />
                </FormControl>
              )}
            </Field>
            <Field name="totalOrders">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.totalOrders && form.touched.totalOrders
                  }
                >
                  <FormLabel htmlFor="totalOrders">Total Orders</FormLabel>
                  <Input
                    {...field}
                    id="totalOrders"
                    placeholder="Total Orders"
                  />
                  <ErrorMessage name="totalOrders" />
                </FormControl>
              )}
            </Field>
            <Field name="totalOrderValue">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.totalOrderValue && form.touched.totalOrderValue
                  }
                >
                  <FormLabel htmlFor="totalOrderValue">
                    Total Order Value
                  </FormLabel>
                  <Input
                    {...field}
                    id="totalOrderValue"
                    placeholder="Total Order Value"
                  />
                  <ErrorMessage name="totalOrderValue" />
                </FormControl>
              )}
            </Field>
            <Field name="grossMarginPercentage">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.grossMarginPercentage &&
                    form.touched.grossMarginPercentage
                  }
                >
                  <FormLabel htmlFor="grossMarginPercentage">
                    Gross Margin Percentage
                  </FormLabel>
                  <Input
                    {...field}
                    id="grossMarginPercentage"
                    placeholder="Gross Margin Percentage"
                  />
                  <ErrorMessage name="grossMarginPercentage" />
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={isSubmitting}
              type="submit"
            >
              Add Brand Sales Daily
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}

export default AddBrandSalesDailyPage;
