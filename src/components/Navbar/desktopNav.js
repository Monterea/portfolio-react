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
                {/*               chci aby se mi podbarvila strana na které aktuálně jsem
              chci aby se mi při velikosti stránky 640px už nezobrazoval odkaz na stránku ve které nyní jsem */}
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
          </MenuList>
        </div>
      </Navi>
    </>
  );
}
