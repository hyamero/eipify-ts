/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { BsArrowRightShort } from "react-icons/bs";
import { motion } from "framer-motion";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        max-width: 1280px;
        padding-top: 20px;
        height: 4vw;
        margin: auto;
        color: #e6ebf2;

        h1 {
          font-weight: 600;
          cursor: default;
        }

        .connect {
          display: flex;

          &-icons {
            font-size: 1rem;
          }

          &-repo-btn {
            display: flex;
            align-items: center;
            margin-left: 1rem;
            padding: 3px 5px 3px 10px;
            border: 1px #e6ebf2 solid;
            border-radius: 25px;
            cursor: pointer;
            transition: 0.1s linear;

            &:hover {
              background: #1f2d3e;
            }

            p {
              font-size: 1rem;
            }

            .icon-arrow {
              font-size: 1.5rem;
            }
          }
        }

        .connect-icons a {
          color: #e6ebf2;
          position: relative;
          top: 3px;

          &:not(:last-child) {
            margin-right: 1rem;
          }

          .connect-icons-icon {
            padding: 5px;
            border: 1px #e6ebf2 solid;
            border-radius: 50%;
            transition: 0.1s linear;

            &:hover {
              background: #1f2d3e;
            }
          }
        }

        .repo-link {
          text-decoration: none;
          color: #e6ebf2;
        }
      `}
    >
      <motion.h1 whileHover={{ rotate: -20 }}>eipify.</motion.h1>
      <div className="connect">
        <div className="connect-icons">
          <a href="https://www.instagram.com/dale.ps/" target="_blank">
            <AiOutlineInstagram className="connect-icons-icon" />
          </a>
          <a href="https://github.com/hyamero" target="_blank">
            <AiOutlineGithub className="connect-icons-icon" />
          </a>
          <a href="https://www.linkedin.com/in/daleban/" target="_blank">
            <RiLinkedinFill className="connect-icons-icon" />
          </a>
        </div>
        <a
          href="https://github.com/hyamero/Eipify-ts"
          target="_blank"
          className="repo-link"
        >
          <div className="connect-repo-btn">
            <p>visit repo</p>
            <BsArrowRightShort className="icon-arrow" />
          </div>
        </a>
      </div>
    </nav>
  );
};
