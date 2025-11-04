import type { AriaButtonProps } from 'react-aria';
import type { AriaDialogProps } from 'react-aria';
import type { AriaTextFieldProps } from 'react-aria';
import { DOMAttributes } from '@react-types/shared';
import { FocusEvent as FocusEvent_2 } from 'react';
import { FormEvent } from 'react';
import { HTMLAttributes } from 'react';
import { Key } from 'react';
import type { Placement } from '@floating-ui/react';
import type { PressEvent } from '@react-types/shared';
import { default as React_2 } from 'react';
import * as React_3 from 'react';
import { ReactNode } from 'react';
import type { TextFieldProps as TextFieldProps_2 } from '@react-types/textfield';

export declare const Accordion: React_2.ForwardRefExoticComponent<AccordionProps & React_2.RefAttributes<HTMLDivElement>> & {
    Item: React_2.ForwardRefExoticComponent<AccordionItemProps & React_2.RefAttributes<HTMLDivElement>>;
};

declare interface AccordionItemProps extends Pick<HTMLAttributes<HTMLSpanElement>, "id" | "className" | "style"> {
    /**
     * Text that appears for the button that opens the Accordion item.
     */
    title: string;
    /**
     * Used for the contents of the Accordion Item details.
     */
    children: React.ReactNode;
    /**
     * Determines the position of the arrow within the Accordion item.
     * @default "end"
     */
    arrowPosition?: "inline" | "end";
    /**
     * Icon to display inside on the left of the title.
     */
    iconStart?: IconProps["icon"];
    /**
     * Determines whether the Accordion item is expanded by default.
     * @default false
     */
    isExpanded?: boolean;
}

export declare interface AccordionProps extends Pick<HTMLAttributes<HTMLSpanElement>, "id" | "className" | "style"> {
    /**
     * Used for the contents of the Accordion.
     */
    children: React.ReactNode;
    /**
     * Used to add an aria-labelledby to the container that matches the ID of a nearby heading that describes this Accordion's context.
     */
    accessibilityLabelledBy?: string;
    /**
     * Defines the background color of the container, based on our [semantic colors](/foundations/tokens/#color).
     * @default "base-default"
     */
    bgColor?: "base-default" | "base-subdued";
    /**
     * Determines whether a border appears between Accordion Items.
     * @default true
     */
    hasSeparators?: boolean;
    /**
     * Controls the size of the Accordion content.
     * @default "medium"
     */
    size?: "small" | "medium" | "large";
    /**
     * Callback function that is called when the expanded state changes.
     * @param expandedIndices - An array of numbers representing the indices of the expanded items.
     */
    onExpandedChange?: (expandedIndices: number[]) => void;
}

export declare const AgentsAiChatIcon: GDSIcon;

export declare const AgentsAiDetectorIcon: GDSIcon;

export declare const AgentsAiGraderIcon: GDSIcon;

export declare const AgentsAiRewriterIcon: GDSIcon;

export declare const AgentsAiVocabularyIcon: GDSIcon;

export declare const AgentsAudienceReactionsIcon: GDSIcon;

export declare const AgentsCitationIcon: GDSIcon;

export declare const AgentsDeepWriterIcon: GDSIcon;

export declare const AgentsExpertPanelIcon: GDSIcon;

export declare const AgentsGoChatIcon: GDSIcon;

export declare const AgentsHumanizerIcon: GDSIcon;

export declare const AgentsParaphraserIcon: GDSIcon;

export declare const AgentsPlagiarismIcon: GDSIcon;

export declare const AgentsProofreaderIcon: GDSIcon;

/**
 * Announces the message using screen reader technology.
 *
 * @param message - The message content to announce.
 * @param assertiveness - Controls the urgency of the announcement (whether or not ot interrupt the user). Defaults to `polite`.
 * @param timeout - How quickly to remove the message from the DOM (in milliseconds). Defaults to `7000`.
 */
declare function announce(message: string, assertiveness?: Assertiveness, timeout?: number): void;

export declare const AppsAsanaIcon: GDSIcon;

export declare const AppsAuth0Icon: GDSIcon;

export declare const AppsCalendlyIcon: GDSIcon;

export declare const AppsClasslinkIcon: GDSIcon;

export declare const AppsConfluenceIcon: GDSIcon;

export declare const AppsDeeplIcon: GDSIcon;

export declare const AppsFigmaIcon: GDSIcon;

export declare const AppsGdriveIcon: GDSIcon;

export declare const AppsGiphyIcon: GDSIcon;

export declare const AppsGmailIcon: GDSIcon;

export declare const AppsGoogleCalendarIcon: GDSIcon;

export declare const AppsGoogleChromeIcon: GDSIcon;

export declare const AppsGoogleDocsIcon: GDSIcon;

export declare const AppsGoogleSheetIcon: GDSIcon;

export declare const AppsGoogleSlideIcon: GDSIcon;

export declare const AppsHubspotIcon: GDSIcon;

export declare const AppsJiraIcon: GDSIcon;

export declare const AppsLegalsifterIcon: GDSIcon;

export declare const AppsMicrosoftIcon: GDSIcon;

export declare const AppsMicrosoftOutlookIcon: GDSIcon;

export declare const AppsMicrosoftWordIcon: GDSIcon;

export declare const AppsMondayIcon: GDSIcon;

export declare const AppsNotionIcon: GDSIcon;

export declare const AppsOktaIcon: GDSIcon;

export declare const AppsOneDriveIcon: GDSIcon;

export declare const AppsOneloginIcon: GDSIcon;

export declare const AppsPingIcon: GDSIcon;

export declare const AppsPomodoroIcon: GDSIcon;

export declare const AppsSalesforceIcon: GDSIcon;

export declare const AppsSemrushIcon: GDSIcon;

export declare const AppsSharepointIcon: GDSIcon;

export declare const AppsSlackIcon: GDSIcon;

export declare const AppsSmartsheetIcon: GDSIcon;

export declare const AppsTodoistIcon: GDSIcon;

export declare const AppsTranslateIcon: GDSIcon;

export declare const AppsUnsplashIcon: GDSIcon;

export declare const AppsWolframIcon: GDSIcon;

export declare const AppsWrikeIcon: GDSIcon;

declare type AsOptions = "article" | "aside" | "caption" | "div" | "figcaption" | "figure" | "footer" | "header" | "main" | "nav" | "section" | "summary";

declare type AsOptions_2 = "p" | "span" | "small" | "strong" | "abbr" | "pre" | "kbd" | "label" | "legend" | "div";

declare type Assertiveness = "assertive" | "polite";

export declare const AuthorshipAiEditedIcon: GDSIcon;

export declare const AuthorshipAiIcon: GDSIcon;

export declare const AuthorshipFingerprintToggleIcon: GDSIcon;

export declare const AuthorshipHumanAiIcon: GDSIcon;

export declare const AuthorshipHumanGrammarlyIcon: GDSIcon;

export declare const AuthorshipHumanIcon: GDSIcon;

export declare const AuthorshipHumanProofreadingIcon: GDSIcon;

export declare const AuthorshipHumanUnnaturalIcon: GDSIcon;

export declare const AuthorshipQuotesIcon: GDSIcon;

export declare const AuthorshipSourcedEditedIcon: GDSIcon;

export declare const AuthorshipSourcedIcon: GDSIcon;

export declare const AuthorshipUnverifiedIcon: GDSIcon;

declare type AutoSuggestedComponents = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";

/**
 * A Badge displays numeric values, such as tallies that are calculated programmatically. [Learn more](https://designsystem.grammarly.io/components/badge)
 */
export declare const Badge: React_3.ForwardRefExoticComponent<BadgeProps & React_3.RefAttributes<HTMLSpanElement>>;

/** @deprecated - use BadgeProps instead */
export declare interface BadgeBaseProps extends BadgeProps {
}

export declare interface BadgeProps extends Pick<HTMLAttributes<HTMLSpanElement>, "id" | "className" | "style" | "tabIndex"> {
    /**
     * Defines the count to display with formatting rules. If `specialCharBefore` or `specialCharAfter` are passed, the raw count value will be displayed unformatted.
     *
     * @example 2 -> 2
     * @example 101 -> 99+
     * @example 1050 -> 1K
     */
    count: number;
    /**
     * Defines a special character to display before the count.
     *
     * @example + -> +99
     * @example - -> -99
     */
    specialCharBefore?: "+" | "-";
    /**
     * Defines a special character to display after the count.
     *
     * @example % -> 99%
     */
    specialCharAfter?: "%";
    /**
     * Variant color of the badge. By default -> neutral
     */
    variant?: (typeof variants)[number];
    /**
     * Format aria label on the Badge component
     * If some specialChar is passed, raw count value passed as number and special char
     * Otherwise, count will be formatted and passed as string
     *
     * Used for screenreaders announcement
     */
    getAriaLabelText: (count: string | number, specialCharBefore?: string, specialCharAfter?: string) => string;
}

export declare const BadgeWithTooltip: React_3.ForwardRefExoticComponent<BadgeWithTooltipProps & React_3.RefAttributes<HTMLSpanElement>>;

export declare interface BadgeWithTooltipProps extends BadgeProps {
    /**
     * Format aria label on the Badge component tooltip
     * raw count number is always passed for screenreader purposes and special char if used
     */
    getTooltipText: (count: number, specialCharBefore?: string, specialCharAfter?: string) => string;
    /**
     * Tab index for the Badge component.
     * @default 0
     */
    tabIndex?: number;
    /**
     * Props to pass to the Tooltip component.
     */
    tooltipProps?: Partial<TooltipProps>;
    /**
     * Props to pass to the TooltipContent component. shadowDom and iFrame environments may needed to override this prop and provide their own root
     */
    tooltipContentProps?: Partial<TooltipContentProps>;
}

declare interface BaseButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "onFocus" | "onBlur"> {
    /**
     * Look and feel of the Button
     *
     * @default 'primary'
     */
    variant?: (typeof variants_2)[number];
    /**
     * Keyboard shortcut on the right of the Button. Does not apply to Premium, Critical, Pro, or Enterprise Buttons.
     */
    shortcut?: string;
    /**
     * Width of the Button
     * @default 'fixed'
     */
    width?: "full" | "fixed";
    /**
     * Whether the Button is disabled
     * @default false
     */
    isDisabled?: boolean;
    /**
     * tabIndex for the button (-1 for disabled Buttons)
     * @default 0
     */
    tabIndex?: number;
    /**
     * Describes the Button when more context is needed outside of the `text`.
     */
    accessibilityLabel?: string;
    /**
     * ID of the element that this Button controls, like a Menu or Modal.
     */
    accessibilityControls?: AriaButtonProps["aria-controls"];
    /**
     * Indicates if the control associated with the Button is expanded or collapsed.
     */
    accessibilityExpanded?: AriaButtonProps["aria-expanded"];
    /**
     * Indicates the availability and type of interactive pop-up element that can be activated by the Button.
     */
    accessibilityHasPopup?: AriaButtonProps["aria-haspopup"];
    /**
     * If Button is used within a form, set the type to "submit"
     *
     * @default 'button'
     */
    type?: "submit" | "button";
    /**
     * Handler for the click event. Can be async.
     */
    onClick?: ((e: PressEvent) => void) | (<T>(e: PressEvent) => Promise<T>);
    /**
     * Size (height) of the Button
     * @default 'medium'
     */
    size?: (typeof sizes)[number];
}

declare type BasicOption = React_2.OptionHTMLAttributes<HTMLOptionElement>;

declare const Blue0 = "#F3F6FF";

declare const Blue10 = "#D1DBFE";

declare const Blue100 = "#000A26";

declare const Blue20 = "#ADBFF9";

declare const Blue30 = "#7D99F0";

declare const Blue40 = "#3E6CF4";

declare const Blue60 = "#2551DA";

declare const Blue80 = "#02379E";

declare const Blue90 = "#000A62";

/** @deprecated use NeutralGray0 instead */
declare const BlueGray0 = "#F4F4F6";

/** @deprecated use NeutralGray10 instead */
declare const BlueGray10 = "#CDD1DC";

/** @deprecated use NeutralGray100 instead */
declare const BlueGray100 = "#161719";

/** @deprecated use NeutralGray20 instead */
declare const BlueGray20 = "#C2C6D4";

/** @deprecated use NeutralGray30 instead */
declare const BlueGray30 = "#ADB2C3";

/** @deprecated use NeutralGray30 instead */
declare const BlueGray35 = "#99A0B3";

/** @deprecated use NeutralGray40 instead */
declare const BlueGray40 = "#878DA2";

/** @deprecated use NeutralGray10 instead */
declare const BlueGray5 = "#E2E4E9";

/** @deprecated use NeutralGray40 instead */
declare const BlueGray50 = "#798096";

/** @deprecated use NeutralGray60 instead */
declare const BlueGray60 = "#646B81";

/** @deprecated use NeutralGray80 instead */
declare const BlueGray70 = "#565B6C";

/** @deprecated use NeutralGray80 instead */
declare const BlueGray80 = "#474B58";

/** @deprecated use NeutralGray90 instead */
declare const BlueGray90 = "#27282E";

declare namespace Blur {
    export {
        BlurLow,
        BlurMedium,
        BlurHigh
    }
}

declare const BlurHigh = "10px";

declare const BlurLow = "6px";

declare const BlurMedium = "8px";

declare type BorderBaseColor = Extract<BorderColor, `base-${string}`>;

declare type BorderColor = WithoutPrefix<SemanticColors, `border`>;

/**
 * Box is a primitive component with easy access to GDS tokens. [Learn more](https://designsystem.grammarly.io/components/box)
 */
export declare const Box: React_2.ForwardRefExoticComponent<BoxProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface BoxProps extends UtilityProps, Pick<HTMLAttributes<HTMLDivElement>, "style" | "className"> {
    /**
     * Contents of the Box container
     */
    children?: React.ReactNode;
    /**
     * Used to add an aria-label to the container
     */
    accessibilityLabel?: string;
    /**
     * Changes the underlying HTML element when needed for semantics and accessibility. By default, Flex containers are rendered as a `div`
     * @default 'div'
     */
    as?: AsOptions;
    /**
     * Adds the corresponding border and box-shadow to add elevation.
     */
    elevation?: "low" | "medium" | "high";
}

declare type Brand<K, T> = K & {
    __brand: T;
};

declare interface BrandedLoaderProps extends CircularLoaderProps {
    /**
     * Determines the size of the Branded Loader to be displayed.
     *
     * @default 'medium'
     */
    size?: "small" | "medium";
}

/**
 * A Button provides a way to take action. [Learn more](https://designsystem.grammarly.io/components/button)
 */
export declare const Button: React_2.ForwardRefExoticComponent<ButtonProps & React_2.RefAttributes<HTMLButtonElement>>;

/**
 * A ButtonAsLink visually looks like a Button—but functions like a Link, allowing for navigation among pages or URLs. [Learn more](https://designsystem.grammarly.io/components/buttonaslink)
 */
export declare const ButtonAsLink: React_2.ForwardRefExoticComponent<ButtonLinkProps & React_2.RefAttributes<HTMLAnchorElement>>;

declare interface ButtonLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "onFocus" | "onBlur"> {
    /**
     * Destination for the Link.
     */
    href: string;
    /**
     * Content for inside the Button
     */
    children?: React.ReactNode;
    /**
     * Text inside the Button
     */
    text?: string;
    /**
     * Describes the Button when more context is needed outside of the `text`.
     */
    accessibilityLabel?: string;
    /**
     * Indicates a file will be downloaded when the Link is activated.
     * When true, the file will be downloaded.
     * When a string is provided, the file will be downloaded with the given file name.
     * [Learn more at MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download).
     */
    download?: LinkProps["download"];
    /**
     * Icon to display inside on the left of the Button. For Premium Buttons, only the Premium Icon is allowed.
     */
    iconStart?: IconProps["icon"];
    /**
     * Icon to display inside on the right of the Button. For Premium Buttons, only the Premium Icon is allowed.
     */
    iconEnd?: IconProps["icon"];
    /**
     * Determines where the Link will be opened.
     * [Learn more at MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target).
     *
     * When target is set to `_blank`, the Link component will automatically:
     *     - Set `rel="noopener noreferrer"`. [Learn more at MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel).
     *     - Add hidden text for screen readers: "Opens a new window"
     */
    target?: LinkProps["target"];
    /**
     * Look and feel of the Button
     *
     * @default 'primary'
     */
    variant?: ButtonProps["variant"];
    /**
     * Size (height) of the Button
     * @default 'medium'
     */
    size?: ButtonProps["size"];
    /**
     * Width of the Button
     * @default 'fixed'
     */
    width?: ButtonProps["width"];
}

export declare interface ButtonProps extends BaseButtonProps {
    /**
     * Content for inside the Button
     */
    children?: React.ReactNode;
    /**
     * Text inside the Button
     */
    text?: string;
    /**
     * Icon to display inside on the left of the Button. For Premium Buttons, only the Premium Icon is allowed.
     */
    iconStart?: IconProps["icon"];
    /**
     * Icon to display inside on the right of the Button. For Premium Buttons, only the Premium Icon is allowed.
     */
    iconEnd?: IconProps["icon"];
    /**
     * Whether to show a circular loader, such as when the associated Form has been submitted.
     * @default false
     */
    isLoading?: boolean;
    /**
     * Link form submit button to a form in case the button is used outside of the form
     */
    form?: string;
}

/**
 * Checkboxes offer a range of selections — zero, one, and many. [Learn more](https://designsystem.grammarly.io/components/checkbox)
 */
export declare const Checkbox: React_2.ForwardRefExoticComponent<CheckboxProps & {
    /* Excluded from this release type: __inputProps */
} & React_2.RefAttributes<HTMLInputElement>>;

export declare const CheckboxGroup: React_2.FC<CheckboxGroupProps>;

export declare interface CheckboxGroupProps extends Pick<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "className" | "style"> {
    /**
     * Layout of the checkboxes. 1 row or 2 columns
     * @default "column"
     */
    layout?: "column" | "row";
    /**
     * The current value (controlled).
     */
    value?: string[];
    /**
     * The default value (uncontrolled).
     */
    defaultValue?: string[];
    /**
     * Handler that is called when the value changes.
     */
    onChange?: (value: string[]) => void;
    /**
     * Whether the input is disabled.
     */
    isDisabled?: boolean;
    /**
     * Whether the input can be selected but not changed by the user.
     */
    isReadOnly?: boolean;
    /**
     * The content to display as the legend.
     */
    legend: ReactNode;
    /**
     * An error message for the field.
     */
    errorMessage?: string;
    /**
     * Instances of <CheckboxItem>hello world</CheckboxItem>
     */
    children: React.ReactNode;
    /**
     * Identify that checkbox is required
     */
    isRequired?: boolean;
    /**
     * Legend indicator for required
     * @default "(Required)"
     */
    legendIndicatorForRequired?: string;
    /**
     * Identify that checkbox is optional
     */
    isOptional?: boolean;
    /**
     * Legend indicator for optional
     * @default "(Optional)"
     */
    legendIndicatorForOptional?: string;
    /**
     * Display legend text or not.
     * @default "visible"
     */
    legendDisplay?: "visible" | "hidden";
    /**
     * Helper text for the group
     */
    helperMessage?: string;
    /**
     * Controls the size of the Checkboxes and their labels.
     * @default "medium"
     */
    size?: "medium" | "large" | "xlarge";
}

export declare const CheckboxItem: React_2.ForwardRefExoticComponent<Pick<Pick<CheckboxProps, "value" | "children" | "isDisabled" | "helperMessage"> & React_2.RefAttributes<HTMLInputElement>, "value" | "children" | "key" | "isDisabled" | "helperMessage"> & React_2.RefAttributes<HTMLInputElement>>;

export declare interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "onFocus" | "onBlur" | "size"> {
    /**
     * Used to display the label of a Checkbox.
     */
    children: React.ReactNode;
    /**
     * Used to describe why this Checkbox has an error.
     */
    errorMessage?: string;
    /**
     * Whether the element should be selected (uncontrolled).
     */
    defaultSelected?: boolean;
    /**
     * Whether the element should be selected (controlled).
     */
    isSelected?: boolean;
    /**
     * Whether the element should be disabled (controlled).
     */
    isDisabled?: boolean;
    /**
     * Whether the input can be selected but not changed by the user.
     */
    isReadOnly?: boolean;
    /**
     * Indeterminism is presentational only.
     * The indeterminate visual representation remains regardless of user interaction.
     */
    isIndeterminate?: boolean;
    /**
     * Handler that is called when the element's selection state changes.
     */
    onChange?: (isSelected: boolean) => void;
    /**
     * The value of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefvalue).
     */
    value?: string;
    /**
     * The name of the input element that is used when submitting an HTML form. [Learn more at MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).
     */
    name?: string;
    /**
     * Controls the size of the Checkbox and label.
     * @default "medium"
     */
    size?: "medium" | "large" | "xlarge";
    /**
     * Identify that checkbox is required
     */
    isRequired?: boolean;
    /**
     * Label indicator for required
     * @default "(Required)"
     */
    labelIndicatorForRequired?: string;
    /**
     * Identify that checkbox is optional
     */
    isOptional?: boolean;
    /**
     * Label indicator for optional
     * @default "(Optional)"
     */
    labelIndicatorForOptional?: string;
    /**
     * Provides additional context for this Checkbox outside of the label.
     * An HTML element is automatically created to contain the helper text.
     * By default, `aria-describedby` points to this HTML element.
     * If both `aria-describedby` and `helperMessage` are set, `aria-describedby`
     * will point to the helper text since it was provided.
     */
    helperMessage?: string;
    /**
     * Display label of the Checkbox or not
     * @default "visible"
     */
    labelDisplay?: "visible" | "hidden";
}

export declare interface CircularLoaderProps {
    /**
     * Determines the size of the Circular Loader to be displayed.
     *
     * @default 'medium'
     */
    size?: "small" | "medium" | "large";
    /**
     * Determines the color of the Circular Loader.
     *
     * @default "default"
     */
    variant?: "default" | "inverse";
    /**
     * Set the css class for the Circular Loader
     */
    className?: string;
}

/**
 * Stops all queued announcements. If an assertiveness is specified, only stops those announcements.
 */
declare function clear(assertiveness?: Assertiveness): void;

declare namespace Color {
    export {
        Blue0,
        Blue10,
        Blue20,
        Blue30,
        Blue40,
        Blue60,
        Blue80,
        Blue90,
        Blue100,
        BlueGray0,
        BlueGray5,
        BlueGray10,
        BlueGray20,
        BlueGray30,
        BlueGray35,
        BlueGray40,
        BlueGray50,
        BlueGray60,
        BlueGray70,
        BlueGray80,
        BlueGray90,
        BlueGray100,
        Gold0,
        Gold10,
        Gold20,
        Gold30,
        Gold40,
        Gold60,
        Gold80,
        Gold90,
        Gold100,
        Green0,
        Green10,
        Green20,
        Green30,
        Green40,
        Green60,
        Green80,
        Green90,
        Green100,
        LightGreen,
        Magenta0,
        Magenta10,
        Magenta20,
        Magenta30,
        Magenta40,
        Magenta60,
        Magenta80,
        Magenta90,
        Magenta100,
        NeutralGray0,
        NeutralGray5,
        NeutralGray10,
        NeutralGray20,
        NeutralGray30,
        NeutralGray35,
        NeutralGray40,
        NeutralGray50,
        NeutralGray60,
        NeutralGray70,
        NeutralGray80,
        NeutralGray90,
        NeutralGray100,
        Purple0,
        Purple10,
        Purple20,
        Purple30,
        Purple40,
        Purple60,
        Purple80,
        Purple90,
        Purple100,
        Red0,
        Red10,
        Red20,
        Red30,
        Red40,
        Red60,
        Red80,
        Red90,
        Red100,
        Teal0,
        Teal10,
        Teal20,
        Teal30,
        Teal40,
        Teal60,
        Teal80,
        Teal90,
        Teal100,
        Transparent,
        White,
        YellowGreen
    }
}

declare const Color_2: {
    Background: {
        Addition: {
            Default: string;
            Subdued: string;
        };
        Base: {
            Default: string;
            Subdued: string;
            Inverse: string;
        };
        Brand: {
            Default: string;
            Subdued: string;
        };
        Business: {
            Default: string;
            Subdued: string;
        };
        Clarity: {
            Default: string;
            Subdued: string;
        };
        Correctness: {
            Default: string;
            Subdued: string;
        };
        Critical: {
            Default: string;
            Subdued: string;
        };
        Deletion: {
            Default: string;
            Subdued: string;
        };
        Delivery: {
            Default: string;
            Subdued: string;
        };
        Engagement: {
            Default: string;
            Subdued: string;
        };
        Enterprise: {
            Default: string;
        };
        Interactive: {
            Default: string;
        };
        Neutral: {
            Default: string;
        };
        Plagiarism: {
            Default: string;
            Subdued: string;
        };
        Premium: {
            Default: string;
            Subdued: string;
        };
        Pro: {
            Default: string;
        };
        Success: {
            Default: string;
            Subdued: string;
        };
        Warning: {
            Default: string;
            Subdued: string;
        };
    };
    Border: {
        Addition: {
            Default: string;
            Subdued: string;
        };
        Base: {
            Default: string;
            Subdued: string;
            Inverse: string;
        };
        Brand: {
            Default: string;
            Subdued: string;
        };
        Business: {
            Default: string;
            Subdued: string;
        };
        Clarity: {
            Default: string;
        };
        Correctness: {
            Default: string;
        };
        Critical: {
            Default: string;
            Subdued: string;
        };
        Deletion: {
            Default: string;
            Subdued: string;
        };
        Delivery: {
            Default: string;
        };
        Elevated: {
            Default: string;
        };
        Engagement: {
            Default: string;
        };
        Focus: {
            Default: string;
        };
        Interactive: {
            Default: string;
        };
        Plagiarism: {
            Default: string;
        };
        Premium: {
            Default: string;
            Subdued: string;
        };
        Pro: {
            Default: string;
        };
        Success: {
            Default: string;
            Subdued: string;
        };
        Warning: {
            Default: string;
            Subdued: string;
        };
    };
    Elevation: {
        Base: {
            Default: string;
        };
        Outline: {
            Default: string;
        };
    };
    Highlight: {
        Addition: {
            Default: string;
        };
        Deletion: {
            Default: string;
        };
    };
    Icon: {
        Addition: {
            Default: string;
            Inverse: string;
        };
        Agent: {
            Default: string;
        };
        Base: {
            Default: string;
            Subdued: string;
            Inverse: string;
        };
        Brand: {
            Default: string;
        };
        Business: {
            Default: string;
        };
        Critical: {
            Default: string;
            Inverse: string;
        };
        Deletion: {
            Default: string;
        };
        Delivery: {
            Default: string;
            Inverse: string;
        };
        Interactive: {
            Default: string;
        };
        Premium: {
            Default: string;
        };
        Pro: {
            Default: string;
            Inverse: string;
        };
        Success: {
            Default: string;
        };
        Warning: {
            Default: string;
            Inverse: string;
        };
    };
    Illustration: {
        Fill: {
            1: string;
            2: string;
            Default: string;
        };
        Shadow: {
            Default: string;
        };
        Stroke: {
            1: string;
            2: string;
            3: string;
            Default: string;
        };
    };
    Logo: {
        Coda: {
            Light: string;
            Default: string;
            Primary: string;
            Secondary: string;
        };
        Grammarly: {
            Dark: string;
            Light: string;
            Default: string;
            Inverse: string;
            Primary: string;
        };
        Hero: {
            Dark: string;
            Default: string;
        };
        Mail: {
            Light: string;
            Default: string;
        };
        Superhuman: {
            Light: string;
            Default: string;
            Primary: string;
            Secondary: string;
        };
    };
    Text: {
        Addition: {
            Default: string;
        };
        Base: {
            Default: string;
            Subdued: string;
            Inverse: string;
        };
        Brand: {
            Default: string;
        };
        Business: {
            Default: string;
        };
        Clarity: {
            Default: string;
        };
        Correctness: {
            Default: string;
        };
        Critical: {
            Default: string;
        };
        Dark: {
            Default: string;
        };
        Deletion: {
            Default: string;
        };
        Delivery: {
            Default: string;
        };
        Engagement: {
            Default: string;
        };
        Enterprise: {
            Default: string;
        };
        Light: {
            Default: string;
        };
        Plagiarism: {
            Default: string;
        };
        Premium: {
            Default: string;
        };
        Pro: {
            Default: string;
        };
        Success: {
            Default: string;
        };
        Warning: {
            Default: string;
        };
    };
};

declare type ColorModeOption = "light" | "dark" | "auto";

declare interface ColorSchemeContext {
    scheme: ColorSchemeOption;
    setScheme: (scheme: ColorSchemeOption) => void;
}

declare type ColorSchemeOption = "light" | "dark" | "auto";

/**
 * Sets the color scheme (aka theme) for all contained elements. [Learn more](https://designsystem.grammarly.io/components/color-scheme-provider)
 *
 * Internally, this sets a `data-gds-theme` attribute on a wrapping `<div>`, which updates CSS variables as necessary.
 *
 * @deprecated since version GDS 7.0. Please use [`ThemeProvider`](https://designsystem.grammarly.io/utilities/theme-provider) instead.
 */
export declare function ColorSchemeProvider(props: ColorSchemeProviderProps): React_2.ReactElement;

export declare interface ColorSchemeProviderProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Color scheme (aka theme) to use. If not provided, the value is detected based on the user's OS settings ("auto").
     *
     * @default "auto"
     */
    scheme?: ColorSchemeOption;
    /**
     * Custom target to attach `data-gds-theme` attribute. Defaults to a container div if not provided.
     */
    target?: HTMLElement;
    /**
     * Contents that make use of the color scheme.
     */
    children: React.ReactNode;
}

declare type ColorThemeOption = "grammarly" | "genesis";

/**
 * A Combobox allows browsing or filtering a list to select an item. [Learn more](https://designsystem.grammarly.io/components/combobox)
 */
export declare const Combobox: React_2.ForwardRefExoticComponent<ComboboxProps & React_2.RefAttributes<HTMLInputElement>>;

export declare const ComboboxItem: React_2.ForwardRefExoticComponent<ComboboxItemProps & React_2.RefAttributes<HTMLLIElement>>;

export declare interface ComboboxItemProps extends Omit<React.LiHTMLAttributes<HTMLLIElement>, "role" | "aria-selected" | "aria-label"> {
    /**
     * A unique value used to identify each ComboboxItem.
     */
    value: string;
    /**
     * A unique value used to identify each ComboboxItem.
     */
    accessibilityLabel?: string;
    /**
     * The contents of the ComboboxItem. It is usually a simple string value, but can be a React Node.
     */
    children: Exclude<React.ReactNode, null | undefined>;
    /**
     * The string representation to use for the input when the contents of the ComboboxItem are not simply a string. Only needed when providing custom content to ComboboxItem.
     */
    textValue?: string;
}

export declare interface ComboboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "aria-activedescendant" | "aria-autocomplete" | "aria-controls" | "aria-expanded" | "disabled" | "required" | "role" | "type" | "value"> {
    /**
     * The label displayed above the input.
     */
    label: string;
    /**
     * The data for the initial list of ComboboxItems.
     */
    defaultItems?: Array<Record<string, any>>;
    /**
     * A list of values for any ComboboxItems that should be disabled.
     */
    disabledItems?: Array<string>;
    /**
     * Provides additional context for the Combobox outside of the label.
     */
    helperMessage?: string;
    /**
     * Indicates a Combobox is in an error state, adds error message below the input, and adds red border. When an error message is present, it is read by a screen reader after the label.
     */
    errorMessage?: string;
    /**
     * An optional icon or symbol to place inside the input after selection.
     */
    inputDecoration?: React.ReactNode;
    /**
     * Can be used to manually control the content of the input.
     */
    inputValue?: string;
    /**
     * When true, indicates that a user cannot focus, change, or interact with the Combobox.
     */
    isDisabled?: boolean;
    /**
     * When true, adds “(Optional)” to the label. Cannot be combined with isRequired.
     */
    isOptional?: boolean;
    /**
     * When true, adds “(Required)” indicator to the label and marks input as required. Cannot be combined with isOptional.
     */
    isRequired?: boolean;
    /**
     * Used to visually hide the label when another element on the page is acting as the visual label for the Combobox.
     */
    labelDisplay?: "visible" | "hidden";
    /**
     * Used to override the content for the optional indicator.
     * @default "(Optional)"
     */
    labelIndicatorForOptional?: string;
    /**
     * Used to override the content for the required indicator.
     * @default "(Required)"
     */
    labelIndicatorForRequired?: string;
    /**
     * The message displayed when no items meet filter criteria.
     * @default "No matching results"
     */
    noResultsMessage?: string;
    /**
     * Event handler that is called whenever a selection is made.
     */
    onSelection?: (value: string) => void;
    /**
     * Event handler that is called whenever the value of the input changes. To track updates, it's preferential to use `onSelection` instead.
     */
    onInputChange?: (value: string) => void;
    onOpenChange?: (isOpen: boolean) => void;
    /**
     * Content to show as a placeholder inside the input.
     */
    placeholder?: string;
    /**
     * Used to specify an item that is selected by default.
     */
    defaultSelectedItem?: string;
    /**
     * Allow users to enter custom values. The Combobox acts like a Text Field to accept a text input that isn't in the predefined set.
     */
    allowsCustomValue?: boolean;
    /**
     * When true, the listbox will be rendered above the input instead of below it. Useful for when the Combobox is near the bottom of a page and the listbox would otherwise be cut off.
     * @default "bottom"
     */
    listboxDisplay?: "top" | "bottom";
    children: React.ReactElement<typeof ComboboxItem> | React.ReactElement<typeof ComboboxItem>[] | ((p: Record<string, any>) => React.ReactElement<typeof ComboboxItem>);
}

export declare const ConsentCollectLogsIcon: GDSIcon;

export declare const ConsentControlIcon: GDSIcon;

export declare const ConsentPersonalizedInsightsIcon: GDSIcon;

export declare const ConsentPersonalizedInsightsOffIcon: GDSIcon;

export declare const ConsentSafeIcon: GDSIcon;

export declare const ConsentSmartDictionaryIcon: GDSIcon;

export declare const ConsentSmartDictionaryOffIcon: GDSIcon;

export declare const ConsentStoreDataIcon: GDSIcon;

export declare const ConsentTailoredAssistanceIcon: GDSIcon;

export declare const ConsentTailoredAssistanceOffIcon: GDSIcon;

export declare const ConsentTransparentIcon: GDSIcon;

declare type CoreColors = "blue-0" | "blue-10" | "blue-20" | "blue-30" | "blue-40" | "blue-60" | "blue-80" | "blue-90" | "blue-100" | "blue-gray-0" | "blue-gray-5" | "blue-gray-10" | "blue-gray-20" | "blue-gray-30" | "blue-gray-35" | "blue-gray-40" | "blue-gray-50" | "blue-gray-60" | "blue-gray-70" | "blue-gray-80" | "blue-gray-90" | "blue-gray-100" | "gold-0" | "gold-10" | "gold-20" | "gold-30" | "gold-40" | "gold-60" | "gold-80" | "gold-90" | "gold-100" | "green-0" | "green-10" | "green-20" | "green-30" | "green-40" | "green-60" | "green-80" | "green-90" | "green-100" | "light-green" | "magenta-0" | "magenta-10" | "magenta-20" | "magenta-30" | "magenta-40" | "magenta-60" | "magenta-80" | "magenta-90" | "magenta-100" | "neutral-gray-0" | "neutral-gray-5" | "neutral-gray-10" | "neutral-gray-20" | "neutral-gray-30" | "neutral-gray-35" | "neutral-gray-40" | "neutral-gray-50" | "neutral-gray-60" | "neutral-gray-70" | "neutral-gray-80" | "neutral-gray-90" | "neutral-gray-100" | "purple-0" | "purple-10" | "purple-20" | "purple-30" | "purple-40" | "purple-60" | "purple-80" | "purple-90" | "purple-100" | "red-0" | "red-10" | "red-20" | "red-30" | "red-40" | "red-60" | "red-80" | "red-90" | "red-100" | "teal-0" | "teal-10" | "teal-20" | "teal-30" | "teal-40" | "teal-60" | "teal-80" | "teal-90" | "teal-100" | "transparent" | "white" | "yellow-green";

declare const _deprecatedColorsV6: string[];

/**
 * Removes the announcer from the DOM.
 */
declare function destroy(): void;

declare namespace Elevation {
    export {
        Elevation100,
        Elevation200,
        Elevation300,
        ElevationLow,
        ElevationMedium,
        ElevationHigh
    }
}

declare const Elevation100: {
    boxShadow: string;
    border: string;
};

declare const Elevation200: {
    boxShadow: string;
    border: string;
};

declare const Elevation300: {
    boxShadow: string;
    border: string;
};

declare const ElevationHigh: {
    boxShadow: string;
    border: string;
};

declare const ElevationLow: {
    boxShadow: string;
    border: string;
};

declare const ElevationMedium: {
    boxShadow: string;
    border: string;
};

export declare const EmojiAccusatoryIcon: GDSIcon;

export declare const EmojiAdmiringIcon: GDSIcon;

export declare const EmojiAnalyticalIcon: GDSIcon;

export declare const EmojiAnticipatoryIcon: GDSIcon;

export declare const EmojiAnxiousIcon: GDSIcon;

export declare const EmojiApologeticIcon: GDSIcon;

export declare const EmojiAppreciativeIcon: GDSIcon;

export declare const EmojiAssertiveIcon: GDSIcon;

export declare const EmojiBoredIcon: GDSIcon;

export declare const EmojiCautionaryIcon: GDSIcon;

export declare const EmojiCompassionateFriendlyIcon: GDSIcon;

export declare const EmojiConcernedIcon: GDSIcon;

export declare const EmojiConfidentIcon: GDSIcon;

export declare const EmojiConfusedIcon: GDSIcon;

export declare const EmojiConstructiveIcon: GDSIcon;

export declare const EmojiCuriousThoughtfulIcon: GDSIcon;

export declare const EmojiDefensiveIcon: GDSIcon;

export declare const EmojiDiplomaticIcon: GDSIcon;

export declare const EmojiDirectIcon: GDSIcon;

export declare const EmojiDishearteningIcon: GDSIcon;

export declare const EmojiDismayedIcon: GDSIcon;

export declare const EmojiDissatisfiedIcon: GDSIcon;

export declare const EmojiEgocentricIcon: GDSIcon;

export declare const EmojiEmpatheticIcon: GDSIcon;

export declare const EmojiEncouragingIcon: GDSIcon;

export declare const EmojiExcitedIcon: GDSIcon;

export declare const EmojiExpressionlessIcon: GDSIcon;

export declare const EmojiFormalIcon: GDSIcon;

export declare const EmojiFrankIcon: GDSIcon;

export declare const EmojiGloomyDepressingIcon: GDSIcon;

export declare const EmojiImpersonalIcon: GDSIcon;

export declare const EmojiInformalIcon: GDSIcon;

export declare const EmojiInformativeIcon: GDSIcon;

export declare const EmojiInspirationalIcon: GDSIcon;

export declare const EmojiJoyfulIcon: GDSIcon;

export declare const EmojiKeyPointIcon: GDSIcon;

export declare const EmojiLovingIcon: GDSIcon;

export declare const EmojiNeutralIcon: GDSIcon;

export declare const EmojiObjectiveIcon: GDSIcon;

export declare const EmojiOptimisticIcon: GDSIcon;

export declare const EmojiReadIcon: GDSIcon;

export declare const EmojiRegretfulIcon: GDSIcon;

export declare const EmojiSadIcon: GDSIcon;

export declare const EmojiSkepticalIcon: GDSIcon;

export declare const EmojiSkipIcon: GDSIcon;

export declare const EmojiSmilingIcon: GDSIcon;

export declare const EmojiSparklesIcon: GDSIcon;

export declare const EmojiSurprisedIcon: GDSIcon;

export declare const EmojiUnassumingIcon: GDSIcon;

export declare const EmojiUncertainIcon: GDSIcon;

export declare const EmojiUrgentIcon: GDSIcon;

export declare const EmojiWorriedIcon: GDSIcon;

export declare const FlagAuIcon: GDSIcon;

export declare const FlagCaIcon: GDSIcon;

export declare const FlagGbIcon: GDSIcon;

export declare const FlagInIcon: GDSIcon;

export declare const FlagUsIcon: GDSIcon;

/**
 * Flex is a utility component to help achieve various flexible layouts. [Learn more](https://designsystem.grammarly.io/components/flex)
 */
export declare const Flex: React_2.ForwardRefExoticComponent<FlexProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface FlexProps extends UtilityProps, Pick<HTMLAttributes<HTMLDivElement>, "style" | "className" | "role"> {
    /**
     * Contents of the Flex container
     */
    children?: React.ReactNode;
    /**
     * Used to add an aria-label to the container
     */
    accessibilityLabel?: string;
    /**
     * Defines how items should be aligned on the cross-axis by setting [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items). If items are in a row, then this affects the vertical alignment. If items are in a column, this affects the horizontal alignment.
     * @default stretch
     */
    align?: "start" | "end" | "center" | "baseline" | "stretch";
    /**
     * Override the value set by a flex item's 'align-items' property. Aligns the item on the cross-axis.
     * @default auto
     */
    alignSelf?: "auto" | "start" | "end" | "center" | "baseline" | "stretch";
    /**
     * Changes the underlying HTML element when needed for semantics and accessibility. By default, Flex containers are rendered as a `div`
     * @default 'div'
     */
    as?: AsOptions;
    /**
     * Whether items should be placed in a row or a column.
     * @default row
     */
    direction?: "row" | "column";
    /**
     * Adds the corresponding border and box-shadow to add elevation.
     */
    elevation?: "low" | "medium" | "high";
    /**
     * A shorthand property that sets how a flex item will grow or shrink to fit the space available in its flex container.
     */
    flex?: string;
    /**
     * The spacing between items. Can be set to different values for row or columns
     */
    gap?: SpacingOptions | {
        row?: SpacingOptions;
        column?: SpacingOptions;
    };
    /**
     * Defines how items should be aligned on the main axis by setting [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content). If items are in a row, then this affects the horizontal alignment. If items are in a column, this affects the vertical alignment.
     * @default start
     */
    justify?: (typeof JustifyContent)[number];
    /**
     * Whether or not the contents should wrap onto another line when the container width is reached
     * @default false
     */
    wrap?: boolean;
}

/**
 * A Form is a combination of inputs that collect information. [Learn more](https://designsystem.grammarly.io/components/form)
 */
export declare const Form: React_2.ForwardRefExoticComponent<FormProps & React_2.RefAttributes<HTMLFormElement>>;

export declare const FormFieldset: React_2.ForwardRefExoticComponent<FormFieldsetProps & React_2.RefAttributes<HTMLFieldSetElement>>;

export declare interface FormFieldsetProps {
    /**
     * Contents of a fieldset, typically at least two inputs
     */
    children: React.ReactNode;
    /**
     * Legend of the fieldset, describes the purpose of the set of fields
     */
    legend: string;
    /**
     * Optional description for the set of fields
     */
    description?: string;
    /**
     * Identify that the fieldset is required
     */
    isRequired?: boolean;
    /**
     * Legend indicator for required
     * @default "(Required)"
     */
    legendIndicatorForRequired?: string;
    /**
     * Identify that the fieldset is optional
     */
    isOptional?: boolean;
    /**
     * Legend indicator for optional
     * @default "(Optional)"
     */
    legendIndicatorForOptional?: string;
}

export declare const FormFooter: React_2.FC<FormFooterProps>;

export declare interface FormFooterProps {
    /**
     * Contents of the form footer, typically one or more Buttons
     */
    children: React.ReactNode;
}

export declare const FormHeader: React_2.FC<FormHeadingProps>;

export declare interface FormHeadingProps {
    /**
     * Contents of the header if more functionality is needed outside of title and helperMessage. Places content after the title or helperMessage
     */
    children?: React.ReactNode;
    /**
     * Adds detail about the purpose or goal of this form
     */
    description?: string;
    /**
     * Title of the form
     */
    heading: string;
    /**
     * Changes the underlying semantics of the heading
     * @default h2
     */
    headingLevel?: "h1" | "h2" | "h3" | "h4";
    /**
     * Changes the font size of the heading according to our Typography tokens
     * @default large
     */
    headingSize?: "large" | "medium" | "small";
}

export declare interface FormProps {
    /**
     * Contents of the form, should all be contained in FormHeader, FormRow, FormFieldset, or FormFooter
     */
    children: React.ReactNode;
    /**
     * Sets a width on the content of the Form in pixels
     * @default 650
     */
    maxWidth?: number;
    /**
     * Used to identify this form
     */
    name?: string;
    /**
     * Adjusts the vertical spacing between parts of the Form
     * @default standard
     */
    spacing?: "spacious" | "standard" | "compact";
    /**
     * Callback that is triggered when the form is submitted
     */
    onSubmit: (e: FormEvent) => void;
}

export declare const FormRow: React_2.FC<FormRowProps>;

export declare interface FormRowProps {
    /**
     * Contents of the row of the Form. Adds spacing between each child
     */
    children: React.ReactNode;
}

export declare const GButtonLargeHoverIcon: GDSIcon;

export declare const GButtonLargeIcon: GDSIcon;

export declare const GButtonMediumHoverIcon: GDSIcon;

export declare const GButtonMediumIcon: GDSIcon;

export declare const GButtonSmallHoverIcon: GDSIcon;

export declare const GButtonSmallIcon: GDSIcon;

/** @deprecated - use CheckboxGroupProps instead  */
export declare interface GDSCheckboxGroupProps extends CheckboxGroupProps {
}

/** @deprecated - use CheckboxProps instead  */
export declare interface GDSCheckboxProps extends CheckboxProps {
}

/** @deprecated - use InputErrorMessageProps instead */
export declare interface GDSErrorMessageProps extends InputErrorMessageProps {
}

/** @deprecated - use FlexProps instead */
export declare interface GDSFlexProps extends FlexProps {
}

declare type GDSIcon = React_3.FC<React_3.SVGProps<SVGSVGElement> & SVGRProps> & {
    __brand: "color" | "nocolor";
    __source?: "GDS" | "external";
};

/** @deprecated - use RadioGroupProps instead */
export declare interface GDSRadioGroupProps extends RadioGroupProps {
}

/** @deprecated - use SearchFieldProps instead */
export declare interface GDSSearchFieldProps extends SearchFieldProps {
}

/** @deprecated - use TextFieldProps instead */
export declare interface GDSTextFieldProps extends TextFieldProps {
}

declare type GenericInputProps = Pick<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "minLength" | "maxLength" | "spellCheck" | "className" | "style">;

declare type GenericInputProps_2 = Pick<React.InputHTMLAttributes<HTMLInputElement>, "min" | "max" | "step" | "pattern" | "spellCheck" | "className" | "style">;

export declare const GGOActionAddEmojiIcon: GDSIcon;

export declare const GGOActionAddHashtagIcon: GDSIcon;

export declare const GGOActionAdjustLengthCategoryIcon: GDSIcon;

export declare const GGOActionAdjustToneCategoryIcon: GDSIcon;

export declare const GGOActionAnnouncementIcon: GDSIcon;

export declare const GGOActionBrainstormIcon: GDSIcon;

export declare const GGOActionCleanUpIcon: GDSIcon;

export declare const GGOActionComposeCategoryIcon: GDSIcon;

export declare const GGOActionContinueCompleteCategoryIcon: GDSIcon;

export declare const GGOActionContinueWritingIcon: GDSIcon;

export declare const GGOActionEvaluateCategoryIcon: GDSIcon;

export declare const GGOActionFeedbackIcon: GDSIcon;

export declare const GGOActionFixErrorsIcon: GDSIcon;

export declare const GGOActionGenerateIdeasCategoryIcon: GDSIcon;

export declare const GGOActionIdentifyGapsIcon: GDSIcon;

export declare const GGOActionIdentifyMainPointIcon: GDSIcon;

export declare const GGOActionImproveIcon: GDSIcon;

export declare const GGOActionInspireMeIcon: GDSIcon;

export declare const GGOActionInterestedIcon: GDSIcon;

export declare const GGOActionLengthenIcon: GDSIcon;

export declare const GGOActionMakeItPersonalIcon: GDSIcon;

export declare const GGOActionMakeItProfessionalIcon: GDSIcon;

export declare const GGOActionNotInterestedIcon: GDSIcon;

export declare const GGOActionReviseCategoryIcon: GDSIcon;

export declare const GGOActionRewriteCategoryIcon: GDSIcon;

export declare const GGOActionShortenIcon: GDSIcon;

export declare const GGOActionSimplifyIcon: GDSIcon;

export declare const GGOActionSoundFluentIcon: GDSIcon;

export declare const GGOActionSummarizeIcon: GDSIcon;

export declare const GGOActionSurpriseMeIcon: GDSIcon;

export declare const GGOActionWriteStoryIcon: GDSIcon;

export declare const GGOEmojiArtistPaletteIcon: GDSIcon;

export declare const GGOEmojiCrystalBallIcon: GDSIcon;

export declare const GGOEmojiDropletIcon: GDSIcon;

export declare const GGOEmojiFaceWithHandOverMouthIcon: GDSIcon;

export declare const GGOEmojiFactoryIcon: GDSIcon;

export declare const GGOEmojiFireIcon: GDSIcon;

export declare const GGOEmojiGemStoneIcon: GDSIcon;

export declare const GGOEmojiInclusiveIcon: GDSIcon;

export declare const GGOEmojiMemoIcon: GDSIcon;

export declare const GGOEmojiOpenBookIcon: GDSIcon;

export declare const GGOEmojiPartyPopperIcon: GDSIcon;

export declare const GGOEmojiPencilIcon: GDSIcon;

export declare const GGOEmojiPersonGesturingNoIcon: GDSIcon;

export declare const GGOEmojiReplyAgreeIcon: GDSIcon;

export declare const GGOEmojiReplyDisagreeIcon: GDSIcon;

export declare const GGOEmojiReplyOtherIcon: GDSIcon;

export declare const GGOEmojiReplyQuestionIcon: GDSIcon;

export declare const GGOEmojiSparklesIcon: GDSIcon;

export declare const GGOEmojiWhiteQuestionMarkIcon: GDSIcon;

export declare const GGOEmojiWomanGenieIcon: GDSIcon;

export declare const GGOEmojiWomanTippingHandIcon: GDSIcon;

export declare const GGOInterfaceAvatarIcon: GDSIcon;

export declare const GGOInterfaceBracketIcon: GDSIcon;

export declare const GGOInterfaceIdeasIcon: GDSIcon;

export declare const GGOInterfaceIgnoreIcon: GDSIcon;

export declare const GGOInterfaceImproveWritingIcon: GDSIcon;

export declare const GGOInterfaceLightBoltIcon: GDSIcon;

export declare const GGOInterfaceLoadingIcon: GDSIcon;

export declare const GGOInterfacePaperPlaneIcon: GDSIcon;

export declare const GGOInterfacePinIcon: GDSIcon;

export declare const GGOInterfacePlusIcon: GDSIcon;

export declare const GGOInterfaceStopIcon: GDSIcon;

export declare const GGOInterfaceStyleCasualIcon: GDSIcon;

export declare const GGOInterfaceStyleFormalIcon: GDSIcon;

export declare const GGOInterfaceStyleNeutralIcon: GDSIcon;

export declare const GGOInterfaceToneIcon: GDSIcon;

export declare const GGOInterfaceVoiceMiddleIcon: GDSIcon;

export declare const GGOLogoGButtonCollapsedIcon: GDSIcon;

export declare const GGOLogoGButtonExpandedIcon: GDSIcon;

export declare const GGOLogoGButtonLargeIcon: GDSIcon;

export declare const GGOLogoGButtonLogoMediumIcon: GDSIcon;

export declare const GGOLogoGoLogoIcon: GDSIcon;

export declare const GGOLogoGoMarkDefaultIcon: GDSIcon;

declare const Gold0 = "#FFF6E0";

declare const Gold10 = "#FFEBB8";

declare const Gold100 = "#1A0B00";

declare const Gold20 = "#FFDC85";

declare const Gold30 = "#FFBF47";

declare const Gold40 = "#FFA10A";

declare const Gold60 = "#E57300";

declare const Gold80 = "#BD5200";

declare const Gold90 = "#7A3500";

declare const Green0 = "#EAFAF9";

declare const Green10 = "#B1F0E8";

declare const Green100 = "#00231F";

declare const Green20 = "#73E1D4";

declare const Green30 = "#2CC9B6";

declare const Green40 = "#15A694";

declare const Green60 = "#027E6F";

declare const Green80 = "#016A5E";

declare const Green90 = "#014C43";

/**
 * Heading is a utility component that structures content on a page. [Learn more](https://designsystem.grammarly.io/components/heading)
 */
export declare const Heading: React_2.ForwardRefExoticComponent<HeadingComponentProps & React_2.RefAttributes<HTMLHeadingElement>>;

export declare interface HeadingComponentProps extends HTMLAttributes<HTMLHeadingElement> {
    /**
     * Changes the underlying HTML element for semantics and accessibility.
     */
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    /**
     * The text that is displayed.
     */
    children: React.ReactNode;
    /**
     * Applies base font properties according to our [typography](/foundations/typography/).
     *
     * @default "heading-medium"
     */
    variant?: (typeof textVariants)[number];
    /**
     * Applies a color from the [semantic color palette](/foundations/tokens/) to the Heading.
     */
    color?: TextColor;
    /**
     * Determines horizontal alignment of the Heading.
     */
    align?: "start" | "center" | "end";
    /**
     * Applies the same margin to all sides. The options are based on our available [spacing tokens](/foundations/tokens/#space). The scale is in 4px increments — a value of 8 is a 32px margin.
     *
     * @default 0
     */
    margin?: MarginSpacing;
    /**
     * Applies margin to the left side. The options are based on our available [spacing tokens](/foundations/tokens/#space). The scale is in 4px increments — a value of 8 is a 32px margin.
     */
    marginLeft?: MarginSpacing;
    /**
     * Applies margin to the right side. The options are based on our available [spacing tokens](/foundations/tokens/#space). The scale is in 4px increments — a value of 8 is a 32px margin.
     */
    marginRight?: MarginSpacing;
    /**
     * Applies margin to the top side. The options are based on our available [spacing tokens](/foundations/tokens/#space). The scale is in 4px increments — a value of 8 is a 32px margin.
     */
    marginTop?: MarginSpacing;
    /**
     * Applies margin to the bottom side. The options are based on our available [spacing tokens](/foundations/tokens/#space). The scale is in 4px increments — a value of 8 is a 32px margin.
     */
    marginBottom?: MarginSpacing;
    /**
     * Limits the number of lines displayed in the text component. If the content exceeds this number, it will be truncated with an ellipsis.
     *
     * A `maxLines` value of 0 disables truncation and displays all content without limits.
     *
     * @example
     * - A `maxLines` value of 3 will display up to three lines of text, truncating any additional content.
     * - A `maxLines` value of 0 will show the full text without truncation.
     */
    maxLines?: number;
}

/** @deprecated use `<Heading variant="heading-large">` instead */
export declare const HeadingLarge: React_3.ForwardRefExoticComponent<HeadingProps & React_3.RefAttributes<HTMLHeadingElement>>;

/** @deprecated use `<Heading variant="heading-medium">` instead */
export declare const HeadingMedium: React_3.ForwardRefExoticComponent<HeadingProps & React_3.RefAttributes<HTMLHeadingElement>>;

export declare interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    /**
     * The HTML element to render as.
     */
    as: AutoSuggestedComponents;
}

/** @deprecated use `<Heading variant="heading-small">` instead */
export declare const HeadingSmall: React_3.ForwardRefExoticComponent<HeadingProps & React_3.RefAttributes<HTMLHeadingElement>>;

/** @deprecated use `<Heading variant="heading-xsmall">` instead */
export declare const HeadingXSmall: React_3.ForwardRefExoticComponent<HeadingProps & React_3.RefAttributes<HTMLHeadingElement>>;

/**
 * The Icon component is a container that can display an icon. [Learn more](https://designsystem.grammarly.io/components/icon)
 */
export declare const Icon: React_3.ForwardRefExoticComponent<IconProps & React_3.RefAttributes<SVGElement>>;

declare interface IconBaseProps extends DOMAttributes<SVGSVGElement> {
    /**
     * Used to provide a label for screen reader users.
     *
     * If the icon is purely decorative, use the value `""` (this sets
     * `aria-hidden` on the icon). Otherwise, provide a meaningful value so that
     * screen reader users can understand the icon's purpose.
     */
    accessibilityLabel: string;
    /**
     * Styles the Icon according to its use.
     *
     * @default 'default'
     */
    variant?: (typeof variants_3)[number];
    /**
     * Sets the value of the `aria-hidden` attribute on the icon. If a non-empty
     * `accessibilityLabel` is provided, this prop is ignored.
     *
     * @default true
     * @deprecated Prefer `accessibilityLabel=""`, which is equivalent to
     * `isDecorative={true}`.
     */
    isDecorative?: boolean;
}

/**
 * An IconButton provides a way to take action with only an Icon. [Learn more](https://designsystem.grammarly.io/components/icon-button)
 */
export declare const IconButton: React_3.ForwardRefExoticComponent<IconButtonProps & React_3.RefAttributes<HTMLButtonElement>>;

export declare interface IconButtonProps extends Omit<BaseButtonProps, "size"> {
    /**
     * Icon to display inside the IconButton
     */
    icon: IconProps["icon"];
    /**
     * Describes the Icon Button's purpose. Also populates the Tooltip, unless otherwise changed through `tooltipContentProps`.
     */
    accessibilityLabel: string;
    /**
     * Size (height and width) of the Icon Button
     * @default 'medium'
     */
    size?: "small" | "medium" | "large" | "xlarge";
    /**
     * Props to pass to the Tooltip component. E.g. initiallyOpen, placement, etc
     * TODO: provide ability to override more props (or less)
     */
    tooltipProps?: Partial<TooltipProps>;
    /**
     * Props to pass to the TooltipContent component. shadowDom and iFrame environments may need to override this prop and provide their own root
     * TODO: provide ability to override more props (or less)
     */
    tooltipContentProps?: Partial<TooltipContentProps>;
    /**
     * Look and feel of the Icon Button
     *
     * @default 'primary'
     */
    variant?: Exclude<BaseButtonProps["variant"], "critical" | "pro" | "enterprise">;
}

export declare interface IconProps extends IconBaseProps {
    /**
     * Defines the size of the Icon (only intended for Interface icons).
     * Small (16x16), Medium (20x20), Large (24x24), XLarge (32x32), and XXLarge (40x40).
     *
     * @default 'medium'
     */
    size?: "small" | "medium" | "large" | "xlarge" | "xxlarge";
    /**
     * Defines what icon is displayed. Must be an icon function generated by SVGR
     * that carries an internal brand marker.
     *
     * @example
     * ```tsx
     * import { Icon, EmojiAdmiringIcon } from '@grammarly/design-system';
     *
     * <Icon icon={EmojiAdmiringIcon} />
     * ```
     */
    icon: {
        __brand: "color" | "nocolor";
        __source?: "GDS" | "external";
    };
    /**
     * Provides a prefix for all `id` attributes and ID-based references inside the SVG,
     * such as gradients, masks, filters, clipPaths, and `href` links. This helps avoid
     * ID collisions when rendering multiple instances of the same icon on the page.
     *
     * By default, this prefix is automatically generated using `useId()` from React Aria,
     * which ensures stable, deterministic IDs between server and client — preventing
     * hydration mismatches in SSR environments.
     *
     * In most cases, you don’t need to provide this prop manually.
     * However, if you want more control over scoping, you can pass a custom `resourcePrefix`.
     *
     * @example
     * ```tsx
     * import { useId } from 'react';
     * import { Icon, EmojiAdmiringIcon } from '@grammarly/design-system';
     *
     * function MyComponent() {
     *   const prefix = useId();
     *   return <Icon icon={EmojiAdmiringIcon} resourcePrefix={prefix} />;
     * }
     * ```
     */
    resourcePrefix?: string;
}

export declare const Illustration: React_2.ForwardRefExoticComponent<IllustrationProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const IllustrationEmptyBirdingIcon: GDSIcon;

export declare const IllustrationEmptyCactusIcon: GDSIcon;

export declare const IllustrationEmptyCookieIcon: GDSIcon;

export declare const IllustrationEmptyHatIcon: GDSIcon;

export declare const IllustrationEmptyPaintingIcon: GDSIcon;

export declare const IllustrationEmptyPlaneIcon: GDSIcon;

export declare const IllustrationEmptySandIcon: GDSIcon;

export declare const IllustrationEmptyScribeIcon: GDSIcon;

export declare const IllustrationEmptyWorkIcon: GDSIcon;

export declare const IllustrationEmptyWriteIcon: GDSIcon;

export declare interface IllustrationProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Which illustration to display.
     */
    type: (typeof illustrationTypes)[number];
    /**
     * Defines the size of the Illustration. Small (32x32px), Medium (56x56px), Large (80x80px) and xLarge (96x96px)
     *
     * @default 'medium'
     */
    size?: "small" | "medium" | "large" | "xlarge";
    /**
     * Used to provide a label for screen reader users.
     *
     * If the Illustration is purely decorative, use the value `""` (this sets `aria-hidden` on the Illustration).
     */
    accessibilityLabel?: string;
    /**
     * Whether to follow the inherited color scheme (light or dark).
     */
    colorMode?: "auto" | "light" | "dark";
}

export declare const IllustrationSpotCelebrateIcon: GDSIcon;

export declare const IllustrationSpotChartLineGraphIcon: GDSIcon;

export declare const IllustrationSpotChartUserIcon: GDSIcon;

export declare const IllustrationSpotChatCheckIcon: GDSIcon;

export declare const IllustrationSpotChatDoubleIcon: GDSIcon;

export declare const IllustrationSpotCoinIcon: GDSIcon;

export declare const IllustrationSpotDetectAiTextIcon: GDSIcon;

export declare const IllustrationSpotDoc100Icon: GDSIcon;

export declare const IllustrationSpotDocAwardIcon: GDSIcon;

export declare const IllustrationSpotDocCheckIcon: GDSIcon;

export declare const IllustrationSpotDocDoubleCheckIcon: GDSIcon;

export declare const IllustrationSpotDocMagicIcon: GDSIcon;

export declare const IllustrationSpotDocOnBrandIcon: GDSIcon;

export declare const IllustrationSpotDocSparklesIcon: GDSIcon;

export declare const IllustrationSpotIssueIcon: GDSIcon;

export declare const IllustrationSpotPlagiarismIcon: GDSIcon;

export declare const IllustrationSpotTargetIcon: GDSIcon;

export declare const IllustrationSuccessBirdingIcon: GDSIcon;

export declare const IllustrationSuccessCactusIcon: GDSIcon;

export declare const IllustrationSuccessCheckIcon: GDSIcon;

export declare const IllustrationSuccessCookieIcon: GDSIcon;

export declare const IllustrationSuccessHatIcon: GDSIcon;

export declare const IllustrationSuccessPaintingIcon: GDSIcon;

export declare const IllustrationSuccessPlaneIcon: GDSIcon;

export declare const IllustrationSuccessSandIcon: GDSIcon;

export declare const IllustrationSuccessScribeIcon: GDSIcon;

export declare const IllustrationSuccessWorkIcon: GDSIcon;

export declare const IllustrationSuccessWriteIcon: GDSIcon;

declare const illustrationTypes: readonly ["empty-birding", "empty-cactus", "empty-cookie", "empty-hat", "empty-painting", "empty-plane", "empty-sand", "empty-scribe", "empty-work", "empty-write", "success-birding", "success-cactus", "success-check", "success-cookie", "success-hat", "success-painting", "success-plane", "success-sand", "success-scribe", "success-work", "success-write", "spot-celebrate", "spot-issue", "spot-chat-double", "spot-chat-check", "spot-doc-sparkles", "spot-doc-award", "spot-doc-magic", "spot-doc-check", "spot-doc-double-check", "spot-doc-100", "spot-chart-user", "spot-target", "spot-coin", "spot-doc-on-brand", "spot-chart-line-graph", "spot-plagiarism", "spot-detect-ai-text"];

/**
 * An InputErrorMessage is used by components like TextField to display a contextual error message.
 * @private
 */
export declare const InputErrorMessage: React_3.FC<InputErrorMessageProps>;

export declare interface InputErrorMessageProps extends React_3.HTMLAttributes<HTMLDivElement> {
    errorMessage?: string;
    size?: "small" | "medium" | "large" | "xlarge";
    component?: string;
}

declare type InputType = "email" | "password" | "tel" | "text" | "url" | "number" | "date" | "time" | "datetime-local";

export declare const InterfaceAnalyticsIcon: GDSIcon;

export declare const InterfaceAppsIcon: GDSIcon;

export declare const InterfaceBellIcon: GDSIcon;

export declare const InterfaceBoldIcon: GDSIcon;

export declare const InterfaceBookmarkFilledIcon: GDSIcon;

export declare const InterfaceBookmarkIcon: GDSIcon;

export declare const InterfaceCheckmarkIcon: GDSIcon;

export declare const InterfaceChessIcon: GDSIcon;

export declare const InterfaceClearIcon: GDSIcon;

export declare const InterfaceCloseIcon: GDSIcon;

export declare const InterfaceCollapseIcon: GDSIcon;

export declare const InterfaceCollapseRightIcon: GDSIcon;

export declare const InterfaceColorPickerActiveIcon: GDSIcon;

export declare const InterfaceColorPickerInactiveIcon: GDSIcon;

export declare const InterfaceControlsIcon: GDSIcon;

export declare const InterfaceCopyIcon: GDSIcon;

export declare const InterfaceCreditCardIcon: GDSIcon;

export declare const InterfaceCutIcon: GDSIcon;

export declare const InterfaceDeactivatedIcon: GDSIcon;

export declare const InterfaceDictionaryIcon: GDSIcon;

export declare const InterfaceDocumentIcon: GDSIcon;

export declare const InterfaceDotGreenIcon: GDSIcon;

export declare const InterfaceDotIcon: GDSIcon;

export declare const InterfaceDownIcon: GDSIcon;

export declare const InterfaceDownloadIcon: GDSIcon;

export declare const InterfaceDraggableIcon: GDSIcon;

export declare const InterfaceDropdownArrowDownIcon: GDSIcon;

export declare const InterfaceDropdownArrowRightIcon: GDSIcon;

export declare const InterfaceDropdownDoubleArrowIcon: GDSIcon;

export declare const InterfaceEditIcon: GDSIcon;

export declare const InterfaceEmailIcon: GDSIcon;

export declare const InterfaceErrorIcon: GDSIcon;

export declare const InterfaceExpandIcon: GDSIcon;

export declare const InterfaceExportXlsIcon: GDSIcon;

export declare const InterfaceExternalLinkIcon: GDSIcon;

export declare const InterfaceFeedbackIcon: GDSIcon;

export declare const InterfaceFileCsvIcon: GDSIcon;

export declare const InterfaceFileDocIcon: GDSIcon;

export declare const InterfaceFileDocxIcon: GDSIcon;

export declare const InterfaceFileHtmlIcon: GDSIcon;

export declare const InterfaceFileJsonIcon: GDSIcon;

export declare const InterfaceFileMdIcon: GDSIcon;

export declare const InterfaceFilePdfIcon: GDSIcon;

export declare const InterfaceFileTxtIcon: GDSIcon;

export declare const InterfaceFileXlsIcon: GDSIcon;

export declare const InterfaceFileXmlIcon: GDSIcon;

export declare const InterfaceFingerprintIcon: GDSIcon;

export declare const InterfaceFolderIcon: GDSIcon;

export declare const InterfaceFolderMoveIcon: GDSIcon;

export declare const InterfaceFolderRenameIcon: GDSIcon;

export declare const InterfaceGlobeIcon: GDSIcon;

export declare const InterfaceGoalsIcon: GDSIcon;

export declare const InterfaceHeading1Icon: GDSIcon;

export declare const InterfaceHeading2Icon: GDSIcon;

export declare const InterfaceHelpIcon: GDSIcon;

export declare const InterfaceHideIcon: GDSIcon;

export declare const InterfaceHighlightIcon: GDSIcon;

export declare const InterfaceHistoryIcon: GDSIcon;

export declare const InterfaceHomeIcon: GDSIcon;

export declare const InterfaceIgnoreIcon: GDSIcon;

export declare const InterfaceImageIcon: GDSIcon;

export declare const InterfaceInboxIcon: GDSIcon;

export declare const InterfaceInfoIcon: GDSIcon;

export declare const InterfaceInProgressIcon: GDSIcon;

export declare const InterfaceInsightsIcon: GDSIcon;

export declare const InterfaceItalicIcon: GDSIcon;

export declare const InterfaceKeyFilledIcon: GDSIcon;

export declare const InterfaceKnowledgeHubIcon: GDSIcon;

export declare const InterfaceLeftIcon: GDSIcon;

export declare const InterfaceLinkIcon: GDSIcon;

export declare const InterfaceLockIcon: GDSIcon;

export declare const InterfaceLockRoundedIcon: GDSIcon;

export declare const InterfaceLogoutIcon: GDSIcon;

export declare const InterfaceMenuExpandableIcon: GDSIcon;

export declare const InterfaceMinusIcon: GDSIcon;

export declare const InterfaceMoneyIcon: GDSIcon;

export declare const InterfaceMoreIcon: GDSIcon;

export declare const InterfaceMoreVerticalIcon: GDSIcon;

export declare const InterfaceMuteIcon: GDSIcon;

export declare const InterfaceNewIcon: GDSIcon;

export declare const InterfaceNewTeamIcon: GDSIcon;

export declare const InterfaceNextIcon: GDSIcon;

export declare const InterfaceNoConnectionIcon: GDSIcon;

export declare const InterfaceOfflineIcon: GDSIcon;

export declare const InterfaceOkIcon: GDSIcon;

export declare const InterfaceOrderedListIcon: GDSIcon;

export declare const InterfaceOuterLinkIcon: GDSIcon;

export declare const InterfacePasskeyIcon: GDSIcon;

export declare const InterfacePasteIcon: GDSIcon;

export declare const InterfacePauseIcon: GDSIcon;

export declare const InterfacePlagiarismIcon: GDSIcon;

export declare const InterfacePlayFilledIcon: GDSIcon;

export declare const InterfacePlusIcon: GDSIcon;

export declare const InterfacePremiumIcon: GDSIcon;

export declare const InterfacePreviousIcon: GDSIcon;

export declare const InterfacePrintIcon: GDSIcon;

export declare const InterfaceProofreaderIcon: GDSIcon;

export declare const InterfaceRedoIcon: GDSIcon;

export declare const InterfaceReloadIcon: GDSIcon;

export declare const InterfaceRemoveIcon: GDSIcon;

export declare const InterfaceReportIcon: GDSIcon;

export declare const InterfaceRestoreIcon: GDSIcon;

export declare const InterfaceRewardsIcon: GDSIcon;

export declare const InterfaceRewriteIcon: GDSIcon;

export declare const InterfaceRightIcon: GDSIcon;

export declare const InterfaceSearchIcon: GDSIcon;

export declare const InterfaceSecurityCheckIcon: GDSIcon;

export declare const InterfaceSecurityIcon: GDSIcon;

export declare const InterfaceSettingsIcon: GDSIcon;

export declare const InterfaceShowIcon: GDSIcon;

export declare const InterfaceSnippetsIcon: GDSIcon;

export declare const InterfaceSnoozeIcon: GDSIcon;

export declare const InterfaceSort2Icon: GDSIcon;

export declare const InterfaceSortAscendingIcon: GDSIcon;

export declare const InterfaceSortDescendingIcon: GDSIcon;

export declare const InterfaceSortHorizontalIcon: GDSIcon;

export declare const InterfaceSortIcon: GDSIcon;

export declare const InterfaceSparklesIcon: GDSIcon;

export declare const InterfaceSpeedIcon: GDSIcon;

export declare const InterfaceSpinnerIcon: GDSIcon;

export declare const InterfaceStarFilledIcon: GDSIcon;

export declare const InterfaceStarIcon: GDSIcon;

export declare const InterfaceStatusCheckIcon: GDSIcon;

export declare const InterfaceStyleguideIcon: GDSIcon;

export declare const InterfaceSuggestionsSettingsIcon: GDSIcon;

export declare const InterfaceSuicidePreventionIcon: GDSIcon;

export declare const InterfaceTextareaResizeIcon: GDSIcon;

export declare const InterfaceThumbDownIcon: GDSIcon;

export declare const InterfaceThumbUpIcon: GDSIcon;

export declare const InterfaceTipIcon: GDSIcon;

export declare const InterfaceToneDetectorIcon: GDSIcon;

export declare const InterfaceToneEmptyIcon: GDSIcon;

export declare const InterfaceToolsIcon: GDSIcon;

export declare const InterfaceTransformIcon: GDSIcon;

export declare const InterfaceTryGrammarlyBusinessIcon: GDSIcon;

export declare const InterfaceUnderlineIcon: GDSIcon;

export declare const InterfaceUndoIcon: GDSIcon;

export declare const InterfaceUnorderedListIcon: GDSIcon;

export declare const InterfaceUpIcon: GDSIcon;

export declare const InterfaceUploadIcon: GDSIcon;

export declare const InterfaceUserIcon: GDSIcon;

export declare const InterfaceWarningIcon: GDSIcon;

export declare const InterfaceWritingIcon: GDSIcon;

export declare const InterfaceZoomIcon: GDSIcon;

declare const JustifyContent: readonly ["start", "end", "center", "space-between", "space-around", "space-evenly"];

declare const LightGreen = "#00E0AC";

/**
 * A Link is used for navigation. It may appear on its own, within a sentence or paragraph, or immediately following content.
 * [Learn more](https://designsystem.grammarly.io/components/link)
 */
export declare const Link: React_2.ForwardRefExoticComponent<LinkProps & React_2.RefAttributes<HTMLAnchorElement>>;

export declare interface LinkProps extends Pick<HTMLAttributes<HTMLAnchorElement>, "id" | "className" | "style" | "onClick"> {
    /**
     * Destination for the Link.
     */
    href: string;
    /**
     * Descriptive text to be read by screen readers.
     * Used if the Link text does not provide sufficient context.
     */
    accessibilityLabel?: string;
    /**
     * The contents of the Link, most commonly a simple
     * string with an optional Icon.
     */
    children?: React.ReactNode;
    /**
     * Determines how a Link is positioned relative to
     * the elements around it.
     * [Learn more at MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/display).
     *
     * @default "inline"
     */
    display?: "inline" | "block" | "inline-block";
    /**
     * Indicates a file will be downloaded when the Link is activated.
     * When true, the file will be downloaded.
     * When a string is provided, the file will be downloaded with the given file name.
     * [Learn more at MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download).
     */
    download?: boolean | string;
    /**
     * Determines where the Link will be opened.
     * [Learn more at MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target).
     *
     * When target is set to `_blank`, the Link component will automatically:
     *     - Set `rel="noopener noreferrer"`. [Learn more at MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel).
     *     - Add hidden text for screen readers: "Opens a new window"
     */
    target?: "_blank" | "_self" | "_parent" | "_top";
    /**
     * Determines whether an underline should always be
     * added to Link text or only on hover.
     *
     * @default "always"
     */
    underline?: "always" | "hover";
    /**
     * Sets the color of the Link text and any included Icons.
     *     - Use `primary` by default.
     *     - Use `secondary` when the surrounding content uses the
     *       `color-text-base-subdued` token color or if a standalone
     *       Link is meant to be visually subdued.
     *     - Use `inherit` when you want the font color to match the
     *       surrounding Text.
     *
     * @default "primary"
     */
    variant?: "primary" | "secondary" | "inherit";
    /**
     * Determines the font weight of the text.
     */
    weight?: "normal" | "bold";
}

/**
 * Live Announcer is a utility component that provides real-time updates to users who rely on assistive technologies. [Learn more](https://designsystem.grammarly.io/utilities/live-announcer/)
 */
export declare const liveAnnouncer: {
    announce: typeof announce;
    clear: typeof clear;
    destroy: typeof destroy;
};

export declare const Loader: React_2.FC<LoaderProps> & {
    Circular: React_2.FC<CircularLoaderProps>;
    Branded: React_2.FC<BrandedLoaderProps>;
};

export declare interface LoaderProps extends Pick<HTMLAttributes<HTMLDivElement>, "id" | "className" | "style"> {
    /**
     * The content to render in the Loader
     */
    children: React.ReactNode;
    /**
     * Sets `aria-label` to convey the context of visible text near a Loader. This text and any nearby visible text should be the same or align closely.
     * @default "Loading"
     */
    accessibilityLabel?: string;
    /**
     * When true, moves focus to the progress container when loading starts. Only for multiple Loaders on a page.
     * @default false
     */
    shouldFocus?: boolean;
    /**
     * Callback called when Loader is unmounted.
     * Can be used to move focus to a relevant element when loading is complete.
     * This prop should be set in most cases to make sure the user a user lands at the correct place in the UI.
     * Do not use this prop when multiple Loaders appear together on a page.
     */
    onLoaded?: () => void;
}

/**
 * A component that displays all brand logos across the products in a variety of formats. [Learn more](https://designsystem.grammarly.io/components/logo)
 */
export declare const Logo: React_2.ForwardRefExoticComponent<LogoProps & React_2.RefAttributes<HTMLDivElement>>;

/** Shared props for all logos (brand is specialized per union below) */
declare type LogoBaseProps = Pick<HTMLAttributes<HTMLDivElement>, "id" | "className" | "style"> & {
    /**
     * Used to provide a label for screen reader users.
     */
    accessibilityLabel: string;
    /**
     * Color appearance for the logo.
     *
     * @default "color-primary"
     */
    variant?: "color-primary" | "color-secondary" | "mono-inverse" | "mono-light";
    /**
     * Specify the structural form of the logo.
     * - `mark`: icon-only
     * - `type`: wordmark-only
     * - `lockup`: mark + wordmark together
     *
     * @default "mark"
     */
    composition?: "mark" | "type" | "lockup";
    /**
     * Define the orientation of the logo when using "lockup".
     * Ignored for "mark" and "type".
     *
     * @default "horizontal"
     */
    orientation?: "horizontal" | "stacked";
    /** Specifies the brand logo to display.
     * @default "superhuman"
     */
    brand?: "grammarly" | "coda" | "superhuman" | "mail" | "go";
} & ({
    /**
     * Sets a custom pixel width for the logo.
     * Provide a numeric value to specify its width.
     *
     * @example
     * <Logo width={400} />
     */
    width?: number;
    height?: never;
} | {
    width?: never;
    /**
     * Sets a custom pixel height for the logo.
     * Provide a numeric value to specify its height.
     *
     * @example
     * <Logo height={32} />
     */
    height?: number;
} | {
    width?: never;
    height?: never;
});

export declare const LogoCodaMarkColorPrimaryIcon: GDSIcon;

export declare const LogoCodaMarkColorSecondaryIcon: GDSIcon;

export declare const LogoCodaMarkMonoInverseIcon: GDSIcon;

export declare const LogoCodaMarkMonoLightIcon: GDSIcon;

export declare const LogoCodaTypeColorPrimaryIcon: GDSIcon;

export declare const LogoCodaTypeColorSecondaryIcon: GDSIcon;

export declare const LogoCodaTypeMonoInverseIcon: GDSIcon;

export declare const LogoCodaTypeMonoLightIcon: GDSIcon;

export declare const LogoGoHorizontalColorSecondaryIcon: GDSIcon;

export declare const LogoGoMarkColorSecondaryIcon: GDSIcon;

export declare const LogoGoStackedColorSecondaryIcon: GDSIcon;

export declare const LogoGoTypeColorSecondaryIcon: GDSIcon;

export declare const LogoGrammarlyHorizontalColorPrimaryIcon: GDSIcon;

export declare const LogoGrammarlyHorizontalMonoInverseIcon: GDSIcon;

export declare const LogoGrammarlyHorizontalMonoLightIcon: GDSIcon;

export declare const LogoGrammarlyMarkColorPrimaryIcon: GDSIcon;

export declare const LogoGrammarlyMarkMonoInverseIcon: GDSIcon;

export declare const LogoGrammarlyMarkMonoLightIcon: GDSIcon;

export declare const LogoGrammarlyStackedColorPrimaryIcon: GDSIcon;

export declare const LogoGrammarlyStackedMonoInverseIcon: GDSIcon;

export declare const LogoGrammarlyStackedMonoLightIcon: GDSIcon;

export declare const LogoLockupColorHorizontalDefaultIcon: GDSIcon;

export declare const LogoLockupColorStackedDefaultIcon: GDSIcon;

export declare const LogoLockupHorizontalSuperhumanBrandIcon: GDSIcon;

export declare const LogoLockupHorizontalSuperhumanDarkIcon: GDSIcon;

export declare const LogoLockupHorizontalSuperhumanLightIcon: GDSIcon;

export declare const LogoLockupMonochromeHorizontalDefaultIcon: GDSIcon;

export declare const LogoLockupMonochromeHorizontalInverseIcon: GDSIcon;

export declare const LogoLockupMonochromeStackedDefaultIcon: GDSIcon;

export declare const LogoLockupMonochromeStackedInverseIcon: GDSIcon;

export declare const LogoLockupStackedSuperhumanBrandIcon: GDSIcon;

export declare const LogoLockupStackedSuperhumanDarkIcon: GDSIcon;

export declare const LogoLockupStackedSuperhumanLightIcon: GDSIcon;

export declare const LogoLogomarkCodaBlackIcon: GDSIcon;

export declare const LogoLogomarkCodaEmeraldIcon: GDSIcon;

export declare const LogoLogomarkCodaInverseIcon: GDSIcon;

export declare const LogoLogomarkCodaTomatoSoupIcon: GDSIcon;

export declare const LogoLogomarkColorDefaultIcon: GDSIcon;

export declare const LogoLogomarkMonochromeDefaultIcon: GDSIcon;

export declare const LogoLogomarkMonochromeInverseIcon: GDSIcon;

export declare const LogoLogomarkSuperhumanBrandIcon: GDSIcon;

export declare const LogoLogomarkSuperhumanDarkIcon: GDSIcon;

export declare const LogoLogomarkSuperhumanLightIcon: GDSIcon;

export declare const LogoLogotypeCodaBlackIcon: GDSIcon;

export declare const LogoLogotypeCodaEmeraldIcon: GDSIcon;

export declare const LogoLogotypeCodaInverseIcon: GDSIcon;

export declare const LogoLogotypeCodaTomatoSoupIcon: GDSIcon;

export declare const LogoMailMarkColorPrimaryIcon: GDSIcon;

export declare const LogoMailMarkMonoInverseIcon: GDSIcon;

export declare const LogoMailMarkMonoLightIcon: GDSIcon;

/** Discriminated union ties brand → allowed variant/composition values */
export declare type LogoProps = (LogoBaseProps & {
    brand: "grammarly";
    variant?: Extract<LogoBaseProps["variant"], "color-primary" | "mono-inverse" | "mono-light">;
}) | (LogoBaseProps & {
    brand: "coda";
    variant?: "color-primary" | "color-secondary" | "mono-inverse" | "mono-light";
    composition?: "mark" | "type";
}) | (LogoBaseProps & {
    brand: "superhuman";
    variant?: Extract<LogoBaseProps["variant"], "color-primary" | "color-secondary" | "mono-light">;
}) | (LogoBaseProps & {
    brand: "mail";
    composition: "mark";
    variant?: Extract<LogoBaseProps["variant"], "color-primary" | "mono-inverse" | "mono-light">;
}) | (LogoBaseProps & {
    brand: "go";
    variant?: Extract<LogoBaseProps["variant"], "color-secondary">;
});

export declare const LogoSuperhumanHorizontalColorPrimaryIcon: GDSIcon;

export declare const LogoSuperhumanHorizontalColorSecondaryIcon: GDSIcon;

export declare const LogoSuperhumanHorizontalMonoLightIcon: GDSIcon;

export declare const LogoSuperhumanMarkColorPrimaryIcon: GDSIcon;

export declare const LogoSuperhumanMarkColorSecondaryIcon: GDSIcon;

export declare const LogoSuperhumanMarkMonoLightIcon: GDSIcon;

export declare const LogoSuperhumanStackedColorPrimaryIcon: GDSIcon;

export declare const LogoSuperhumanStackedColorSecondaryIcon: GDSIcon;

export declare const LogoSuperhumanStackedMonoLightIcon: GDSIcon;

export declare const LogoSuperhumanTypeColorSecondaryIcon: GDSIcon;

export declare const LogoSuperhumanTypeMonoLightIcon: GDSIcon;

export declare const LogoWordmarkSuperhumanDarkIcon: GDSIcon;

export declare const LogoWordmarkSuperhumanLightIcon: GDSIcon;

/** @deprecated use Red0 instead */
declare const Magenta0 = "#FFE5F0";

/** @deprecated use Red10 instead */
declare const Magenta10 = "#FEC8DD";

/** @deprecated use Red100 instead */
declare const Magenta100 = "#26000F";

/** @deprecated use Red20 instead */
declare const Magenta20 = "#FAACCB";

/** @deprecated use Red30 instead */
declare const Magenta30 = "#F079A8";

/** @deprecated use Red40 instead */
declare const Magenta40 = "#E14683";

/** @deprecated use Red60 instead */
declare const Magenta60 = "#D21861";

/** @deprecated use Red80 instead */
declare const Magenta80 = "#990C43";

/** @deprecated use Red90 instead */
declare const Magenta90 = "#600428";

declare type MarginSpacing = SpacingOptions | NegativeSpacingOptions | string;

export declare const Menu: React_2.FC<MenuProps> & {
    Item: ({ children, className, isDisabled, icon, onClick, onKeyDown, onMouseDown, href, target, ...rest }: MenuItemProps) => React_2.JSX.Element;
    Separator: React_2.FC<MenuSeparatorProps>;
    Section: React_2.FC<MenuSectionProps>;
};

export declare interface MenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
    /**
     * Unique identifier for the MenuItem
     */
    key: string | number | Key;
    /**
     * The content to render in the MenuItem
     */
    children: React.ReactNode;
    /**
     * Indicates if the item can be activated
     */
    isDisabled?: boolean;
    /**
     * Icon to display inside on the left side of the MenuItem
     */
    icon?: IconProps["icon"];
    /**
     * Action for the item when activated
     */
    onClick?: () => void;
    /**
     * If specified, children are rendered as a Link with the provided destination.
     */
    href?: string;
    /**
     * Determines where the Link will be opened.
     * [Learn more at MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target).
     *
     * When target is set to `_blank`, the Link component will automatically:
     *     - Set `rel="noopener noreferrer"`. [Learn more at MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel).
     *     - Add hidden text for screen readers: "Opens a new window"
     */
    target?: "_blank" | "_self" | "_parent" | "_top";
}

export declare interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The content to render in the Menu
     */
    children: React.ReactNode;
    /**
     * The Button or IconButton that opens the menu when activated.
     * For convenience, also accepts a string to indicate common use cases like "more-horizontal" and "more-vertical" IconButtons.
     * @default "more-vertical"
     */
    activator: "more-horizontal" | "more-vertical" | React.ReactElement;
    /**
     * Describes the Icon Button's purpose.
     * @default "More"
     */
    accessibilityLabel?: string;
    /**
     * Determines whether the Menu should be open initially on mount. Mostly for debug purposes.
     * @default false
     */
    initialOpen?: boolean;
    /**
     * Event handler that is called when the Menu is closed.
     */
    onClose?: () => void;
}

export declare interface MenuSectionProps {
    /**
     * The items to render in the section.
     */
    children: React.ReactNode;
    /**
     * Label for the section.
     */
    label: string;
    /**
     * Can be used to visually hide the label.
     * @default "visible"
     */
    labelDisplay?: "visible" | "hidden";
}

declare interface MenuSeparatorProps {
    /**
     * The role attribute defines the semantic meaning of the menu separator.
     * - `"separator"`: Represents a visual or logical division between groups of menu items.
     * - `"none"`: No specific role or behavior is applied.
     * - default role is "none"
     */
    role?: "separator" | "none";
}

export declare const Modal: React_2.FC<React_2.PropsWithChildren<ModalProps>> & {
    Body: React_2.FC<ModalBodyProps>;
    Footer: React_2.FC<ModalFooterProps>;
    Provider: React_2.Provider<Element | DocumentFragment | undefined>;
    Context: React_2.Context<Element | DocumentFragment | undefined>;
};

export declare const ModalBody: React_2.FC<ModalBodyProps>;

export declare interface ModalBodyProps {
    /**
     * The content to render in the modal body
     */
    children: React.ReactNode;
}

export declare const ModalDialog: React_2.FC<ModalDialogProps>;

declare interface ModalDialogProps extends AriaDialogProps {
    /**
     * The title of the modal, displayed in the header
     */
    title: string;
    /**
     * Description beneath the title with details about the modal
     */
    description?: string;
    /**
     * The content to render in the modal dialog
     */
    children: React.ReactNode;
    /**
     * Determines if the modal contains a close Icon Button in the top corner
     */
    hasCloseButton?: boolean;
    /**
     * Handler that is called when the close button is clicked
     */
    onClose?: () => void;
    /**
     * Used to override the default label on the close button
     */
    accessibilityLabelCloseButton?: string;
}

export declare const ModalFooter: React_2.FC<ModalFooterProps>;

export declare interface ModalFooterProps {
    /**
     * The content to render in the modal footer
     */
    children: React.ReactNode;
}

export declare interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The content to render in the modal
     */
    children: React.ReactNode;
    /**
     * The title of the modal, displayed in the header
     */
    title: string;
    /**
     * Description beneath the title with details about the modal
     */
    description?: string;
    /**
     * Determines whether you can click outside the modal container to close the modal window
     */
    dismissOnOutsideClick?: boolean;
    /**
     * Determines if the modal contains a close Icon Button in the top corner
     */
    hasCloseButton?: boolean;
    /**
     * Determines whether the modal is currently visible
     */
    isOpen?: boolean;
    /**
     * Event handler that is called when the Modal is about to close. Use this to manually control the `isOpen`.
     */
    onClose?: () => void;
    /**
     * Event handler that is automatically called when the Modal has closed.
     */
    onHide?: () => void;
    /**
     * Event handler that is automatically called when the Modal has opened.
     */
    onShow?: () => void;
    /**
     * Small is 480px, Medium is 640px
     */
    width?: "small" | "medium";
    /**
     * Used to notify screen reader user if this is an alert or error, vs. a dialog for data input or information
     */
    role?: "dialog" | "alertdialog";
    /**
     * Used to override the default label on the close button
     */
    accessibilityLabelCloseButton?: string;
    /**
     * Used to override the render target
     */
    target?: Element | DocumentFragment;
}

declare type NegativeSpacingOptions = -0.25 | -0.5 | -1 | -2 | -3 | -4 | -5 | -6 | -8 | -10 | -12 | -14 | -16 | -18 | -20;

declare const NeutralGray0 = "#F5F5F5";

declare const NeutralGray10 = "#EBEBEB";

declare const NeutralGray100 = "#1C1C1C";

declare const NeutralGray20 = "#D9D9D9";

declare const NeutralGray30 = "#BCBCBC";

/** @deprecated use NeutralGray30 instead */
declare const NeutralGray35 = "#A9A9A9";

declare const NeutralGray40 = "#A8A8A8";

/** @deprecated use NeutralGray10 instead */
declare const NeutralGray5 = "#E6E6E6";

/** @deprecated use NeutralGray40 instead */
declare const NeutralGray50 = "#858585";

declare const NeutralGray60 = "#707070";

/** @deprecated use NeutralGray80 instead */
declare const NeutralGray70 = "#616161";

declare const NeutralGray80 = "#545454";

declare const NeutralGray90 = "#2E2E2E";

export declare const OutcomeClarityIcon: GDSIcon;

export declare const OutcomeCorrectnessIcon: GDSIcon;

export declare const OutcomeDeliveryIcon: GDSIcon;

export declare const OutcomeEngagementIcon: GDSIcon;

export declare const OutcomePlagiarismActionIcon: GDSIcon;

export declare const OutcomePlagiarismIcon: GDSIcon;

export declare const OutcomeStyleGuideIcon: GDSIcon;

export declare const OutcomeStyleGuidePlaceholderIcon: GDSIcon;

declare type PaddingSpacing = SpacingOptions | string;

/**
 * A PlanTag indicates a type of Grammarly plan. [Learn more](https://designsystem.grammarly.io/components/plan-tag)
 */
export declare const PlanTag: React_3.FC<PlanTagProps>;

export declare interface PlanTagProps extends Pick<HTMLAttributes<HTMLDivElement>, "id" | "className" | "style"> {
    /**
     * Styles the Plan Tag to display the appropriate plan type.
     *
     * @default 'free'
     */
    variant?: (typeof variants_4)[number];
    /**
     * Determines the size of the Plan Tag.
     *
     * @default 'medium'
     */
    size?: (typeof sizes_2)[number];
    /**
     * Adds a title to the component for Screen Readers. Should include the plan name.
     *
     * @default variant-name
     */
    title?: string;
}

export declare const Popover: React_2.FC<PopoverProps> & {
    Anchor: React_2.ForwardRefExoticComponent<Pick<PopoverAnchorProps, "color" | "form" | "list" | "default" | "accept" | "acceptCharset" | "action" | "allowFullScreen" | "allowTransparency" | "alt" | "as" | "async" | "autoComplete" | "autoPlay" | "capture" | "cellPadding" | "cellSpacing" | "charSet" | "challenge" | "checked" | "cite" | "classID" | "cols" | "colSpan" | "controls" | "coords" | "crossOrigin" | "data" | "dateTime" | "defer" | "disabled" | "download" | "encType" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "frameBorder" | "headers" | "height" | "high" | "href" | "hrefLang" | "htmlFor" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "label" | "loop" | "low" | "manifest" | "marginHeight" | "marginWidth" | "max" | "maxLength" | "media" | "mediaGroup" | "method" | "min" | "minLength" | "multiple" | "muted" | "name" | "noValidate" | "open" | "optimum" | "pattern" | "placeholder" | "playsInline" | "poster" | "preload" | "readOnly" | "required" | "reversed" | "rows" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "selected" | "shape" | "size" | "sizes" | "span" | "src" | "srcDoc" | "srcLang" | "srcSet" | "start" | "step" | "summary" | "target" | "type" | "useMap" | "value" | "width" | "wmode" | "wrap" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "autoFocus" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "nonce" | "slot" | "spellCheck" | "style" | "tabIndex" | "title" | "translate" | "radioGroup" | "role" | "about" | "content" | "datatype" | "inlist" | "prefix" | "property" | "rel" | "resource" | "rev" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerLeave" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key"> & React_2.RefAttributes<HTMLElement>>;
    Content: React_2.ForwardRefExoticComponent<Pick<PopoverContentProps, "color" | "form" | "list" | "default" | "accept" | "acceptCharset" | "action" | "allowFullScreen" | "allowTransparency" | "alt" | "as" | "async" | "autoComplete" | "autoPlay" | "capture" | "cellPadding" | "cellSpacing" | "charSet" | "challenge" | "checked" | "cite" | "classID" | "cols" | "colSpan" | "controls" | "coords" | "crossOrigin" | "data" | "dateTime" | "defer" | "disabled" | "download" | "encType" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "frameBorder" | "headers" | "height" | "high" | "href" | "hrefLang" | "htmlFor" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "label" | "loop" | "low" | "manifest" | "marginHeight" | "marginWidth" | "max" | "maxLength" | "media" | "mediaGroup" | "method" | "min" | "minLength" | "multiple" | "muted" | "name" | "noValidate" | "open" | "optimum" | "pattern" | "placeholder" | "playsInline" | "poster" | "preload" | "readOnly" | "required" | "reversed" | "rows" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "selected" | "shape" | "size" | "sizes" | "span" | "src" | "srcDoc" | "srcLang" | "srcSet" | "start" | "step" | "summary" | "target" | "type" | "useMap" | "value" | "width" | "wmode" | "wrap" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "autoFocus" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "nonce" | "slot" | "spellCheck" | "style" | "tabIndex" | "title" | "translate" | "radioGroup" | "role" | "about" | "content" | "datatype" | "inlist" | "prefix" | "property" | "rel" | "resource" | "rev" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerLeave" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key" | "accessibilityLabel" | "root" | "illustration"> & React_2.RefAttributes<HTMLDivElement>>;
};

export declare interface PopoverAnchorProps extends SanitizedHTMLProps<HTMLElement> {
    /**
     * The UI element that the Popover anchors itself to. If this also activates the Popover, it must be a Button or Icon Button.
     */
    children: React.ReactNode;
}

export declare interface PopoverContentProps extends SanitizedHTMLProps<HTMLDivElement> {
    /**
     * Used to give context to people using screen readers about the purpose of this Popover.
     */
    accessibilityLabel: string;
    /**
     * Contents of the popover.
     */
    children: React.ReactNode;
    /**
     * A visible title displayed in bold inside the Popover.
     */
    title?: string;
    /**
     * You can explicitly set the root element for the portal.
     * For Extension, you should provide a shadow root element.
     * For other Web Apps, you can pass null to use the default root.
     */
    root?: HTMLElement | null | undefined;
    /**
     * A decorative image or illustration that appears above the title in the Popover.
     */
    illustration?: React.ReactNode;
    /**
     * Sets a fixed width for the Popover. Can be a number for pixels or a string for percentages, like “75%”. Range is 225 to 480 px.
     */
    width?: number | string;
}

export declare interface PopoverContextProps {
    /**
     * Determines whether the user can click outside the Popover to close it.
     * @default true
     */
    dismissOnOutsideClick?: boolean;
    /**
     * Determines whether the Popover should be open initially when its Popover.Anchor is mounted.
     * @default false
     */
    initialOpen?: boolean;
    /**
     * Indicates placement of the Popover. If not specified, the Popover will be placed automatically based on position priority.
     * @default 'top'
     */
    placement?: Placement;
    /**
     * If you plan to manually control the Popover state, use `open` with `onOpenChange` options.
     * @default false
     */
    open?: boolean;
    /**
     * Event handler that is called when the open state is changed. Use this to manually control `open`.
     */
    onOpenChange?: React.Dispatch<React.SetStateAction<boolean>>;
}

export declare interface PopoverProps extends PopoverContextProps {
    /**
     * `PopoverAnchor` controls where the Popover appears. It can also activate the Popover.
     * `PopoverContent` is the primary content.
     */
    children: React.ReactNode;
    /** Event handler that is automatically called when the Popover is displayed. */
    onShow?: () => void;
    /** Event handler that is automatically called when the Popover is hidden. */
    onHide?: () => void;
}

/**
 * PortalContainerProvider specifies where portals for overlay components such as Modal should be rendered. [Learn more](https://designsystem.grammarly.io/utilities/portal-container-provider)
 * @public
 */
export declare const PortalContainerProvider: React_2.FC<PortalContainerProviderProps>;

export declare interface PortalContainerProviderProps {
    /**
     * The default outlet where portals should be rendered.
     */
    default?: HTMLElement;
    /**
     * The outlet where Modal portals should be rendered. Leave empty to just use `default`.
     */
    modal?: HTMLElement;
    /**
     * The outlet where Tooltip portals should be rendered. Leave empty to just use `default`.
     */
    tooltip?: HTMLElement;
    /**
     * The outlet where Popover portals should be rendered. Leave empty to just use `default`.
     */
    popover?: HTMLElement;
}

declare const Purple0 = "#F7F6FE";

declare const Purple10 = "#DDD9F9";

declare const Purple100 = "#0E073B";

declare const Purple20 = "#CAC3F7";

declare const Purple30 = "#A598F0";

declare const Purple40 = "#8675EB";

declare const Purple60 = "#5E47E5";

declare const Purple80 = "#3D27C0";

declare const Purple90 = "#1B0D6F";

export declare const RadioButton: React_2.FC<RadioButtonProps>;

export declare interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "disabled"> {
    /**
     * Helper text used in addition to the label
     */
    helperMessage?: string;
    /**
     * Whether the RadioButton is disabled
     * @default false
     */
    isDisabled?: boolean;
    /**
     * The label or content of the RadioButton
     */
    children: React.ReactNode;
}

/**
 * A RadioGroup allows a single selection from two or more options. [Learn more](https://designsystem.grammarly.io/components/radio-group)
 */
export declare const RadioGroup: React_2.FC<RadioGroupProps>;

export declare interface RadioGroupProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "onChange" | "defaultValue"> {
    /** Describes the purpose of the Radio Group. Can be visually hidden with `legendDisplay`. */
    legend: string;
    /**
     * Can be used to visually hide the legend when another element on the page is acting as the visual label for the Radio Group.
     * @default 'visible'
     */
    legendDisplay?: "visible" | "hidden";
    /**
     * Most commonly will be a set of RadioButton components.
     * @deprecated Currently accepts custom radio buttons, but the type will be restricted going forward. Custom radio buttons
     * do not have access to the context provided by the `RadioGroup`, so they will not work as expected.
     */
    children: React.ReactNode;
    /** Indicates the entire Radio Group is in an error state, adds error message below the input, and adds red border. */
    errorMessage?: string;
    /** Provides additional context outside of the legend of the Radio Group. */
    helperMessage?: string;
    /** When true, adds “(Optional)” to the legend. Cannot be combined with `isRequired`. */
    isOptional?: boolean;
    /** When true, adds “(Required)” to the legend and marks input as required. Cannot be combined with `isOptional`. */
    isRequired?: boolean;
    /** Used to specify a column or row layout. In column format, will disperse Radio Buttons across two columns. */
    layout?: "column" | "row";
    /**
     * Can be used to override the content for the optional indication.
     *
     * @default '(Optional)'
     */
    legendIndicatorForOptional?: string;
    /**
     * Can be used to override the content for the required indication.
     *
     * @default '(Required)'
     */
    legendIndicatorForRequired?: string;
    /**
     * Whether all RadioButtons in the group are disabled.
     * @default false
     */
    isDisabled?: boolean;
    /**
     * Controls the size of the Radio group and label.
     * @default "medium"
     */
    size?: (typeof radioGroupSizes)[number];
    /**
     * The selected value of the RadioGroup, if it is controlled.
     * If not provided, the RadioGroup will be uncontrolled and manage its own state.
     */
    value?: string;
    /**
     * Defines if a Radio Button should be selected by default.
     */
    defaultValue?: string;
    /**
     * Event handler that is called when a RadioButton is selected.
     */
    onChange?: (value: string) => void;
}

declare const radioGroupSizes: readonly ["medium", "large", "xlarge"];

/** @deprecated - use RadioButtonProps instead */
export declare interface RadioProps extends RadioButtonProps {
}

declare namespace Radius {
    export {
        RadiusHalf,
        Radius0,
        Radius1,
        Radius1AndHalf,
        Radius2,
        Radius2AndHalf,
        Radius3,
        Radius4,
        Radius5,
        Radius6,
        Radius25
    }
}

declare const Radius0: Rem;

declare const Radius1: Rem;

declare const Radius1AndHalf: Rem;

declare const Radius2: Rem;

declare const Radius25: Rem;

declare const Radius2AndHalf: Rem;

declare const Radius3: Rem;

declare const Radius4: Rem;

declare const Radius5: Rem;

declare const Radius6: Rem;

declare const RadiusHalf: Rem;

export declare const Rating: React_2.ForwardRefExoticComponent<RatingProps & React_2.RefAttributes<HTMLDivElement>>;

/**
 * Props for the main Rating component.
 */
export declare interface RatingProps {
    /**
     * Text label displayed above the stars to describe the purpose of the rating.
     */
    label: string;
    /**
     * When true, displays an error message below the stars and highlights the rating control.
     * Typically used when a required rating was not selected on form submission.
     *
     * @default false
     */
    isError?: boolean;
    /**
     * The currently selected rating index (0–4), where 0 = 1 star, 4 = 5 stars.
     * If `undefined`, no star is selected by default.
     * @default undefined
     */
    value?: RatingValue;
    /**
     * When true, adds a "(Required)" label indicator and marks the field as required for screen readers.
     * Used to indicate that a rating must be selected in order to complete a form.
     * Also sets `aria-required="true"` on the internal radio group and updates label visuals.
     *
     * Note: Validation logic must still be handled externally (e.g. via `isError`).
     *
     * @default false
     */
    isRequired?: boolean;
    /**
     * An array of five custom labels for the stars, ordered from lowest to highest value.
     * Used for accessibility announcements and hover previews.
     *
     * @default
     * [ "Not Valuable", "Slightly Valuable", "Moderately Valuable", "Fairly Valuable", "Very Valuable" ]
     */
    starLabels?: StarLabels;
    /**
     * Callback fired when a user selects or changes a rating.
     * The value passed is the selected index (0–4).
     */
    onChange: (value: RatingValue) => void;
}

/**
 * The possible values for a star rating.
 * Ranges from 0 (1 star) to 4 (5 stars).
 */
declare type RatingValue = 0 | 1 | 2 | 3 | 4;

declare const Red0 = "#FFEAE9";

declare const Red10 = "#FFD1D0";

declare const Red100 = "#510300";

declare const Red20 = "#FFA8A8";

declare const Red30 = "#FF7A74";

declare const Red40 = "#FF4D45";

declare const Red60 = "#EB0A00";

declare const Red80 = "#CD0800";

declare const Red90 = "#8F0600";

declare type Rem = Brand<number, "Rem">;

/** @deprecated - use IconProps instead */
export declare interface ResizableIconProps extends IconProps {
}

/**
 * Sanitized version of React HTML props for a given HTMLElement, removing `onPointerEnterCapture`
 * and `onPointerLeaveCapture` to avoid type conflicts between React 16 and React >16 environments.
 */
declare type SanitizedHTMLProps<T extends HTMLElement> = Omit<React.HTMLProps<T>, "onPointerEnterCapture" | "onPointerLeaveCapture">;

/**
 * ScreenReaderOnly is a utility component that makes its content visible only to screen-readers and other assistive technology. [Learn more](https://designsystem.grammarly.io/components/screen-reader-only)
 */
export declare const ScreenReaderOnly: React_2.ForwardRefExoticComponent<ScreenReaderOnlyProps & React_2.RefAttributes<HTMLSpanElement>>;

export declare interface ScreenReaderOnlyProps extends HTMLAttributes<HTMLSpanElement> {
    /**
     * The content to be made visible only to screen-readers.
     */
    children?: React.ReactNode;
    /**
     * The rendered HTML element.
     * @default 'span'
     */
    as?: AsOptions_2;
}

/**
 * A SearchField refines a list of options based on a matching word or phrase. [Learn more](https://designsystem.grammarly.io/components/search-field)
 */
export declare const SearchField: React_2.ForwardRefExoticComponent<SearchFieldProps & React_2.RefAttributes<HTMLInputElement>>;

export declare interface SearchFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "name" | "onChange" | "size" | "onSubmit" | "value" | "defaultValue" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-dropeffect" | "aria-grabbed" | "aria-level" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-posinset" | "aria-pressed" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "capture" | "checked" | "defaultChecked" | "max" | "min" | "multiple" | "src" | "step"> {
    /**
     * Displays the text label for the Search Field.
     */
    label: string;
    /**
     * Can be used to visually hide the label when another element on the page is acting as the visual label for the TextField.
     */
    labelDisplay?: "visible" | "hidden";
    /**
     * Unique name for this input, used for form validation.
     */
    name?: string;
    /**
     * Adds placeholder text to the input, if needed. Recommended not to use.
     */
    placeholder?: string;
    /**
     * To implement as controlled component, the `value` prop can be used to maintain the input’s value
     */
    value?: string;
    /**
     * Used to add prefilled text in the Search Field input.
     */
    defaultValue?: string;
    /**
     * When true, indicates that the Search Field cannot be focused, changed, or interacted with.
     * @default false
     */
    isDisabled?: boolean;
    /**
     * Can be used to override the aria-label on the clear icon button
     */
    accessibilityLabelClearButton?: string;
    /**
     * Controls the height of the Search Field.
     * @default "medium"
     */
    size?: "medium" | "large" | "xlarge";
    /**
     * Callback fired when the input value changes.
     */
    onChange?: (value: string) => void;
    /**
     * Callback fired when the Enter key is pressed and focus is within the Search Field input
     */
    onSubmit?: (value: string) => void;
    /**
     * Activated when the Clear iconButton at the end of the Search Field is pressed.
     */
    onClear?: () => void;
}

export declare const Select: React_2.ForwardRefExoticComponent<SelectProps & React_2.RefAttributes<HTMLSelectElement>> & {
    Option: React_2.FC<SelectOptionProps>;
};

/** Note that the `selected` attribute does not work in React. Instead, set `value` on the `<Select>` */
export declare type SelectOptionProps = Omit<BasicOption, "selected"> & {
    /** The value to be used when submitting the Select in a form. */
    value?: BasicOption["value"];
    /** The label presented for the option. If not specified, the text inside the option is used instead. */
    label?: BasicOption["label"];
    /** When true, the option cannot be selected and will appear subdued. */
    disabled?: BasicOption["disabled"];
};

export declare interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
    /**
     * The label displayed above the Select.
     */
    label: string;
    /**
     * The name of the Select element that is used when submitting an HTML form. [Learn more at MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#name).
     */
    name?: string;
    /**
     * To implement as controlled component, the `value` prop can be used to maintain the Select's value.
     *
     *  Make sure to also include `onChange` to handle the value change.
     */
    value?: string;
    /**
     * Event handler that is called when the Select value changes.
     */
    onChange?: (value: string) => void;
    /**
     * Provides additional context for the Select outside of the label.
     */
    helperMessage?: string;
    /**
     * Indicates a Select is in an error state, adds error message below the input, and adds red border. When an error message is present, it is read by a screen reader after the label.
     */
    errorMessage?: string;
    /**
     * When true, indicates that the Select cannot be focused, changed, or interacted with.
     */
    isDisabled?: boolean;
    /**
     * When true, adds “(Optional)” to the label. Cannot be combined with isRequired.
     */
    isOptional?: boolean;
    /**
     * When true, adds “(Required)” indicator to the label and marks input as required. Cannot be combined with isOptional.
     */
    isRequired?: boolean;
    /**
     * Can be used to visually hide the label when another element on the page is acting as the visual label.
     *
     * @default 'visible'
     */
    labelDisplay?: "visible" | "hidden";
    /**
     * Used to override the content for the optional indicator.
     *
     * @default '(Optional)'
     */
    labelIndicatorForOptional?: string;
    /**
     * Used to override the content for the required indicator.
     *
     * @default '(Required)'
     */
    labelIndicatorForRequired?: string;
}

declare namespace SemanticColor {
    export {
        Color_2 as Color
    }
}

declare type SemanticColors = "background-addition-default" | "background-addition-subdued" | "background-base-default" | "background-base-subdued" | "background-base-inverse" | "background-brand-default" | "background-brand-subdued" | "background-business-default" | "background-business-subdued" | "background-clarity-default" | "background-clarity-subdued" | "background-correctness-default" | "background-correctness-subdued" | "background-critical-default" | "background-critical-subdued" | "background-deletion-default" | "background-deletion-subdued" | "background-delivery-default" | "background-delivery-subdued" | "background-engagement-default" | "background-engagement-subdued" | "background-enterprise-default" | "background-interactive-default" | "background-neutral-default" | "background-plagiarism-default" | "background-plagiarism-subdued" | "background-premium-default" | "background-premium-subdued" | "background-pro-default" | "background-success-default" | "background-success-subdued" | "background-warning-default" | "background-warning-subdued" | "border-addition-default" | "border-addition-subdued" | "border-base-default" | "border-base-subdued" | "border-base-inverse" | "border-brand-default" | "border-brand-subdued" | "border-business-default" | "border-business-subdued" | "border-clarity-default" | "border-correctness-default" | "border-critical-default" | "border-critical-subdued" | "border-deletion-default" | "border-deletion-subdued" | "border-delivery-default" | "border-elevated-default" | "border-engagement-default" | "border-focus-default" | "border-interactive-default" | "border-plagiarism-default" | "border-premium-default" | "border-premium-subdued" | "border-pro-default" | "border-success-default" | "border-success-subdued" | "border-warning-default" | "border-warning-subdued" | "elevation-base-default" | "elevation-outline-default" | "highlight-addition-default" | "highlight-deletion-default" | "icon-addition-default" | "icon-addition-inverse" | "icon-agent-default" | "icon-base-default" | "icon-base-subdued" | "icon-base-inverse" | "icon-brand-default" | "icon-business-default" | "icon-critical-default" | "icon-critical-inverse" | "icon-deletion-default" | "icon-delivery-default" | "icon-delivery-inverse" | "icon-interactive-default" | "icon-premium-default" | "icon-pro-default" | "icon-pro-inverse" | "icon-success-default" | "icon-warning-default" | "icon-warning-inverse" | "illustration-fill-1" | "illustration-fill-2" | "illustration-fill-default" | "illustration-shadow-default" | "illustration-stroke-1" | "illustration-stroke-2" | "illustration-stroke-3" | "illustration-stroke-default" | "logo-coda-light" | "logo-coda-default" | "logo-coda-primary" | "logo-coda-secondary" | "logo-grammarly-dark" | "logo-grammarly-light" | "logo-grammarly-default" | "logo-grammarly-inverse" | "logo-grammarly-primary" | "logo-hero-dark" | "logo-hero-default" | "logo-mail-light" | "logo-mail-default" | "logo-superhuman-light" | "logo-superhuman-default" | "logo-superhuman-primary" | "logo-superhuman-secondary" | "text-addition-default" | "text-base-default" | "text-base-subdued" | "text-base-inverse" | "text-brand-default" | "text-business-default" | "text-clarity-default" | "text-correctness-default" | "text-critical-default" | "text-dark-default" | "text-deletion-default" | "text-delivery-default" | "text-engagement-default" | "text-enterprise-default" | "text-light-default" | "text-plagiarism-default" | "text-premium-default" | "text-pro-default" | "text-success-default" | "text-warning-default";

declare const sizes: readonly ["small", "medium", "large", "xlarge", "2xlarge", "3xlarge", "4xlarge"];

declare const sizes_2: readonly ["xsmall", "small", "medium", "large"];

declare const sizes_3: readonly ["small", "medium", "large", "xlarge", "auto"];

declare type SkeletonBaseProps = Pick<HTMLAttributes<HTMLDivElement>, "style" | "className">;

export declare const SkeletonLoader: React_2.FC<SkeletonLoaderProps> & {
    Circle: React_2.FC<SkeletonLoaderCircleProps>;
    Rectangle: React_2.FC<SkeletonLoaderRectangleProps>;
    Button: React_2.FC<SkeletonLoaderButtonProps>;
    Heading: React_2.FC<SkeletonLoaderHeadingProps>;
    Icon: React_2.FC<{}>;
    Text: React_2.FC<SkeletonLoaderTextProps>;
};

export declare interface SkeletonLoaderButtonProps extends SkeletonBaseProps {
    /**
     * Sets the height of the skeleton item according to Button sizes.
     * @default "medium"
     */
    size?: "small" | "medium" | "large" | "xlarge";
    /**
     * Sets the visual weight of the skeleton item according to Button variants.
     *
     * @default "primary"
     */
    variant?: "primary" | "secondary" | "tertiary" | "ghost" | "premium";
    /**
     * Defines the width of the skeleton item. Defaults to the full width of its container.
     */
    width?: number | string;
}

export declare interface SkeletonLoaderCircleProps extends SkeletonBaseProps {
    /**
     * Defines the diameter of the skeleton circle. Defaults to the full width of its container.
     */
    width?: number | string;
}

export declare interface SkeletonLoaderHeadingProps extends SkeletonBaseProps {
    /**
     * Defines the width of the skeleton item. Defaults to the full width of its container.
     */
    width?: number | string;
    /**
     * Sets the height of the skeleton item according to Heading variants.
     *
     * @default "heading-medium"
     */
    variant?: "heading-large" | "heading-medium" | "heading-small" | "heading-xsmall" | "heading-xxsmall";
}

export declare interface SkeletonLoaderProps extends SkeletonBaseProps {
    /**
     * Content that is either one of the SkeletonLoader subcomponents or loaded content.
     */
    children: React.ReactNode;
    /**
     * Label to read aloud immediately for screen reader users.
     * @default "Loading"
     */
    accessibilityLabel?: string;
    /**
     * Delay in milliseconds before showing the label visually.
     * @default 2500
     */
    delay?: number;
    /**
     * Displays visible text on top of skeleton components.
     * @default "Loading"
     */
    label?: string;
    /**
     * Defines the offset in pixels from the top of the container to the visible “Loading” label.
     * @default 20
     */
    labelOffset?: number;
    /**
     * Defines the width of the skeleton container. Defaults to the full width of its container.
     */
    width?: number | string;
}

export declare interface SkeletonLoaderRectangleProps extends SkeletonBaseProps {
    /**
     * Defines the width of the skeleton item. Defaults to the full width of its container.
     */
    width?: number | string;
    /**
     * Defines the height of the skeleton item.
     * @default 12
     */
    height?: number | string;
}

export declare interface SkeletonLoaderTextProps extends SkeletonBaseProps {
    /**
     * Sets the height of the skeleton item according to Text variants.
     *
     * @default "text-medium"
     */
    variant?: "text-large" | "text-medium" | "text-small" | "text-xsmall";
    /**
     * Defines the width of the skeleton item. Defaults to the full width of its container.
     */
    width?: number | string;
}

export declare const SocialAppleIcon: GDSIcon;

export declare const SocialFacebookIcon: GDSIcon;

export declare const SocialGoogleIcon: GDSIcon;

declare namespace Space {
    export {
        SpaceQuarter,
        SpaceHalf,
        Space0,
        Space1,
        Space1AndHalf,
        Space2,
        Space3,
        Space4,
        Space5,
        Space6,
        Space8,
        Space10,
        Space12,
        Space14,
        Space16,
        Space18,
        Space20
    }
}

declare const Space0: Rem;

declare const Space1: Rem;

declare const Space10: Rem;

declare const Space12: Rem;

declare const Space14: Rem;

declare const Space16: Rem;

declare const Space18: Rem;

declare const Space1AndHalf: Rem;

declare const Space2: Rem;

declare const Space20: Rem;

declare const Space3: Rem;

declare const Space4: Rem;

declare const Space5: Rem;

declare const Space6: Rem;

declare const Space8: Rem;

declare const SpaceHalf: Rem;

declare const SpaceQuarter: Rem;

declare type SpacingOptions = 0 | 0.25 | 0.5 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20;

/**
 * Labels for each star level in the rating system.
 *
 * Must be a tuple of exactly 5 strings, corresponding to:
 * [1-star label, 2-star label, 3-star label, 4-star label, 5-star label]
 */
declare type StarLabels = [string, string, string, string, string];

export declare const Sticker: React_3.FC<StickerProps> & {
    Discount: React_3.FC<StickerDiscountProps>;
};

declare interface StickerDiscountProps {
    /**
     * Percent discount for the sticker for Grammarly Pro.
     */
    discount: number;
}

export declare interface StickerProps extends Pick<HTMLAttributes<HTMLDivElement>, "id" | "className" | "style"> {
    /**
     * Determines the size of the sticker.
     */
    size?: "small" | "medium" | "large";
    /**
     * Determines the shape of the sticker.
     */
    variant?: "circle" | "scallop";
}

declare interface SVGRProps {
    title?: string;
    titleId?: string;
    desc?: string;
    descId?: string;
    resourcePrefix?: string;
}

/**
 * A Switch has two possible states: on and off. [Learn more](https://designsystem.grammarly.io/components/switch)
 */
export declare const Switch: React_2.ForwardRefExoticComponent<SwitchProps & React_2.RefAttributes<HTMLInputElement>>;

export declare interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "onFocus" | "onBlur" | "size"> {
    /**
     * The label for the Switch.
     */
    label: string;
    /**
     * Used to indicate where the label for the Switch is displayed.
     *   ‘left’: Indicates the label should be displayed to the left of the Switch.
     *   ‘right’: Indicates the label should be displayed to the right of the Switch.
     *   ‘top’: Indicates the label should be displayed above the Switch.
     *   ‘hidden’: Indicates the label should be visually hidden, because another element on the page is acting as the visual label for the Switch.
     *
     * @default 'left'
     */
    labelDisplay?: "left" | "right" | "top" | "hidden";
    /**
     * When true, indicates that the Switch is in the "on" state. For a controlled component, use the `onChange` event handler to set this prop appropriately. Use this property only with controlled components.
     *
     * @default false
     */
    isSelected?: boolean;
    /**
     * When true, indicates the Switch should be turned on by default. Use this property only with uncontrolled components.
     *
     * @default false
     */
    defaultSelected?: boolean;
    /**
     * Additional context for the Switch that will be displayed separately from the label.
     */
    helperMessage?: string;
    /**
     * When true, indicates that a user cannot focus, change, or interact with the Switch.
     *
     * @default false
     */
    isDisabled?: boolean;
    /**
     * Handler that is called when the Switch is toggled
     */
    onChange?: (isSelected: boolean) => void;
    /**
     * The name of the input element that is used when submitting an HTML form. [Learn more at MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).
     */
    name?: string;
    /**
     * Controls the size of the Switch and label.
     * @default "medium"
     */
    size?: "small" | "medium" | "large" | "xlarge";
    /**
     * The value of the input element that is used when submitting an HTML form. [Learn more at MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefvalue).
     */
    value?: string;
}

export declare interface TabListProps {
    /**
     * Used to describe the theme of the entire set of Tabs.
     */
    accessibilityLabel: string;
    /**
     * Used for the Tab subcomponents. Must include at least two.
     */
    children: React.ReactNode;
    /**
     * Determines if there is a border below the Tabs that stretches the full width of the container.
     * @default "default"
     */
    bottomBorder?: "default" | "none";
    /**
     * Width of the TabList
     * @default 'fixed'
     */
    width?: "full" | "fixed";
}

export declare interface TabPanelProps {
    /**
     * Used for the main content of the `TabPanel`.
     */
    children: React.ReactNode;
    /**
     * A unique ID that must match to the corresponding `Tab`.
     */
    id: string;
}

export declare interface TabProps extends TabsBaseProps {
    /**
     * A unique ID that must match to the corresponding `TabPanel`.
     */
    id: string;
    /**
     * Used for the text displayed in an individual Tab.
     */
    label?: string;
    /**
     * Used to implement custom content for inside the Tab.
     */
    children?: React.ReactNode;
}

export declare const Tabs: React_2.FC<TabsProps> & {
    Panel: React_2.ForwardRefExoticComponent<TabPanelProps & React_2.RefAttributes<HTMLDivElement>>;
    TabList: React_2.ForwardRefExoticComponent<TabListProps & React_2.RefAttributes<HTMLDivElement>>;
    Tab: React_2.ForwardRefExoticComponent<TabProps & React_2.RefAttributes<HTMLButtonElement>>;
};

declare type TabsBaseProps = Pick<HTMLAttributes<HTMLDivElement>, "style" | "className">;

export declare interface TabsProps extends TabsBaseProps {
    /**
     * Passes the Tab List and Tab Panels.
     */
    children: React.ReactNode;
    /**
     * The first Tab is activated by default unless using this property to override the value. This corresponds with the Tab `id` prop. We do not recommend overriding this behavior.
     */
    defaultSelectedTab?: string;
    /**
     * Event handler that is called when a Tab is selected.
     */
    onChange?: (id: string) => void;
    /**
     * Determines the size of the Tabs
     * @default "medium"
     */
    size?: (typeof sizes_3)[number];
}

/**
 * A Tag labels, classifies, or draws attention to nearby elements. [Learn more](https://designsystem.grammarly.io/components/tag)
 */
export declare const Tag: React_3.FC<TagProps>;

export declare interface TagProps extends Pick<HTMLAttributes<HTMLDivElement>, "id" | "className" | "style"> {
    /** Used for the content of a Tag. */
    label: string;
    /**
     * Icon to display inside on the left of the Tag.
     */
    iconStart?: IconProps["icon"];
    /**
     * Styles the Tag according to its use. Always match the variant with the Tag’s semantic meaning.
     *
     * @default 'neutral'
     */
    variant?: Variant;
    /**
     * Used only for Premium and Tip variants. When true, adds the corresponding Icon to the Tag.
     *
     * @default true
     */
    showIcon?: boolean;
    /**
     * When true, Tag displays inline with other elements.
     *
     * @default false
     */
    inline?: boolean;
    /**
     * Used to provide a label with extra context for screen reader users.
     *
     * @example
     * <Tag label="Dog" accessibilityLabel="Category: Dog" />
     */
    accessibilityLabel?: string;
}

declare const Teal0 = "#E6FDFD";

declare const Teal10 = "#CCFAFA";

declare const Teal100 = "#001F1F";

declare const Teal20 = "#B3F8F8";

declare const Teal30 = "#80F3F3";

declare const Teal40 = "#00E6E6";

declare const Teal60 = "#00C4C4";

declare const Teal80 = "#027D7D";

declare const Teal90 = "#005C5C";

/**
 * Text is a utility component used to display various types of text. [Learn more](https://designsystem.grammarly.io/components/text)
 */
declare const Text_2: React_2.ForwardRefExoticComponent<TextProps & React_2.RefAttributes<HTMLElement>>;
export { Text_2 as Text }

declare interface TextAllProps extends TextBaseProps, TextStyleProps {
}

/**
 * A Textarea accepts multiple lines of text, numbers, or symbols. [Learn more](https://designsystem.grammarly.io/components/textarea)
 */
export declare const Textarea: React_2.ForwardRefExoticComponent<TextareaProps & React_2.RefAttributes<HTMLTextAreaElement>>;

export declare interface TextareaProps extends TextFieldProps_2, GenericInputProps {
    /**
     * Label for the textarea
     */
    label: string;
    /**
     * Used to tell browsers whether to offer autocomplete suggestions.
     */
    autocomplete?: "on" | "off";
    /**
     * Used to describe why this textarea has an error.
     */
    errorMessage?: string;
    /**
     * Adds a helper message above the textarea. Recommended maximum length is 140 characters.
     */
    helperMessage?: string;
    /**
     * Adds (Optional) to the label. Cannot be combined with `isRequired`.
     */
    isOptional?: boolean;
    /**
     * Adds (Required) to the label and marks textarea as required. Cannot be combined with `isOptional`.
     */
    isRequired?: boolean;
    /**
     * When true, indicates that the Textarea cannot be focused, changed, or interacted with.
     */
    isDisabled?: boolean;
    /**
     * Can be used to visually hide the legend when another element on the page is acting as the visual label for the textarea.
     *
     * @default 'visible'
     */
    labelDisplay?: "visible" | "hidden";
    /**
     * Can be used to override the content for the optional indication.
     *
     * @default '(Optional)'
     */
    labelIndicatorForOptional?: string;
    /**
     * Can be used to override the content for the required indication.
     *
     * @default '(Required)'
     */
    labelIndicatorForRequired?: string;
    /**
     * Used to set the number of lines of text to display.
     *
     * @default 3
     */
    rows?: number;
    /**
     * The name of the textarea element that is used when submitting an HTML form. [Learn more at MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#htmlattrdefname).
     */
    name?: string;
    /**
     * Event handler that is called when the Textarea value changes.
     */
    onChange?: (value: string) => void;
    /**
     * Event handler that is called when the Textarea receives focus.
     */
    onFocus?: (event: FocusEvent_2) => void;
    /**
     * Adds placeholder text to the textarea, if needed. Recommended not to use.
     */
    placeholder?: string;
    /**
     * Can be used to make the textarea resizable.
     *
     * @default 'on'
     */
    resizable?: "on" | "off" | "horizontal" | "vertical";
    /**
     * To implement as controlled component, the `value` prop can be used to maintain the textarea's value
     */
    value?: string;
}

export declare interface TextBaseProps extends HTMLAttributes<HTMLSpanElement> {
    /**
     * The HTML element to render as.
     *
     * @default "span"
     */
    as?: "span" | "p" | "pre" | "blockquote" | "abbr" | "strong" | "div" | "small" | "label";
}

declare type TextColor = WithoutPrefix<SemanticColors, "text">;

/**
 * A TextField accepts a single line of text, numbers, and symbols. [Learn more](https://designsystem.grammarly.io/components/text-field)
 */
export declare const TextField: React_3.ForwardRefExoticComponent<TextFieldProps & React_3.RefAttributes<HTMLInputElement>>;

export declare interface TextFieldProps extends GenericInputProps_2, AriaTextFieldProps {
    /**
     * Displays the text label for the Text Field.
     */
    label: string;
    /**
     * Used to tell browsers when to offer autocomplete suggestions.
     */
    autocomplete?: "bday" | "current-password" | "email" | "new-password" | "username" | "url" | "on" | "off";
    /**
     * Used to override the aria-label on the Show Password IconButton.
     */
    accessibilityLabelShowPassword?: string;
    /**
     * Used to override the aria-label on the Hide Password IconButton.
     */
    accessibilityLabelHidePassword?: string;
    /**
     * Can be used to override the aria-live announcement that gets changed when the Show/Hide password Icon Button is pressed
     */
    accessibilityLivePasswordIsShowing?: string;
    /**
     * Can be used to override the aria-live announcement that gets changed when the Show/Hide password Icon Button is pressed
     */
    accessibilityLivePasswordIsHidden?: string;
    /**
     * Used to describe why this Text Field has an error.
     */
    errorMessage?: string;
    /**
     * Adds a helper message above the input. Recommended maximum length is 140 characters.
     */
    helperMessage?: string;
    /**
     * Icon to place at the start of the input. Icon is decorative and will be hidden from screen readers.
     */
    iconStart?: IconProps["icon"];
    /**
     * Adds (Optional) to the label. Cannot be combined with isRequired.
     */
    isOptional?: boolean;
    /**
     * Adds (Required) to the label and marks input as required. Cannot be combined with isOptional.
     */
    isRequired?: boolean;
    /**
     * Can be used to visually hide the label when another element on the page is acting as the visual label for the TextField.
     */
    labelDisplay?: "visible" | "hidden";
    /**
     * Can be used to override the content for the optional indication
     */
    labelIndicatorForOptional?: string;
    /**
     * Can be used to override the content for the required indication
     */
    labelIndicatorForRequired?: string;
    /**
     * The name of the input element that is used when submitting an HTML form. [Learn more at MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).
     */
    name?: string;
    /**
     * Adds placeholder text to the input, if needed. Recommended not to use.
     */
    placeholder?: string;
    /**
     * Controls the height of the text field.
     * @default "medium"
     */
    size?: "medium" | "large" | "xlarge";
    /**
     * Used to indicate specific types of text field.
     */
    type?: InputType;
    /**
     * To implement as controlled component, the `value` prop can be used to maintain the input’s value
     */
    value?: string;
}

/** @deprecated use `<Text variant="text-large">` instead */
export declare const TextLarge: React_3.ForwardRefExoticComponent<TextLargeProps & React_3.RefAttributes<HTMLSpanElement>>;

export declare interface TextLargeProps extends TextBaseProps {
}

/** @deprecated use `<Text variant="text-medium">` instead */
export declare const TextMedium: React_3.ForwardRefExoticComponent<TextMediumProps & React_3.RefAttributes<HTMLSpanElement>>;

export declare interface TextMediumProps extends TextBaseProps, Omit<TextStyleProps, "strikethrough"> {
}

export declare interface TextProps extends HTMLAttributes<HTMLElement> {
    /**
     * Changes the underlying HTML element for semantics and accessibility.
     */
    as: "p" | "span" | "small" | "strong" | "abbr" | "pre" | "kbd" | "label" | "legend";
    /**
     * The text that is displayed.
     */
    children: React.ReactNode;
    /**
     * Applies base font properties according to our [typography](/foundations/typography/).
     *
     * @default "text-medium"
     */
    variant?: (typeof textVariants)[number];
    /**
     * Applies a text color from the [semantic color palette](/foundations/tokens/).
     *
     * @example `base-subdued` results in `--color-text-base-subdued`
     */
    color?: TextColor;
    /**
     * Determines horizontal alignment of the text.
     */
    align?: "start" | "center" | "end" | "justify";
    /**
     * Determines the font weight of the text.
     *
     * normal - 400
     * medium - 500
     * semibold - 600
     * bold - 700
     */
    weight?: "normal" | "medium" | "semibold" | "bold";
    /**
     * When true, styles the text in italics.
     */
    italic?: boolean;
    /**
     * Determines if the text has a horizontal line through the center of it.
     */
    decoration?: "none" | "line-through";
    /**
     * Applies the same margin to all sides. The options are based on our available [spacing tokens](/foundations/tokens/#space). The scale is in 4px increments — a value of 8 is a 32px margin.
     *
     * @default 0
     */
    margin?: MarginSpacing;
    /**
     * Applies margin to the left side. The options are based on our available [spacing tokens](/foundations/tokens/#space). The scale is in 4px increments — a value of 8 is a 32px margin.
     */
    marginLeft?: MarginSpacing;
    /**
     * Applies margin to the right side. The options are based on our available [spacing tokens](/foundations/tokens/#space). The scale is in 4px increments — a value of 8 is a 32px margin.
     */
    marginRight?: MarginSpacing;
    /**
     * Applies margin to the top side. The options are based on our available [spacing tokens](/foundations/tokens/#space). The scale is in 4px increments — a value of 8 is a 32px margin.
     */
    marginTop?: MarginSpacing;
    /**
     * Applies margin to the bottom side. The options are based on our available [spacing tokens](/foundations/tokens/#space). The scale is in 4px increments — a value of 8 is a 32px margin.
     */
    marginBottom?: MarginSpacing;
    /**
     * Limits the number of lines displayed in the text component. If the content exceeds this number, it will be truncated with an ellipsis.
     *
     * A `maxLines` value of 0 disables truncation and displays all content without limits.
     *
     * @example
     * - A `maxLines` value of 3 will display up to three lines of text, truncating any additional content.
     * - A `maxLines` value of 0 will show the full text without truncation.
     */
    maxLines?: number;
}

/** @deprecated use `<Text variant="text-small">` instead */
export declare const TextSmall: React_3.ForwardRefExoticComponent<TextSmallProps & React_3.RefAttributes<HTMLSpanElement>>;

export declare interface TextSmallProps extends TextAllProps {
}

declare interface TextStyleProps {
    /**
     * Whether the text should be bold.
     */
    bold?: boolean;
    /**
     * Whether the text should be italic.
     */
    italic?: boolean;
    /**
     * Whether the text should be strikethrough.
     */
    strikethrough?: boolean;
}

declare const textVariants: readonly ["text-large", "text-medium", "text-small", "text-xsmall", "heading-large", "heading-medium", "heading-small", "heading-xsmall", "heading-xxsmall"];

/** @deprecated use `<Text variant="text-xsmall">` instead */
export declare const TextXSmall: React_3.ForwardRefExoticComponent<TextXSmallProps & React_3.RefAttributes<HTMLSpanElement>>;

export declare interface TextXSmallProps extends TextBaseProps, Omit<TextStyleProps, "strikethrough"> {
}

declare interface ThemeContext {
    theme: ColorThemeOption;
    updateTheme: (newTheme: ColorThemeOption) => void;
    mode: ColorModeOption;
    updateMode: (newMode: ColorModeOption) => void;
}

/**
 * Sets the color theme and mode for all contained elements. [Learn more](https://designsystem.grammarly.io/components/theme-provider)
 *
 * Internally, this sets a `data-gds-mode` attribute on a wrapping `<div>`, which updates CSS variables as necessary.
 */
export declare function ThemeProvider(props: ThemeProviderProps): React_2.ReactElement;

export declare interface ThemeProviderProps {
    /**
     * Specify the theme to use. If not provided, will default to the Grammarly color palette.
     *
     * @default "grammarly"
     */
    theme?: ColorThemeOption;
    /**
     * Specify the color mode to use. If not provided, the value is detected based on the user's OS settings ("auto").
     *
     * @default "auto"
     */
    mode?: ColorModeOption;
    /**
     * Contents that make use of the theme provider.
     */
    children: React.ReactNode;
    /**
     * Custom target to attach `data-gds-mode` attributes. Defaults to a container div if not provided.
     */
    target?: HTMLElement;
}

/**
 * A Toast informs users of a process that has been or will be performed. [Learn more](https://designsystem.grammarly.io/components/toast)
 */
export declare const Toast: React_2.ForwardRefExoticComponent<ToastProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The text shown in the Toast.
     */
    text: string;
    /**
     * Changes the icon to convey a system status.
     *
     * @default "default"
     */
    variant?: ToastVariants;
    /**
     * A Button representing the primary action to take on the Toast. Only use Ghost Buttons inside Toasts.
     */
    primaryAction?: React.ReactNode;
    /**
     * A Button representing the secondary action to take on the Toast. Only use Ghost Buttons inside Toasts.
     */
    secondaryAction?: React.ReactNode;
    /**
     * Event handler that is called when the Close button is clicked.
     */
    onClose: () => void;
}

declare type ToastVariants = "default" | "critical" | "loading" | "success" | "warning";

declare namespace Tokens {
    export {
        Color,
        SemanticColor,
        Space,
        Blur,
        Elevation,
        Radius,
        _deprecatedColorsV6,
        Rem,
        CoreColors,
        SemanticColors
    }
}
export { Tokens }

/**
 * A Tooltip displays short, informative text when the user hovers over or focuses on an element. [Learn more](https://designsystem.grammarly.io/components/tooltip)
 */
export declare const Tooltip: React_2.FC<TooltipProps>;

export declare const TooltipContent: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLDivElement> & {
    /**
     * explicitly set the root element for the portal
     * for Extension you should provide a shadow root element
     * for other Web Apps, you can pass null to use the default root
     */
    root: HTMLElement | null | undefined;
} & React_2.RefAttributes<HTMLDivElement>>;

export declare type TooltipContentProps = React_2.HTMLAttributes<HTMLDivElement> & {
    /**
     * explicitly set the root element for the portal
     * for Extension you should provide a shadow root element
     * for other Web Apps, you can pass null to use the default root
     */
    root: HTMLElement | null | undefined;
};

export declare interface TooltipContextProps {
    initialOpen?: boolean;
    placement?: Placement;
    openDelay?: number;
    annotation?: string | null;
    /**
     * If you plan to manually control the Tooltip state, use `open` and `onOpenChange`.
     * @default false
     */
    open?: boolean;
    /**
     * Toggles tooltip visibility on click (mouse or keyboard).
     * Works only in uncontrolled mode.
     * @default true
     */
    toggleOnClick?: boolean;
    /**
     * Event handler that is called when the open state is internally changed. Use this to manually control the `open`.
     */
    onOpenChange?: React.Dispatch<React.SetStateAction<boolean>>;
    /** Event handler that is called when the Tooltip is shown. */
    onShow?: () => void;
    /** Event handler that is called when the Tooltip is hidden. */
    onHide?: () => void;
}

export declare type TooltipProps = {
    children: React.ReactNode;
} & TooltipContextProps;

export declare const TooltipTrigger: React_2.ForwardRefExoticComponent<TooltipTriggerProps & React_2.RefAttributes<HTMLElement>>;

export declare interface TooltipTriggerProps extends React_2.HTMLAttributes<HTMLElement> {
    asChild?: boolean;
}

declare const Transparent = "#FFFFFF00";

export declare function useColorScheme(): ColorSchemeContext;

/**
 * Returns the current theme context.
 *
 * Useful for accessing the active color mode, active color mode and setters of the `ThemeProvider`.
 * @example
 * import { useTheme } from "./ThemeProvider";
 *
 * const { theme, mode, updateMode } = useTheme();
 * @returns ThemeContext
 */
export declare function useTheme(): ThemeContext;

declare type UtilityProps = {
    /**
     * The background color of the container, based on our [core or semantic colors](/foundations/tokens/#color)
     */
    bgColor?: CoreColors | SemanticColors;
    /**
     * The color of the border, based on our [semantic border colors](/foundations/tokens/#semantic_color__Color.Border.Base_default)
     */
    borderColor?: BorderBaseColor;
    /**
     * The border radius, based on our available [Radius tokens](/foundations/tokens/#border-radius)
     */
    borderRadius?: 0 | 0.5 | 1 | 2 | 3;
    /**
     * The color to apply to all text within the container, based on our [semantic colors](/foundations/tokens/#color) for text
     */
    color?: TextColor;
    /**
     * Shortcut for applying the same margin on all sides of the container. The options are based off our available [Space tokens](/foundations/tokens/#space). The scale is in 4px increments - a value of 8 is a 32px margin
     */
    margin?: MarginSpacing;
    /**
     * Applies margin to the left side of the container. The options are based off our available [Space tokens](/foundations/tokens/#space). The scale is in 4px increments - a value of 8 is a 32px margin
     */
    marginLeft?: MarginSpacing;
    /**
     * Applies margin to the right side of the container. The options are based off our available [Space tokens](/foundations/tokens/#space). The scale is in 4px increments - a value of 8 is a 32px margin
     */
    marginRight?: MarginSpacing;
    /**
     * Applies margin to the top side of the container. The options are based off our available [Space tokens](/foundations/tokens/#space). The scale is in 4px increments - a value of 8 is a 32px margin
     */
    marginTop?: MarginSpacing;
    /**
     * Applies margin to the bottom side of the container. The options are based off our available [Space tokens](/foundations/tokens/#space). The scale is in 4px increments - a value of 8 is a 32px margin
     */
    marginBottom?: MarginSpacing;
    /**
     * Shortcut for applying the same padding on all sides of the container. The options are based off our available [Space tokens](/foundations/tokens/#space). The scale is in 4px increments - a value of 8 is a 32px margin
     */
    padding?: PaddingSpacing;
    /**
     * Applies padding to the left side of the container. The options are based off our available [Space tokens](/foundations/tokens/#space). The scale is in 4px increments - a value of 8 is a 32px padding
     */
    paddingLeft?: PaddingSpacing;
    /**
     * Applies padding to the right side of the container. The options are based off our available [Space tokens](/foundations/tokens/#space). The scale is in 4px increments - a value of 8 is a 32px padding
     */
    paddingRight?: PaddingSpacing;
    /**
     * Applies padding to the top side of the container. The options are based off our available [Space tokens](/foundations/tokens/#space). The scale is in 4px increments - a value of 8 is a 32px padding
     */
    paddingTop?: PaddingSpacing;
    /**
     * Applies padding to the bottom side of the container. The options are based off our available [Space tokens](/foundations/tokens/#space). The scale is in 4px increments - a value of 8 is a 32px padding
     */
    paddingBottom?: PaddingSpacing;
    /**
     * The width of the container. Can be a number for pixels or a string for percentages, like “75%”.
     */
    width?: number | string;
    /**
     * The height of the container. Can be a number for pixels or a string for percentages, like “75%”.
     */
    height?: number | string;
};

declare type Variant = (typeof variants_5)[number];

declare const variants: readonly ["neutral", "business", "addition", "clarity", "correctness", "critical", "deletion", "delivery", "engagement", "plagiarism", "premium", "pro", "success", "warning"];

declare const variants_2: readonly ["primary", "secondary", "tertiary", "ghost", "premium", "critical", "pro", "enterprise"];

declare const variants_3: readonly ["default", "inverse", "brand", "business", "addition", "critical", "deletion", "success", "premium", "pro", "warning", "inherit"];

declare const variants_4: readonly ["free", "pro", "enterprise", "edu", "business", "premium"];

declare const variants_5: readonly ["neutral", "brand", "critical", "premium", "pro", "success", "tip", "warning", "inverse", "deletion", "addition", "business"];

/**
 * Verification Code accepts a one-time code containing only numbers or both letters and numbers. [Learn more](https://designsystem.grammarly.io/components/verification-code)
 */
export declare const VerificationCode: React_3.FC<VerificationCodeProps>;

export declare interface VerificationCodeProps extends Pick<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "className" | "style" | "name"> {
    /** Describes the purpose of the Verification Code. Can be visually hidden with `legendDisplay`. */
    legend: string;
    /**
     * Determines the height of the inputs.
     * @default "large"
     */
    size?: "small" | "medium" | "large";
    /**
     * Determines the number of digits for the code.
     * @default 6
     */
    numberOfDigits?: number;
    /**
     * Used to describe why this Verification Code has an error.
     */
    errorMessage?: string;
    /**
     * Whether the Verification Code inputs are all disabled
     * @default false
     */
    isDisabled?: boolean;
    /**
     * Determines what characters can be entered for the code.
     * @default "number"
     */
    type?: "text" | "number";
    /**
     * Used to programmatically set the value of the VerificationCode inputs.
     */
    value?: string;
    /**
     * Event handler that is called when the VerificationCode value changes.
     */
    onChange?: (value: string) => void;
    /**
     * Event handler that is called when an input inside VerificationCode is focused.
     */
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
}

declare const White = "#FFFFFF";

declare type WithoutPrefix<T, Prefix extends string> = T extends `${Prefix}-${infer S}` ? S : never;

declare const YellowGreen = "#D5FF00";

export { }
