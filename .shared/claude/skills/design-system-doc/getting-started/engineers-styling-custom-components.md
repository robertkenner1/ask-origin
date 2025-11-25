# Styling Custom Components with GDS

## Do you need a custom component?

It's easy to tell if you can rely on the design system or if you need to build a custom component.

If a component matches most of your requirements but not all, reach out on Slack at [#ask-origin-design-system](https://grammarly.enterprise.slack.com/archives/C03MNHYDT5E). We can help update that component as needed or, in some cases, give you tips on how to cover the gaps with CSS styling.

You can also reach out to a Product Designer to see if there's flexibility to align the proposed design to Origin standards.

If you land on creating a custom component, reach out to the Origin team and clarify your use case before starting any work. We'll let you know if something similar is already on our roadmap, or help you evaluate how to meet our accessibility standards.

## Why are custom components useful?

Origin aspires to cover as many needs as possible for teams to build product UI, but sometimes custom components are beneficial. There are some common reasons:

- You need a component that's on the Origin roadmap, but it won't be built in time for your particular launch.
- You need a component that isn't on the Origin roadmap, and we don't have a timeline for when it will be available.
- You need a component that is too specific to be part of the design system.

While building something twice is not ideal, it may be the best way to ensure a product ships on time. The Origin team needs enough time to build an ideal experience that can live as a reusable part of our design system. Similarly, Origin maintains components that can be applied in multiple scenarios, so extremely unique components will likely not be included in the system.

No matter the reason for creating a custom component, we rely on you to take care that all components still match Superhuman's visual style and follow accessibility best practices. Origin offers design tokens, typography, and utility components to help you do that.

## Creating custom components

If you have confirmed with the Origin team that a custom component is truly the only option, there are a few approaches you can take.

### Use Origin primitive components

Origin offers primitive components that you can combine to create more complex components. Flex, Text, Heading, and Icon are usually all you need to create a component—or at least a solid foundation for one.

These components reference our [design tokens](/docs/tokens) and allow you to more easily maintain a consistent, accessible visual style for your custom component. This example of a card demonstrates how to use these utility components to achieve a specific goal.

Visit the [component documentation](/components) and [Storybook](https://uifoundation.gpages.io/origin/?path=/docs/gds-flex--docs) to browse examples that might spark inspiration for your use case.

```tsx
<Flex
  gap={6}
  direction="column"
  padding={4}
  width={400}
  borderColor="base-subdued"
  borderRadius={2}
>
  <Flex gap={2} align="center" marginLeft={-1}>
    <Icon icon={OutcomeCorrectnessIcon} size="medium" accessibilityLabel="Correctness Category" />
    <Text variant="text-small" as="p">Correctness</Text>
    <Text variant="text-small" as="span">‧</Text>
    <Text variant="text-small" as="p">Capitalize the word</Text>
    <IconButton
      accessibilityLabel="Details about this correction"
      icon={InterfaceInfoIcon}
      variant="tertiary"
      onClick={() => {}}
    />
  </Flex>
  <Flex gap={1}>
    <ScreenReaderOnly>delete "today (spelling t o d a y)"</ScreenReaderOnly>
    <Text variant="text-medium" as="p" decoration="line-through">today</Text>
