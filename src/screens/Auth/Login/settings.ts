import * as Yup from 'yup';

type LoginParams = {
  email: string;
  password: string;
};

export const formSettings = {
  initialValues: {
    email: 'john@doe.com',
    password: '123456',
  } as LoginParams,
  validationSchema: Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
  }),
};
