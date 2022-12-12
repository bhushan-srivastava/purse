import { Empty, Typography } from "antd";

const TransactionsBarChart = ({ data }) => {
    if (data.categories.length === 0) {
        return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    }

    return (
        <div className="analysis-container">
            <Typography.Title level={4}>Spendings and Earnings Bar Chart</Typography.Title>
        </div>
    );
}

export default TransactionsBarChart;