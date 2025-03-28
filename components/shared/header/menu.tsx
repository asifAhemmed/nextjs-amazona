import Link from "next/link";
import CartButton from "./cart-button";
import UserButton from "./user-button";

export default function Menu() {
  return (
    <div className="flex justify-end">
      <nav className="flex gap-3 w-full">
        <UserButton />

        <Link href="/cart" className="header-button">
          <div className="flex justify-end">
            <nav className="flex gap-3 w-full">
              <CartButton />
            </nav>
          </div>
        </Link>
      </nav>
    </div>
  );
}
