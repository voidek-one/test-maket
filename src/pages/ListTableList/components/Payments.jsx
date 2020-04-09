import React from 'react';
import { Divider, Button, List, Card, Typography } from 'antd';
import styles from '../index.less';

const { Text } = Typography;

const balance = ['45.677'];
const currency = ['AED'];
const payments = [
  { title: 'Lease Payment' },
  { title: 'Lease Payment' },
  { title: 'Lease Payment' },
  { title: 'Lease Payment' },
  { title: 'Lease Payment' },
  { title: 'Lease Payment' },
  { title: 'Lease Payment' },
];
const date = ['12.12.2019'];

const Payments = () => {
  return (
    <Card className={styles.cardPaymentsDue}>
      <div className={styles.paymentsDue}>
        <div className={styles.balanceAndCurrency}>
          <div className={styles.textBalanceAndCurrency}>
            <Text style={{ fontSize: '30px', color: '#000' }}>{balance}</Text>
          </div>
          <div className={styles.textBalanceAndCurrency}>
            <Text>{currency}</Text>
          </div>
        </div>
        <div className={styles.buttonTopUp}>
          <Button type="primary" size="large">
            Top Up
          </Button>
        </div>
      </div>
      <Divider orientation="left">Payments Due</Divider>
      <List
        dataSource={payments}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta title={<a href="#">{item.title}</a>} />
            <div>
              <Text>{date}</Text>
            </div>
          </List.Item>
        )}
      ></List>
    </Card>
  );
};

export default Payments;
