// Comprehensive Origin Knowledge Base
export const originKnowledgeBase = {
  // Installation & Getting Started
  installation: {
    package: '@superhuman/origin',
    installCommand: 'npm install @superhuman/origin',
    installCommands: {
      npm: 'npm install @superhuman/origin',
      yarn: 'yarn add @superhuman/origin',
      pnpm: 'pnpm install @superhuman/origin',
    },
    betaInstall: 'pnpm install @superhuman/origin@beta',
    cssImport: "@import '@superhuman/origin'",
    cssImportWebpack: "@import '~@superhuman/origin/dist/index.css'",
    fontsImport: "import '@superhuman/origin/dist/fonts.css'",
    shadowDomImport: "import '@superhuman/origin/dist/shadow.css'",
    fontPreload: [
      'https://static-web.grammarly.com/shared/fonts/product/v1/inter-regular.woff2',
      'https://static-web.grammarly.com/shared/fonts/product/v1/inter-medium.woff2',
      'https://static-web.grammarly.com/shared/fonts/product/v1/inter-semibold.woff2',
      'https://static-web.grammarly.com/shared/fonts/product/v1/inter-bold.woff2',
      'https://static-web.grammarly.com/shared/fonts/product/v1/matter-semibold.woff2',
      'https://static-web.grammarly.com/shared/fonts/product/v1/matter-bold.woff2',
    ],
    bodyFont: 'font-family: var(--font-stack-inter);',
    description: 'Origin Design System provides React components and design tokens for building consistent, accessible Superhuman products.',
  },

  components: {
    button: {
      description: 'Provides a way to take action',
      usage: 'Use when it\'s possible for a user to take an action. Do not use for navigation (use Link) or icon-only actions (use IconButton).',
      variants: ['primary', 'ghost', 'secondary', 'tertiary', 'critical', 'pro', 'enterprise', 'premium'],
      sizes: ['small', 'medium', 'large', 'xlarge'],
      props: ['text', 'variant', 'size', 'iconStart', 'iconEnd', 'shortcut', 'isLoading', 'isDisabled', 'onClick'],
      import: "import { Button } from '@superhuman/origin';",
      example: '<Button text="Click Me" onClick={() => {}} />',
      examples: {
        primary: '<Button text="Click Me" onClick={() => {}} />',
        ghost: '<Button variant="ghost" text="Manage" />',
        secondary: '<Button variant="secondary" text="Learn more" />',
        tertiary: '<Button variant="tertiary" text="Cancel" />',
        critical: '<Button variant="critical" text="Delete" />',
        withIcon: '<Button iconStart={InterfaceUploadIcon} text="Upload" />',
        loading: '<Button text="Saving..." isLoading />',
      },
      notes: 'Only one primary button per surface. Use ghost for repeated high-priority actions.',
    },
    textfield: {
      description: 'Accepts a single line of text, numbers, and symbols',
      usage: 'Use when a short, typed response is required. Do not use for long-form content (use Textarea) or search (use SearchField).',
      props: ['label', 'helperMessage', 'errorMessage', 'isRequired', 'isOptional', 'isDisabled', 'type', 'value', 'onChange', 'defaultValue', 'iconStart', 'placeholder'],
      types: ['text', 'email', 'password', 'number', 'tel', 'url'],
      import: "import { TextField } from '@superhuman/origin';",
      example: '<TextField label="First name" helperMessage="Enter your first name" />',
      examples: {
        basic: '<TextField label="First name" />',
        withHelper: '<TextField label="Username" helperMessage="Must be at least one character" />',
        withError: '<TextField label="Username" errorMessage="That username is taken" />',
        password: '<TextField label="Password" type="password" />',
        required: '<TextField label="Email" isRequired />',
      },
      notes: 'Always include a persistent label. Use isRequired/isOptional based on form pattern guidelines.',
    },
    textarea: {
      description: 'Multi-line text input for longer content',
      usage: 'Use for long-form content wrapped into multiple lines',
      import: "import { Textarea } from '@superhuman/origin';",
      example: '<Textarea label="Comments" placeholder="Enter your comments..." />',
    },
    checkbox: {
      description: 'Offers a range of selections—zero, one, and many',
      usage: 'Use when it\'s possible to select zero, one, or many options in a set',
      import: "import { Checkbox } from '@superhuman/origin';",
      example: '<Checkbox>Remember me</Checkbox>',
    },
    form: {
      description: 'A combination of inputs that collect information',
      usage: 'Use when collecting structured data from a user, such as personal information or preferences',
      subcomponents: ['FormHeader', 'FormRow', 'FormFooter'],
      props: ['onSubmit'],
      import: "import { Form, FormHeader, FormRow, FormFooter } from '@superhuman/origin';",
      example: '<Form><FormHeader heading="Settings" /><FormRow>...</FormRow></Form>',
      examples: {
        basic: `<Form onSubmit={handleSubmit}>
  <FormHeader heading="Settings" />
  <FormRow>
    <TextField label="First name" />
  </FormRow>
  <FormFooter>
    <Button type="submit" text="Save" />
  </FormFooter>
</Form>`,
      },
      notes: 'FormRow spaces inputs evenly. FormFooter contains action buttons. Submit button must have type="submit".',
    },
    modal: {
      description: 'Allows for completing tasks or displaying information without navigating to a new page',
      usage: 'Use when displaying urgent information or requiring immediate action',
      import: "import { Modal } from '@superhuman/origin';",
      example: '<Modal title="Title" isOpen={isOpen} onClose={() => {}}>...</Modal>',
    },
    select: {
      description: 'Allows a user to choose a single item from a list',
      usage: 'Use when there are predefined options to choose from',
      import: "import { Select } from '@superhuman/origin';",
      example: `<Select label="Sort by">
  <Select.Option value="name" label="Name" />
  <Select.Option value="count" label="Count" />
</Select>`,
    },
    tabs: {
      description: 'Navigates among panels of related content',
      usage: 'Use to separate related content to save vertical space',
      import: "import { Tabs } from '@superhuman/origin';",
      example: `<Tabs>
  <Tabs.TabList accessibilityLabel="Settings">
    <Tabs.Tab id="profile" label="Profile" />
    <Tabs.Tab id="password" label="Password" />
  </Tabs.TabList>
  <Tabs.Panel id="profile">Profile content</Tabs.Panel>
  <Tabs.Panel id="password">Password content</Tabs.Panel>
</Tabs>`,
    },
    badge: {
      description: 'Displays numeric values like tallies',
      usage: 'Use when displaying numerical data related to an element',
      import: "import { Badge } from '@superhuman/origin';",
      example: '<Badge variant="neutral" count={10} getAriaLabelText={count => `${count} suggestions`} />',
    },
    tag: {
      description: 'Labels, classifies, or draws attention to elements',
      usage: 'Use to label or categorize content',
      import: "import { Tag } from '@superhuman/origin';",
      example: '<Tag label="Your rules" />',
    },
    switch: {
      description: 'Toggle with on/off states',
      usage: 'Use for settings that take immediate effect',
      import: "import { Switch } from '@superhuman/origin';",
      example: '<Switch label="Enable feature" />',
    },
    radiogroup: {
      description: 'Allows single selection from multiple options',
      usage: 'Use when user must choose one option from a set',
      import: "import { RadioGroup, RadioButton } from '@superhuman/origin';",
      example: `<RadioGroup legend="Visibility">
  <RadioButton value="all">All websites</RadioButton>
  <RadioButton value="select">Select websites</RadioButton>
</RadioGroup>`,
    },
    toast: {
      description: 'Displays immediate feedback after an action',
      usage: 'Use for temporary success/error messages',
      import: "import { Toast } from '@superhuman/origin';",
      example: '<Toast text="Saved successfully" variant="success" onClose={() => {}} />',
    },
    tooltip: {
      description: 'Shows informative text on hover',
      usage: 'Use for short helpful hints',
      import: "import { Tooltip, TooltipContent, TooltipTrigger } from '@superhuman/origin';",
      example: `<Tooltip placement="right">
  <TooltipTrigger asChild><button>Hover</button></TooltipTrigger>
  <TooltipContent>Helpful text</TooltipContent>
</Tooltip>`,
    },
    menu: {
      description: 'Presents additional actions or navigation',
      usage: 'Use for contextual actions with space constraints',
      import: "import { Menu } from '@superhuman/origin';",
      example: `<Menu activator="more-vertical">
  <Menu.Item key="copy">Copy</Menu.Item>
  <Menu.Item key="paste">Paste</Menu.Item>
</Menu>`,
    },
    searchfield: {
      description: 'Refines a list based on search query',
      usage: 'Use for filtering or searching content',
      import: "import { SearchField } from '@superhuman/origin';",
      example: '<SearchField label="Search" placeholder="Search images" />',
    },
    link: {
      description: 'Navigates to another page or section',
      usage: 'Use for navigation between pages',
      import: "import { Link } from '@superhuman/origin';",
      example: '<Link href="/help">Visit help center</Link>',
    },
    heading: {
      description: 'Structures content as a heading',
      usage: 'Use for page titles and section headers',
      import: "import { Heading } from '@superhuman/origin';",
      example: '<Heading as="h1">Page Title</Heading>',
    },
    text: {
      description: 'Displays various types of plain text',
      usage: 'Use for body text and labels',
      import: "import { Text } from '@superhuman/origin';",
      example: '<Text as="p">This is body text.</Text>',
    },
    accordion: {
      description: 'Container that can be expanded to reveal additional content or collapsed to hide content',
      usage: 'Use for organizing content into collapsible sections like FAQs or product specifications',
      subcomponents: ['Accordion.Item'],
      props: ['size', 'bgColor'],
      sizes: ['small', 'medium', 'large'],
      import: "import { Accordion } from '@superhuman/origin';",
      example: `<Accordion>
  <Accordion.Item title="We'll keep your data safe">
    <Text as="p">Content here</Text>
  </Accordion.Item>
</Accordion>`,
      notes: 'All Accordions should be collapsed by default. Arrow points down when closed, up when open.',
    },
    box: {
      description: 'Primitive component with easy access to Origin tokens',
      usage: 'Use when a UI would benefit from Origin tokens like colors, elevation, or spacing',
      props: ['bgColor', 'borderColor', 'borderRadius', 'color', 'elevation', 'width', 'height', 'padding', 'margin', 'as', 'accessibilityLabel'],
      import: "import { Box } from '@superhuman/origin';",
      example: '<Box bgColor="background-brand-default" borderRadius={3} padding={4}>Content</Box>',
      notes: 'Rendered as div by default. Use as prop to change semantic element. Supports all Origin design tokens.',
    },
    buttonaslink: {
      description: 'Visually looks like a Button but functions like a Link for navigation',
      usage: 'Use when presenting navigation that needs Button-style visual affordance',
      variants: ['primary', 'ghost', 'secondary', 'tertiary', 'pro', 'enterprise'],
      sizes: ['small', 'medium', 'large', 'xlarge'],
      props: ['text', 'href', 'variant', 'size', 'iconStart', 'iconEnd', 'target', 'onClick'],
      import: "import { ButtonAsLink } from '@superhuman/origin';",
      example: '<ButtonAsLink text="See plans" href="https://example.com" />',
      notes: 'Semantically functions like a Link. Use with caution as screen readers group it with Links.',
    },
    iconbutton: {
      description: 'Provides a way to take action in compact surfaces with only an icon',
      usage: 'Use when space is limited and action can be represented clearly with an icon alone',
      variants: ['primary', 'ghost', 'secondary', 'tertiary'],
      sizes: ['small', 'medium', 'large'],
      props: ['icon', 'accessibilityLabel', 'variant', 'size', 'isDisabled', 'onClick'],
      import: "import { IconButton } from '@superhuman/origin';",
      example: '<IconButton accessibilityLabel="Settings" icon={InterfaceSettingsIcon} />',
      notes: 'Icon meaning must be immediately clear. Do not use when text label is preferable.',
    },
    combobox: {
      description: 'Allows browsing or filtering a list to select an item',
      usage: 'Use when user can type to filter a list and select a single item with extra content',
      subcomponents: ['ComboboxItem'],
      props: ['label', 'helperMessage', 'errorMessage', 'isRequired', 'value', 'onChange'],
      import: "import { Combobox, ComboboxItem } from '@superhuman/origin';",
      example: `<Combobox label="Primary language">
  <ComboboxItem value="english">English</ComboboxItem>
  <ComboboxItem value="spanish">Spanish</ComboboxItem>
</Combobox>`,
      notes: 'Use when items contain content beyond simple names. Do not use for simple lists (use Select).',
    },
    flex: {
      description: 'Flexbox layout component',
      usage: 'Use for flexible layouts and spacing',
      props: ['direction', 'gap', 'align', 'justify', 'wrap', 'width'],
      import: "import { Flex } from '@superhuman/origin';",
      example: '<Flex direction="column" gap={4}><Text>Item 1</Text><Text>Item 2</Text></Flex>',
      notes: 'Primary layout component. Supports all flexbox properties with Origin spacing tokens.',
    },
    icon: {
      description: 'Icon component from Origin iconography library',
      usage: 'Use to display icons throughout the interface',
      import: "import { InterfaceSettingsIcon } from '@superhuman/origin';",
      example: '<InterfaceSettingsIcon />',
      notes: 'All icons are aria-hidden=true and role="img" by default. View iconography library for all available icons.',
    },
    illustration: {
      description: 'Illustration component for visual content',
      usage: 'Use for displaying illustrations in the interface',
      import: "import { Illustration } from '@superhuman/origin';",
      example: '<Illustration name="example" />',
    },
    loaders: {
      description: 'Loading indicators in different visual styles',
      usage: 'Use to indicate loading states',
      types: ['CircularLoader', 'SkeletonLoader', 'BrandedLoader'],
      import: "import { CircularLoader, SkeletonLoader, BrandedLoader } from '@superhuman/origin';",
      examples: {
        circular: '<CircularLoader />',
        skeleton: '<SkeletonLoader />',
        branded: '<BrandedLoader />',
      },
      notes: 'SkeletonLoader shows expected hierarchy. CircularLoader for actions. BrandedLoader for full-page loading.',
    },
    logo: {
      description: 'Logo component',
      usage: 'Use to display the Superhuman/Grammarly logo',
      import: "import { Logo } from '@superhuman/origin';",
      example: '<Logo />',
    },
    popover: {
      description: 'Displays rich content in context',
      usage: 'Use for nice-to-know information that responds to user action',
      props: ['placement', 'isOpen', 'onClose'],
      import: "import { Popover, PopoverTrigger, PopoverContent } from '@superhuman/origin';",
      example: `<Popover>
  <PopoverTrigger asChild><button>Open</button></PopoverTrigger>
  <PopoverContent>Rich content here</PopoverContent>
</Popover>`,
      notes: 'Use for low-to-medium priority information. Do not use for essential instructions or short descriptions (use Tooltip).',
    },
    rating: {
      description: 'Allows users to express quick feedback by selecting a rating from 1 to 5 stars',
      usage: 'Use when collecting quick, lightweight feedback from users',
      props: ['label', 'value', 'onChange', 'isRequired', 'isError'],
      import: "import { Rating } from '@superhuman/origin';",
      example: '<Rating label="How valuable was this?" value={rating} onChange={setRating} />',
      notes: 'Designed to be used inside a native form element. Supports form validation flows.',
    },
    verificationcode: {
      description: 'Accepts a one-time code containing only numbers or both letters and numbers',
      usage: 'Use for one-time passwords, 2FA, or integration codes',
      props: ['legend', 'type', 'size', 'value', 'onChange', 'name'],
      types: ['number', 'text'],
      sizes: ['small', 'medium', 'large'],
      import: "import { VerificationCode } from '@superhuman/origin';",
      example: '<VerificationCode legend="Security code" type="number" />',
      notes: 'Default is 6-digit number input in large size. Do not use for password entry (use TextField type="password").',
    },
    planTag: {
      description: 'Tag component specific to plan types',
      usage: 'Use to label content related to specific plans',
      import: "import { PlanTag } from '@superhuman/origin';",
      example: '<PlanTag plan="pro" />',
    },
    sticker: {
      description: 'Sticker component',
      usage: 'Use for decorative or informational stickers',
      import: "import { Sticker } from '@superhuman/origin';",
      example: '<Sticker />',
    },
    suggestionToggle: {
      description: 'Toggle component for suggestions',
      usage: 'Use for toggling suggestion-related features',
      import: "import { SuggestionToggle } from '@superhuman/origin';",
      example: '<SuggestionToggle />',
    },
    onboardingTooltip: {
      description: 'Tooltip component specifically for onboarding experiences',
      usage: 'Use for onboarding tooltips that guide new users',
      import: "import { OnboardingTooltip } from '@superhuman/origin';",
      example: '<OnboardingTooltip />',
    },
  },
  // Design Tokens - Comprehensive Catalog
  tokens: {
  colors: {
      semantic: {
        description: 'Semantic tokens describe where colors should be applied (background, text, border, icon)',
        structure: 'Color.Property.Concept.Variant',
        properties: ['background', 'text', 'border', 'icon'],
        concepts: ['base', 'brand', 'success', 'error', 'warning', 'premium', 'business', 'critical'],
        variants: ['default', 'subdued', 'inverse'],
        allSemanticTokens: {
          background: [
            'Tokens.Color.Background.Base.Default',
            'Tokens.Color.Background.Base.Subdued',
            'Tokens.Color.Background.Base.Inverse',
            'Tokens.Color.Background.Brand.Default',
            'Tokens.Color.Background.Brand.Subdued',
            'Tokens.Color.Background.Success.Default',
            'Tokens.Color.Background.Success.Subdued',
            'Tokens.Color.Background.Error.Default',
            'Tokens.Color.Background.Error.Subdued',
            'Tokens.Color.Background.Warning.Default',
            'Tokens.Color.Background.Warning.Subdued',
            'Tokens.Color.Background.Premium.Default',
            'Tokens.Color.Background.Premium.Subdued',
            'Tokens.Color.Background.Business.Default',
            'Tokens.Color.Background.Business.Subdued',
            'Tokens.Color.Background.Critical.Default',
            'Tokens.Color.Background.Critical.Subdued',
          ],
          text: [
            'Tokens.Color.Text.Base.Default',
            'Tokens.Color.Text.Base.Subdued',
            'Tokens.Color.Text.Base.Inverse',
            'Tokens.Color.Text.Brand.Default',
            'Tokens.Color.Text.Brand.Subdued',
            'Tokens.Color.Text.Success.Default',
            'Tokens.Color.Text.Success.Subdued',
            'Tokens.Color.Text.Error.Default',
            'Tokens.Color.Text.Error.Subdued',
            'Tokens.Color.Text.Warning.Default',
            'Tokens.Color.Text.Warning.Subdued',
            'Tokens.Color.Text.Premium.Default',
            'Tokens.Color.Text.Premium.Subdued',
            'Tokens.Color.Text.Business.Default',
            'Tokens.Color.Text.Business.Subdued',
            'Tokens.Color.Text.Critical.Default',
            'Tokens.Color.Text.Critical.Subdued',
          ],
          border: [
            'Tokens.Color.Border.Base.Default',
            'Tokens.Color.Border.Base.Subdued',
            'Tokens.Color.Border.Base.Inverse',
            'Tokens.Color.Border.Brand.Default',
            'Tokens.Color.Border.Brand.Subdued',
            'Tokens.Color.Border.Success.Default',
            'Tokens.Color.Border.Success.Subdued',
            'Tokens.Color.Border.Error.Default',
            'Tokens.Color.Border.Error.Subdued',
            'Tokens.Color.Border.Warning.Default',
            'Tokens.Color.Border.Warning.Subdued',
          ],
          icon: [
            'Tokens.Color.Icon.Base.Default',
            'Tokens.Color.Icon.Base.Subdued',
            'Tokens.Color.Icon.Base.Inverse',
            'Tokens.Color.Icon.Brand.Default',
            'Tokens.Color.Icon.Brand.Subdued',
            'Tokens.Color.Icon.Success.Default',
            'Tokens.Color.Icon.Success.Subdued',
            'Tokens.Color.Icon.Error.Default',
            'Tokens.Color.Icon.Error.Subdued',
            'Tokens.Color.Icon.Warning.Default',
            'Tokens.Color.Icon.Warning.Subdued',
          ],
        },
        examples: {
          background: 'Tokens.Color.Background.Base.Default, Tokens.Color.Background.Brand.Default',
          text: 'Tokens.Color.Text.Base.Default, Tokens.Color.Text.Base.Subdued',
          border: 'Tokens.Color.Border.Base.Default, Tokens.Color.Border.Base.Subdued',
          icon: 'Tokens.Color.Icon.Base.Default, Tokens.Color.Icon.Brand.Default',
        },
      },
      primitive: {
        description: 'Primitive tokens map to specific color values (e.g., blue.40, green.60)',
        colorFamilies: {
          blue: 'Tokens.Color.Blue0, Blue10, Blue20, Blue30, Blue40, Blue50, Blue60, Blue70, Blue80, Blue90, Blue100',
          green: 'Tokens.Color.Green0, Green10, Green20, Green30, Green40, Green50, Green60 (#15CD72 - brand), Green70, Green80, Green90, Green100',
          purple: 'Tokens.Color.Purple0, Purple10, Purple20, Purple30, Purple40, Purple50, Purple60, Purple70, Purple80, Purple90, Purple100',
          red: 'Tokens.Color.Red0, Red10, Red20, Red30, Red40, Red50, Red60, Red70, Red80, Red90, Red100',
          orange: 'Tokens.Color.Orange0, Orange10, Orange20, Orange30, Orange40, Orange50, Orange60, Orange70, Orange80, Orange90, Orange100',
          yellow: 'Tokens.Color.Yellow0, Yellow10, Yellow20, Yellow30, Yellow40, Yellow50, Yellow60, Yellow70, Yellow80, Yellow90, Yellow100',
          neutral: 'Tokens.Color.NeutralGray0, NeutralGray10, NeutralGray20, NeutralGray30, NeutralGray40, NeutralGray50, NeutralGray60, NeutralGray70, NeutralGray80, NeutralGray90, NeutralGray100',
        },
        baseColors: {
          white: 'Tokens.Color.White',
          black: 'Tokens.Color.Black',
        },
        brand: {
        green60: '#15CD72',
          description: 'Primary brand color, used for main actions and success states',
        },
        allPrimitiveTokens: [
          'Tokens.Color.White',
          'Tokens.Color.Black',
          'Tokens.Color.NeutralGray0', 'Tokens.Color.NeutralGray10', 'Tokens.Color.NeutralGray20', 'Tokens.Color.NeutralGray30',
          'Tokens.Color.NeutralGray40', 'Tokens.Color.NeutralGray50', 'Tokens.Color.NeutralGray60', 'Tokens.Color.NeutralGray70',
          'Tokens.Color.NeutralGray80', 'Tokens.Color.NeutralGray90', 'Tokens.Color.NeutralGray100',
          'Tokens.Color.Blue0', 'Tokens.Color.Blue10', 'Tokens.Color.Blue20', 'Tokens.Color.Blue30', 'Tokens.Color.Blue40',
          'Tokens.Color.Blue50', 'Tokens.Color.Blue60', 'Tokens.Color.Blue70', 'Tokens.Color.Blue80', 'Tokens.Color.Blue90', 'Tokens.Color.Blue100',
          'Tokens.Color.Green0', 'Tokens.Color.Green10', 'Tokens.Color.Green20', 'Tokens.Color.Green30', 'Tokens.Color.Green40',
          'Tokens.Color.Green50', 'Tokens.Color.Green60', 'Tokens.Color.Green70', 'Tokens.Color.Green80', 'Tokens.Color.Green90', 'Tokens.Color.Green100',
          'Tokens.Color.Purple0', 'Tokens.Color.Purple10', 'Tokens.Color.Purple20', 'Tokens.Color.Purple30', 'Tokens.Color.Purple40',
          'Tokens.Color.Purple50', 'Tokens.Color.Purple60', 'Tokens.Color.Purple70', 'Tokens.Color.Purple80', 'Tokens.Color.Purple90', 'Tokens.Color.Purple100',
          'Tokens.Color.Red0', 'Tokens.Color.Red10', 'Tokens.Color.Red20', 'Tokens.Color.Red30', 'Tokens.Color.Red40',
          'Tokens.Color.Red50', 'Tokens.Color.Red60', 'Tokens.Color.Red70', 'Tokens.Color.Red80', 'Tokens.Color.Red90', 'Tokens.Color.Red100',
          'Tokens.Color.Orange0', 'Tokens.Color.Orange10', 'Tokens.Color.Orange20', 'Tokens.Color.Orange30', 'Tokens.Color.Orange40',
          'Tokens.Color.Orange50', 'Tokens.Color.Orange60', 'Tokens.Color.Orange70', 'Tokens.Color.Orange80', 'Tokens.Color.Orange90', 'Tokens.Color.Orange100',
          'Tokens.Color.Yellow0', 'Tokens.Color.Yellow10', 'Tokens.Color.Yellow20', 'Tokens.Color.Yellow30', 'Tokens.Color.Yellow40',
          'Tokens.Color.Yellow50', 'Tokens.Color.Yellow60', 'Tokens.Color.Yellow70', 'Tokens.Color.Yellow80', 'Tokens.Color.Yellow90', 'Tokens.Color.Yellow100',
        ],
      },
      accessibility: {
        contrast: 'Text must meet 4.5:1 contrast ratio (3:1 for large/bold text)',
        guidelines: 'Never rely on color alone. Use explicit text or icons.',
      },
    },
    spacing: {
      description: 'Space tokens use 4px base unit',
      scale: {
        '0': '0px',
        '0.25': '1px (0.0625rem)',
        '0.5': '2px (0.125rem)',
        '1': '4px (0.25rem)',
        '2': '8px (0.5rem)',
        '3': '12px (0.75rem)',
        '4': '16px (1rem)',
        '5': '20px (1.25rem)',
        '6': '24px (1.5rem)',
        '8': '32px (2rem)',
        '10': '40px (2.5rem)',
        '12': '48px (3rem)',
      },
      usage: 'Tokens.Space.Space0 through Tokens.Space.Space12',
      css: 'var(--space-0) through var(--space-12)',
      allSpacingTokens: [
        'Tokens.Space.Space0 (0px)',
        'Tokens.Space.Space0_25 (1px)',
        'Tokens.Space.Space0_5 (2px)',
        'Tokens.Space.Space1 (4px)',
        'Tokens.Space.Space2 (8px)',
        'Tokens.Space.Space3 (12px)',
        'Tokens.Space.Space4 (16px)',
        'Tokens.Space.Space5 (20px)',
        'Tokens.Space.Space6 (24px)',
        'Tokens.Space.Space8 (32px)',
        'Tokens.Space.Space10 (40px)',
        'Tokens.Space.Space12 (48px)',
      ],
      commonValues: ['Space0', 'Space1 (4px)', 'Space2 (8px)', 'Space4 (16px)', 'Space6 (24px)', 'Space8 (32px)', 'Space12 (48px)'],
    },
    typography: {
      fonts: {
        matter: 'Matter - Used for headings',
        inter: 'Inter - Used for body text',
        glyph: 'Glyph - Used for brand/marketing (signed-out experiences)',
      },
      heading: {
        variants: ['heading-large', 'heading-medium', 'heading-small', 'heading-xsmall', 'heading-xxsmall'],
        font: 'Matter',
        weights: [600, 700],
        sizes: {
          'heading-large': '28px (2rem)',
          'heading-medium': '24px (1.714rem)',
          'heading-small': '20px (1.429rem)',
          'heading-xsmall': '16px (1.143rem)',
          'heading-xxsmall': '14px (1rem)',
        },
      },
      text: {
        variants: ['text-large', 'text-medium', 'text-small', 'text-xsmall'],
        font: 'Inter',
        defaultSize: '14px (0.875rem)',
        weights: [400, 500, 600, 700],
        sizes: {
          'text-large': '18px (1.286rem)',
          'text-medium': '16px (1.143rem)',
          'text-small': '14px (1rem)',
          'text-xsmall': '12px (0.86rem)',
        },
      },
      cssVariables: {
        inter: 'var(--font-stack-inter)',
        matter: 'var(--font-stack-matter)',
      },
    },
    elevation: {
      description: 'Elevation system for depth and shadows',
      levels: ['elevation-low', 'elevation-medium', 'elevation-high'],
      usage: 'Tokens.Elevation.ElevationLow, Tokens.Elevation.ElevationMedium, Tokens.Elevation.ElevationHigh',
      properties: ['boxShadow', 'border'],
      css: {
        low: 'var(--elevation-low-shadow), var(--elevation-low-border)',
        medium: 'var(--elevation-medium-shadow), var(--elevation-medium-border)',
        high: 'var(--elevation-high-shadow), var(--elevation-high-border)',
      },
    },
    borderRadius: {
      description: 'Border radius tokens',
      values: {
        'RadiusHalf': '0.5rem (8px)',
        'Radius1': '1rem (16px)',
        'Radius2': '2rem (32px)',
        'Radius3': '3rem (48px)',
      },
      usage: 'Tokens.Radius.RadiusHalf, Tokens.Radius.Radius1, Tokens.Radius.Radius2, Tokens.Radius.Radius3',
      css: 'var(--radius-half), var(--radius-1), var(--radius-2), var(--radius-3)',
      allBorderRadiusTokens: [
        'Tokens.Radius.RadiusHalf (0.5rem / 8px)',
        'Tokens.Radius.Radius1 (1rem / 16px)',
        'Tokens.Radius.Radius2 (2rem / 32px)',
        'Tokens.Radius.Radius3 (3rem / 48px)',
      ],
    },
    blurRadius: {
      description: 'Blur radius tokens for backdrop filters',
      usage: 'Tokens.BlurRadius values',
      css: 'var(--blur-radius-*)',
      allBlurRadiusTokens: [
        'Tokens.BlurRadius values available for backdrop filters',
      ],
    },
    iconography: {
      description: 'Icon tokens and iconography system',
      usage: 'Import icons from @superhuman/origin (e.g., InterfaceSettingsIcon, InterfaceUploadIcon)',
      notes: 'All icons are aria-hidden=true and role="img" by default. View iconography library for complete list.',
      commonIcons: [
        'InterfaceSettingsIcon',
        'InterfaceUploadIcon',
        'InterfaceMoreIcon',
        'InterfaceBellIcon',
        'InterfaceExternalLinkIcon',
        'InterfaceDictionaryIcon',
        'InterfaceIgnoreIcon',
        'InterfaceStarFilledIcon',
        'InterfacePremiumIcon',
        'InterfaceFolderIcon',
        'InterfaceFolderMoveIcon',
      ],
    },
    summary: {
      totalTokenCategories: 6,
      categories: ['Colors (Semantic & Primitive)', 'Spacing', 'Typography', 'Elevation', 'Border Radius', 'Blur Radius', 'Iconography'],
      totalSemanticColorTokens: '50+ (combinations of property/concept/variant)',
      totalPrimitiveColorTokens: '70+ (across all color families)',
      totalSpacingTokens: '12 values (Space0 through Space12)',
      totalTypographyVariants: '9 (5 heading + 4 text variants)',
      totalElevationLevels: '3 (low, medium, high)',
      totalBorderRadiusValues: '4 (RadiusHalf, Radius1, Radius2, Radius3)',
    },
  },

  // UI Patterns
  patterns: {
    emptyState: {
      description: 'A transitional moment displayed when there is no other content',
      anatomy: ['Illustration', 'Heading', 'Description (Required)', 'Actions', 'Footer'],
      whenToUse: [
        'User\'s first interaction with a feature or product',
        'When a user has completed all available tasks',
        'An error preventing content from appearing',
        'Access restrictions like sign-in requests, blocked content, or paywalls',
        'No matching search or filter results',
      ],
      buildingBlocks: {
        illustration: {
          purposes: ['Celebration', 'Education', 'Opportunity', 'Clarity'],
          doNotUse: 'When there is no logical connection to surrounding text, does not augment meaning, or space is limited',
        },
        heading: {
          usage: 'Summarize why an empty state has occurred, provide critical next step, celebrate achievement',
          hierarchy: 'Most often h3 or h4, but maintain hierarchical order',
        },
        description: {
          required: true,
          usage: 'Core element explaining what\'s happening, why it\'s happening, and how to transition out',
        },
        buttons: {
          commonActions: ['Create [something]', 'Go back', 'Learn more', 'Refresh', 'Sign in', 'Update', 'Upgrade'],
          variant: 'Use appropriate variant - primary, secondary, tertiary, ghost, critical, Pro, or Enterprise',
        },
        footer: {
          usage: 'Present tangential or tertiary content - customer support, external links, data/privacy info, paywall features',
        },
      },
      writing: {
        principles: ['Use positive, actionable language', 'Focus on recommended action or key benefit', 'Avoid negative statements about emptiness'],
        examples: {
          do: 'Use positive language that encourages a user. Reinforce what they have achieved or what they can do next.',
          dont: 'Do not use negative statements that focus on emptiness or a lack of content.',
        },
      },
      accessibility: {
        colorContrast: 'Text must have at least 4.5:1 color contrast',
        altText: 'Provide descriptive alt text for illustrations',
        focusOrder: 'Set up logical focus order for keyboard navigation',
        replaceContent: 'Replace underlying content entirely (e.g., empty state should replace table headers)',
      },
    },
    forms: {
      description: 'A combination of inputs that collect information',
      anatomy: ['Form heading', 'Heading description', 'Label (with Optional/Required indicator)', 'Text field', 'Fieldset legend', 'Legend description', 'Fieldset', 'Primary Button'],
      buildingBlocks: {
        fieldsets: {
          usage: 'Group closely related inputs',
          legend: 'Always use a legend to label the set, style in Text Small Bold',
          requiredOptional: 'Mark "(Optional)" or "(Required)" - if majority are one type, mark only outliers',
          writing: 'Keep structure and verb tense consistent, use sentence case, use internal punctuation when necessary',
        },
        labels: {
          accessibility: 'Use persistent label on all components',
          requiredOptional: 'If majority are one type, mark only outliers. Include note at top if majority are required.',
          writing: 'Keep structure consistent, use sentence case, use internal punctuation when necessary, keep to single line when possible',
        },
        helperText: {
          usage: 'Provide instructions, indicate requirements, offer examples, define technical terms',
          writing: 'State benefits directly, define unclear terms, make requirements clear, use "Example:" not "E.g." or "I.e.", be brief (140 chars or fewer), use sentence case',
        },
        placeholderText: {
          usage: 'Generally do not use - use helper text instead for accessibility',
          accessibility: 'Not reliably read by screen readers, disappears when typing',
        },
        errorMessages: {
          whenToUse: 'Appear onSubmit when form contains incorrect or invalid information',
          whereToUse: 'Display directly below the form field where error occurred',
          errorSummary: 'Group errors at top of fieldset when 3+ errors, link to individual fields',
          writing: 'Empathetic (not apologetic), informational, action-oriented',
          accessibility: 'Use helper text for formatting requirements, provide text for required fields, include hidden Error before message, connect with aria-describedby, add aria-live role="status" or role="alert" to error summary',
        },
      },
      bestPractices: [
        'Keep forms as short as possible',
        'Only absolutely needed fields should be required',
        'Use "(Required)" and "(Optional)" appropriately',
        'Consider formatting instructions or helper text',
      ],
    },
    disabledState: {
      description: 'Communicates that a UI element cannot be focused, changed, or interacted with',
      whenToUse: [
        'Feature or action is unavailable while UI is loading',
        'Temporary restriction preventing usage',
      ],
      doNotUse: [
        'Large sections of UI',
        'Primary navigation',
        'Critical actions or controls',
        'Filters',
      ],
      pitfalls: [
        'Lack of feedback when user tries to interact',
        'Missing context about why disabled and how to enable',
        'Insufficient visual contrast',
        'Accessibility barriers with screen readers',
      ],
      alternatives: [
        'Inline messages and visual cues',
        'Contextual feedback upon interaction',
        'Progress indicators and loading states',
        'Alternative controls or actions',
      ],
      style: {
        opacity: '40%',
        elevation: 'None',
        hover: 'None',
        cursor: 'not-allowed',
      },
      behavior: 'Do not change when clicked/tapped/hovered, not focusable (except Menu items and Tabs)',
      formSubmission: 'Do not disable primary Button until fields complete - maintain active state and show inline error messages',
    },
    feedbackPattern: {
      description: 'Lets users rate content or features from 1 to 5 stars, with optional field for extra feedback',
      anatomy: ['Rating component', 'Textarea', 'Submit button (required)'],
      whenToUse: 'Collecting quick, lightweight feedback from users',
      doNotUse: [
        'Users in middle of performing a task',
        'Feedback needed in multiple areas of same page',
        'User research or detailed feedback forms needed',
      ],
      behavior: {
        triggering: 'Display after user engages with action (specific output) or triggered by entry point (general feedback)',
        submission: 'Requires star rating 1-5, disappears after successful submission, optionally show Toast confirmation',
      },
      writing: {
        principles: ['Keep brief, concise, user in control', 'Use sentence case', 'Use question mark for questions', 'Use single action per Button', 'Use commands that put user in control'],
        dont: ['Overly familiar or slang', 'Title Case or ALL CAPS', 'End punctuation except question marks', 'Combine actions in single Button', 'Passive phrases'],
      },
    },
    transforms: {
      description: 'Text transforms show suggested edits inside cards, while underlines and highlights appear on user\'s text',
      textTransforms: {
        deletions: {
          style: 'Strikethrough text style, color.text.deletion, borders around markers',
          highlight: 'color.highlight.deletion.default',
        },
        additions: {
          style: 'Semibold text style, color.text.addition, borders around markers',
          highlight: 'color.highlight.addition.default',
        },
      },
      underlinesHighlights: {
        critical: {
          underline: 'color.underline.critical.default (red.40)',
          highlight: 'color.highlight.critical.default (20% of red.40)',
        },
        nonCritical: {
          underline: 'color.underline.noncritical.default (blue.40)',
          highlight: 'color.highlight.noncritical.default (20% of blue.40)',
        },
        pro: {
          underline: 'color.underline.pro.default (yellow.80) and color.underline.pro.subdued (yellow.40)',
          highlight: 'color.highlight.pro.default (20% of yellow.40)',
        },
      },
      accessibility: 'del, ins, and mark elements not announced - use Screen Reader Only utility for visual-only information',
    },
  },

  // Content Guidelines
  contentGuidelines: {
    voiceAndTone: {
      description: 'Superhuman\'s brand voice is bold, empowering, and warm',
      attributes: {
        bold: {
          description: 'Communicate crisply, directly, and decisively',
          characteristics: ['Decisive and direct', 'Confident that we are experts', 'Crisp and succinct'],
        },
        empowering: {
          description: 'Positive, clear, and helpful',
          characteristics: ['Positive, encouraging, and inspiring', 'Helpful and supportive', 'Clear and ready to walk you through it'],
        },
        warm: {
          description: 'Trustworthy, approachable, and human',
          characteristics: ['Human and empathetic', 'Trustworthy', 'Approachable and conversational'],
        },
      },
      examples: {
        onboarding: {
          offBrand: 'Too warm and cutesy, not empowering',
          onBrand: 'Welcoming warmth, professionally conversational, clear and crisp',
        },
        assistantSuggestion: {
          offBrand: 'Too soft and hedging',
          onBrand: 'Conversational, succinct, straightforward, empowering',
        },
        successState: {
          offBrand: 'Too cheesy and bold, unclear message',
          onBrand: 'Simple, to the point, human and encouraging',
        },
        error404: {
          offBrand: 'Robotic, panicky, not empowering',
          onBrand: 'Direct and succinct, conversational, clear and helpful',
        },
      },
    },
    terminology: {
      description: 'Terminology guide for writing in Superhuman product',
      keyTerms: {
        advanced: 'Do not use - use "Premium" for paid features instead',
        aiPowered: 'Do not use',
        choose: 'Reserve for very personal choices - prefer "select" in instructional text',
        click: 'Use "click" not "click on" - or use "select" for generic actions',
        corrections: 'Avoid - refer to "suggestions" to emphasize user control',
        country: 'Use "country or region" or "location"',
        delete: 'Use for permanent actions - use "remove" for reversible',
        disableDisabled: 'Do not use in user-facing content - use "inactive", "unavailable", "turned off", "discontinued"',
        download: 'Not transformative - changing location from remote to local',
        enable: 'Use with caution - prefer "turn on/off", "activate/deactivate"',
        error: 'Avoid for user\'s writing - has negative connotation',
        export: 'Transformative - taking data out of native format to different format',
        gotIt: 'Do not use - use "accept", "back", "cancel", "close", "dismiss", "done", "OK"',
        hit: 'Do not use - use "select" or "choose"',
        invalid: 'Do not use - reframe to focus on how user can move forward',
        import: 'Transformative - taking preformatted data from another app',
        logIn: 'Do not use - use "sign in"',
        members: 'In Business contexts, refer to "members" not "company members"',
        menu: 'Use "in" not "on" to refer to menu actions',
        monitor: 'Do not use - use "measuring improvements", "finding opportunities", "measuring engagement"',
        password: {
          change: 'Changing from existing value to new value',
          create: 'Setting initial value during onboarding',
          reset: 'Erasing existing and creating new (expired/lost/forgotten)',
          update: 'Overwriting stored password with new value from different context',
        },
        please: 'Limit use - reserve for frustrating contexts like error messages',
        popUp: 'Adjective: "pop-up window" (hyphenated), Verb: "pop up" (two words)',
        press: 'For keyboard shortcuts, use "press" not "type"',
        protect: 'Use with caution - prefer "helps protect"',
        remove: 'Use for reversible actions - use "delete" for permanent',
        secure: 'Use with caution - prefer "helps secure"',
        select: 'Preferred action verb for instructional text',
        signIn: 'Two words, preferred over "log in"',
        signInTo: 'Three words',
        signUp: 'Two words - consider "create an account" when "sign in" also appears',
        sorry: 'Only use in frustrating or difficult contexts',
        suggestions: 'Be clear that Grammarly generates suggestions - does not "find" them',
        swipe: 'Use for touchscreen interactions - use "select" or "choose" for generic',
        switch: 'Do not use as verb - use "turn on/off"',
        toggle: 'Do not use as noun or verb - use "turn on/off"',
        trackTracking: 'Do not use - avoid implying tracking of PII',
        turnOffFor: 'Use this phrase, not "turn off on" or "turn off in"',
        unpause: 'Do not use - use "resume" or "play"',
        unlock: 'Do not use for upgrading to Premium',
        upgrade: 'Preferred for signing up for Premium - also "get" or "go"',
        upload: 'Not transformative - changing location from local to remote',
        username: 'One word per Merriam-Webster',
        widget: 'Use to describe in-product entry point that opens expanded assistant interface',
      },
      localization: {
        language: 'American English spelling, grammar, and formatting',
        considerations: [
          'Use consistent terminology',
          'Write in American English with American formatting',
          'Consider machine/AI translations by third-party apps',
          'Keep global political perspectives in mind',
        ],
      },
    },
    style: {
      description: 'Set of practices and standards for writing',
      readingLevel: 'Aim for 7th-grade reading level or lower',
      activeVoice: 'Use active voice wherever possible',
      wordChoice: 'Avoid exclusionary terms like "blacklist" and "whitelist"',
      properNames: 'Avoid introducing proper names in title case needlessly',
    },
    accessibility: {
      description: 'Guidelines for creating accessible content',
      categories: {
        seeing: ['Low vision', 'Blindness', 'Deafblindness', 'Color vision deficiency'],
        moving: ['Chronic pain', 'Paralysis or amputation', 'Physical injury', 'Cognitive or neurological conditions'],
        thinking: ['Autism', 'Dyslexia', 'ADHD'],
        hearing: ['Hard of hearing', 'Deafness'],
        speaking: ['Neurological conditions', 'Deafness', 'Cognitive disabilities', 'Physical injury'],
      },
      organizingInformation: {
        signposting: ['Informative headings and logical hierarchy', 'Breadcrumbs', 'Screen reader-only content'],
        consistency: ['Parallel structure', 'Consistent typography and casing', 'Standard names for buttons and settings'],
      },
      writing: {
        readingLevel: '7th-grade reading level or lower',
        activeVoice: 'Use active voice wherever possible',
        wordChoice: 'Avoid exclusionary terms, avoid "disabled"/"enabled" in user-facing content',
        altText: {
          when: 'If image adds key information, shows example, or contributes to mood/tone',
          whenNot: 'Purely decorative images',
          bestPractices: ['Clear and concise (max 2 sentences)', 'Focus on information user needs', 'Use proper punctuation', 'Do not begin with "Image of..."'],
        },
        spatialDescriptions: 'Avoid relative directions like "top-left", "below", "on the right"',
        namingLabeling: {
          principles: ['Describe function not appearance', 'Lead with action verbs', 'Be concise', 'Use unique labels', 'Begin with capital letter, omit end punctuation'],
        },
        emoji: {
          avoid: 'Avoid emoji whenever possible - inconsistent and unclear',
          ifUsed: 'Use sparingly, put at end of text, check screen reader name',
          dont: ['Replace words with emoji', 'Use as bullet points', 'Rely on emoji for important information'],
        },
      },
    },
  },

  // Iconography
  iconography: {
    description: 'Icons used throughout products to add clarity',
    usage: 'All icons available through Icon component from @superhuman/origin',
    categories: {
      logos: {
        tokenNames: 'gds-icon-logo-[icon-name]',
        usage: 'For sizes larger than Icon component allows, use SVG directly',
        example: '<LogoLockupColorHorizontalDefaultIcon style={{ height: 50, width: "auto" }} aria-label="Grammarly logo" aria-hidden={false} />',
      },
      interface: {
        tokenNames: 'gds-icon-interface-[icon-name]',
        description: 'UI icons indicating actions and navigation',
      },
      agents: {
        tokenNames: 'gds-icon-agents-[icon-name]',
        description: 'Icons for agent-related features',
      },
      apps: {
        tokenNames: 'gds-icon-apps-[icon-name]',
        description: 'Icons for app integrations',
      },
      authorship: {
        tokenNames: 'gds-icon-authorship-[icon-name]',
        description: 'Icons for authorship features',
      },
      consent: {
        tokenNames: 'gds-icon-consent-[icon-name]',
        description: 'Icons for consent-related features',
      },
      emoji: {
        tokenNames: 'gds-icon-emoji-[icon-name]',
        description: 'Emoji that communicate tone',
      },
      flag: {
        tokenNames: 'gds-icon-flag-[icon-name]',
        usage: 'Additional visual indicator for language preference selectors',
        guidelines: [
          'May be used to identify a country - always include alternate text',
          'Never use alone to identify a language - always pair with text',
          'Always pair flag icons with text identifying both country and language',
        ],
      },
      outcome: {
        tokenNames: 'gds-icon-outcome-[icon-name]',
        description: 'Icons for outcomes',
      },
      social: {
        tokenNames: 'gds-icon-social-[icon-name]',
        description: 'Social media icons',
      },
    },
    addingNewIcons: 'Contact Design System team in #ask-origin-design-system Slack channel',
    accessibility: 'All icons are aria-hidden=true and role="img" by default',
  },

  // Illustrations
  illustrations: {
    description: 'Used to add brand expression and visual interest, most often in Empty States',
    usage: 'All illustrations available through Illustration component from @superhuman/origin',
    categories: {
      emptySuccessStates: {
        description: 'Designed to be used in pairs',
        example: 'empty-cookie paired with success-cookie',
        special: 'success-check can be used wherever needed',
      },
      spotIllustrations: {
        description: 'Can be used anywhere as needed',
      },
    },
    addingNew: 'Contact Design Foundations team in #ask-origin-design-system Slack channel',
  },

  // Animation & Motion
  animation: {
    description: 'Guidelines for animations and transitions',
    prefersReducedMotion: {
      requirement: 'All animations must respect prefers-reduced-motion setting',
      behavior: 'If setting is on, all animations should be removed',
    },
    componentConventions: 'Support prefers-reduced-motion in all components',
    examples: {
      skeletonLoader: {
        timeline: 'Less than 1 second: blank screen animation, 1-3 seconds: show gradient animation, More than 3 seconds: show gradient animation',
        userSettings: {
          noPreferences: 'Show gradient animation',
          reducedMotion: 'Turn off gradient animation',
          reducedMotionAndHighContrast: 'Turn off gradient animation and add transparent border',
        },
      },
      circularLoader: {
        userSettings: {
          noPreferences: 'Show animation',
          reducedMotion: 'Turn off animation',
        },
      },
      brandedLoader: {
        userSettings: {
          noPreferences: 'Shows animation',
          reducedMotion: 'Pauses animation for 5 seconds before starting again',
        },
      },
    },
  },

  // Accessibility Guidelines
  accessibility: {
    description: 'Comprehensive accessibility guidelines for Origin Design System',
    wcag: {
      description: 'Web Content Accessibility Guidelines provide technical specifications',
      contrast: {
        text: 'Must meet 4.5:1 contrast ratio (3:1 for large/bold text)',
        disabledStates: 'Do not have contrast requirements - can lead to reduced readability',
      },
    },
    keyboardNavigation: {
      description: 'Full keyboard support required',
      focusOrder: 'Logical focus order for screen readers',
      focusIndicators: 'Visible indicators for focus, hover, active, and deactivated states',
    },
    screenReaders: {
      description: 'Full screen reader support required',
      ariaLabels: 'Use descriptive aria-label attributes',
      ariaDescribedBy: 'Connect error messages with aria-describedby',
      ariaLive: 'Use aria-live role="status" or role="alert" for dynamic content',
      hiddenContent: 'Use Screen Reader Only utility for visual-only information',
    },
    componentAccessibility: {
      verify: 'Verify full support for keyboards and screen readers early and often',
      visibleIndicators: 'Make sure visible indicators available for focus, hover, active, and deactivated states',
    },
    cssConventions: {
      directionalProperties: 'Use margin-inline-start instead of margin-left for RTL support',
      designTokens: 'Use design tokens whenever possible - do not hard code values',
    },
  },

  // Common Use Cases
  useCases: {
    gettingStarted: [
      'How do I install Origin?',
      'What\'s the basic setup?',
      'How do I use my first component?',
      'How do I import styles and fonts?',
    ],
    building: [
      'How do I create a form?',
      'How do I build a modal?',
      'How do I style custom components?',
      'How do I use design tokens?',
    ],
    components: [
      'What are button variants?',
      'How to use select dropdown?',
      'What is a badge?',
      'List all components',
    ],
    patterns: [
      'How do I create an empty state?',
      'How do I handle form errors?',
      'How do I implement disabled states?',
      'How do I add feedback surveys?',
    ],
    content: [
      'What is the brand voice?',
      'What terminology should I use?',
      'How do I write accessible content?',
      'What style guidelines should I follow?',
    ],
  },
};

// Parse components from user input
export function parseComponents(input: string): string[] {
  const components: string[] = [];
  const lowerInput = input.toLowerCase();
  
  if (lowerInput.includes('form') || lowerInput.includes('landing')) components.push('form');
  if (lowerInput.includes('modal') || lowerInput.includes('overlay') || lowerInput.includes('dialog')) components.push('modal');
  if (lowerInput.includes('tab')) components.push('tabs');
  if (lowerInput.includes('select') || lowerInput.includes('dropdown')) components.push('select');
  if (lowerInput.includes('badge')) components.push('badge');
  if (lowerInput.includes('tag') && !lowerInput.includes('badge') && !lowerInput.includes('plan')) components.push('tag');
  if (lowerInput.includes('switch') || (lowerInput.includes('toggle') && !lowerInput.includes('suggestion'))) components.push('switch');
  if (lowerInput.includes('radio')) components.push('radiogroup');
  if (lowerInput.includes('toast')) components.push('toast');
  if (lowerInput.includes('tooltip') && !lowerInput.includes('onboarding')) components.push('tooltip');
  if (lowerInput.includes('menu')) components.push('menu');
  if (lowerInput.includes('search')) components.push('searchfield');
  if (lowerInput.includes('link') && !lowerInput.includes('button')) components.push('link');
  if (lowerInput.includes('heading')) components.push('heading');
  if (lowerInput.includes('button') && !lowerInput.includes('icon') && !lowerInput.includes('aslink')) components.push('button');
  if (lowerInput.includes('buttonaslink') || (lowerInput.includes('button') && lowerInput.includes('link'))) components.push('buttonaslink');
  if (lowerInput.includes('iconbutton') || (lowerInput.includes('icon') && lowerInput.includes('button'))) components.push('iconbutton');
  if (lowerInput.includes('textarea') || lowerInput.includes('text area')) components.push('textarea');
  else if (lowerInput.includes('text') || lowerInput.includes('field') || lowerInput.includes('input')) components.push('textfield');
  if (lowerInput.includes('checkbox') || lowerInput.includes('check')) components.push('checkbox');
  if (lowerInput.includes('flex') || lowerInput.includes('layout')) components.push('flex');
  if (lowerInput.includes('accordion')) components.push('accordion');
  if (lowerInput.includes('box') && !lowerInput.includes('check')) components.push('box');
  if (lowerInput.includes('combobox')) components.push('combobox');
  if (lowerInput.includes('icon') && !lowerInput.includes('button')) components.push('icon');
  if (lowerInput.includes('loader') || lowerInput.includes('loading') || lowerInput.includes('skeleton')) components.push('loaders');
  if (lowerInput.includes('popover')) components.push('popover');
  if (lowerInput.includes('rating') || lowerInput.includes('star')) components.push('rating');
  if (lowerInput.includes('verification') || lowerInput.includes('2fa') || lowerInput.includes('otp')) components.push('verificationcode');
  if (lowerInput.includes('plan') && lowerInput.includes('tag')) components.push('planTag');
  if (lowerInput.includes('sticker')) components.push('sticker');
  if (lowerInput.includes('suggestion') && lowerInput.includes('toggle')) components.push('suggestionToggle');
  if (lowerInput.includes('onboarding') && lowerInput.includes('tooltip')) components.push('onboardingTooltip');
  
  return components;
}

// Generate real Origin React code examples
export function generateHTMLExample(userInput: string): { explanation: string; html: string; components: string[] } {
  const input = userInput.toLowerCase();
  const components = parseComponents(input);

  // Complex landing page with form + modal
  if ((components.includes('form') || input.includes('landing') || input.includes('page')) && components.length > 1) {
    const hasTextarea = components.includes('textarea');
    const hasCheckbox = components.includes('checkbox');
    const hasModal = components.includes('modal');

    const imports = [
      "import { Button, Form, FormHeader, FormRow, FormFooter } from '@superhuman/origin';",
      hasTextarea ? "import { Textarea } from '@superhuman/origin';" : "",
      hasCheckbox ? "import { Checkbox } from '@superhuman/origin';" : "",
      hasModal ? "import { Modal, Flex, Text } from '@superhuman/origin';" : "",
    ].filter(Boolean).join('\n');

    return {
      explanation: 'Here\'s an Origin landing page with ' + components.filter(c => c !== 'form').join(', ') + (hasModal ? ' and modal overlay' : '') + '. This uses real Origin React components.',
      components,
      html: `${imports}

function LandingPage() {
  ${hasModal ? 'const [isOpen, setIsOpen] = React.useState(false);' : ''}

  const handleSubmit = (e) => {
    e.preventDefault();
    ${hasModal ? 'setIsOpen(true);' : 'console.log("Form submitted");'}
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormHeader
          heading="Get Started"
          description="Fill out the form below to continue"
        />
        ${hasTextarea ? `
        <FormRow>
          <Textarea
            label="Your Message"
            placeholder="Tell us more..."
            isRequired
          />
        </FormRow>` : ''}
        ${hasCheckbox ? `
        <FormRow>
          <Checkbox isRequired>
            I agree to the terms and conditions
          </Checkbox>
        </FormRow>` : ''}
        <FormFooter>
          <Button type="submit" text="Submit Form" />
        </FormFooter>
      </Form>

      ${hasModal ? `<Modal
        title="Success!"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        width="small"
      >
        <Modal.Body>
          <Text as="p">Your form has been submitted successfully.</Text>
        </Modal.Body>
        <Modal.Footer>
          <Flex gap={3} justify="end" width="100%">
            <Button
              variant="tertiary"
              text="Close"
              onClick={() => setIsOpen(false)}
            />
            <Button text="Continue" onClick={() => setIsOpen(false)} />
          </Flex>
        </Modal.Footer>
      </Modal>` : ''}
    </>
  );
}`,
    };
  }

  // Form with multiple fields
  if (components.includes('form') || (components.includes('textfield') && components.includes('button') && components.length > 2)) {
    return {
      explanation: 'Here\'s an Origin Form with TextField, RadioGroup, and Buttons.',
      components,
      html: `import {
  Button,
  Form,
  FormHeader,
  FormRow,
  FormFooter,
  TextField,
  RadioGroup,
  RadioButton
} from '@superhuman/origin';

function SettingsForm() {
  return (
    <Form onSubmit={() => alert("Saved!")}>
      <FormHeader heading="Settings" />
      <FormRow>
        <TextField label="First name" isRequired />
        <TextField label="Last name" isRequired />
      </FormRow>
      <FormRow>
        <RadioGroup
          legend="Contact preference"
          helperMessage="Used for product notifications and marketing"
          layout="row"
        >
          <RadioButton value="emails">Emails only</RadioButton>
          <RadioButton value="text">Texts only</RadioButton>
          <RadioButton value="both">Emails and texts</RadioButton>
        </RadioGroup>
      </FormRow>
      <FormFooter>
        <Button type="submit" text="Save" />
        <Button text="Cancel" variant="tertiary" />
      </FormFooter>
    </Form>
  );
}`,
    };
  }

  // Single Button
  if (components.length === 1 && components[0] === 'button') {
    const variant = input.includes('secondary') ? 'secondary' :
                    input.includes('tertiary') ? 'tertiary' :
                    input.includes('ghost') ? 'ghost' : 'primary';

    return {
      explanation: `Here's a ${variant} Button. ${
        variant === 'primary' ? 'Use for the highest-priority action.' :
        variant === 'ghost' ? 'Use for high-priority actions that appear more than once.' :
        variant === 'secondary' ? 'Use for medium emphasis complementary actions.' :
        'Use to reduce emphasis on non-critical actions.'
      }`,
      components,
      html: `import { Button } from '@superhuman/origin';

function Example() {
  return (
    <Button
      ${variant !== 'primary' ? `variant="${variant}" ` : ''}text="Click Me"
      onClick={() => console.log('Clicked!')}
    />
  );
}`,
    };
  }

  // TextField + Button
  if (components.includes('textfield') && components.includes('button')) {
    return {
      explanation: 'Here\'s a TextField with a Button, great for search or quick forms.',
      components,
      html: `import { Button, TextField, Flex } from '@superhuman/origin';

function SearchExample() {
  const [value, setValue] = React.useState('');

  return (
    <Flex gap={4} align="end">
      <TextField
        label="Search"
        value={value}
        onChange={setValue}
        placeholder="Type something..."
      />
      <Button
        text="Submit"
        onClick={() => console.log('Submitted:', value)}
      />
    </Flex>
  );
}`,
    };
  }

  // Single TextField
  if (components.length === 1 && components[0] === 'textfield') {
    return {
      explanation: 'Here\'s a TextField for short text input.',
      components,
      html: `import { TextField } from '@superhuman/origin';

function Example() {
  return (
    <TextField
      label="First name"
      helperMessage="Enter your first name"
    />
  );
}`,
    };
  }

  // Single Textarea
  if (components.length === 1 && components[0] === 'textarea') {
    return {
      explanation: 'Here\'s a Textarea for longer text input.',
      components,
      html: `import { Textarea } from '@superhuman/origin';

function Example() {
  return (
    <Textarea
      label="Comments"
      placeholder="Enter your comments..."
      helperMessage="Share your thoughts"
    />
  );
}`,
    };
  }

  // Single Checkbox
  if (components.length === 1 && components[0] === 'checkbox') {
    return {
      explanation: 'Here\'s a Checkbox for yes/no choices.',
      components,
      html: `import { Checkbox } from '@superhuman/origin';

function Example() {
  return (
    <Checkbox helperMessage="Not suggested on public computers">
      Remember me
    </Checkbox>
  );
}`,
    };
  }

  // Modal
  if (components.length === 1 && components[0] === 'modal') {
    return {
      explanation: 'Here\'s a Modal for focused tasks or displaying information.',
      components,
      html: `import { Button, Modal, Flex, Text } from '@superhuman/origin';

function Example() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button
        text="Open Modal"
        onClick={() => setIsOpen(true)}
      />

      <Modal
        title="Example Modal"
        description="This is a description of the modal"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        width="small"
      >
        <Modal.Body>
          <Text as="p" variant="text-small">
            Content goes in the body of the Modal.
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Flex gap={3} justify="end" width="100%">
            <Button
              variant="tertiary"
              text="Cancel"
              onClick={() => setIsOpen(false)}
            />
            <Button
              text="Confirm"
              onClick={() => setIsOpen(false)}
            />
          </Flex>
        </Modal.Footer>
      </Modal>
    </>
  );
}`,
    };
  }

  // Single Select
  if (components.length === 1 && components[0] === 'select') {
    return {
      explanation: 'Here\'s a Select dropdown for choosing from predefined options.',
      components,
      html: `import { Select } from '@superhuman/origin';

function Example() {
  return (
    <Select label="Sort by">
      <Select.Option value="name" label="Name" />
      <Select.Option value="count" label="Count" />
      <Select.Option value="date" label="Date" />
    </Select>
  );
}`,
    };
  }

  // Single Tabs
  if (components.length === 1 && components[0] === 'tabs') {
    return {
      explanation: 'Here\'s a Tabs component for navigating between related content panels.',
      components,
      html: `import { Tabs } from '@superhuman/origin';

function Example() {
  return (
    <Tabs>
      <Tabs.TabList accessibilityLabel="Settings">
        <Tabs.Tab id="profile" label="Profile" />
        <Tabs.Tab id="password" label="Password" />
        <Tabs.Tab id="notifications" label="Notifications" />
      </Tabs.TabList>
      <Tabs.Panel id="profile">
        Profile settings content goes here
      </Tabs.Panel>
      <Tabs.Panel id="password">
        Password settings content goes here
      </Tabs.Panel>
      <Tabs.Panel id="notifications">
        Notification preferences go here
      </Tabs.Panel>
    </Tabs>
  );
}`,
    };
  }

  // Single Badge
  if (components.length === 1 && components[0] === 'badge') {
    return {
      explanation: 'Here\'s a Badge for displaying numeric values and tallies.',
      components,
      html: `import { Badge } from '@superhuman/origin';

function Example() {
  return (
    <Badge
      variant="neutral"
      count={10}
      getAriaLabelText={count => \`\${count} suggestions\`}
    />
  );
}`,
    };
  }

  // Single Tag
  if (components.length === 1 && components[0] === 'tag') {
    return {
      explanation: 'Here\'s a Tag for labeling and categorizing content.',
      components,
      html: `import { Tag } from '@superhuman/origin';

function Example() {
  return (
    <>
      <Tag label="Your rules" />
      <Tag label="Featured" variant="premium" />
      <Tag label="Completed" variant="success" />
    </>
  );
}`,
    };
  }

  // Single Switch
  if (components.length === 1 && components[0] === 'switch') {
    return {
      explanation: 'Here\'s a Switch toggle for on/off settings.',
      components,
      html: `import { Switch } from '@superhuman/origin';

function Example() {
  const [enabled, setEnabled] = React.useState(false);

  return (
    <Switch
      label="Enable feature"
      checked={enabled}
      onChange={setEnabled}
    />
  );
}`,
    };
  }

  // Single RadioGroup
  if (components.length === 1 && components[0] === 'radiogroup') {
    return {
      explanation: 'Here\'s a RadioGroup for single selection from multiple options.',
      components,
      html: `import { RadioGroup, RadioButton } from '@superhuman/origin';

function Example() {
  const [value, setValue] = React.useState('all');

  return (
    <RadioGroup
      legend="Visibility"
      value={value}
      onChange={setValue}
    >
      <RadioButton value="all">All websites</RadioButton>
      <RadioButton value="select">Select websites</RadioButton>
      <RadioButton value="none">No websites</RadioButton>
    </RadioGroup>
  );
}`,
    };
  }

  // Single Toast
  if (components.length === 1 && components[0] === 'toast') {
    return {
      explanation: 'Here\'s a Toast for temporary feedback messages.',
      components,
      html: `import { Toast } from '@superhuman/origin';

function Example() {
  const [showToast, setShowToast] = React.useState(true);

  return (
    <>
      {showToast && (
        <Toast
          text="Saved successfully"
          variant="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
}`,
    };
  }

  // Single Tooltip
  if (components.length === 1 && components[0] === 'tooltip') {
    return {
      explanation: 'Here\'s a Tooltip for displaying helpful hints on hover.',
      components,
      html: `import { Tooltip, TooltipContent, TooltipTrigger, Button } from '@superhuman/origin';

function Example() {
  return (
    <Tooltip placement="right">
      <TooltipTrigger asChild>
        <Button text="Hover me" />
      </TooltipTrigger>
      <TooltipContent>
        This is helpful text that appears on hover
      </TooltipContent>
    </Tooltip>
  );
}`,
    };
  }

  // Single Menu
  if (components.length === 1 && components[0] === 'menu') {
    return {
      explanation: 'Here\'s a Menu for contextual actions and navigation.',
      components,
      html: `import { Menu } from '@superhuman/origin';

function Example() {
  return (
    <Menu activator="more-vertical">
      <Menu.Item key="copy">Copy</Menu.Item>
      <Menu.Item key="paste">Paste</Menu.Item>
      <Menu.Item key="delete" variant="critical">Delete</Menu.Item>
    </Menu>
  );
}`,
    };
  }

  // Single SearchField
  if (components.length === 1 && components[0] === 'searchfield') {
    return {
      explanation: 'Here\'s a SearchField for filtering and searching content.',
      components,
      html: `import { SearchField } from '@superhuman/origin';

function Example() {
  const [query, setQuery] = React.useState('');

  return (
    <SearchField
      label="Search"
      placeholder="Search images"
      value={query}
      onChange={setQuery}
    />
  );
}`,
    };
  }

  // Single Link
  if (components.length === 1 && components[0] === 'link') {
    return {
      explanation: 'Here\'s a Link for navigation.',
      components,
      html: `import { Link } from '@superhuman/origin';

function Example() {
  return (
    <>
      <Link href="/help">Visit help center</Link>
      <Link href="https://grammarly.com" target="_blank">External link</Link>
    </>
  );
}`,
    };
  }

  // Single Heading
  if (components.length === 1 && components[0] === 'heading') {
    return {
      explanation: 'Here\'s a Heading for page titles and section headers.',
      components,
      html: `import { Heading } from '@superhuman/origin';

function Example() {
  return (
    <>
      <Heading as="h1" size="xl">Page Title</Heading>
      <Heading as="h2" size="lg">Section Heading</Heading>
      <Heading as="h3" size="md">Subsection</Heading>
    </>
  );
}`,
    };
  }

  // Single Text
  if (components.length === 1 && components[0] === 'text') {
    return {
      explanation: 'Here\'s a Text component for body text and labels.',
      components,
      html: `import { Text } from '@superhuman/origin';

function Example() {
  return (
    <>
      <Text as="p">This is body text using the Text component.</Text>
      <Text as="span" variant="text-small">Small text variant</Text>
      <Text as="label" variant="text-small">Label text</Text>
    </>
  );
}`,
    };
  }

  // Default: Simple Form
  return {
    explanation: 'Here\'s a basic Origin Form with common elements.',
    components: ['form', 'textfield', 'button'],
    html: `import { Button, Form, FormHeader, FormRow, FormFooter, TextField } from '@superhuman/origin';

function BasicForm() {
  return (
    <Form onSubmit={() => console.log('Submitted')}>
      <FormHeader heading="Contact Form" />
      <FormRow>
        <TextField label="Name" isRequired />
      </FormRow>
      <FormRow>
        <TextField label="Email" type="email" isRequired />
      </FormRow>
      <FormFooter>
        <Button type="submit" text="Submit" />
      </FormFooter>
    </Form>
  );
}`,
  };
}

// Find relevant information
export function findRelevantInfo(userInput: string): string {
  const input = userInput.toLowerCase();

  // Installation queries
  if (input.includes('install') || input.includes('setup') || input.includes('getting started')) {
    return `**Installation & Setup:**

1. **Install the package:**
   \`\`\`bash
   npm install @superhuman/origin
   # or
   yarn add @superhuman/origin
   # or
   pnpm install @superhuman/origin
   \`\`\`

2. **Import styles in your CSS:**
   \`\`\`css
   @import '@superhuman/origin';
   \`\`\`

3. **Import fonts (if needed):**
   \`\`\`css
   import '@superhuman/origin/dist/fonts.css';
   \`\`\`

4. **Set default font:**
   \`\`\`css
   body {
     font-family: var(--font-stack-inter);
   }
   \`\`\`

5. **Use components:**
   \`\`\`tsx
   import { Button } from '@superhuman/origin';
   
   <Button text="Click me" onClick={() => {}} />
   \`\`\`

Try: "create a button" to see a working example!`;
  }

  if (input.includes('primary color') || (input.includes('main') && input.includes('color'))) {
    return `Primary Origin Color:

• Green 60 (#15CD72) - main brand color
• Used in primary buttons and success states

In React:
\`\`\`jsx
<Button text="Primary Action" />
\`\`\``;
  }

  if (input.includes('button')) {
    return `Button Variants:

• **Primary** - Highest priority action (default)
• **Ghost** - High-priority, appears multiple times
• **Secondary** - Medium emphasis, complementary action
• **Tertiary** - Low emphasis, non-critical action

Example:
\`\`\`jsx
<Button text="Primary" />
<Button variant="ghost" text="Ghost" />
<Button variant="secondary" text="Secondary" />
<Button variant="tertiary" text="Tertiary" />
\`\`\`

Try: "create primary button"`;
  }

  if (input.includes('form')) {
    return `Form Components:

Origin Forms use several components:
• **Form** - Container with onSubmit
• **FormHeader** - heading and description
• **FormRow** - Horizontal layout for inputs
• **FormFooter** - Action buttons

Example:
\`\`\`jsx
<Form onSubmit={handleSubmit}>
  <FormHeader heading="Settings" />
  <FormRow>
    <TextField label="Name" />
  </FormRow>
  <FormFooter>
    <Button type="submit" text="Save" />
  </FormFooter>
</Form>
\`\`\`

Try: "create a form"`;
  }

  if (input.includes('textfield') || input.includes('text field') || input.includes('input')) {
    return `TextField Component:

• Single-line text input
• Props: label, helperMessage, errorMessage, isRequired, isOptional
• Types: text, email, password, number

Example:
\`\`\`jsx
<TextField
  label="Email"
  type="email"
  helperMessage="We'll never share your email"
  isRequired
/>
\`\`\`

Try: "create text field with button"`;
  }

  if (input.includes('modal')) {
    return `Modal Component:

• Dialog overlay for focused tasks
• Use for urgent info or immediate actions
• Props: title, description, isOpen, onClose, width

Example:
\`\`\`jsx
<Modal
  title="Confirm"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
>
  <Modal.Body>...</Modal.Body>
  <Modal.Footer>...</Modal.Footer>
</Modal>
\`\`\`

Try: "create a modal"`;
  }

  if (input.includes('select') || input.includes('dropdown')) {
    return `Select Component:

• Dropdown for choosing from predefined options
• Use when there are multiple options to choose from
• Props: label, helperMessage, errorMessage, isRequired

Example:
\`\`\`jsx
<Select label="Sort by">
  <Select.Option value="name" label="Name" />
  <Select.Option value="count" label="Count" />
</Select>
\`\`\`

Try: "create a select"`;
  }

  if (input.includes('tab')) {
    return `Tabs Component:

• Navigate between panels of related content
• Use to save vertical space with related sections
• Props: accessibilityLabel for TabList

Example:
\`\`\`jsx
<Tabs>
  <Tabs.TabList accessibilityLabel="Settings">
    <Tabs.Tab id="profile" label="Profile" />
    <Tabs.Tab id="password" label="Password" />
  </Tabs.TabList>
  <Tabs.Panel id="profile">Content</Tabs.Panel>
  <Tabs.Panel id="password">Content</Tabs.Panel>
</Tabs>
\`\`\`

Try: "create tabs"`;
  }

  if (input.includes('badge')) {
    return `Badge Component:

• Display numeric values like tallies and counts
• Props: variant (neutral, accent), count, getAriaLabelText
• Use for notification counts and metrics

Example:
\`\`\`jsx
<Badge
  variant="neutral"
  count={10}
  getAriaLabelText={count => \`\${count} suggestions\`}
/>
\`\`\`

Try: "create a badge"`;
  }

  if (input.includes('tag')) {
    return `Tag Component:

• Label and categorize content
• Props: label, variant (accent, success, etc.)
• Use for categories and labels

Example:
\`\`\`jsx
<Tag label="Your rules" />
<Tag label="Featured" variant="accent" />
\`\`\`

Try: "create a tag"`;
  }

  if (input.includes('switch') || input.includes('toggle')) {
    return `Switch Component:

• Toggle for on/off settings
• Use for settings that take immediate effect
• Props: label, checked, onChange

Example:
\`\`\`jsx
<Switch
  label="Enable feature"
  checked={enabled}
  onChange={setEnabled}
/>
\`\`\`

Try: "create a switch"`;
  }

  if (input.includes('radio')) {
    return `RadioGroup Component:

• Single selection from multiple options
• Use when user must choose one option
• Props: legend, value, onChange

Example:
\`\`\`jsx
<RadioGroup legend="Visibility" value={value} onChange={setValue}>
  <RadioButton value="all">All websites</RadioButton>
  <RadioButton value="select">Select websites</RadioButton>
</RadioGroup>
\`\`\`

Try: "create radio buttons"`;
  }

  if (input.includes('toast')) {
    return `Toast Component:

• Temporary feedback after actions
• Use for success/error messages
• Props: text, variant (success, error, info), onClose

Example:
\`\`\`jsx
<Toast
  text="Saved successfully"
  variant="success"
  onClose={() => setShowToast(false)}
/>
\`\`\`

Try: "create a toast"`;
  }

  if (input.includes('tooltip')) {
    return `Tooltip Component:

• Show helpful hints on hover
• Use for short explanatory text
• Props: placement (top, right, bottom, left)

Example:
\`\`\`jsx
<Tooltip placement="right">
  <TooltipTrigger asChild><button>Hover</button></TooltipTrigger>
  <TooltipContent>Helpful text</TooltipContent>
</Tooltip>
\`\`\`

Try: "create a tooltip"`;
  }

  if (input.includes('menu')) {
    return `Menu Component:

• Contextual actions and navigation
• Use for actions with space constraints
• Props: activator (icon name or element)

Example:
\`\`\`jsx
<Menu activator="more-vertical">
  <Menu.Item key="copy">Copy</Menu.Item>
  <Menu.Item key="paste">Paste</Menu.Item>
</Menu>
\`\`\`

Try: "create a menu"`;
  }

  if (input.includes('search')) {
    return `SearchField Component:

• Filter or search content
• Use for search bars and filters
• Props: label, placeholder, value, onChange

Example:
\`\`\`jsx
<SearchField
  label="Search"
  placeholder="Search images"
  value={query}
  onChange={setQuery}
/>
\`\`\`

Try: "create a search field"`;
  }

  if (input.includes('link')) {
    return `Link Component:

• Navigate to another page or section
• Props: href, target
• Use for internal and external navigation

Example:
\`\`\`jsx
<Link href="/help">Visit help center</Link>
<Link href="https://example.com" target="_blank">External</Link>
\`\`\`

Try: "create a link"`;
  }

  if (input.includes('heading')) {
    return `Heading Component:

• Structure content with headings
• Props: as (h1-h6), size (xs, sm, md, lg, xl, xxl)
• Use for page titles and section headers

Example:
\`\`\`jsx
<Heading as="h1" size="xl">Page Title</Heading>
<Heading as="h2" size="lg">Section</Heading>
\`\`\`

Try: "create headings"`;
  }

  if (input.includes('list') || input.includes('all') || input.includes('what')) {
    return `Origin Components (19 supported):

**Forms:**
• Button, TextField, Textarea
• Checkbox, RadioGroup, Switch
• Select, SearchField
• Form, FormHeader, FormRow, FormFooter

**Layout:**
• Flex, Box

**Overlays:**
• Modal, Tooltip, Toast

**Navigation:**
• Tabs, Menu, Link

**Display:**
• Badge, Tag, Heading, Text

All from: \`@superhuman/origin\`

Ask specific questions or say "create [thing]"`;
  }

  return `I can help with Origin React components!

Try asking about:
• "what are button variants?"
• "how to use select dropdown?"
• "what is a badge?"
• "list all components"

Or create components:
• "create a form with text field and button"
• "create tabs"
• "create a switch toggle"
• "build a landing page with modal"

I'll show you real Origin React code with live preview.`;
}
