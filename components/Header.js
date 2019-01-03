import Link from "next/link";
import React from "react";

const Header = ({ pathname }) => (
  <header>
    <nav>
      <Link prefetch href="/">
        <a className={pathname === "/" ? "active" : undefined}>
          home
        </a>
      </Link>

      <Link prefetch href="/projects">
        <a className={pathname === "/projects" ? "active" : undefined}>
          projects
        </a>
      </Link>

      <Link prefetch href="/work">
        <a className={pathname === "/work" ? "active" : undefined}>
          work
        </a>
      </Link>
      
      <span className="capsule" />
    </nav>

    <style jsx>{`
      nav {
        position: relative;
        display: flex;
      }

      a {
        color: #fff;
        text-decoration: none;
        padding: 10px;
        position: relative;
        z-index: 2;
      }

      .capsule {
        opacity: 0;
        position: absolute;
        z-index: 1;
        top: 5px;
        left: -30px;
        width: 60px;
        height: 40px;
        border-radius: 2px;
        display: block;
        background-color: rgba(255, 255, 255, 0.2);
        transition: 0.3s;
      }

      a:hover ~ .capsule {
        opacity: 1;
      }

      a:nth-child(1):hover ~ .capsule {
        left: 0;
        width: 62px;
      }

      a:nth-child(2):hover ~ .capsule {
        left: 63px;
        width: 81px;
      }

      a:nth-child(3):hover ~ .capsule {
        left: 144px;
        width: 69px;
      }

      a:nth-child(4):hover ~ .capsule {
        left: 214px;
        width: 61px;
      }

      .active {
        position: relative;
      }

      .active::before {
        content: "";
        display: block;
        position: absolute;
        bottom: 10px;
        left: 10px;
        right: 10px;
        height: 0;
        border-bottom: 1px dashed #f5359e;
      }

      @media (max-width: 767px) {
        .capsule {
          display: none;
        }
      }

      @media (max-width: 767px) and (orientation: portrait) {
        nav {
          justify-content: center;
        }
      }

      @media (max-width: 767px) and (orientation: landscape) {
      }
    `}</style>
  </header>
);

export default Header;
