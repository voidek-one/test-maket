import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import TransactionTable from './components/TransactionTable';
import { Button, Card, Row, Col, List, Typography, Divider, Select } from 'antd';
import { PlusCircleOutlined, WarningOutlined, StarOutlined, HomeOutlined } from '@ant-design/icons';
import styles from './index.less';
import ProportionSales from './components/ProportionSales';
import EtokenActiveObj from './components/EtokenActive';
import Payments from './components/Payments';

const { Option } = Select;
const { Text } = Typography;

const warning = ['Dubai Trade Announcements'];
const warningDescription = ['Important information Dubai Trade wants you to think abount'];
const textFavouriteServices = [
  { key: 1, title: 'Berth Booking' },
  { key: 2, title: 'Manifest File' },
  { key: 3, title: 'Container Request' },
  { key: 4, title: 'Haulier Nomination' },
  { key: 5, title: 'Request Customs Opinion' },
];
const TableList = () => {
  return (
    <PageHeaderWrapper>
      <div className={styles.nameTransactionAndButton}>
        <div className={styles.selectTransaction}>
          <Select
            className={styles.selectAndOptionsTransaction}
            defaultValue="A180"
            bordered={false}
          >
            <Option value="A180">A180 - Cargo Owner - MAERSR KANOO UAE LLC</Option>
            <Option value="A280">A280 - Cargo Owner </Option>
            <Option value="A150">A150 - MAERSR KANOO UAE LLC</Option>
          </Select>
        </div>
        <div className={styles.buttonNewTransaction}>
          <Button icon={<PlusCircleOutlined />} type="primary">
            New Transaction
          </Button>
        </div>
      </div>
      <Row gutter={[16, 0]} className={styles.rowTableAndWarningAndServices}>
        <Col span={16} xxl={18} xl={24} lg={24} md={24} sm={24} xs={24}>
          <TransactionTable />
        </Col>
        <Col span={8} xxl={6} xl={24} lg={24} md={24} sm={24} xs={24}>
          <Card className={styles.cardWarningComponent}>
            <div className={styles.warningComponent}>
              <div className={styles.warningComponentIcon}>
                <WarningOutlined style={{ fontSize: '40px' }} />
              </div>
              <div>
                <Text className={styles.textWarning}>{warning}</Text>

                <br />
                <Text className={styles.textWarningDescription}>{warningDescription}</Text>
              </div>
            </div>
          </Card>
          <Card className={styles.cardFavouriteServices}>
            <Divider orientation="left">My Favourite Services</Divider>
            <List
              dataSource={textFavouriteServices}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={
                      <a href="#">
                        <StarOutlined style={{ fontSize: '16px', color: '#faad14' }} /> {item.title}
                      </a>
                    }
                  />
                </List.Item>
              )}
            ></List>
          </Card>
        </Col>
      </Row>
      ,
      <Row gutter={[16, 0]}>
        <Col span={10} xxl={10} xl={14} lg={24} md={24} sm={24} xs={24}>
          <ProportionSales />
        </Col>
        <Col span={6} xxl={8} xl={10} lg={24} md={24} sm={24} xs={24}>
          <EtokenActiveObj /> <EtokenActiveObj />{' '}
        </Col>
        <Col span={8} xxl={6} xl={24} lg={24} md={24} sm={24} xs={24}>
          <Payments />
        </Col>
      </Row>
    </PageHeaderWrapper>
  );
};

export default TableList;
