// Apple-inspired Global Styles
// Background colors
export const APPLE_COLORS = {
    // Backgrounds
    white: '#FFFFFF',
    lightGray: '#F5F5F7',
    veryLightGray: '#FAFAFC',

    // Text
    almostBlack: '#1D1D1F',
    mediumGray: '#6E6E73',

    // Accent
    systemBlue: '#0071E3',

    // Brand accent
    accentYellow: '#BBFF71',
};

// Typography scale (Apple Watch reference)
export const APPLE_TYPOGRAPHY = {
    hero: {
        mobile: '48px',
        desktop: '80px',
        lineHeight: {
            mobile: '52px',
            desktop: '84px',
        },
        weight: 600,
    },
    sectionHeading: {
        mobile: '32px',
        desktop: '48px',
        lineHeight: {
            mobile: '36px',
            desktop: '52px',
        },
        weight: 600,
    },
    cardHeading: {
        mobile: '24px',
        desktop: '28px',
        lineHeight: {
            mobile: '28px',
            desktop: '32px',
        },
        weight: 600,
    },
    body: {
        size: '17px',
        lineHeight: '25px',
        weight: 400,
    },
    caption: {
        size: '12px',
        lineHeight: '16px',
        weight: 400,
    },
};

// Layout (Apple margins)
export const APPLE_LAYOUT = {
    mobilePadding: '20px',
    maxWidth: '980px',
    sectionSpacing: {
        mobile: '60px',
        desktop: '100px',
    },
};

// Hover effects (Apple-style)
export const APPLE_HOVER = {
    scale: 1.02,
    transition: '0.3s ease-in-out',
    shadowElevation: '0 8px 16px rgba(0,0,0,0.12)',
};
