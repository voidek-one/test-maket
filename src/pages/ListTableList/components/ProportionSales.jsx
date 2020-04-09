import React from 'react';
import { Pie } from '@/components/Charts';
import { Card, Table, Divider } from 'antd';
import styles from '../index.less';

const salesPieData = [
  {
    x: 'Completed',
    y: 2252,
  },
  {
    x: 'Pending',
    y: 899,
  },
  {
    x: 'Incomplete',
    y: 101,
  },
];

const columns = [
  {
    title: 'DO Number',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Assignee',
    dataIndex: 'assignee',
    key: 'assignee',
  },
  {
    title: 'Deadline',
    dataIndex: 'deadline',
    key: 'deadline',
  },
];
const data = [
  {
    key: 'op1',
    name: '3456790',
    assignee: 'Otto',
    deadline: '2017-10-03  19:23:12',
  },
  {
    key: 'op2',
    name: '3456790',
    assignee: 'Thornton',
    deadline: '2017-10-03  19:23:12',
  },
  {
    key: 'op3',
    name: '3456790',
    assignee: 'the Bird',
    deadline: '2017-10-03  19:23:12',
  },
];

const ProportionSales = () => (
  <Card className={styles.cardProportionSales}>
    <Divider orientation="left">Delivery Order Count</Divider>
    <Pie
      hasLegend
      subTitle="All Transaction"
      total="3252"
      colors={['#52c41a', '#faad14', '#ff4d4f']}
      data={salesPieData}
      height={200}
    />
    <Divider orientation="left">Assined to me</Divider>
    <Table pagination={false} dataSource={data} columns={columns} />
  </Card>
);

export default ProportionSales;
