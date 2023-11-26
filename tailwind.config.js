/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    spacing: {
      0: '0px',
      0.5: '4px',
      1: '8px',
      1.5: '12px',
      2: '16px',
      2.5: '20px',
      3: '24px',
      3.5: '28px',
      4: '32px',
      4.5: '36px',
      5: '40px',
      5.5: '44px',
      6: '48px',
      6.5: '52px',
      7: '56px',
      7.5: '60px',
      8: '64px',
      8.5: '68px',
      9: '72px',
      9.5: '76px',
      10: '80px',
    },
    container: {
      center: true,
      // padding: "2rem",
      // screens: {
      //   "2xl": "1400px",
      // },
    },
    extend: {
      minHeight: (theme) => ({
        ...theme('spacing')
      }),
      maxHeight: (theme) => ({
        ...theme('spacing')
      }),
      minWidth: (theme) => ({
        ...theme('spacing')
      }),
      maxWidth: (theme) => ({
        ...theme('spacing')
      }),
      fontSize: {
        'header-1': [
          'clamp(2rem, 1.3333rem + 1.3889vw, 3rem)',
          {
            lineHeight: 'normal',
            fontWeight: 700
          }
        ],
        'header-2': [
          'clamp(1.125rem, 0.875rem + 0.5208vw, 1.5rem)',
          {
            lineHeight: 'normal',
            fontWeight: 400
          }
        ],
        'body-1': [
          'clamp(1rem, 0.9167rem + 0.1736vw, 1.125rem)',
          {
            lineHeight: '1.5',
            fontWeight: 300
          }
        ]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}