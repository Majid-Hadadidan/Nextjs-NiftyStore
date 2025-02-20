import Logo from "./Logo";
import NavSearch from "./NavSearch";
import CartButton from "./CartButton";
import DarkMode from "./DarkMode";
import LinksDropdown from "./LinksDropdown";
import Container from "../global/Container";
function Navbar() {
  return (
    <nav className="border-b">
    <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 flex-wrap  py-8 ">
      <Logo />
      <NavSearch />
      <div className="flex gap-4 items-center ">
        <CartButton />
        <DarkMode />
        <LinksDropdown />
      </div>
    </Container>
    </nav>
  );
}
export default Navbar;
