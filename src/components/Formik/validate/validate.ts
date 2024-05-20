import * as Yup from 'yup';

const regexphone = /^(03|05|07|08|09|01[2|6|8|9])([0-9]{8})$/;
const regexUppercase = /^[A-Z][a-zA-Z0-9]*$/;

export const editUserSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'ki tu phai từ hai ký tự trở lên!')
    .max(50, 'Tối đa 50 kí tự !')
    .required('Required'),
  phone: Yup.string()
    .matches(regexphone, 'Số điện thoại không hợp lệ!')
    .required('Required'),
  address: Yup.string()
    .matches(
      regexUppercase,
      'Làm ơn nhập vào đúng định dạng chữ đầu tiên in hoa!'
    )
    .max(10, 'Tối đa 100 kí tự !')
    .required('Required'),
});
