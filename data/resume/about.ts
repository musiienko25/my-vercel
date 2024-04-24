import { Section } from "../types";

const about: Section = {
  title: "ABOUT",
  subsections: [
    {
      body: [
        {
          type: "list",
          items: [
            // {
            //   type: "link",
            //   text: "dmytro-oplachko.com",
            //   href: "https://dmytro-oplachko.com",
            // },
            {
              type: "paragraph",
              items: [
                { type: "important", text: "Github: " },
                {
                  type: "link",
                  text: "github.com/debkh",
                  href: "https://github.com/debkh",
                },
              ],
            },
            {
              type: "paragraph",
              items: [
                { type: "important", text: "LinkedIn: " },
                {
                  type: "link",
                  text: "linkedin.com/in/dmytro-oplachko-5464514a/",
                  href: "https://www.linkedin.com/in/dmytro-oplachko-5464514a/",
                },
              ],
            },
            {
              type: "paragraph",
              items: [
                { type: "important", text: "Email: " },
                {
                  type: "link",
                  text: "dmitry.oplachko@faceit.com.ua",
                  href: "mailto:dmitry.oplachko@faceit.com.ua",
                },
              ],
            },
            {
              type: "paragraph",
              items: [
                { type: "important", text: "Phone: " },
                "+380687465394",
              ],
            },
            {
              type: "paragraph",
              items: [
                { type: "important", text: "Last Updated: " },
                "Mar 16, 2023",
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default about;
