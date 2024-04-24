import { Section } from "../types";

const projects: Section = {
  title: "PROJECTS",
  subsections: [
    {
      title: "Maxwell",
      description: "2020 - 2022 | React.js, Node.js, PostgreSQL, Shopify, AWS, Polaris",
      body: [
        {
          type: "list",
          items: [
            "Shopify extension development for improving contact with customers",
            "Shopify extension development for upsale",
          ],
        },
      ],
    },
    {
      title: "Smunch",
      titleHref: "https://github.com/debkh/juken",
      description: "2019-2020 | React.js, Node.js, PostgreSQL, Salesforce",
      body: [
        {
          type: "list",
          items: [
            "Virtual Canteen Startup based in Berlin, Germany",
          ],
        },
      ],
    },
    {
      title: "Buildup",
      // titleHref: "https://github.com/debkh/juken",
      description: "2017 | Angular.js, Node.js, PostgreSQL, Ag Grid, Bootstrap",
      body: [
        {
          type: "list",
          items: [
            "QA tool for builders, subcontractors and suppliers",
          ],
        },
      ],
    },
    {
      title: "Australian Government Immigration Portal",
      // titleHref: "https://github.com/debkh/juken",
      description: "2015 - 2016 | Angular.js, Node.js, PostgreSQL, Bootstrap",
    },
  ],
};

export default projects;
