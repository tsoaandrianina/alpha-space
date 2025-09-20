import { NavLink } from "react-router-dom";
import { links, type Link } from "../utils/links";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem} from "./ui/dropdown-menu"
import { Button } from "./ui/button";
import { TextAlignStart } from "lucide-react";

const LinkMobil = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="lg:hidden">
          <Button variant="outline" size="icon">
            <TextAlignStart />
          </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent  className="lg:hidden" align="start" sideOffset={10}>
          {links.map((link) => {
            const {ref,label } = link as Link;
            return (
              <DropdownMenuItem key={label}>
              <NavLink 
                      to={ref} 
                      className={({ isActive }) => 
                        `capitalize tracking-wide font-light ${ isActive ? " text-primary" : "" }`}>
                        {label}
              </NavLink> 
              </DropdownMenuItem>
            );
              })
          }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LinkMobil