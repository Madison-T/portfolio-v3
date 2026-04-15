/** @type {import('tailwindcss').Config} */
export default {
  
   // Tell Tailwind which files to scan for class names.
  // ** means any subfolder, {ts,tsx} covers TypeScript and React files.
  // Without this, Tailwind won't know which classes you're using and production builds will be empty.
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    // extend merges your additions WITH Tailwind's defaults.
    // If you put things directly in theme: {} instead, you'd wipe out all the built-in colours, spacing, etc.
    extend: {
      
      // Your brand colours - these become Tailwind classes like bg-brand-dark, text-brand-accent, etc.
      colors: {
        'brand-bg': '#F4F4F4',      // off-white page background
        'brand-dark': '#1A1A1A',    // near-black for headings and text
        'brand-accent': '#3B82F6',  // electric blue for highlights
        'brand-muted': '#6B7280',   // grey for secondary text
      },

      // Override the default font stacks.
      // font-sans will now use Inter, font-serif iwll use Playfair Display
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif']

      },
    },
  },
  plugins: [],
}

