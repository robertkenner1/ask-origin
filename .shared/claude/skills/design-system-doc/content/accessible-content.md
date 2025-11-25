# Accessibility in Content Design

The [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG) provide technical specifications for creating accessible digital experiences. Here, you'll find a summary of key points to consider when creating accessible content.

## Context on disabilities

Disabilities are not rare. In the U.S. alone, about [25% of the adult population lives with a disability](https://archive.cdc.gov/#/details?url=https://www.cdc.gov/media/releases/2018/p0816-disability.html).

The [CDC](https://www.cdc.gov/ncbddd/disabilityandhealth/disability.html) defines a disability as "any condition of the body or mind (impairment) that makes it more difficult for the person with the condition to do certain activities (activity limitation) and interact with the world around them (participation restrictions)."

Everyone experiences disabilities in a different way. Obviously, it would be impossible to capture the whole of this complex human experience in this guide, nor would it be appropriate to try. However, some context about disabilities is helpful to keep in mind when designing accessible products.

### Disability can be permanent, temporary, or situational

Everyone experiences some degree of disability at some point in their life. It may be a permanent disability, like ADHD. It may be a temporary disability, like a broken leg. Or it may be a situational disability, like poor cognitive functioning due to lack of sleep.

### Assistive technology vs. adaptive strategies

Our goal is to design products that work with assistive technology (like screen readers) as well as adaptive strategies—the ways a person might change their environment to make it more accessible.

**Assistive technology (AT):** Specialized software or hardware that helps people perceive and understand their environment. A screen reader, for example, will read the content of websites aloud or convert it to braille for a person who is blind.

**Adaptive strategies:** Preference settings in browsers, apps, and operating systems that can customize a user's experience. Someone with low vision, for example, may magnify a web page by 400% to read the information.

### Categories of disability

When designing for accessibility, it's helpful to think about five categories.

| Category | Related conditions | Helpful AT and adaptive strategies |
| --- | --- | --- |
| **Seeing** | Low vision, Blindness, Deafblindness, Color vision deficiency (color blindness) | Screen readers, Zoom/magnification settings, Font size or color settings, Brightness adjustment |
| **Moving** | Chronic pain, Paralysis or amputation, Physical injury, Cognitive or neurological conditions | Speech input, Specialized keyboards, Eye tracking devices, Assistive typing software, Touchscreen settings |
| **Thinking** | Autism, Dyslexia, ADHD, Many others | Reading software or browser extensions, Screen filters, Font size and color settings. Note: Many people who are neurodivergent don't use AT, so it's especially important to design for their needs. |
| **Hearing** | Hard of hearing, Deafness | Captions, Subtitles, Transcripts, Haptic feedback, Contact forms, Chatbots |
| **Speaking** | Neurological conditions that impair speech, Deafness, Cognitive disabilities, Physical injury, Many others | Contact forms, Emails, Chatbots, Captioned videos |

## Organizing information

Presenting information in a logical, consistent manner helps everyone—disabled or not—understand what they need to know. These techniques are particularly helpful for designing accessible content.

### Signposting

Signposts help a user navigate content by indicating where they are and what to expect next. Signposts may take the form of:

- Informative headings and logical heading hierarchy for content sections
- Breadcrumbs that indicate the user's navigation path
- Screen reader–only content to label or describe sections that are only distinguished visually

**Use headings, subheadings, and bullets to break up long blocks of text and make information more scannable and digestible.**

Do not display large walls of text—this makes it harder to scan high-level info and skip what's not needed.

### Consistency

Consistency, the agreement of parts among a whole, is critical for helping users understand and process information. Content should follow the pattern a user expects based on precedent or general convention. For instance:

- Parallel structure in headings, lists, and other components
- Consistent typography, casing, styling, and length
- Standard names for buttons and settings

## Writing

When written with attention to accessibility, product content will naturally be clear and understandable—accessible content helps everyone! Here are a few things to keep in mind:

- Aim for a 7th-grade reading level or lower. Shorter sentences and simpler vocabulary help reduce reading level.
- Avoid introducing proper names that are written in title case needlessly, for example "Select your preferred Billing Cycle." They increase cognitive load for users, dilute brand equity, and are difficult to maintain consistently across surfaces.
- Use active voice wherever possible and appropriate.
- Choose words carefully. Avoid exclusionary, offensive terms like "blacklist" and "whitelist." Notably, Grammarly does not use "disabled" or "enabled" to describe active and inactive states in user-facing content. Refer to the [Company Style Guide](https://coda.io/d/Superhuman-Style-Guide_dNw1zZnMEND/Superhuman-Copy-Style-Guide_suVxisx4#_luGMEq6C) and [the Origin term list](/content/terminology) for more examples.

### Alt text

- Alt text allows users with visual impairments to understand information that is conveyed visually to sighted users through images.
- Purely decorative images don't need alt text.
- If a photo or illustration adds key information, shows an example, or significantly contributes to the mood and tone of the page, it should have alt text.

**Writing best practices for alt text**

| Do | Don't |
| --- | --- |
| Be clear and concise. | Don't write alt text longer than about two sentences. |
| Focus on the information the user needs to know. | Don't include extraneous or irrelevant details. |
| Use proper punctuation so screen readers properly read out the information. | Don't begin descriptions with "Image of …" |

### Spatial or directional descriptions

- "Open the menu in the *top-left* corner."
- "Update your settings *below*."
- "Submit your question using the form on the *right*."

These descriptions all rely on relative directions like above/below or left/right. **Avoid them**, because they don't work for users who can't see the page visually. They also may become inaccurate if the components on the page move around like with smaller screens or in a mobile layout.

Ideally, the page should be organized logically enough that you don't need to describe exactly where everything is. If the page design is good, "Open the menu," "Update your settings," or "Submit your question using the form" should suffice.

### Naming and labeling

Assistive technology uses element names to help users navigate an interface. When writing element names, you should:

- Describe function, not appearance—for example, "**Edit** icon" not "**Pen** icon"
- Lead with action verbs
- Be concise
- Use unique labels for each element unless they perform an identical function
- Begin each label with a capital letter and omit end punctuation

[Learn more about accessible names and labels](https://grammarly.atlassian.net/wiki/spaces/DP/pages/3483896692/Writing+accessible+names+and+labels)

### Emoji

**Avoid emoji whenever possible.** They are inconsistent and unclear—two qualities to avoid in any user experience.

**Writing best practices for emoji**

| Do | Don't |
| --- | --- |
| Avoid emoji or use them very sparingly. | Don't replace words with emoji. |
| Put emoji at the end of your text to avoid disrupting the content. | Don't use emoji as bullet points. |
| Check the name of each emoji to understand how a screen reader will read it aloud. | Don't rely on emoji to convey important information. |

Screen readers handle emoji in different ways, and this makes them undesirable for in-product content. In some cases, the screen reader simply reads out the name of the emoji along with its surrounding text. The result can be confusing and annoying for assistive technology users.

Visible text: 💪 confident
Screen reader announcement: "Flexed bicep confident"

Visually, the flexed bicep emoji conveys an image of strength. When read aloud, however, the emoji's description adds confusing extra words that don't make sense in context.

#### Inconsistencies by platform cause miscommunication

Emoji render very differently in appearance on different platforms, which causes miscommunications due to changes in meaning and emotion.

Consider the different versions of the "[nerd face](https://emojipedia.org/nerd-face)" emoji. Recently, some platforms have acknowledged that bucktoothed representations evoke anti-Asian stereotypes. A beaming smile replaces the racist trope in Google's updated version, giving it a more joyful and excited appearance than the others. Regardless, using this particular emoji in the product would never be worth the risk of offending Grammarly customers who use an Apple device. [Investigating the Potential for Miscommunication Using Emoji, Hannah Miller, 2016](https://grouplens.org/blog/investigating-the-potential-for-miscommunication-using-emoji/).

Notice how the facial features change on each platform. Some glasses are circular, others rectangular, and Facebook's glasses appear more like goggles. Notably, WhatsApp's nerd face looks a bit disheveled. All these differences yield varied, unpredictable reactions among users.

#### Vision issues blur meaning

Users with low vision may have trouble distinguishing different emoji. Notice in the example how very distinct emotions—joy, skepticism, and sadness—appear surprisingly similar when out of focus, obscuring the intended meaning.

The emoji for joy, skepticism, and sadness seem unmistakable in focus. When simulating low vision with a blur, the expressions become difficult to understand.

#### Definitions vary by context

Emoji also do not have universal definitions—across cultures and equally among communities within a culture. It's important to consider how many different types of users could interpret (and misinterpret) your intentions, as well as how they could find the implications of an emoji offensive.

The waving hand emoji typically means "hello" or "goodbye" in the US—no matter what platform is being used. In China, it often means something more akin to "good riddance," which is exactly how you should feel now about emoji in product content.

## Helpful resources

- [Accessibility self-assessment](https://grammarly.atlassian.net/wiki/spaces/DP/pages/3880125741/Perform+an+accessibility+self-assessment)
- [Setting up a screen reader](https://grammarly.atlassian.net/wiki/spaces/DP/pages/3698459419/Set+up+your+screen+reader+testing+environment)
- [Writing accessible names and labels](https://grammarly.atlassian.net/wiki/spaces/DP/pages/3483896692/Writing+accessible+names+and+labels)
- [About design annotations](https://grammarly.atlassian.net/wiki/spaces/DP/pages/4191650025/Design+annotations)
