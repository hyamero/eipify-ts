/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import React from "react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  const breakpoints = [576, 768, 992, 1200];
  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
  return (
    <footer
      css={css`
        width: 100vw;
        position: absolute;
        bottom: 0;
        overflow: hidden;

        ul {
          padding: 10px;
          list-style: none;

          .link-info {
            font-weight: 300;
            opacity: 0.7;
          }

          li {
            font-size: 1rem;
            color: #e0e0e0;
            font-weight: 300;

            ${mq[1]} {
              font-size: 0.7rem;
            }

            a {
              text-decoration: none;
              color: #e0e0e0;
              transition: 0.1s linear;
              font-size: 0.9rem;

              ${mq[1]} {
                font-size: 0.7rem;
              }

              &:hover {
                color: #7fb8ff;
              }
            }
          }
        }
      `}
    >
      <ul>
        <li className="link-info">
          <a
            href="https://support.google.com/websearch/answer/1696588"
            target="_blank"
          >
            Learn more about public IP
          </a>
        </li>
        <li className="footer-info">
          <a href=""></a>
          &copy; 2021 Eipify ⫽ Dale B. All Rights Reserved.
        </li>
      </ul>
    </footer>
  );
};
