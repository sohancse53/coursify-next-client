import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

const Navbar = async () => {
  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/courses">Courses</Link>
      </li>
      <li>
        <Link href="/addCourse">Add Course</Link>
      </li>
      <li>
        <Link href="/manageCourse">Manage Courses</Link>
      </li>
    </>
  );

  return (
    <div className="sticky top-3 z-50 flex justify-center">
      <div
        className="
          navbar 
          
          max-w-7xl 
          bg-white/40
          backdrop-blur-xl 
          rounded-full 
          shadow-lg 
          border border-white/30
          px-6
        "
      >
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="
                menu 
                menu-sm 
                dropdown-content 
                mt-3 
                w-52 
                p-2 
                shadow 
                bg-white/90
                backdrop-blur-3xl
                rounded-xl 
                border border-white/20
              "
            >
              {links}
            </ul>
          </div>

          <Link href="/" className="text-lg sm:text-2xl font-bold text-blue-500">
            Coursify
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Right Side Buttons */}
        <div className="navbar-end flex gap-4 items-center">
          <SignedOut>
            <SignInButton>
              <button className="btn btn-info btn-xs sm:btn-sm rounded-full px-6">
                Login
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="btn btn-primary btn-xs sm:btn-sm rounded-full px-6">
                Register
              </button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
