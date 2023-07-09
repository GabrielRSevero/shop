import { Formik, Form, Field } from "formik"

export const New = () => {
  return (
    <Formik 
      initialValues={{
        name: "teste"
      }}
      onSubmit={() => console.log("submit")}
    >
      {(handleChange) => (
        <Form>
          <Field name="name" />
        </Form>
      )}
    </Formik>
  )
}