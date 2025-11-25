# Writing conventions for Origin documentation

We use these conventions to keep a consistent style across new documentation pages in GDS. These writing conventions should not be applied to the product. Instead, [reference the Content Design System in Origin](/content/).

##

* In Figma components, use placeholder text that names what the text element is. For example, “Label” is used as the Text Field’s placeholder label.
  * **Do not use** text from a specific case unless the component's use case is meant to be specific and the text is always the same.
* When writing documentation, follow the [Origin values](/about-origin/#origin-values) and [Company Brand Style Guide](https://coda.io/d/Grammarly-Style-Guide_dNw1zZnMEND/Grammarlys-Plans_su4UNXs7).
* Any guidelines that tell the implementer not to do something or use a particular component should also include a solution.
  * Format this add-on statement as “Instead, use \[other component name].”
  * Example: “Do not use a Badge to display text. Instead, use a Tag.”
* Avoid circular definitions.
  * Don’t: “Helper text is a piece of helpful text.”
  * Do: “Helper text provides additional information beyond the label to assist a user in successful task completion.”
* Use “a user” rather than “the user.” We emphasize a generic user (with “a”) rather than a specific user (with “the”) because we are speaking about all of them.
* Generally, our documentation tone is less formal, so we often use “you” to refer to those implementing components and “we” to refer to the Origin team
  * Example: “If you include a visible label above the Search Field, you do not have to use placeholder text.”

##

* Refer to components in the more readable form, not the component’s code name.
  * Radio Group instead of RadioGroup
  * Text Field instead of TextField
* Put component names in Title Case.
  * “A Badge,” not “A badge”
  * An identifier for a type of text, such as “legend” or “helper message,” should be written in lowercase (or with an initial cap at the start of a sentence).
* Use the plural form when it applies to multiples of a typically standalone item.
  * Do: “A Badge displays numeric values.”
  * Do: “Apply colors from the semantic palette to Badges based on their assigned purpose.”

##

* In general, the accessibility section of docs should not focus on the visuals because these are covered by the component already and can't be changed.
* Focus more on the things that can be manipulated in order to create a more accessible experience, such as the content of accessibility labels, hiding labels, and focus order.

##

* Follow alphabetical ordering in the list.
* List components that might be used instead of the current component.
  * Example: Radio Group mentions Checkbox and Switch, but wouldn't list Form.

##

* Aim for a 7th-grade or lower reading level.
* Check your Performance Score in Grammarly Editor. It's OK if it's above a 7th-grade reading level. This is an aspirational suggestion.

##

* Use quotes around UI text. Place punctuation outside the quotations unless the UI text includes punctuation in the product.
* For plain text, use curly apostrophes and quotes. [Learn how to create curly quotes in VS Code](https://mybyways.com/blog/visual-studio-code-key-bindings-for-curly-quotes).
* For `code snippets`, use straight apostrophes and quotes. In the API props tables, use a single straight apostrophe around possible values.
* Use end punctuation for full sentences or to distinguish two fragments. Omit end punctuation only if it’s a fragment floating on its own.

##

* Do not use a bulleted list for a single item. When there's only one item, write the text like normal paragraph text.
* For a single “Do not use when” statement, bold the “Do not use when” text. The same bold treatment is not needed for "Use when” statements because they appear immediately under the Usage title and have greater prominence.
* Where there are multiple “Use when” or “Do not use when” statements, create a bold heading with a colon and write the bulleted items as extensions of the statement.

##

* The whole story should be included in an image's caption. Readers should not need to read the surrounding text to get the full context of the image.
* For example, for the Button component, we use this schema for captions for each type:
  * \[Name of button] \[how it's used in example] \[how example relates to hierarchy of actions].
  * **Primary Button**: A primary Button is used for accepting a suggestion, the primary action within this Card. Although many Cards are visible, only one primary Button appears on each Card.

##

* When linking within Origin to a page, link the name of the foundation, component, or pattern.
* When linking to a section of a Origin page, use a descriptive statement. Example: "Learn how to write effective Tooltips."
* When linking to an outside website, make clear where the link goes. Example: "Learn about links on MDN."

##

* Follow the [Company Brand Style Guide](https://coda.io/d/Grammarly-Style-Guide_dNw1zZnMEND/Grammarlys-Plans_su4UNXs7) on inclusive language when writing docs.
* When writing about the `isDisabled` attribute:
  * It is appropriate to refer to the state of an element as “disabled” in the context of HTML for accuracy and alignment with the code. We align with [Shopify Polaris’ guidance](https://polaris.shopify.com/content/inclusive-language#recommended-language).
  * In headings, include “Disabled” to describe an element’s state to provide better search responses.
  * In body text, write around “disabled” when possible. Prefer language that identifies the “`isDisabled` attribute” and is descriptive of the state. We should avoid circular definitions and directly explain what this attribute does.
    * Example: “Use `isDisabled` to indicate that a user cannot focus, change, or interact with a Checkbox or Checkbox Group.”
