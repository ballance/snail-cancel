import Nav from 'react-bootstrap/Nav';

export default function Navbar() {
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