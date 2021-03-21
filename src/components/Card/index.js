import { Card, Row, Col } from "antd";

function RafaCard({ data }) {
  return (
    <Row gutter={16}>
      {data.map((element) => {
        return (
          <Col className="gutter-row" span={6} style={{ margin: 5 }}>
            <Card
              key={element._id}
              title={element.name}
              bordered={false}
              style={{ width: 300 }}
            >
              <p>{element.name}</p>
              <p>{element.date}</p>
              <p>{element.tempc}</p>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default RafaCard;
