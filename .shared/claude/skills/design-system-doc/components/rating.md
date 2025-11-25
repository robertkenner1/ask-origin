# Rating

The Rating component allows users to express quick, lightweight feedback by selecting a rating
from 1 to 5 stars.

Users can rate suggestions with stars, indicate how valuable they were, and share additional
feedback.

## Anatomy

!\[Anatomy diagram of a feedback survey]\(/img/components/rating/rating\_anatomy.svg)

LabelOptional or Required indicatorStarsStar label

## Usage

The Rating component is designed to be used inside a native `<form>` element. It supports form validation flows by exposing its state through controlled props like `value` and `isError`.

**Use when:**

* Use when collecting quick, lightweight feedback from users.

**Do not use when:**

* Users are in the middle of performing a task.
* Feedback is needed in in multiple places on the page or across several steps.
* Detailed insights or research are required.

## States

### Default

By default, the star rating is unselected.

```tsx

  function Example() {
  const label = "How valuable was this suggestion?";
  const [rating, setRating] = React.useState(undefined);

  return (
      <Rating label={label} value={rating} onChange={setRating} />
    )
  }


```

### 1-star

1 star is selected with the corresponding label “Not valuable.”

```tsx

  function Example() {
  const label = "How valuable was this suggestion?";
  const [rating, setRating] = React.useState(0);

  return (
      <Rating label={label} value={rating} onChange={setRating} />
    )
  }


```

### 2-star

2 stars are selected with the corresponding label “Slightly valuable.”

```tsx

  function Example() {
  const label = "How valuable was this suggestion?";
  const [rating, setRating] = React.useState(1);

  return (
      <Rating label={label} value={rating} onChange={setRating} />
    )
  }


```

### 3-star

3 stars are selected with the corresponding label “Moderately valuable.”

```tsx

  function Example() {
  const label = "How valuable was this suggestion?";
  const [rating, setRating] = React.useState(2);

  return (
      <Rating label={label} value={rating} onChange={setRating} />
    )
  }


```

### 4-star

4 stars are selected with the corresponding label “Fairly valuable.”

```tsx

  function Example() {
  const label = "How valuable was this suggestion?";
  const [rating, setRating] = React.useState(3);

  return (
      <Rating label={label} value={rating} onChange={setRating} />
    )
  }


```

### 5-star

5 stars are selected with the corresponding label “Very valuable.”

```tsx

  function Example() {
  const label = "How valuable was this suggestion?";
  const [rating, setRating] = React.useState(4);

  return (
      <Rating label={label} value={rating} onChange={setRating} />
    )
  }


```

### Hover state

The star is filled when a user hovers over the star icons. The star rating label appears when a user hovers over the corresponding star for each level. Once selected, the state of each star and its label are preserved.

!\[A mouse hovering on 2-star rating with star rating label 'slightly valuable'.]\(/img/components/rating/rating\_hover.svg)

### Focus state

The star is outlined when a user's focus is over the star icon.

!\[A focus on first star]\(/img/components/rating/rating\_focus.svg)

### Error state

The component renders a red outline around the container and displays an error message below the stars.

```tsx

  function Example() {
  const label = "How valuable was this suggestion?";
  const [rating, setRating] = React.useState(undefined);
  const [error, setError] = React.useState(true);

  return (
      <Rating label={label} isError={error} value={rating} onChange={setRating} />
    )
  }


```

## Behavior

### Layout and Responsiveness

The width of the component is determined by the width of its container. When the available space is narrower than the combined width of the stars and their labels, the layout adjusts to maintain usability:

* Labels may wrap beneath the stars if they can’t fit inline.
* If the longest label exceeds the container width, all labels will reflow beneath their corresponding stars to ensure consistent alignment.

### States

The component has several interactive visual states:

* **Default**: All five stars are outlined and unselected.
* **Hover**: Stars up to the hovered index become filled. A label associated with the hovered star is displayed.
* **Selected**: After selecting a rating, stars up to the selected value are filled permanently, and the corresponding label is shown.
* **Hover after selection**: Hovering again temporarily overrides the visual display of the selected rating. When the user moves the pointer away, the selected state returns.

### Error Handling

Use the `isError` prop to display an error message and highlight the component visually, typically when a user submits a form without selecting a rating.

* The error state is controlled externally and does not reset automatically.
* To clear the error, update the `isError` prop in the parent component (e.g., after a user selects a valid rating).
* This makes the Rating component suitable for use in required form flows or feedback validation logic.

## Accessibility

### Keyboard interaction

| Key                                                | Expected result                                                                                                                                                                                                                                            |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tab                                     | • Moves focus to the checked radio (star) button in the radio group. `<br />` • If a radio button is not checked, focus moves to the first radio button in the group.                                                                                        |
| Down arrow`<br />`Right arrow | • Moves focus to and checks the next radio button in the group. `<br />` • If the focus is on the last radio button, it moves focus to the first radio button. `<br />` • The state of the previously checked radio button is changed to unchecked.            |
| Up arrow`<br />`Left arrow    | • Moves focus to and checks the previous radio button in the group. `<br />` • If focus is on the first radio button, it moves focus to and checks the last radio button. `<br />` • The state of the previously checked radio button is changed to unchecked. |
| Space                                   | If the radio (star) with focus is not checked, it changes the state to checked. Otherwise, does nothing. `<br />`*Note: The state where a radio is not checked only occurs on page load.*                                                                    |

## Writing

To ensure clarity, consistency, and a positive user experience, follow these writing best practices when designing the Rating component.

| Do ✅ | Don't ❌ |
|-------|---------|
| Keep the writing brief, concise, and with the user in control. ![Five unselected stars below the label 'How valuable was this suggestion? (Required)' showing the default rating state.](/img/components/rating/rating_brief.svg) | Avoid vague words like "this" in labels unless the context is clear. This is especially important for users who use screen reader. ![Five unselected stars below the label 'How valuable was this suggestion to you? (Required)' — too wordy and informal.](/img/components/rating/rating_vague.svg) |
| Use consistent language across similar rating flows. ![Five unselected stars below the label 'How valuable was this suggestion? (Required)' — correct sentence-case label.](/img/components/rating/rating_consistent.svg) | Don't use different verbs or formats in adjacent rating components. ![Five unselected stars below the label 'How Valuable Was This? (Required)' — incorrect title-case label.](/img/components/rating/rating_differentVerbs.svg) |
| Use a question mark to end a user-facing question. ![Five unselected stars below the label 'How valuable was this suggestion? (Required)?' — includes proper question mark.](/img/components/rating/rating_questionMark.svg) | Do not use end punctuation, apart from a question mark. ![Five unselected stars below the label 'How valuable was this suggestion (Required)' — missing ending question mark.](/img/components/rating/rating_endPunctuation.svg) |

## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the Text Field component in JS.

```tsx
import { Rating } from "@superhuman/origin";
```

## API

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | - | Text label displayed above the stars. |
| `onChange` | `(value: 0 | 1 | 2 | 3 | 4 ) => void` | - | Called when the user selects a star rating. |
| `value` | `0 | 1 | 2 | 3 | 4` | undefined | Current selected star index. |
| `isError` | `boolean` | false | Indicates whether the component should display an error (e.g., user tried to submit without selecting a rating). |
| `isRequired` | `boolean` | false | Indicates whether selecting a rating is mandatory. If set to true, it displays a '(Required)' label. |
| `starLabels` | `[string, string, string, string, string]` | [ 'Not Valuable', 'Slightly Valuable', 'Moderately Valuable', 'Fairly Valuable', 'Very Valuable'] | An array of custom labels for each star, from lowest to highest value. Used for accessibility and tooltips. |


## Related components​

* [Button](/components/button)
* [Textarea](/components/textarea)
* [Form](/components/form)
* [Feedback survey](/patterns/feedback-pattern)
