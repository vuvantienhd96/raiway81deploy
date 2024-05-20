import React, { useEffect, useState } from 'react';
import {
  Card,
  Col,
  Row,
  Table,
  Avatar,
  Tag,
  Space,
  Button,
  Modal,
  Spin,
} from 'antd';
import {
  DeleteOutlined,
  EyeFilled,
  DeleteFilled,
  EditFilled,
  EditOutlined,
} from '@ant-design/icons';
import useFetch from '../custumHook/useFetch';
import './User.scss';
import { Link } from 'react-router-dom';
import { urlApi } from './../constant/constant';
import { Pikachu } from './pikachu';

const Users = () => {
  const [refestApi, setRefestApi] = useState(false);
  const [data, setData] = useFetch('', urlApi, refestApi);
  const [isModalOpen, setCloseModal] = useState(false);
  const [item, setItem] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (_) => {
        let isTag = _.length > 12 ? 'green' : 'magenta';
        return <Tag color={isTag}>{_}</Tag>;
      },
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (_, { avatar, name, address, id }) => {
        console.log('name', name);
        return (
          <div>
            <Avatar key={id} src={_} />
            <p>{name}</p>
          </div>
        );
      },
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, props) => (
        <Space size="middle">
          <Link to={`/listUser/${props.id}`}>
            <EyeFilled style={{ color: 'gray' }} />
          </Link>
          <Link to={`/listUser/Edit/${props.id}`}>
            <EditFilled />
          </Link>
          <Link to={`/listUser/EditFormMik/${props.id}`}>
            <EditOutlined />
          </Link>

          <DeleteFilled
            style={{ color: 'red' }}
            onClick={() => handleDelete(props)}
          />
        </Space>
      ),
    },
  ];

  const handleCancel = () => {
    setCloseModal(!isModalOpen);
    // clear item onclick
    setItem(null);
  };

  // custom hook
  useEffect(() => {
    if (!data) {
      setIsSpinning(true);
    } else setIsSpinning(false);
  }, [data]);

  const handleOk = () => {
    // call api delete item
    // http://api.com/2
    setIsSpinning(true);
    fetch(`${urlApi}/${item?.id}`, { method: 'DELETE' })
      .then(() => {
        setItem(null);
        // close modal
        setCloseModal(!isModalOpen);
      })
      .then(() => {
        // load list user
        setRefestApi(!refestApi);
        // close spinning
        setIsSpinning(false);
      })
      .catch((err) => {
        setIsSpinning(false);
      });
  };

  const handleDelete = (props) => {
    setCloseModal(!isModalOpen);
    // true => false
    // false => true
    console.log(props, 'props');
    // khi click vao delete lay thong tin dong do vaf set vao state de su dung
    setItem(props);
  };
  return (
    <div className="page-content">
      <h3>this is table vti raiway</h3>
      <section className="table-content">
        <Link to={`/listUser/Add`}>
          <Button type="primary">Add me</Button>
        </Link>
        <Pikachu />
        <Table dataSource={data} columns={columns} />;
        <Pikachu />
        <Link to={`/listUser/Add`}>
          <Button type="primary">Add me</Button>
        </Link>
      </section>
      <article className="modal-content">
        <Modal
          title="Delete item user"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>
            are u sure delete item{' '}
            <span style={{ color: 'red' }}>{item?.name}</span> ?
          </p>
        </Modal>
      </article>

      <Spin
        style={({ position: 'relative' }, { zIndex: '1233' })}
        tip="Loading"
        size="large"
        fullscreen={true}
        spinning={isSpinning}
      >
        <div className="content" />
      </Spin>
    </div>
  );
};

export default Users;
