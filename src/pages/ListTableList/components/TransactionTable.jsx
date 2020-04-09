import { Badge, Card, Table, Divider } from 'antd';
import React from 'react';
import styles from '../index.less';

const columns = [
  {
    title: 'Transaction/Service',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Service ID',
    dataIndex: 'serviceId',
    key: 'serviceId',
  },
  {
    title: 'status',
    dataIndex: 'status',
    key: 'status',
    render: (text) => {
      if (text === 'agree') {
        return <Badge status="success" text="Approved" />;
      }
      if (text === 'warning') {
        return <Badge status="warning" text="Nominated" />;
      }

      return <Badge status="error" text="Rejected" />;
    },
  },
  {
    title: 'Deadline',
    dataIndex: 'deadline',
    key: 'deadline',
  },
  {
    title: 'Next Steps',
    dataIndex: 'nextSteps',
    key: 'nextSteps',
  },
];
const advancedOperation = [
  {
    key: 'op1',
    name: 'Cargo Transfer Request',
    serviceId: '54678987',
    status: 'warning',
    deadline: '2017-10-03  19:23:12',
    nextSteps: 'Draft saved',
  },
  {
    key: 'op2',
    name: 'Cargo Agent Nomination',
    serviceId: '54678987',
    status: 'warning',
    deadline: '2017-10-03  19:23:12',
    nextSteps: 'No next steps',
  },
  {
    key: 'op3',
    name: 'Hold Release Cargo',
    serviceId: '54678987',
    status: 'agree',
    deadline: '2017-10-03  19:23:12',
    nextSteps: 'Proceed to payment',
  },
  {
    key: 'op4',
    name: 'Cargo Agent Nomination',
    serviceId: '54678987',
    status: 'agree',
    deadline: '2017-10-03  19:23:12',
    nextSteps: 'No next steps',
  },
  {
    key: 'op5',
    name: 'Cargo Transfer Request',
    serviceId: '54678987',
    status: 'reject',
    deadline: '2017-10-03  19:23:12',
    nextSteps: 'Missing information required',
  },
  {
    key: 'op6',
    name: 'Cargo Agent Nomination',
    serviceId: '54678987',
    status: 'agree',
    deadline: '2017-10-03  19:23:12',
    nextSteps: 'No next steps',
  },
];

const TransactionTable = () => {
  return (
    <div>
      <Card className={styles.cardTransactionTable} bordered={false}>
        <Divider orientation="left">My Upcoming Jobs</Divider>
        <Table pagination={false} dataSource={advancedOperation} columns={columns} />
      </Card>
    </div>
  );
};

export default TransactionTable;
