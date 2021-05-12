import React from "react";
import {Link} from "react-router-dom";
const Header = ({
  isLoggedIn, username
}) => {
    
    return (
      <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div class="flex items-center flex-no-shrink text-white mr-6">
          <Link to="/">
            <span class="font-semibold text-xl tracking-tight">Cursos Pro</span>
          </Link>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
            <svg
              class="h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            {/*  <Link
              to="/cursos"
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
            >
              Cursos
            </Link> */}
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
            >
              Examples
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white"
            >
              Blog
            </a>
          </div>
          <div>
            {!isLoggedIn && (
              <>
                <Link
                  to="/signin"
                  class="inline-block text-sm px-4 py-2 leading-none  text-white   mt-4 lg:mt-0"
                >
                  Ingresar
                </Link>
                <Link
                  to="/signup"
                  class="inline-block text-sm px-4 py-2 leading-none  text-white   mt-4 lg:mt-0"
                >
                  Registrate
                </Link>
              </>
            )}
            {isLoggedIn && (
              <Link
                to="/"
                class="inline-block text-sm px-4 py-2 leading-none  text-white   mt-4 lg:mt-0"
              >
                {username}
              </Link>
            )}
          </div>
        </div>
      </nav>
    );
}

export default Header