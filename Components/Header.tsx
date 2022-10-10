import Router, { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsSearch, BsArrowLeftRight } from "react-icons/bs";

interface Props {
  setShow: any;
  show: any;
}

function Header(Props: Props) {
  const { setShow, show } = Props;
  const router = useRouter();
  const searchHandler = () => {
    router.push("/Search");
  };

  const homeHandler = () => {
    router.push("/");
  };

  const ShowHandler = () => {
    setShow(!show);
  };
  return (
    <>
      <Navbar style={{ backgroundColor: "#000" }} expand="lg">
        <Container style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <BsArrowLeftRight
              size={20}
              style={{ color: "#fff", cursor: "pointer" }}
              onClick={ShowHandler}
            />
          </div>
          <Navbar.Brand
            onClick={homeHandler}
            className="brand"
            style={{ cursor: "pointer", color: "#fff" }}
          >
            NextMovie
          </Navbar.Brand>
          <div onClick={searchHandler}>
            <BsSearch size={20} style={{ color: "#fff", cursor: "pointer" }} />
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
