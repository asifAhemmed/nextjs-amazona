import Link from "next/link";
import CartButton from "./cart-button";

export default function Menu() {
  return (
    <div className="flex justify-end">
      <nav className="flex gap-3 w-full">
        <Link href="/cart" className="header-button">
          Hello, Sign in
        </Link>

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
