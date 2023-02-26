import * as Yup from 'yup';

type SignUpParams = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

export const formSettings = {
  initialValues: {} as SignUpParams,
  validationSchema: Yup.object().shape({
    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
  }),
};
