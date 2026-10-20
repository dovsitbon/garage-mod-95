const fs = require('fs');
const path = require('path');

// index.html contient déjà le CSS compilé (entre /*tw:start*/ et /*tw:end*/).
// On le retire avant analyse pour ne générer que les classes réellement utilisées.
const html = fs
  .readFileSync(path.join(__dirname, 'index.html'), 'utf8')
  .replace(/\/\*tw:start\*\/[\s\S]*?\/\*tw:end\*\//, '');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [{ raw: html, extension: 'html' }],
  theme: {
    extend: {
      colors: {
        carbon: {
          950: '#07080A',
          900: '#0B0C0E',
          850: '#0F1013',
          800: '#131417',
          700: '#1A1C20',
          600: '#23262B',
          500: '#2E3238',
        },
        steel: {
          50: '#F4F5F7',
          100: '#ECEEF1',
          200: '#D5D9DE',
          300: '#B4BAC2',
          400: '#8E959E',
          500: '#6B727B',
        },
        signal: {
          DEFAULT: '#E10600',
          hover: '#F2140C',
          text: '#FF4136',
          deep: '#7A0300',
        },
        ok: '#3DDC84',
        amber: '#FFB020',
        plate: '#003399',
      },
      fontFamily: {
        sans: ['Archivo', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      maxWidth: {
        shell: '80rem',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(.16,1,.3,1)',
      },
    },
  },
  plugins: [],
};
