import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      spacing: {
        unset: "unset", // Unset margin, padding, etc.
      },
      width: {
        unset: "unset", // Unset width
      },
      height: {
        unset: "unset", // Unset height
      },
      minWidth: {
        unset: "unset", // Unset min-width
      },
      minHeight: {
        unset: "unset", // Unset min-height
      },
      maxWidth: {
        unset: "unset", // Unset max-width
      },
      maxHeight: {
        unset: "unset", // Unset max-height
      },
      inset: {
        unset: "unset", // Unset top, right, bottom, left
      },
      zIndex: {
        unset: "unset", // Unset z-index
      },
      flex: {
        unset: "unset", // Unset flex
      },
      order: {
        unset: "unset", // Unset order
      },
      gap: {
        unset: "unset", // Unset gap
      },
      opacity: {
        unset: "unset", // Unset opacity
      },
      borderWidth: {
        unset: "unset", // Unset border width
      },
      borderRadius: {
        unset: "unset", // Unset border radius
      },
      boxShadow: {
        unset: "unset", // Unset box shadow
      },
      fontSize: {
        unset: "unset", // Unset font size
      },
      fontWeight: {
        unset: "unset", // Unset font weight
      },
      lineHeight: {
        unset: "unset", // Unset line height
      },
      letterSpacing: {
        unset: "unset", // Unset letter spacing
      },
      textAlign: {
        unset: "unset", // Unset text alignment
      },
      textColor: {
        unset: "unset", // Unset text color
      },
      backgroundColor: {
        unset: "unset", // Unset background color
      },
    },
  },
  darkMode: "class",
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".m-unset": { margin: "unset" },
          ".p-unset": { padding: "unset" },
          ".w-unset": { width: "unset" },
          ".h-unset": { height: "unset" },
          ".min-w-unset": { minWidth: "unset" },
          ".min-h-unset": { minHeight: "unset" },
          ".max-w-unset": { maxWidth: "unset" },
          ".max-h-unset": { maxHeight: "unset" },
          ".top-unset": { top: "unset" },
          ".right-unset": { right: "unset" },
          ".bottom-unset": { bottom: "unset" },
          ".left-unset": { left: "unset" },
          ".z-unset": { zIndex: "unset" },
          ".flex-unset": { flex: "unset" },
          ".order-unset": { order: "unset" },
          ".gap-unset": { gap: "unset" },
          ".opacity-unset": { opacity: "unset" },
          ".border-unset": { borderWidth: "unset" },
          ".rounded-unset": { borderRadius: "unset" },
          ".shadow-unset": { boxShadow: "unset" },
          ".text-unset": { fontSize: "unset" },
          ".font-unset": { fontWeight: "unset" },
          ".leading-unset": { lineHeight: "unset" },
          ".tracking-unset": { letterSpacing: "unset" },
          ".text-align-unset": { textAlign: "unset" },
          ".text-color-unset": { color: "unset" },
          ".bg-unset": { backgroundColor: "unset" },
        },
        ["responsive", "hover"]
      );
    },
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#5370E1",
              foreground: "#FFFFFF",
            },
            black: {
              DEFAULT: "#000000",
              foreground: "#000000",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#5370E1",
              foreground: "#000000",
            },
            black: {
              DEFAULT: "#000000",
              foreground: "#000000",
            },
          },
        },
      },
    }),
  ],
};
