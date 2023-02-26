import { USER } from '@app/utils/data';
import * as Yup from 'yup';

type LoginParams = {
  email: string;
  password: string;
};

export const formSettings = {
  initialValues: {
    email: USER.email,
    password: USER.password,
  } as LoginParams,
  validationSchema: Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
  }),
};
