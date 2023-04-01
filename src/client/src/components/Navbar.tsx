import Nav from 'react-bootstrap/Nav';

function BasicExample() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link eventKey="home" href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="cancel">Snail Cancel</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="verify">Snail Verify</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default BasicExample;