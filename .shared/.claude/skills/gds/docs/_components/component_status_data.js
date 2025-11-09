// @ts-check

/**
 * @typedef {'available' | 'inProgress' | 'inBeta' | 'notAvailable' | 'notApplicable'} ComponentStatus
 */

/** @type {{ name: string, type?: 'utility' | 'component', description: string, status: { figma: ComponentStatus, webReact: ComponentStatus, docs?: ComponentStatus, accessibility?: ComponentStatus, since: string, updated: string } }[]} */
export const componentStatusData = [
  {
    name: "Accordion",
    description:
      "An accordion is a container that users can expand or collapse to show or hide information.",
    status: {
      figma: "available",
      webReact: "available",
      docs: "available",
      accessibility: "available",
      since: "6.30.0",
      updated: "6.30.0",
    },
  },
  {
    name: "Badge",
    description:
      "A Badge displays numeric values, such as tallies that are calculated programmatically.",
    status: {
      figma: "available",
      webReact: "available",
      since: "4.0.0",
      updated: "6.25.0",
    },
  },
  {
    name: "Box",
    description: "Box is a primitive component with easy access to GDS tokens.",
    status: {
      figma: "notApplicable",
      webReact: "available",
      since: "6.20.0",
      updated: "6.20.0",
    },
  },
  {
    name: "Branded Loader",
    description:
      "A Branded Loader displays pulsating brand shapes to indicate an action in progress or loading content.",
    status: {
      figma: "available",
      docs: "available",
      accessibility: "available",
      webReact: "available",
      since: "6.18.0",
      updated: "6.19.0",
    },
  },
  {
    name: "Button",
    description: "A Button allows users to take an action.",
    status: {
      figma: "available",
      webReact: "available",
      since: "5.0.1",
      updated: "6.43.0",
    },
  },
  {
    name: "Button as Link",
    description:
      "A ButtonAsLink visually looks like a Button—but functions like a Link, allowing for navigation among pages or URLs.",
    status: {
      figma: "inProgress",
      webReact: "available",
      since: "6.19.0",
      updated: "6.25.0",
    },
  },
  {
    name: "Checkbox",
    description: "A Checkbox allows users to make multiple selections from a set of options.",
    status: {
      figma: "available",
      webReact: "available",
      since: "5.3.0",
      updated: "6.34.0",
    },
  },
  {
    name: "Circular Loader",
    description:
      "A Circular Loader indicates a portion of the UI that is currently loading information or data.",
    status: {
      figma: "available",
      docs: "available",
      accessibility: "available",
      webReact: "available",
      since: "6.18.0",
      updated: "6.19.0",
    },
  },
  {
    name: "Color Scheme Provider",
    type: "utility",
    description: "ColorSchemeProvider sets the color scheme (aka theme) for all contained elements",
    status: {
      figma: "notApplicable",
      docs: "inProgress",
      accessibility: "notApplicable",
      webReact: "inBeta",
      since: "6.12.0",
      updated: "6.26.0",
    },
  },
  {
    name: "Combobox",
    description:
      "Combobox allows the user to filter a list when choosing an option. Users can type the full option, search for an option, or select an option from the list.",
    status: {
      figma: "available",
      webReact: "available",
      accessibility: "inProgress",
      since: "6.4.0",
      updated: "6.19.1",
    },
  },
  {
    name: "Icon Button",
    description: "Icon Buttons can be used to take actions.",
    status: {
      figma: "available",
      webReact: "available",
      since: "5.0.1",
      updated: "6.24.0",
    },
  },
  {
    name: "Icon",
    description:
      "Icons can be used to add visual prominence to other components or help improve understanding and recognition of actions.",
    status: {
      figma: "available",
      webReact: "available",
      since: "5.0.1",
      updated: "6.42.0",
    },
  },
  {
    name: "Illustration",
    description:
      "The Illustration component is a container that can display an illustration from the Illustration library and manipulate it with properties.",
    status: {
      figma: "available",
      webReact: "available",
      since: "6.26.0",
      updated: "6.30.0",
    },
  },
  {
    name: "Flex",
    description: "Flex makes it easy to create flexbox layouts with GDS tokens.",
    status: {
      figma: "notApplicable",
      webReact: "available",
      since: "5.4.0",
      updated: "6.26.0",
    },
  },
  {
    name: "Form",
    description: "Forms are used to ask for information from users.",
    status: {
      figma: "available",
      webReact: "available",
      since: "5.3.0",
      updated: "6.14.0",
    },
  },
  {
    name: "Heading",
    description: "A Heading is used for page and section titles to describe document structure.",
    status: {
      figma: "available",
      webReact: "available",
      since: "6.2.0",
      updated: "6.24.0",
    },
  },
  {
    name: "Link",
    description: "A Link is used for navigation.",
    status: {
      figma: "available",
      webReact: "available",
      since: "6.7.0",
      updated: "6.7.0",
    },
  },
  {
    name: "Live Announcer",
    type: "utility",
    description:
      "Live Announcer provides real-time updates to users who rely on assistive technologies such as screen readers.",
    status: {
      figma: "notApplicable",
      webReact: "inBeta",
      since: "6.18.0",
      updated: "6.24.1",
    },
  },
  {
    name: "Logo",
    description: "Logo is a component that enables the display of different variants of Superhuman, Grammarly, Coda, and Mail logos.",
    status: {
      figma: "available",
      docs: "available",
      webReact: "available",
      accessibility: "available",
      since: "6.42.0",
      updated: "6.43.0",
    },
  },
  {
    name: "Menu",
    description: "A Menu is used for navigation or presenting actions that do not collect data.",
    status: {
      figma: "available",
      docs: "available",
      webReact: "available",
      accessibility: "available",
      since: "6.20.0",
      updated: "6.42.0",
    },
  },
  {
    name: "Modal",
    description:
      "A Modal appears as an overlay on a page to provide users with additional information or ask them to complete a task without navigating to a new page.",
    status: {
      figma: "available",
      webReact: "available",
      since: "5.3.0",
      updated: "6.39.0",
    },
  },
  {
    name: "Plan Tag",
    description: "A PlanTag indicates a type of Grammarly plan.",
    status: {
      figma: "available",
      webReact: "available",
      since: "6.16.0",
      updated: "6.29.0",
    },
  },
  {
    name: "Popover",
    description: "A Popover is an overlay that displays additional content or actions in context.",
    status: {
      figma: "available",
      webReact: "available",
      since: "6.10.0",
      updated: "6.15.0",
    },
  },
  {
    name: "Portal Container Provider",
    type: "utility",
    description:
      "PortalContainerProvider specifies where portals for overlay components such as Modal should be rendered.",
    status: {
      figma: "notApplicable",
      accessibility: "notApplicable",
      webReact: "inBeta",
      since: "6.12.0",
      updated: "6.12.0",
    },
  },
  {
    name: "Radio Group",
    description: "Radio Groups allow users to make a single selection from two or more options.",
    status: {
      figma: "available",
      webReact: "available",
      since: "4.0.0",
      updated: "6.29.0",
    },
  },
    {
    name: "Rating",
    type: "component",
    description: "The Rating component allows users to express quick, lightweight feedback by selecting a rating from 1 to 5 stars.",
    status: {
      figma: "available",
      docs: "available",
      accessibility: "available",
      webReact: "available",
      since: "6.36.0",
      updated: "6.36.0",
    },
  },
  {
    name: "Screen Reader Only",
    type: "utility",
    description:
      "Screen Reader Only is a utility component that makes its content visible only to screen-readers and other assistive technology.",
    status: {
      figma: "notApplicable",
      webReact: "available",
      since: "6.10.1",
      updated: "6.21.1",
    },
  },
  {
    name: "Search Field",
    description:
      "A Search Field allows users to search a given list or database for a particular item.",
    status: {
      figma: "available",
      webReact: "available",
      since: "5.0.1",
      updated: "6.23.0",
    },
  },
  {
    name: "Select",
    description: "A Select dropdown allows users to choose a single data value to be submitted.",
    status: {
      figma: "available",
      docs: "available",
      accessibility: "available",
      webReact: "available",
      since: "6.15.0",
      updated: "6.15.0",
    },
  },
  {
    name: "Skeleton Loader",
    description:
      "Skeleton Loader gives users an abstract preview of information that will be loaded and helps prevent jumps in the UI.",
    status: {
      figma: "available",
      webReact: "available",
      since: "6.13.0",
      updated: "6.27.0",
    },
  },
  {
    name: "Sticker",
    description: "A Sticker is a static element to communicate a discount for Grammarly Pro.",
    status: {
      figma: "available",
      webReact: "available",
      since: "6.16.0",
      updated: "6.25.0",
    },
  },
  {
    name: "Switch",
    description: "A Switch allows users to choose between two binary options, such as on and off.",
    status: {
      figma: "available",
      webReact: "available",
      since: "6.1.0",
      updated: "6.33.2",
    },
  },
  {
    name: "Tabs",
    description:
      "Tabs allow users to navigate between related groups of content that are at the same level of hierarchy on a page.",
    status: {
      figma: "available",
      webReact: "available",
      since: "6.6.0",
      updated: "6.22.0",
    },
  },
  {
    name: "Tag",
    description: "A Tag is used to classify or draw attention to content.",
    status: {
      figma: "available",
      webReact: "available",
      since: "4.0.0",
      updated: "6.34.0",
    },
  },
  {
    name: "Text",
    description: "Text is used for text content throughout the product.",
    status: {
      figma: "available",
      webReact: "available",
      since: "6.2.0",
      updated: "6.35.1",
    },
  },
  {
    name: "Text Field",
    description:
      "A Text Field is an input field that allows users to type a single line of text, including numbers and symbols.",
    status: {
      figma: "available",
      webReact: "available",
      since: "5.0.1",
      updated: "6.24.0",
    },
  },
  {
    name: "Textarea",
    description: "A Textarea is an input field that allows users to type multiple lines of text.",
    status: {
      figma: "available",
      webReact: "available",
      since: "5.3.0",
      updated: "6.34.0",
    },
  },
  {
    name: "Toast",
    description: "A Toast informs users of a process that has been or will be performed.",
    status: {
      figma: "available",
      docs: "inProgress",
      accessibility: "inProgress",
      webReact: "available",
      since: "6.2.0",
      updated: "6.19.0",
    },
  },
  {
    name: "Tooltip",
    description:
      "A Tooltip displays a short word or phrase describing the purpose of its trigger. It is displayed upon hovering over or tabbing to a trigger.",
    status: {
      figma: "available",
      webReact: "available",
      since: "4.0.0",
      updated: "6.33.3",
    },
  },
  {
    name: "Verification Code",
    description:
      "A Verification Code accepts a one-time code containing only numbers or both letters and numbers.",
    status: {
      figma: "available",
      webReact: "available",
      accessibility: "available",
      since: "6.20.0",
      updated: "6.24.0",
    },
  },
];
