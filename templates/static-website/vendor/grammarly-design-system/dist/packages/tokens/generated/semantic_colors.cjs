"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const Color = {
  Background: {
    Addition: {
      Default: "var(--color-background-addition-default)",
      Subdued: "var(--color-background-addition-subdued)"
    },
    Base: {
      Default: "var(--color-background-base-default)",
      Subdued: "var(--color-background-base-subdued)",
      Inverse: "var(--color-background-base-inverse)"
    },
    Brand: {
      Default: "var(--color-background-brand-default)",
      Subdued: "var(--color-background-brand-subdued)"
    },
    Business: {
      Default: "var(--color-background-business-default)",
      Subdued: "var(--color-background-business-subdued)"
    },
    Clarity: {
      Default: "var(--color-background-clarity-default)",
      Subdued: "var(--color-background-clarity-subdued)"
    },
    Correctness: {
      Default: "var(--color-background-correctness-default)",
      Subdued: "var(--color-background-correctness-subdued)"
    },
    Critical: {
      Default: "var(--color-background-critical-default)",
      Subdued: "var(--color-background-critical-subdued)"
    },
    Deletion: {
      Default: "var(--color-background-deletion-default)",
      Subdued: "var(--color-background-deletion-subdued)"
    },
    Delivery: {
      Default: "var(--color-background-delivery-default)",
      Subdued: "var(--color-background-delivery-subdued)"
    },
    Engagement: {
      Default: "var(--color-background-engagement-default)",
      Subdued: "var(--color-background-engagement-subdued)"
    },
    Enterprise: { Default: "var(--color-background-enterprise-default)" },
    Interactive: { Default: "var(--color-background-interactive-default)" },
    Neutral: { Default: "var(--color-background-neutral-default)" },
    Plagiarism: {
      Default: "var(--color-background-plagiarism-default)",
      Subdued: "var(--color-background-plagiarism-subdued)"
    },
    Premium: {
      Default: "var(--color-background-premium-default)",
      Subdued: "var(--color-background-premium-subdued)"
    },
    Pro: { Default: "var(--color-background-pro-default)" },
    Success: {
      Default: "var(--color-background-success-default)",
      Subdued: "var(--color-background-success-subdued)"
    },
    Warning: {
      Default: "var(--color-background-warning-default)",
      Subdued: "var(--color-background-warning-subdued)"
    }
  },
  Border: {
    Addition: {
      Default: "var(--color-border-addition-default)",
      Subdued: "var(--color-border-addition-subdued)"
    },
    Base: {
      Default: "var(--color-border-base-default)",
      Subdued: "var(--color-border-base-subdued)",
      Inverse: "var(--color-border-base-inverse)"
    },
    Brand: {
      Default: "var(--color-border-brand-default)",
      Subdued: "var(--color-border-brand-subdued)"
    },
    Business: {
      Default: "var(--color-border-business-default)",
      Subdued: "var(--color-border-business-subdued)"
    },
    Clarity: { Default: "var(--color-border-clarity-default)" },
    Correctness: { Default: "var(--color-border-correctness-default)" },
    Critical: {
      Default: "var(--color-border-critical-default)",
      Subdued: "var(--color-border-critical-subdued)"
    },
    Deletion: {
      Default: "var(--color-border-deletion-default)",
      Subdued: "var(--color-border-deletion-subdued)"
    },
    Delivery: { Default: "var(--color-border-delivery-default)" },
    Elevated: { Default: "var(--color-border-elevated-default)" },
    Engagement: { Default: "var(--color-border-engagement-default)" },
    Focus: { Default: "var(--color-border-focus-default)" },
    Interactive: { Default: "var(--color-border-interactive-default)" },
    Plagiarism: { Default: "var(--color-border-plagiarism-default)" },
    Premium: {
      Default: "var(--color-border-premium-default)",
      Subdued: "var(--color-border-premium-subdued)"
    },
    Pro: { Default: "var(--color-border-pro-default)" },
    Success: {
      Default: "var(--color-border-success-default)",
      Subdued: "var(--color-border-success-subdued)"
    },
    Warning: {
      Default: "var(--color-border-warning-default)",
      Subdued: "var(--color-border-warning-subdued)"
    }
  },
  Elevation: {
    Base: { Default: "var(--color-elevation-base-default)" },
    Outline: { Default: "var(--color-elevation-outline-default)" }
  },
  Highlight: {
    Addition: { Default: "var(--color-highlight-addition-default)" },
    Deletion: { Default: "var(--color-highlight-deletion-default)" }
  },
  Icon: {
    Addition: {
      Default: "var(--color-icon-addition-default)",
      Inverse: "var(--color-icon-addition-inverse)"
    },
    Agent: { Default: "var(--color-icon-agent-default)" },
    Base: {
      Default: "var(--color-icon-base-default)",
      Subdued: "var(--color-icon-base-subdued)",
      Inverse: "var(--color-icon-base-inverse)"
    },
    Brand: { Default: "var(--color-icon-brand-default)" },
    Business: { Default: "var(--color-icon-business-default)" },
    Critical: {
      Default: "var(--color-icon-critical-default)",
      Inverse: "var(--color-icon-critical-inverse)"
    },
    Deletion: { Default: "var(--color-icon-deletion-default)" },
    Delivery: {
      Default: "var(--color-icon-delivery-default)",
      Inverse: "var(--color-icon-delivery-inverse)"
    },
    Interactive: { Default: "var(--color-icon-interactive-default)" },
    Premium: { Default: "var(--color-icon-premium-default)" },
    Pro: { Default: "var(--color-icon-pro-default)", Inverse: "var(--color-icon-pro-inverse)" },
    Success: { Default: "var(--color-icon-success-default)" },
    Warning: {
      Default: "var(--color-icon-warning-default)",
      Inverse: "var(--color-icon-warning-inverse)"
    }
  },
  Illustration: {
    Fill: {
      1: "var(--color-illustration-fill-1)",
      2: "var(--color-illustration-fill-2)",
      Default: "var(--color-illustration-fill-default)"
    },
    Shadow: { Default: "var(--color-illustration-shadow-default)" },
    Stroke: {
      1: "var(--color-illustration-stroke-1)",
      2: "var(--color-illustration-stroke-2)",
      3: "var(--color-illustration-stroke-3)",
      Default: "var(--color-illustration-stroke-default)"
    }
  },
  Logo: {
    Coda: {
      Light: "var(--color-logo-coda-light)",
      Default: "var(--color-logo-coda-default)",
      Primary: "var(--color-logo-coda-primary)",
      Secondary: "var(--color-logo-coda-secondary)"
    },
    Grammarly: {
      Dark: "var(--color-logo-grammarly-dark)",
      Light: "var(--color-logo-grammarly-light)",
      Default: "var(--color-logo-grammarly-default)",
      Inverse: "var(--color-logo-grammarly-inverse)",
      Primary: "var(--color-logo-grammarly-primary)"
    },
    Hero: { Dark: "var(--color-logo-hero-dark)", Default: "var(--color-logo-hero-default)" },
    Mail: { Light: "var(--color-logo-mail-light)", Default: "var(--color-logo-mail-default)" },
    Superhuman: {
      Light: "var(--color-logo-superhuman-light)",
      Default: "var(--color-logo-superhuman-default)",
      Primary: "var(--color-logo-superhuman-primary)",
      Secondary: "var(--color-logo-superhuman-secondary)"
    }
  },
  Text: {
    Addition: { Default: "var(--color-text-addition-default)" },
    Base: {
      Default: "var(--color-text-base-default)",
      Subdued: "var(--color-text-base-subdued)",
      Inverse: "var(--color-text-base-inverse)"
    },
    Brand: { Default: "var(--color-text-brand-default)" },
    Business: { Default: "var(--color-text-business-default)" },
    Clarity: { Default: "var(--color-text-clarity-default)" },
    Correctness: { Default: "var(--color-text-correctness-default)" },
    Critical: { Default: "var(--color-text-critical-default)" },
    Dark: { Default: "var(--color-text-dark-default)" },
    Deletion: { Default: "var(--color-text-deletion-default)" },
    Delivery: { Default: "var(--color-text-delivery-default)" },
    Engagement: { Default: "var(--color-text-engagement-default)" },
    Enterprise: { Default: "var(--color-text-enterprise-default)" },
    Light: { Default: "var(--color-text-light-default)" },
    Plagiarism: { Default: "var(--color-text-plagiarism-default)" },
    Premium: { Default: "var(--color-text-premium-default)" },
    Pro: { Default: "var(--color-text-pro-default)" },
    Success: { Default: "var(--color-text-success-default)" },
    Warning: { Default: "var(--color-text-warning-default)" }
  }
};
exports.Color = Color;
