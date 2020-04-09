import React from 'react';
import { Typography, Card, Divider } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import styles from '../index.less';

const { Text } = Typography;

const tokenNumber = ['209'];
const tokenActive = ['active e-token as of 22.02.2020'];
const EtokenActiveObj = () => {
  return (
    <Card className={styles.cartTokenActive}>
      <Divider orientation="left">e-Token Count</Divider>
      <div className={styles.eTokenActive}>
        <div className={styles.iconTokenActive}>
          <ClockCircleOutlined className={styles.iconToken} />
        </div>
        <div>
          <Text className={styles.textActiveNumberToken}>{tokenNumber}</Text>
          <br />
          <Text>{tokenActive}</Text>
        </div>
      </div>
    </Card>
  );
};

export default EtokenActiveObj;
