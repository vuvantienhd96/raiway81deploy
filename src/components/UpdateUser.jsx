import './UpdateUser.scss';

import { FooterPoke } from './footerPokemon/FooterPoke';

import { useParams } from 'react-router-dom';
import useFetch from './../custumHook/useFetch';
import { urlApi } from '../constant/constant';
import { useState, useEffect, useRef } from 'react';
import { Input, Button, Image, Upload } from 'antd';
import axios from 'axios';
// ban co the dung useNavigate de dieu huong trang
import { useNavigate } from 'react-router-dom';
import { UploadOutlined } from '@ant-design/icons';

export const UpdateUser = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  // call api here
  const [data, setData] = useFetch(id, urlApi, '');
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [address, setAdress] = useState();
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    if (data) {
      setName(data.name);
      setAdress(data.address);
      setPhone(data.phone);
      setAvatar(data.avatar);
    }
  }, data);
  const changeValue = (e) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'address':
        setAdress(e.target.value);
        break;
      case 'phone':
        setPhone(e.target.value);
        break;
      case 'avatar':
        setAvatar(e.target.value);
        break;
    }
  };

  const submitForm = () => {
    const dataList = {
      name,
      phone,
      address,
      avatar,
    };
    // call api
    if (id) {
      axios
        .put(urlApi + `/${id}`, dataList)
        .then((res) => {
          // dieu huong ve danh userList
          navigate('/listUser');
        })
        .catch((err) => {
          console.log(err, 'err');
        });
    } else {
      axios
        .post(urlApi, dataList)
        .then((res) => {
          // dieu huong ve danh userList
          navigate('/listUser');
        })
        .catch((err) => {
          console.log(err, 'err');
        });
    }
  };

  return (
    <div className="form">
      <h4 style={{ color: 'white' }}>
        {id ? 'Edit Item User' : 'Add Item User'}
      </h4>
      <div className="input-form">
        <div className="item">
          <span className="title">Name</span>
          <Input
            placeholder="Basic Name"
            value={name}
            name="name"
            onChange={(e) => changeValue(e)}
          />
        </div>
        <div className="item">
          <span className="title">Adress</span>
          <Input
            name="address"
            placeholder="Basic Adress"
            value={address}
            onChange={(e) => changeValue(e)}
          />
        </div>
        <div className="item">
          <span className="title">Phone</span>
          <Input
            name="phone"
            placeholder="Basic Phone"
            value={phone}
            onChange={(e) => changeValue(e)}
          />
        </div>
        <div className="item">
          <span className="title">Avatar</span>
          <Input
            name="avatar"
            placeholder="Basic Avatar"
            value={avatar}
            onChange={(e) => changeValue(e)}
          />
          s{' '}
          <Image
            width={200}
            src={avatar}
            placeholder={<Image preview={true} src={avatar} width={400} />}
          />
        </div>
        <Button type="primary" onClick={() => submitForm()}>
          Submit
        </Button>
      </div>
      <FooterPoke />
    </div>
  );
};
