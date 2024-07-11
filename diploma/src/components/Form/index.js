import { Formik, Form as FormikFrom, Field, ErrorMessage } from "formik";
import CustomButton from "../CustomButton";
import * as Yup from "yup";
import "./index.css";

const validationSchema = Yup.object({
  category: Yup.string().required("This field is required"),
  name: Yup.string().required("This field is required"),
  quantity: Yup.number()
    .required("This field is required")
    .positive()
    .integer(),
  price: Yup.number().required("This field is required").positive(),
  description: Yup.string().required("This field is required"),
});

const Form = ({ initialValues, onSubmit, onCancel }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <FormikFrom className="product-form">
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <ErrorMessage
              name="category"
              component="div"
              className="error-message"
            />
            <Field type="text" name="category" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <ErrorMessage
              name="name"
              component="div"
              className="error-message"
            />
            <Field type="text" name="name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <ErrorMessage
              name="quantity"
              component="div"
              className="error-message"
            />
            <Field type="number" name="quantity" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <ErrorMessage
              name="price"
              component="div"
              className="error-message"
            />
            <Field type="number" name="price" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <ErrorMessage
              name="description"
              component="div"
              className="error-message"
            />
            <Field as="textarea" name="description" className="form-control" />
          </div>
          <div className="form-buttons">
            <CustomButton
              type="button"
              onClick={onCancel}
              className="cancel-button"
            >
              Cancel
            </CustomButton>
            <CustomButton
              type="submit"
              disabled={isSubmitting}
              className="submit-button"
            >
              Submit
            </CustomButton>
          </div>
        </FormikFrom>
      )}
    </Formik>
  );
};

export default Form;
