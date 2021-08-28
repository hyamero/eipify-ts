/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { BsArrowRightShort } from "react-icons/bs";

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
        }

        .connect {
          display: flex;

          &-icons {
            font-size: 1rem;
          }

          &-btn {
            display: flex;
            align-items: center;
            margin-left: 1rem;
            padding: 0 5px 0 10px;
            border: 1px #e6ebf2 solid;
            border-radius: 25px;

            p {
              font-size: 1.2rem;
            }

            .icon-arrow {
              font-size: 1.6rem;
            }
          }
        }

        a {
          color: #fff;

          &:not(:last-child) {
            margin-right: 1rem;
          }

          .connect-icons-icon {
            padding: 5px;
            border: 1px #e6ebf2 solid;
            border-radius: 50%;

            &:hover {
              background: #1f2d3e;
            }
          }
        }
      `}
    >
      <h1>eipify.</h1>
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
        {/* <div className="connect-btn">
          <p>connect</p>
          <BsArrowRightShort className="icon-arrow" />
        </div> */}
      </div>
    </nav>
  );
};
