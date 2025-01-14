'use client';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const QueryForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    age: Yup.number().required('Required'),
    occupation: Yup.string().required('Required'),
    phone: Yup.string()
      .matches(/^[6-9]\d{9}$/, 'Invalid phone number')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    query: Yup.string().required('Required'),
  });

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-xl text-black font-bold mb-4">Send Your Query</h1>
      <Formik
        initialValues={{
          name: '',
          age: '',
          occupation: '',
          phone: '',
          email: '',
          query: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Your Name</label>
              <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" name="name" />
              <ErrorMessage className="text-red-600 text-xs italic" name="name" component="div" />
            </div>
            <div className="mb-4 flex">
              <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">Age</label>
              <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" name="age" type="number" />
              <ErrorMessage className="text-red-600 text-xs italic" name="age" component="div" />
              </div>
            {/* </div>
            <div className="mb-4"> */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="occupation">What Do You Do?</label>
              <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" name="occupation" />
              <ErrorMessage className="text-red-600 text-xs italic" name="occupation" component="div" />
              </div>
            </div>
            <div className="mb-4 flex">
              <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone No.</label>
              <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" name="phone" />
              <ErrorMessage className="text-red-600 text-xs italic" name="phone" component="div" />
              </div>
            {/* </div>
            <div className="mb-4"> */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email ID</label>
              <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" name="email" type="email" />
              <ErrorMessage className="text-red-600 text-xs italic" name="email" component="div" />
            </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="query">Describe Your Query!</label>
              <Field as="textarea" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" name="query" />
              <ErrorMessage className="text-red-600 text-xs italic" name="query" component="div" />
            </div>
            <button type="submit" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default QueryForm;