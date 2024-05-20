import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './UpdateUserFormMik.scss';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../custumHook/useFetch';
import { urlApi } from '../../constant/constant';
import { useFormik, Form, Field, Formik, ErrorMessage } from 'formik';
import { editUserSchema } from './validate/validate';
import axios from 'axios';

export const UpdateUserFormMik = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  // call api here
  const [data, setData] = useFetch(id, urlApi, '');

  return (
    <div className="formik-content">
      <h1>Edit user</h1>
      {data && (
        <Formik
          initialValues={data}
          validationSchema={editUserSchema}
          onSubmit={(values) => {
            // call api
            const dataList = {
              name: values.name,
              phone: values.phone,
              address: values.address,
            };
            axios
              .put(urlApi + `/${values.id}`, dataList)
              .then((res) => {
                // dieu huong ve danh userList
                navigate('/listUser');
              })
              .catch((err) => {
                console.log(err, 'err');
              });
            //alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div>
                <label htmlFor="name">name</label>
                <br />
                <Field id="name" name="name" />
                {errors.name && touched.name ? (
                  <ErrorMessage
                    name="name"
                    render={(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                  />
                ) : null}

                <br />
                <br />
              </div>
              <div>
                <label htmlFor="phone">phone</label>
                <br />
                <Field id="phone" name="phone" />
                {errors.phone && touched.phone ? (
                  <ErrorMessage
                    name="phone"
                    render={(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                  />
                ) : null}
                <br />
                <br />
              </div>
              <div>
                <label htmlFor="address">address</label>
                <br />
                <Field id="address" name="address" />
                {errors.address && touched.address ? (
                  <ErrorMessage
                    name="address"
                    render={(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                  />
                ) : null}
                <br />
                <br />
              </div>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};
