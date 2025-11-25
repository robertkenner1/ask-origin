# Feedback survey

A feedback survey lets users rate content or features from 1 to 5 stars, with an optional field for extra feedback. [View the Rating component.](/components/rating)

A feedback survey shows up after a successful prompt below the generated output inside the assistant card.

## Anatomy

![Anatomy diagram of a feedback survey](/img/patterns/feedback/feedback_anatomy.svg)

[Rating](/components/rating)[Textarea](/components/textarea)[Submit button](/components/button) (required)

## Usage

**Use when:**

* Use when collecting quick, lightweight feedback from users.

**Do not use when:**

* Users are in the middle of performing a task.
* Feedback is needed in multiple areas of the same page, or repeatedly across a multi-step flow.
* User research or detailed feedback forms are needed.

## Container

Each team can decide on the container shape and environment where they wish to display the feedback survey.

The example on the left below shows the feedback survey for gathering specific action feedback, wrapped in a container with an arrow pointer at the top, within an assistant card. On the right is an example of the standalone window used in the desktop app when asking for general feedback.

![Feedback survey in different container shapes.](/img/patterns/feedback/feedback_container_examples.svg)

## Behavior

### Triggering logic

Teams can decide when to display the feedback survey based on the logic below.

* **When collecting feedback on specific output**:
  The Feedback Survey is displayed after the user engages with an action. For example, accepting a grammar suggestion.

* **When collecting general feedback**:
  The feedback survey is triggered by an entry point – Provide a consistent entry point using a [Button](/components/button) or an [Icon Button](/components/icon-button). We recommend using "Give feedback" as the label of the Button or Tooltip associated with the Icon Button.

### Successful feedback submission

To have a successful submission, a user is required to select a star rating of 1-5.
The feedback survey will disappear after successful feedback submission.
Alternatively, a [Toast](/components/toast) message can appear to indicate the successful submission.

![two images showing the before and after state of submitting a 5 star rating. After submission a toast message shows up saying thank you for your feedback.](/img/patterns/feedback/feedback_submission.svg)

## Writing

To ensure clarity, consistency, and a positive user experience, follow these writing best practices when designing for feedback survey.

**Writing best practices for feedback surveys**

| Do | Example | Don't | Example |
|----|---------|-------|---------|
| Keep the writing brief, concise, and with the user in control. | ![The label for a text area inside feedback survey says How valuable was this suggestion? for five star rating and Tell us more text area.](/img/patterns/feedback/feedback_standard.svg) | Don't make the writing overly familiar or with slang. | ![The label for a text area inside feedback survey says Wanna explain your rating? It's and somewhat unclear.](/img/patterns/feedback/feedback_slang.svg) |
| Use sentence case. | ![The label for a text area inside feedback survey says How valuable was this suggestion? for five star rating and Tell us more text area.](/img/patterns/feedback/feedback_standard.svg) | Don't use Title Case or ALL CAPS. | ![The text for a feedback survey with all title case in both star rating and text area.](/img/patterns/feedback/feedback_titleCase.svg) |
| Use a question mark to end a user-facing question. | ![The label for a text area inside feedback survey says How valuable was this suggestion? for five star rating and Tell us more text area.](/img/patterns/feedback/feedback_standard.svg) | Do not use end punctuation, apart from a question mark. | ![The label for a text area inside feedback survey ends with an exclamation mark says Tell us more!](/img/patterns/feedback/feedback_EndPunctuation.svg) |
| Use a single action per Button. | ![The label for a text area inside feedback survey says How valuable was this suggestion? for five star rating and Tell us more text area.](/img/patterns/feedback/feedback_standard.svg) | Do not combine two distinct actions in a single Button. | ![A feedback survey with a button says Rate and submit feedback.](/img/patterns/feedback/feedback_MultiActions.svg) |
| Use commands that put a user in control, such as Accept, Back, Cancel, Close, Dismiss, Done, or OK. | ![The label for a text area inside feedback survey says How valuable was this suggestion? for five star rating and Tell us more text area.](/img/patterns/feedback/feedback_standard.svg) | Do not use phrases that put a user in a passive state or erode their sense of agency. | ![A feedback survey with a button says Got it.](/img/patterns/feedback/feedback_Gotit.svg) |

## Related components​

* [Rating](/components/rating)
* [Button](/components/buttons)
* [Text Area](/components/textarea)
* [Form](/components/form)
