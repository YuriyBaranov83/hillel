import { Formik, Form, Field } from 'formik';
import CustomButton from '../CustomButton';
import './index.css';

const ModalForm = ({ onSubmit, onCancel }) => {
  const initialValues = {
    category: "",
    name: "",
    quantity: "",
    price: "",
    description: "",
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form className="product-form">
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <Field type="text" name="category" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <Field type="number" name="quantity" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <Field type="number" name="price" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <Field as="textarea" name="description" className="form-control" />
          </div>
          <div className="form-buttons">
            <CustomButton type="button" onClick={onCancel} className="cancel-button">
              Cancel
            </CustomButton>
            <CustomButton type="submit" disabled={isSubmitting} className="submit-button">
              Submit
            </CustomButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ModalForm;