# Empty states

An empty state is a transitional moment displayed when there is no other content.

:::caution Editor’s note:
The illustrations shown here represent the product’s current art style. This page will continue to be updated as the Brand Creative team builds out a new illustration style and library.
:::

**Zero state:** When a user opens a new document in the Grammarly Editor or Google Docs, the absence of text leaves the product with no suggestions to offer. In this example, an empty state communicates that Grammarly is eager to help with suggestions once the user starts writing.

## Anatomy

![Anatomy diagram of an empty state](/img/patterns/empty_state_anatomy.svg)

IllustrationHeadingDescription (Required)ActionsFooter

## Usage

Empty states play a vital role in UI because they serve as guides, communicating the absence of typical content and giving users suggestions for what to do next.

### When to use

Use the empty state pattern to show a temporary message when there's no other content available. Common use cases include:

* A user’s first interaction with a feature or product
* When a user has completed all available tasks
* An error preventing content from appearing
* Access restrictions like sign-in requests, blocked content, or paywalls
* No matching search or filter results

### Where to use

Empty states can replace a variety of surfaces—full pages, sidebars, data tables, and more. The specific layout, font size, and alignment should reflect the context.

When multiple empty states appear together, such as in tiles in a dashboard, do the following:

* Reduce the use of illustrations and headings when possible.
* Maintain a single primary Button per surface. If multiple Buttons are needed, consider using ghost, secondary, or tertiary Buttons instead.

![Headings for "Profile" and "Email preferences" have more emphasis than the text underneath them.](/img/patterns/empty_state_usage_dashboard.svg)

**Zero state:** It’s helpful to clarify why data tables or other UI elements, like Analytics, lack content before a user has started using the product. Carefully consider information hierarchy when designing empty states that appear together.

### Alternatives

Although an empty state is a handy tool, it’s not strictly necessary to use one when there’s no content. Before jumping to this as a catchall solution, consider other options with your team. You might use one of these suggestions or another design strategy:

* **Interactive content:** Launch a user directly into setup with interactive content and controls. For instance, instead of showing a **Create** Button in an empty state, place the creation UI directly in the space to eliminate friction.
* **An onboarding Modal or Popover:** Offer helpful tips in an overlay component when they’re relevant only temporarily during the first use. This can be in addition to an empty state.
* **Progress indicators:** If content is loading dynamically, use progress indicators to inform a user that something is happening in the background. This includes components like a [Circular Loader](/components/circular-loader), a [Skeleton Loader](/components/skeleton-loader), or a progress bar.

## Best practices

* In compact spaces, prefer using only a description rather than only a heading.
* Be straightforward as to how a user can move past an empty state.
* Use language that is positive and actionable instead of negative or closed off.
* Use descriptive alt text for illustrations and maintain sufficient color contrast.
* Replace the underlying content entirely to avoid accessibility issues.

## Building blocks

### Illustration

#### Usage

Use illustrations with a clear intention to support the meaning of messaging, to demonstrate complex or abstract concepts, and to guide users toward the best action to take next. Illustrations can enhance a user’s experience by adding delight during positive moments. They also help soften the impact of frustrating moments, such as error states.

To see all available options, [view our Illustration library](/foundations/illustrations). To learn more about how we design and use illustrations at Grammarly, [visit the Brand Vault](https://brand.grammarly.com/document/6#/visual-language/illustration).

**Do not use an illustration when:**

* There is no logical connection to the surrounding text.
* It does not augment the meaning of other information.
* Space is limited.

**Do not use** an Icon in place of an illustration.

![Headings for "Profile" and "Email preferences" have more emphasis than the text underneath them.](/img/patterns/empty_state_plagiarism_illustration.svg)

**Success state:** An illustration of a scroll and gold award appears alongside a message celebrating the absence of plagiarism. This is a rare case where negative language makes sense to reflect the desired outcome.

#### Celebration

Recognize achievements or progress with illustrations that celebrate the moment, for instance, after a user has cleared all the suggestions in a document. Other celebratory moments occur when a user does the following:

* Successfully reviews suggestions or completed tasks
* Achieves goals or milestones
* Has no plagiarism found in their text

#### Education

Enhance opportunities to educate a user about how to do something or complete a task with an illustration, as in the following cases:

* First use of a feature or product
* Error messages

#### Opportunity

Accompany special promos or upgrades with an illustration to highlight and soften the offer, for example, alongside the following:

* Subscription plan upsells in product
* Free trial offers

#### Clarity

Simplify messages about complex or abstract concepts with an illustrated companion. Some examples of concepts that can feel more tangible with the addition of an illustration include:

* Trust and security
* Generative AI
* Enterprise or technical features

### Heading

#### Usage

A heading provides a quick, bolded explanation to a user. Use a heading to:

* Summarize why an empty state has occurred.
* Provide a critical next step.
* Celebrate an achievement with emphasis.

An empty state will most often contain an h3 or h4 heading element, but remember to progress through heading levels in hierarchical order from most to least important without skipping any. Props are available to style font size independently from the semantic tag to allow for flexibility.

Here’s one example of a possible hierarchy structure:

* **h1:** Page title
* **h2:** Section heading
* **h3:** Empty state heading

Continue learning:

* [Visit the Heading component doc](/components/heading/) to learn about designing, coding, and writing headings.
* [Visit the accessibility wiki on Confluence](https://grammarly.atlassian.net/wiki/spaces/DP/pages/3483896692/Writing+accessible+names+and+labels) to learn about writing accessible names and labels.

#### Examples

![Headings for "Profile" and "Email preferences" have more emphasis than the text underneath them.](/img/patterns/empty_state_heading1.svg)

**No results:** The keyboard entry “\asd” does not match any snippet shortcuts. The heading “No snippets found” is all a user needs to understand why an empty state is displayed, and the description content provides a path forward.

!\[Headings for “Profile” and “Email preferences” have more emphasis than the text underneath them.]\(/img/patterns/empty\_state\_heading2.svg)

**Error state:** When a feature requires access that a user hasn’t granted, an empty state makes clear that a user needs to take action to progress. In this example, the heading highlights that microphone access is necessary to begin using the Voice Composer feature.

### Description

#### Usage

A description should be considered a required element, while all other elements are optional—the description is the core element of an empty state. Use only a description in compact surfaces where you want less content or when multiple empty states could appear at the same time.

Consider listing any tips, actions, or links that would help a user understand and navigate their way forward. Either the content or context should make the following apparent to a user:

* What’s happening
* Why it’s happening
* How to transition out of the empty state

#### Examples

!\[Headings for “Profile” and “Email preferences” have more emphasis than the text underneath them.]\(/img/patterns/empty\_state\_description1.svg)

**Error state:** In the case of this simple error message about the status of a user’s internet connection, a description explaining the system status and its impact on the user provides all the necessary information without embellishment.

!\[Headings for “Profile” and “Email preferences” have more emphasis than the text underneath them.]\(/img/patterns/empty\_state\_description2.svg)

**Error state:** Illustrations and additional headings would clutter the information hierarchy of multiple tables or graphs shown together. The same status message applies to each tile, and a focus on a possible resolution keeps the user moving forward.

### Buttons

#### Usage

Make it easy to take any possible actions to resolve an empty state by including Buttons that move a user forward. Some common Button actions include:

* **Create \[something]**
* **Go back**
* **Learn more**
* **Refresh**
* **Sign in**
* **Update**
* **Upgrade**

#### Variant

Use the Button variant appropriate for your context—primary, secondary, tertiary, ghost, critical, Pro, or Enterprise. Review [the Button documentation](/components/button/) to help you decide which to use.

For instance, you could pair a primary **Create** Button with a secondary **Learn more** link styled as a Button. But remember that there should be only a single primary Button per surface to indicate the highest-priority action.

#### Examples

!\[Headings for “Profile” and “Email preferences” have more emphasis than the text underneath them.]\(/img/patterns/empty\_state\_button1.svg)

**Zero state:** The **Create group** Button allows a user to take the highest-priority action during first use. This duplicates an identical affordance in the page header to reinforce the importance of this action in context.

!\[Headings for “Profile” and “Email preferences” have more emphasis than the text underneath them.]\(/img/patterns/empty\_state\_button2.svg)

**Error state:** The **Update Grammarly** Button allows a user to fix an interruption of service caused by a new version. Without this Button, they’d have to navigate to an app store or to Superhuman's website to restart the service.

### Footer

#### Usage

A footer can present tangential or tertiary content that relates to a user’s goal but isn’t the primary focus. You might use a footer to do the following:

* Provide customer support information.
* Add Links that take a user out of the product.
* Highlight key information relevant to the experience, such as data or privacy information.
* Provide a way to access additional features behind a paywall.

#### Examples

!\[Headings for “Profile” and “Email preferences” have more emphasis than the text underneath them.]\(/img/patterns/empty\_state\_footer1.svg)

**Success state:** A footer gives distinct context to content by teasing features that are available only with a Pro plan. Although related, it’s not directly relevant to the empty state celebrating a user’s success.

!\[Headings for “Profile” and “Email preferences” have more emphasis than the text underneath them.]\(/img/patterns/empty\_state\_footer2.svg)

**404 page error:** The content here brings each attribute into more focus. The wordplay is appropriately on theme. Links in the footer enhance the empty state because they focus on what a user might want next in this ambiguous context.

## Accessibility

There are a few key considerations to make empty states accessible. If you have any questions about a specific implementation, reach out in [#accessibility on Slack](https://grammarly.enterprise.slack.com/archives/C02SX4RK5EU).

* **Color contrast:** Make sure text has at least a 4.5:1 color contrast compared to its background for readability.
* **Alt text:** Provide descriptive alt text for illustrations or images to assist people who use a screen reader.
* **Focus order:** Allow keyboard navigation for users who rely on it. Set up the page’s focus order in a logical sequence that helps screen readers move through information and take action to resolve the empty state quickly.

When a surface is empty, replace the content entirely. For example, an empty state should replace the row and column headers in a table in addition to the cells. This avoids having a screen reader vocalize the unnecessary headers before getting to the valuable empty state content.

## Writing

While all [brand tones](/content/voice-and-tone) should be present in your writing, focus on language that is **empowering** in this context. A frequent challenge is framing content so that it moves a user's attention away from the product's emptiness and onto the next step.

For example, it's generally not helpful to explain what a user does not have or has not done yet. Instead, reframe content to focus on a recommended action or a key benefit of the underlying feature.

| Do | Don't |
|----|-------|
| ![Use positive language that encourages a user. Reinforce what they have achieved or what they can do next.](/img/patterns/empty_state_writing_do1.svg)<br/>Use positive language that encourages a user. Reinforce what they have achieved or what they can do next. | ![Do not use negative statements that focus on emptiness or a lack of content.](/img/patterns/empty_state_writing_dont1.svg)<br/>Do not use negative statements that focus on emptiness or a lack of content. |

Likewise, consider an empty state that appears after a user has accepted or dismissed every suggestion offered to them. It's OK to sprinkle in some warmth, but you should carefully organize information and prioritize clarity of system status.

| Do | Don't |
|----|-------|
| ![Use a heading to explain the system status in as few words as possible.](/img/patterns/empty_state_writing_do2.svg)<br/>Use a heading to explain the system status in as few words as possible. | ![Do not prioritize brand moments over information. Think of this kind of playful text as tangential to a user's primary goal.](/img/patterns/empty_state_writing_dont2.svg)<br/>Do not prioritize brand moments over information. Think of this kind of playful text as tangential to a user's primary goal. |

To elaborate further, while an idiom like “You’re on point” is charming and on-brand and matches well with the illustration, this could easily be unclear to some of Superhuman's core audience—for example, English-language learners who have not yet been exposed to this saying. By leading with “You reviewed all suggestions” in the heading, we can significantly reduce the risk of a user missing vital information about system status.

## Related patterns

* **Loading states:** Indicates to a user that content is loading or an action is in progress. For example, a [Circular Loader](/components/circular-loader) or [Skeleton Loader](/components/skeleton-loader) component.
* **Error states:** Notifies a user when there is an error or a problem that prevents content from being displayed.
* **Placeholder content:** Appears temporarily to show that a selection or input has yet to be made.
