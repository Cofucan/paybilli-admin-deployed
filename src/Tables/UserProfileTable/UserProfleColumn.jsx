import { Tag, Checkbox, Button } from 'antd'
import { MoreOutlined } from '@ant-design/icons'

const UserProfileColumn = () => {
  const columns = [
    {
      title: '',
      dataIndex: 'checkbox',
      key: 'checkbox',
      render: () => <Checkbox />,
      width: '5%',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      responsive: ['sm'],
    },
    {
      title: 'Transaction Type',
      dataIndex: 'type',
      key: 'type',
      responsive: ['sm'],
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: status => {
        let color = ''
        let bgColor = ''
        switch (status) {
          case 'Completed':
            color = 'green'
            bgColor = '#03A900'
            break
          case 'Failed':
            color = 'red'
            bgColor = '#EE4444'
            break
          case 'Pending':
            color = 'yellow'
            bgColor = '#AC9D16'
            break
          default:
            color = 'gray'
            bgColor = 'darkgray'
        }

        return (
          <Tag color={color}>
            <span className='flex items-center font-medium'>
              <span
                className='w-1 h-1 rounded-full mr-1 shadow'
                style={{ backgroundColor: bgColor }}
              ></span>
              {status}
            </span>
          </Tag>
        )
      },
      responsive: ['sm'],
    },
    {
      title: 'Date and Time',
      dataIndex: 'date',
      key: 'date',
      responsive: ['sm'],
    },
    {
      title: 'Transaction ID',
      dataIndex: 'transactionId',
      key: 'transactionId',
      responsive: ['sm'],
    },
    {
      title: 'Method',
      dataIndex: 'method',
      key: 'method',
      responsive: ['sm'],
    },
    {
      title: '',
      key: 'action',
      render: () => (
        <Button type='text' shape='circle' icon={<MoreOutlined />} />
      ),
    },
  ]

  return columns
}

export default UserProfileColumn
