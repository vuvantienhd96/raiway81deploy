import React, { useEffect, useState } from 'react';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Avatar, Card, Skeleton, Switch, Row, Col } from 'antd';
import { useParams } from 'react-router-dom';
import useFetch from './../custumHook/useFetch';
import { urlApi } from '../constant/constant';

// import scss
import './DetailUser.scss';
import { BattalPokemon } from './pokemon/Battal';

const { Meta } = Card;
// Card.Meta === Meta
export const DetailUser = () => {
  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  // call api here
  const [data, setData] = useFetch(id, urlApi, '');

  useEffect(() => {
    if (!data) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, data);

  return (
    <div className="cart-content">
      <Row gutter={16}>
        <Col span={8}>
          <Card
            style={{
              width: 300,
              marginTop: 16,
            }}
            loading={loading}
          >
            <Meta
              avatar={<Avatar src={data?.avatar} />}
              title={data?.name}
              description={data?.address}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            style={{
              width: 300,
              marginTop: 16,
            }}
            loading={loading}
          >
            <Meta
              avatar={<Avatar src={data?.avatar} />}
              title={data?.name}
              description={data?.address}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            style={{
              width: 300,
              marginTop: 16,
            }}
            loading={loading}
          >
            <Meta
              avatar={<Avatar src={data?.avatar} />}
              title={data?.name}
              description={data?.address}
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <BattalPokemon />
        </Col>
      </Row>
    </div>
  );
};
