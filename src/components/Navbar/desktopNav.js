import { FullName } from "../../assets/text/infoText";
import {
  Navi,
  MenuList,
  MenuItem,
  MenuLink,
  BrandName,
  BrandNameH2,
} from "./navbarStyles";

export default function DesktopNav() {
  return (
    <>
      <Navi name="desktop navbar">
        <div
          name="desktop navbar body"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "95%",
            maxWidth: "1700px",
          }}
        >
          <BrandName name="desktop navbar brand">
            <BrandNameH2 className="cursive">{FullName}</BrandNameH2>
          </BrandName>
          <MenuList>
            <MenuItem>
              <MenuLink className="bold" name="desktop nav home" to="/">
                Domů
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink className="bold" name="desktop nav info" to="/skills">
                O&nbsp;mě
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink
                className="bold"
                name="desktop nav projects"
                to="/works"
              >
                Projekty
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink
                className="bold"
                name="desktop nav projects"
                to="/nested"
              >
                NestedList
              </MenuLink>
            </MenuItem>
          </MenuList>
        </div>
      </Navi>
    </>
  );
}
