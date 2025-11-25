# Formatting

**Formatting** means the way content is laid out and styled—sometimes adding additional emphasis or meaning to the words. This section is organized alphabetically and applies to content in product UI.

For a full breakdown of Superhuman's approach to grammar and usage in other external-facing content, visit the Superhuman Company Style Guide.

## Abbreviations

Spell out words fully in product UI when possible.

Common shortenings like “info” and “admin” are encouraged—do not use a period for this kind of normalized abbreviation.

For most acronyms and initialisms, style with capital letters and no periods. One exception is [file formats](#file-extensions): File formats are written in lowercase and get an initial dot (example: .csv).

## Capitalization

Most UI text should be written in sentence case. This helps users scan information at a glance. Of course, proper nouns and other names are capitalized, but for the most part, avoid Title Case and ALL CAPS.

Text written in ALL CAPS is known to seem like shouting, while both all caps or title case can increase the cognitive load for users. (Also, all caps aren’t accessible.) In short, our brains are used to reading lowercase text most often, so we use lowercase text in the UI.

In product UI, we use sentence case for Buttons.

## Examples

Use “Example:” to offer a universal and inclusive example of an expected input. It’s OK to provide both instructions and an example if space allows.

We set this guideline to avoid:

* Latin abbreviations, like “i.e.” or “e.g.,” in the UI
* Confusion of “Ex.” as meaning “exercise” or being used as a qualifier, like in “ex-boyfriend”

Examples used as placeholder text in an input should be very rare. One acceptable example is within an empty Search Field.

## File extensions

Use a period at the start with lowercase letters for all file format abbreviations.

## Headings and titles

A heading’s purpose is to describe a section of related content. Headings often appear in [Modals](/components/modal), settings menus, and wherever a page displays structured information. For the entire context of writing, designing, and coding headings, [visit the Heading component documentation](/components/heading).

Headings are automatically styled in bold by the Heading component.

### How to write and format headings in product UI

| Do | Don't |
|----|-------|
| Keep heading text short, descriptive, and scannable. | Do not use long text, such as an entire paragraph, as a heading. |
| Reduce internal and end punctuation when possible. Avoid colons and dashes. | Do not use end punctuation except for question marks (?) or an even more rare exclamation point (!). |
| Use sentence case. | Do not use Title Case or ALL CAPS. |


**An exception:** Headlines and post titles for ads, emails, landing pages, and blogs have other rules available as part of the Superhuman Company Style Guide.

## Keyboard shortcuts

Keyboard shortcuts associated with an element are often displayed in a [Tooltip](/components/tooltip/) to help users understand these hidden functionalities.

Capitalize the first letter of each word in a key name. If you use “+” to separate keys in a combination shortcut, do not use spaces between the plus sign and key names. The word “key” is not required unless it clarifies.

* **Shorten:** Alt, Ctrl, Del, Esc, Fn
* **Spell out:** Most key names, especially Enter, Option, Shift, Tab, and the Up, Down, Right, or Left Arrows
* **Use a symbol:** Only for Command (⌘)
* **Use numerals:** For all numbers, following our [style guidance on numbers](/content/style/numbers#always-use-numerals)

Shortcut keys are usually different on Mac versus Windows. Make sure shortcuts are dynamic based on the operating system or tailored to the conventions of a specific system. For example, “Option” on Mac is “Alt” on Windows. When you can’t identify a user’s OS, provide both variants of the shortcut.

## Links

Links need to make clear where a user will be taken or what action will occur when the link is activated. For a high-quality experience and accessibility requirements, it’s important to avoid “click here” and other generic constructions.

For the entire context of writing, designing, and coding Links, [visit the Link component documentation](/components/link/#writing).

## Lists

Lists are a helpful writing tool because they:

* Emphasize important ideas
* Increase the readability of text by simplifying long sentences or paragraphs
* Give context to instructions that need to be followed in a specific order

**Lists organize the overwhelming**, to paraphrase David Wallechinsky, a co-author of *The Book of Lists*.

### Types of lists

Lists can be unordered (bulleted) or ordered (numbered).

* Use an **unordered list** when the meaning would not change if the items were in a different order.
* Use an **ordered list** to show that following the items in sequence will matter for successfully completing a task.

### Writing lists

Follow these principles to write lists that are logical, consistent, and, above all, clear.

**How to write and format lists in product UI**

| Do | Example | Don't | Example |
|----|---------|-------|---------|
| Include at least two items in a list. | Lists should include:<br/>- At least two items<br/>- Usually fewer than 10 items | Do not use a list for a single item. Instead, rewrite the information as a sentence in plain text. | Lists should include:<br/>- At least two items |
| Maintain a parallel structure and verb tense for all list items. | If you're giving instructions, start with an imperative verb.<br/>1. Go to **Settings**<br/>2. Select **Writing > Language settings**<br/>3. Update your preferred English dialect | Do not mix writing structures or verb tense within a list. | This is a bad example of a list.<br/>- Was written in past tense<br/>- Do something!<br/>- Why is a question here?<br/>- Yet another style now |
| Use end punctuation for all list items if most are complete sentences. If most of the list items are fragments, then omit end punctuation in all list items. | Greetings in American English include:<br/>- Hello<br/>- Hey, nice to see you<br/>- Howdy | Do not mix punctuation use within a list. | This is another bad example.<br/>- Hello<br/>- Hey, nice to see you.<br/>- Howdy |
| For unordered lists, place the items in logical order from first to last or in order of importance from greatest to least. For ordered lists, make sure the sequential order is achievable. | Weekly to-do list:<br/>- Buy groceries<br/>- Feed the cat<br/>- Play with the cat<br/>- Eat a sweet treat | Do not use unsorted lists that would seem unusual or cause confusion for a user. | Some random dates in no particular order.<br/>- May 5<br/>- February 22<br/>- December 31 (New Year's Eve)<br/>- April 16<br/>- August 9<br/>- February 21 |
| Use body text to introduce the theme or topic of listed information. | **Weekdays**<br/><br/>Days of the week other than Saturday or Sunday include:<br/>- Monday<br/>- Tuesday<br/>- Wednesday | Do not use a heading to lead directly into a list. | **Days of the week:**<br/><br/>- Monday<br/>- Tuesday<br/>- Wednesday |
| Maintain the same font size and line spacing in a list as in the text surrounding it. | Lists and surrounding text should have the same:<br/>- Font size<br/>- Line height | Do not use a different font size or line spacing from the surrounding text. | Lists and surrounding text should have the same:<br/>**- Font size**<br/>**- Line height** *(text shown larger)* |
| Keep lists in product UI to a single level for readability. Consider moving some of the highest-level info out of the list as an introductory sentence. | In this lesson, you'll learn how to write different kinds of lists.<br/>- Ordered lists<br/>- Unordered lists<br/><br/>You'll learn how to write link text, too.<br/>- Standalone links<br/>- Inline links | In general, do not use nested lists in product UI. This can appear too much like an outline and lacks the clarity required to adequately inform users of information. | In this lesson, you will learn to:<br/>- Write lists<br/>  - Ordered<br/>  - Unordered<br/>- Write link text<br/>  - Standalone<br/>  - Inline |

## Text styles (bold, italic, etc.)

Apply text styles in moderation.

Consider an example where all the text in a long paragraph is displayed in **bold**. Nothing there receives the intended emphasis of a bold font weight. By contrast, applying bold to only one or two words brings those key concepts to the foreground, like **visual anchors** for people to find their way.

To learn about when to apply text styles in context, refer to the [Text](/components/text#style) and [Heading](/components/heading#typography) components.

## Mentioning UI elements

Most interactions should be obvious without further explanation, such as activating a Button or turning on a Switch. We also know that sometimes it’s necessary to guide a user down a certain path, for example, during new user onboarding or when a feature needs to be opted into. Use these principles when mentioning UI elements in the product itself.

### Icons and emoji

Use the semantic names for icons and emoji in their more readable form (without hyphens or underscores) in product content. You can find the names in our [Iconography library](/foundations/iconography/#interface) and in Figma components.

Icons and especially emoji are perceived differently by different users, so we describe what they do or communicate rather than what they look like. Visual descriptions often lead to disjointed descriptions for the same icon in different areas of the product—an undesirable outcome.

### Visible UI text

**Bold** any visible UI text used as part of instructions within the product. Do not use quotation marks to indicate UI text. Maintain the same casing and punctuation as shown in the original UI text.

Avoid using component names, such as “Button” or “Text Field,” in descriptions. These and similar terms are design jargon not meant for or understood by all of our users.

### Outside of the product

There’s often a need to describe how to use the UI outside of the product. For example, in blog posts or support articles.

When writing procedures for materials outside of the product, follow the Support Copy Style Guide and other content within the Company Brand Style Guide.
