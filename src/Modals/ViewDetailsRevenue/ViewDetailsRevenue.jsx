import { Modal, Row, Col, Typography } from 'antd'

const { Title, Text } = Typography

const ViewDetailsRevenue = ({ isModalVisible, handleCancel }) => {
  return (
    <div>
      {/* Modal Component */}
      <Modal
        title={<Title level={2}>Revenue Details</Title>}
        open={isModalVisible}
        footer={null}
        onCancel={handleCancel}
        centered
        width={600}
        height={600}
        closable={true}
      >
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Title level={5} className='mb-0'>
              #WD23GH2
            </Title>
            <Text type='secondary'>Transaction ID</Text>
          </Col>
          <Col span={12}>
            <Title level={5} className='mb-0'>
              NGN 145,000
            </Title>
            <Text type='secondary'>Transaction Amount</Text>
          </Col>
          <Col span={12}>
            <Title level={5} className='mb-0'>
              NGN 12,000
            </Title>
            <Text type='secondary'>Net Revenue</Text>
          </Col>
          <Col span={12}>
            <Title level={5} className='mb-0'>
              02, August, 2024
            </Title>
            <Text type='secondary'>Transaction Date</Text>
          </Col>
          <Col span={12}>
            <Title level={5} className='mb-0'>
              Confirmed
            </Title>
            <Text type='secondary'>Status</Text>
          </Col>
          <Col span={12}>
            <Title level={5} className='mb-0'>
              Bet
            </Title>
            <Text type='secondary'>Revenue Source</Text>
          </Col>
          <Col span={12}>
            <Title level={5} className='mb-0'>
              Chinedu John
            </Title>
            <Text type='secondary'>User</Text>
          </Col>
          <Col span={12}>
            <Title level={5} className='mb-0'>
              NGN 1000
            </Title>
            <Text type='secondary'>Transaction Fee</Text>
          </Col>
        </Row>
      </Modal>
    </div>
  )
}

export default ViewDetailsRevenue
