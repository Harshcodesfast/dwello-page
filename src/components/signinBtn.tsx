import { Button } from "./ui/button";
interface Size {
  default: "h-9 px-4 py-2 has-[>svg]:px-3";
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5";
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4";
  icon: "size-9";
  homePg: "h-12 rounded-md px-6 has-[>svg]:px-4 font-bold p-2 ";
}

export default function SigninBtn({ size }: { size: keyof Size }) {
  return (
    <Button className="w-32 " size={size}>
      sign in
    </Button>
  );
}
