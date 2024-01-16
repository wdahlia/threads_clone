/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      pre: ['var(--pre)'],
    },
    boxShadow: {
      'box' : '0px 10px 20px 5px rgba(0, 0, 0, 0.05)',
    },
    colors: {
      /* dark mode colors */
      'dark-bg': '#101010',
      'dark-list-bg': '#181818',
      'dark-navicon': '#4D4D4D', 
      'dark-navicon_slc': '#F3F5F7',
      'dark-hr': 'rgba(243, 245, 247, 0.15)',
      'dark-txt': '#F3F5F7',
      'dark-sub-txt': '#777777',
      'dark-post-txt': '#101010',
      'dark-input-bg': '#0A0A0A',
      'dark-btn-brd': 'rgba(243, 245, 247, 0.15)',
      'dark-input-brd': 'rgba(243, 245, 247, 0.15)',
      'dark-icon-hover': '#1C1C1C',
      /* light mode colors */
      'light-bg': '#FFFFFF',
      'light-navicon': '#B8B8B8',
      'light-navicon_slc': '#000000',
      'light-hr': '#D9D9D9',
      'light-txt': '#000000',
      'light-sub-txt': '#777777',
      'light-post-txt': '#FFFFFF',
      'light-input-bg': '#FAFAFA',
      'light-input-brd': 'rgba(0, 0, 0, 0.15)',
      'light-btn-brd': 'rgba(0, 0, 0, 0.15)',
      'light-icon-hover': '#F5F5F5',
      /* Shared Styles */
      'link-txt': '0095F6',
    },
  }
};