import { UserProps } from '@app/services/stores/auth';

import * as Yup from 'yup';

export const formSettings = {
  initialValues: {} as UserProps,
  validationSchema: Yup.object().shape({
    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
  }),
};
