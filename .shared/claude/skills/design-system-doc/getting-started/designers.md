# Getting started as a designer

The Origin design system provides a shared visual language and a set of components to help speed up your work and enable design consistency across our product offerings and platforms.

## Figma libraries

We use Figma to deliver foundation styles and component design assets. The components are built using the icons and styles from the Foundations and Iconography libraries. These libraries must be enabled in your file to use the assets and receive updates.

### Enabling libraries

In Figma, select the **Assets** tab in the left sidebar and click the book icon to open the libraries panel. Find the Design System section and switch these libraries on:

* Origin Base Components
* Origin Foundations
* Origin Iconography

!\[Getting started designers enabling]\(/img/getting-started/getting\_started\_designers\_enabling.png)

For a complete guide to using Figma libraries,

## Using components

### Placement

Open the Assets panel to select a component and drag it to your working area.

!\[Getting started designers using 1]\(/img/getting-started/getting\_started\_designers\_using\_1.png)

The Assets panel shows the default state of each component to make it easy to select the component
needed and allow for customization in the Variants panel.

### Customization

Many components come with features built-in using Figma's Variants and Properties features.

#### Changing variants and properties​

Most components have all of the variant options exposed in the Properties panel. Some complex components like [Menu](/components/menu) have other customizable components nested within them to allow for additional customization. In these cases, click into the component instance you want to customize to see the options.

In some cases, it's necessary to detach the component. Be aware that detaching components will cause them to no longer receive updates when new features are published.

!\[Variant panel configuration options]\(/img/getting-started/getting\_started\_designers\_using\_2.png)

The size of the modal and visibility of the scroll, description, and footer are all easy to change
in the Variants panel.

#### Usage instructions

Most components include basic instructions about how to use them within Figma. Clicking the **Show more** link above the variant options will display the full instruction panel.

!\[Figma component usage instructions]\(/img/getting-started/getting\_started\_designers\_usage.png)

Component instructions help explain the nuances of using the component in Figma and give insight
into things like layers that are customizable.

## Updating components

The Design System team periodically publishes updates to the component and style libraries. If existing component instances in your file are not `<a href="https://help.figma.com/hc/en-us/articles/360038665754-Detach-an-instance-from-the-component" class="external" target="_blank" />`, you will be notified that component updates are available.

!\[Keep components up to date]\(/img/getting-started/getting\_started\_designers\_updating\_1.png)

The update notification will only appear if a component instance in your file is eligible to
receive updates.

The same notification will be presented in every file where component instances that are eligible to receive updates are used, and you will be prompted to review updates every time new updates are published. You may dismiss the notification and accept no updates or review updates and choose to accept or reject updates on a per-component basis.

### Don't accept updates

If you choose not to accept a component update, nothing in your file will visibly change. Existing component instances will remain unchanged while the main component in the **Assets** panel will receive the update. This means the latest version of the component will be available the next time you use a new instance.

### Accept updates

By accepting updates, you agree to existing component instances in your work changing based on the updates provided. A brief summary of the changes to each component is typically provided.

*The Design System team runs extensive tests to mitigate unexpected changes to your work. In rare cases, there may be an unexpected loss of override data that can be resolved by rolling back to the most recently saved version in the file history.*

!\[List of available updates]\(/img/getting-started/getting\_started\_designers\_updating\_2.png)

Click Review to see a list of available updates. You can accept all updates or selectively
accept updates for each component individually.

For more information on reviewing and accepting updates, see `<a href="https://help.figma.com/hc/en-us/articles/360039234193-Review-and-accept-library-updates" class="external" target="_blank" />`.
