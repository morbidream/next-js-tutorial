
import React from 'react';
import { Badge, Card, CardText, CardTitle, Col, Row } from 'reactstrap';

function TicketsList({ tickets }) {
    return (
        <>
            <Row style={{ padding: 60 }}>
                {tickets.map((ticket) => (
                    <Col sm="3" key={ticket.id}>
                        <Card body>
                            <CardTitle tag="h5">
                                {ticket.title} 
                            </CardTitle>
                            <CardText>
                                <Badge
                                color={getPriorityColor(ticket.priority)}
                                pill
                            >
                                {ticket.priority} priority
                            </Badge>
                            <br/>
                                {ticket.body.slice(0, 250)}...
                            </CardText>
                           
                        </Card>
                    </Col>
                ))}
            </Row>
            {tickets.length === 0 && (
                <p className="text-center">There are no open tickets, yay!</p>
            )}
        </>
    );
}

export default TicketsList;


function getPriorityColor(priority) {
    switch (priority) {
      case 'high':
        return 'danger';
      case 'medium':
        return 'warning'; 
      case 'low':
        return 'success'; 
      default:
        return 'secondary'; 
    }
  }