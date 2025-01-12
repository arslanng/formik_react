import * as yup from "yup";

const validations = yup.object().shape({
  email: 
  yup.string()
  .email('Geçerli bir email girin')
  .required('Doldurulması zorunludur'),
  password: 
  yup.string()
  .min(5, 'Parolanız en az 5 karakter olmalıdır')
  .required('Doldurulması zorunludur'),
  passwordComfirm: 
    yup.string()
    .oneOf([yup.ref("password")], 'Parolalar uyuşmuyor')
    .required('Doldurulması zorunludur'),
});

export default validations;
