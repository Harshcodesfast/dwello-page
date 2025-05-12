import { UserIcon, SearchIcon } from "lucide-react";
import DwelloLogo from "./icons/dwellolog";
import SigninBtn from "./signinBtn";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 mx-8 py-4">
      <DwelloLogo />
      <div className="flex items-center gap-4">
        <div>Home</div>
        <div>Service</div>
        <div>Agent</div>
        <div>Contact</div>
      </div>
      <div className="flex items-center gap-4">
        <SearchIcon />
        <UserIcon />
        <SigninBtn size="lg" />
      </div>
    </div>
  );
}
