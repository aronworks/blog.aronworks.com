import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

function Logo() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return theme === 'dark' ? <LightLogo /> : <DarkLogo />
}

const DarkLogo = () => {
  return (
    <svg fill="none" viewBox="0 0 1200 250" height="40">
      <path
        fill="#F25C54"
        d="M350.88 141.44l-10.8-31.92c-.8-2.027-1.653-4.4-2.56-7.12a235.568 235.568 0 01-2.72-8.96c-.8 3.253-1.653 6.267-2.56 9.04-.907 2.773-1.76 5.173-2.56 7.2l-10.72 31.76h31.92zM393.84 186h-20.96c-2.347 0-4.24-.533-5.68-1.6a10.727 10.727 0 01-3.28-4.24l-6.88-20.32h-44.32l-6.88 20.32c-.587 1.493-1.653 2.853-3.2 4.08-1.493 1.173-3.36 1.76-5.6 1.76h-21.12l45.12-116.56h27.68L393.84 186zm29.51-70.16c2.56-4.48 5.493-8 8.8-10.56 3.36-2.56 7.2-3.84 11.52-3.84 3.733 0 6.773.88 9.12 2.64l-1.6 18.24c-.267 1.173-.72 1.973-1.36 2.4-.587.427-1.413.64-2.48.64-.427 0-.987-.027-1.68-.08-.693-.053-1.413-.107-2.16-.16a30.652 30.652 0 00-2.32-.24c-.747-.107-1.44-.16-2.08-.16-3.627 0-6.533.96-8.72 2.88-2.133 1.92-3.947 4.587-5.44 8V186h-24.8v-82.96h14.72c1.227 0 2.24.107 3.04.32.853.213 1.547.56 2.08 1.04.587.427 1.013 1.013 1.28 1.76.32.747.587 1.653.8 2.72l1.28 6.96zm87.254-10c-6.934 0-13.12 4.693-18.56 14.08-5.44 9.28-8.16 18.56-8.16 27.84 0 19.413 5.013 29.12 15.04 29.12 7.146 0 12.96-4.64 17.44-13.92 4.48-9.387 6.72-19.893 6.72-31.52 0-17.067-4.16-25.6-12.48-25.6zm-13.6-14.4c1.173 0 2.24.373 3.2 1.12 1.066.64 1.6 1.333 1.6 2.08-10.774 7.467-17.227 17.867-19.36 31.2 2.24-5.973 4.96-11.147 8.16-15.52 3.306-4.373 6.72-7.68 10.24-9.92 6.72-4.16 13.28-6.24 19.68-6.24s11.84 3.147 16.32 9.44c4.48 6.293 6.72 14.72 6.72 25.28 0 11.84-2.4 22.72-7.2 32.64-5.334 11.2-12.907 18.933-22.72 23.2-5.547 2.453-11.627 3.68-18.24 3.68-9.28 0-17.387-3.573-24.32-10.72-6.827-7.253-10.24-17.6-10.24-31.04 0-13.547 3.306-25.44 9.92-35.68 6.613-10.347 15.36-16.853 26.24-19.52zm85.87 20.56a60.263 60.263 0 014.96-4.16 27.952 27.952 0 015.44-3.2c1.973-.907 4.08-1.6 6.32-2.08 2.293-.533 4.773-.8 7.44-.8 4.533 0 8.533.8 12 2.4 3.52 1.547 6.48 3.733 8.88 6.56 2.4 2.773 4.213 6.107 5.44 10 1.226 3.84 1.84 8.027 1.84 12.56V186h-24.8v-52.72c0-4.053-.934-7.2-2.8-9.44-1.867-2.293-4.614-3.44-8.24-3.44-2.72 0-5.28.587-7.68 1.76-2.347 1.12-4.64 2.667-6.88 4.64V186h-24.8v-82.96h15.36c3.093 0 5.12 1.387 6.08 4.16l1.44 4.8z"
      ></path>
      <path
        fill="#455A64"
        d="M812.924 69.44l-36 116.56h-24.48l-21.92-72.24a42.516 42.516 0 01-1.2-3.68 240.737 240.737 0 01-1.12-4.32 258.917 258.917 0 01-1.12 4.32 43.215 43.215 0 01-1.2 3.68L703.644 186h-24.48l-36-116.56h22.72c2.346 0 4.293.533 5.84 1.6 1.6 1.067 2.64 2.48 3.12 4.24l16 60.8c.48 1.92.96 4.027 1.44 6.32.48 2.24.96 4.587 1.44 7.04.96-5.013 2.133-9.467 3.52-13.36l18.88-60.8c.48-1.493 1.493-2.827 3.04-4 1.6-1.227 3.52-1.84 5.76-1.84h8c2.346 0 4.24.56 5.68 1.68 1.44 1.067 2.533 2.453 3.28 4.16l18.72 60.8c1.386 3.733 2.56 7.973 3.52 12.72.426-2.4.853-4.64 1.28-6.72.48-2.133.96-4.133 1.44-6l16-60.8c.426-1.547 1.44-2.907 3.04-4.08s3.52-1.76 5.76-1.76h21.28zm58.149 36.4c-6.934 0-13.12 4.693-18.56 14.08-5.44 9.28-8.16 18.56-8.16 27.84 0 19.413 5.013 29.12 15.04 29.12 7.146 0 12.96-4.64 17.44-13.92 4.48-9.387 6.72-19.893 6.72-31.52 0-17.067-4.16-25.6-12.48-25.6zm-13.6-14.4c1.173 0 2.24.373 3.2 1.12 1.066.64 1.6 1.333 1.6 2.08-10.774 7.467-17.227 17.867-19.36 31.2 2.24-5.973 4.96-11.147 8.16-15.52 3.306-4.373 6.72-7.68 10.24-9.92 6.72-4.16 13.28-6.24 19.68-6.24s11.84 3.147 16.32 9.44c4.48 6.293 6.72 14.72 6.72 25.28 0 11.84-2.4 22.72-7.2 32.64-5.334 11.2-12.907 18.933-22.72 23.2-5.547 2.453-11.627 3.68-18.24 3.68-9.28 0-17.387-3.573-24.32-10.72-6.827-7.253-10.24-17.6-10.24-31.04 0-13.547 3.306-25.44 9.92-35.68 6.613-10.347 15.36-16.853 26.24-19.52zm86.19 24.4c2.56-4.48 5.493-8 8.799-10.56 3.361-2.56 7.201-3.84 11.521-3.84 3.733 0 6.773.88 9.12 2.64l-1.6 18.24c-.267 1.173-.72 1.973-1.36 2.4-.587.427-1.414.64-2.48.64-.427 0-.987-.027-1.68-.08a406.95 406.95 0 00-2.16-.16 30.652 30.652 0 00-2.32-.24c-.747-.107-1.44-.16-2.08-.16-3.627 0-6.534.96-8.72 2.88-2.134 1.92-3.947 4.587-5.44 8V186h-24.8v-82.96h14.72c1.226 0 2.24.107 3.04.32.853.213 1.546.56 2.08 1.04.586.427 1.013 1.013 1.28 1.76.32.747.586 1.653.8 2.72l1.28 6.96zm62.697-49.6v67.12h3.68c1.54 0 2.72-.213 3.52-.64.8-.48 1.6-1.253 2.4-2.32l15.68-23.36c.96-1.333 2.05-2.32 3.28-2.96 1.22-.693 2.8-1.04 4.72-1.04h22.72l-21.44 29.52c-2.03 2.667-4.43 4.853-7.2 6.56a19.48 19.48 0 013.36 3.2 30.224 30.224 0 012.88 4l23.36 39.68h-22.4c-1.87 0-3.47-.293-4.8-.88-1.34-.64-2.46-1.733-3.36-3.28l-15.68-29.36c-.75-1.333-1.52-2.187-2.32-2.56-.8-.427-2-.64-3.6-.64h-4.8V186h-24.804V66.24h24.804zm117.29 54.96c-.64 1.013-1.33 1.733-2.08 2.16-.69.427-1.6.64-2.72.64-1.17 0-2.35-.24-3.52-.72-1.17-.533-2.45-1.093-3.84-1.68-1.33-.587-2.85-1.12-4.56-1.6-1.71-.533-3.65-.8-5.84-.8-3.15 0-5.57.613-7.28 1.84-1.65 1.173-2.48 2.827-2.48 4.96 0 1.547.53 2.827 1.6 3.84 1.12 1.013 2.59 1.92 4.4 2.72 1.81.747 3.87 1.467 6.16 2.16 2.29.693 4.64 1.467 7.04 2.32a58.16 58.16 0 017.04 3.04 24.809 24.809 0 016.16 4.24c1.81 1.653 3.25 3.68 4.32 6.08 1.12 2.4 1.68 5.28 1.68 8.64 0 4.107-.75 7.893-2.24 11.36-1.49 3.467-3.73 6.453-6.72 8.96-2.93 2.507-6.59 4.453-10.96 5.84-4.32 1.387-9.31 2.08-14.96 2.08-2.83 0-5.65-.267-8.48-.8a60.19 60.19 0 01-8.24-2.16c-2.61-.907-5.04-1.973-7.28-3.2-2.24-1.28-4.16-2.64-5.76-4.08l5.76-9.12c.64-1.067 1.44-1.893 2.4-2.48 1.01-.64 2.29-.96 3.84-.96 1.44 0 2.72.32 3.84.96 1.17.64 2.43 1.333 3.76 2.08 1.33.747 2.88 1.44 4.64 2.08 1.81.64 4.08.96 6.8.96 1.92 0 3.55-.187 4.88-.56 1.33-.427 2.4-.987 3.2-1.68.8-.693 1.39-1.467 1.76-2.32.37-.853.56-1.733.56-2.64 0-1.653-.56-3.013-1.68-4.08-1.12-1.067-2.59-1.973-4.4-2.72-1.81-.8-3.89-1.52-6.24-2.16a155.81 155.81 0 01-7.04-2.32 63.695 63.695 0 01-7.12-3.04 26.02 26.02 0 01-6.16-4.56c-1.81-1.867-3.28-4.133-4.4-6.8-1.12-2.667-1.68-5.893-1.68-9.68 0-3.52.67-6.853 2-10 1.39-3.2 3.44-6 6.16-8.4 2.72-2.4 6.13-4.293 10.24-5.68 4.11-1.44 8.91-2.16 14.4-2.16 2.99 0 5.87.267 8.64.8 2.83.533 5.47 1.28 7.92 2.24 2.45.96 4.69 2.107 6.72 3.44 2.03 1.28 3.81 2.693 5.36 4.24l-5.6 8.72z"
      ></path>
      <path
        fill="#FCAD38"
        d="M1138.82 173.44c0-1.92.35-3.707 1.04-5.36.75-1.653 1.73-3.093 2.96-4.32a13.996 13.996 0 014.48-2.88c1.71-.747 3.57-1.12 5.6-1.12 1.97 0 3.81.373 5.52 1.12 1.71.693 3.2 1.653 4.48 2.88a12.702 12.702 0 012.96 4.32c.75 1.653 1.12 3.44 1.12 5.36 0 1.92-.37 3.733-1.12 5.44a12.702 12.702 0 01-2.96 4.32 13.996 13.996 0 01-4.48 2.88c-1.71.693-3.55 1.04-5.52 1.04-2.03 0-3.89-.347-5.6-1.04a13.996 13.996 0 01-4.48-2.88c-1.23-1.227-2.21-2.667-2.96-4.32a14.38 14.38 0 01-1.04-5.44z"
      ></path>
      <path
        fill="#455A64"
        d="M45.971 105.997c10.597 26.32 19.484 47.855 19.997 47.855 1.367 0 10.255-24.44 10.255-27.858 0-1.539-5.811-17.434-12.99-35.38L50.244 58.142H27l18.971 47.856z"
      ></path>
      <path
        fill="#F25C54"
        d="M119.805 60.192c-.341 1.197-10.767 28.372-22.902 60.161l-22.047 57.94 3.589 8.374c4.102 10.084 8.716 11.11 12.134 2.564 1.368-2.905 4.957-11.622 8.033-18.971 8.717-21.022 22.219-33.328 36.917-33.499 12.819 0 5.128-8.033-9.571-9.742-4.785-.513-8.716-1.538-8.716-2.051 0-2.051 12.818-32.644 13.844-32.644.512 0 5.469 11.28 10.938 25.124 5.469 14.015 11.109 28.03 12.477 31.277l2.563 5.982 5.64-14.87 5.64-14.869-13.331-32.986-13.16-32.986-10.597-.513c-7.52-.341-10.938.171-11.451 1.71z"
      ></path>
      <path
        fill="#455A64"
        d="M202.185 82.41c-5.128 13.503-15.382 40.165-22.732 59.307l-13.16 34.866 3.077 9.23c2.563 7.178 3.931 9.058 6.836 9.058 3.247 0 6.837-8.033 31.277-68.365L235 58.141h-23.244l-9.571 24.27z"
      ></path>
    </svg>
  )
}

function LightLogo() {
  return (
    <svg fill="none" viewBox="0 0 1200 250" height="40">
      <path
        fill="#F25C54"
        d="M350.88 141.44l-10.8-31.92c-.8-2.027-1.653-4.4-2.56-7.12a235.568 235.568 0 01-2.72-8.96c-.8 3.253-1.653 6.267-2.56 9.04-.907 2.773-1.76 5.173-2.56 7.2l-10.72 31.76h31.92zM393.84 186h-20.96c-2.347 0-4.24-.533-5.68-1.6a10.727 10.727 0 01-3.28-4.24l-6.88-20.32h-44.32l-6.88 20.32c-.587 1.493-1.653 2.853-3.2 4.08-1.493 1.173-3.36 1.76-5.6 1.76h-21.12l45.12-116.56h27.68L393.84 186zm29.51-70.16c2.56-4.48 5.493-8 8.8-10.56 3.36-2.56 7.2-3.84 11.52-3.84 3.733 0 6.773.88 9.12 2.64l-1.6 18.24c-.267 1.173-.72 1.973-1.36 2.4-.587.427-1.413.64-2.48.64-.427 0-.987-.027-1.68-.08-.693-.053-1.413-.107-2.16-.16a30.652 30.652 0 00-2.32-.24c-.747-.107-1.44-.16-2.08-.16-3.627 0-6.533.96-8.72 2.88-2.133 1.92-3.947 4.587-5.44 8V186h-24.8v-82.96h14.72c1.227 0 2.24.107 3.04.32.853.213 1.547.56 2.08 1.04.587.427 1.013 1.013 1.28 1.76.32.747.587 1.653.8 2.72l1.28 6.96zm87.254-10c-6.934 0-13.12 4.693-18.56 14.08-5.44 9.28-8.16 18.56-8.16 27.84 0 19.413 5.013 29.12 15.04 29.12 7.146 0 12.96-4.64 17.44-13.92 4.48-9.387 6.72-19.893 6.72-31.52 0-17.067-4.16-25.6-12.48-25.6zm-13.6-14.4c1.173 0 2.24.373 3.2 1.12 1.066.64 1.6 1.333 1.6 2.08-10.774 7.467-17.227 17.867-19.36 31.2 2.24-5.973 4.96-11.147 8.16-15.52 3.306-4.373 6.72-7.68 10.24-9.92 6.72-4.16 13.28-6.24 19.68-6.24s11.84 3.147 16.32 9.44c4.48 6.293 6.72 14.72 6.72 25.28 0 11.84-2.4 22.72-7.2 32.64-5.334 11.2-12.907 18.933-22.72 23.2-5.547 2.453-11.627 3.68-18.24 3.68-9.28 0-17.387-3.573-24.32-10.72-6.827-7.253-10.24-17.6-10.24-31.04 0-13.547 3.306-25.44 9.92-35.68 6.613-10.347 15.36-16.853 26.24-19.52zm85.87 20.56a60.263 60.263 0 014.96-4.16 27.952 27.952 0 015.44-3.2c1.973-.907 4.08-1.6 6.32-2.08 2.293-.533 4.773-.8 7.44-.8 4.533 0 8.533.8 12 2.4 3.52 1.547 6.48 3.733 8.88 6.56 2.4 2.773 4.213 6.107 5.44 10 1.226 3.84 1.84 8.027 1.84 12.56V186h-24.8v-52.72c0-4.053-.934-7.2-2.8-9.44-1.867-2.293-4.614-3.44-8.24-3.44-2.72 0-5.28.587-7.68 1.76-2.347 1.12-4.64 2.667-6.88 4.64V186h-24.8v-82.96h15.36c3.093 0 5.12 1.387 6.08 4.16l1.44 4.8z"
      ></path>
      <path
        fill="#fff"
        d="M812.924 69.44l-36 116.56h-24.48l-21.92-72.24a42.516 42.516 0 01-1.2-3.68 240.737 240.737 0 01-1.12-4.32 258.917 258.917 0 01-1.12 4.32 43.215 43.215 0 01-1.2 3.68L703.644 186h-24.48l-36-116.56h22.72c2.346 0 4.293.533 5.84 1.6 1.6 1.067 2.64 2.48 3.12 4.24l16 60.8c.48 1.92.96 4.027 1.44 6.32.48 2.24.96 4.587 1.44 7.04.96-5.013 2.133-9.467 3.52-13.36l18.88-60.8c.48-1.493 1.493-2.827 3.04-4 1.6-1.227 3.52-1.84 5.76-1.84h8c2.346 0 4.24.56 5.68 1.68 1.44 1.067 2.533 2.453 3.28 4.16l18.72 60.8c1.386 3.733 2.56 7.973 3.52 12.72.426-2.4.853-4.64 1.28-6.72.48-2.133.96-4.133 1.44-6l16-60.8c.426-1.547 1.44-2.907 3.04-4.08s3.52-1.76 5.76-1.76h21.28zm58.149 36.4c-6.934 0-13.12 4.693-18.56 14.08-5.44 9.28-8.16 18.56-8.16 27.84 0 19.413 5.013 29.12 15.04 29.12 7.146 0 12.96-4.64 17.44-13.92 4.48-9.387 6.72-19.893 6.72-31.52 0-17.067-4.16-25.6-12.48-25.6zm-13.6-14.4c1.173 0 2.24.373 3.2 1.12 1.066.64 1.6 1.333 1.6 2.08-10.774 7.467-17.227 17.867-19.36 31.2 2.24-5.973 4.96-11.147 8.16-15.52 3.306-4.373 6.72-7.68 10.24-9.92 6.72-4.16 13.28-6.24 19.68-6.24s11.84 3.147 16.32 9.44c4.48 6.293 6.72 14.72 6.72 25.28 0 11.84-2.4 22.72-7.2 32.64-5.334 11.2-12.907 18.933-22.72 23.2-5.547 2.453-11.627 3.68-18.24 3.68-9.28 0-17.387-3.573-24.32-10.72-6.827-7.253-10.24-17.6-10.24-31.04 0-13.547 3.306-25.44 9.92-35.68 6.613-10.347 15.36-16.853 26.24-19.52zm86.19 24.4c2.56-4.48 5.493-8 8.799-10.56 3.361-2.56 7.201-3.84 11.521-3.84 3.733 0 6.773.88 9.12 2.64l-1.6 18.24c-.267 1.173-.72 1.973-1.36 2.4-.587.427-1.414.64-2.48.64-.427 0-.987-.027-1.68-.08a406.95 406.95 0 00-2.16-.16 30.652 30.652 0 00-2.32-.24c-.747-.107-1.44-.16-2.08-.16-3.627 0-6.534.96-8.72 2.88-2.134 1.92-3.947 4.587-5.44 8V186h-24.8v-82.96h14.72c1.226 0 2.24.107 3.04.32.853.213 1.546.56 2.08 1.04.586.427 1.013 1.013 1.28 1.76.32.747.586 1.653.8 2.72l1.28 6.96zm62.697-49.6v67.12h3.68c1.54 0 2.72-.213 3.52-.64.8-.48 1.6-1.253 2.4-2.32l15.68-23.36c.96-1.333 2.05-2.32 3.28-2.96 1.22-.693 2.8-1.04 4.72-1.04h22.72l-21.44 29.52c-2.03 2.667-4.43 4.853-7.2 6.56a19.48 19.48 0 013.36 3.2 30.224 30.224 0 012.88 4l23.36 39.68h-22.4c-1.87 0-3.47-.293-4.8-.88-1.34-.64-2.46-1.733-3.36-3.28l-15.68-29.36c-.75-1.333-1.52-2.187-2.32-2.56-.8-.427-2-.64-3.6-.64h-4.8V186h-24.804V66.24h24.804zm117.29 54.96c-.64 1.013-1.33 1.733-2.08 2.16-.69.427-1.6.64-2.72.64-1.17 0-2.35-.24-3.52-.72-1.17-.533-2.45-1.093-3.84-1.68-1.33-.587-2.85-1.12-4.56-1.6-1.71-.533-3.65-.8-5.84-.8-3.15 0-5.57.613-7.28 1.84-1.65 1.173-2.48 2.827-2.48 4.96 0 1.547.53 2.827 1.6 3.84 1.12 1.013 2.59 1.92 4.4 2.72 1.81.747 3.87 1.467 6.16 2.16 2.29.693 4.64 1.467 7.04 2.32a58.16 58.16 0 017.04 3.04 24.809 24.809 0 016.16 4.24c1.81 1.653 3.25 3.68 4.32 6.08 1.12 2.4 1.68 5.28 1.68 8.64 0 4.107-.75 7.893-2.24 11.36-1.49 3.467-3.73 6.453-6.72 8.96-2.93 2.507-6.59 4.453-10.96 5.84-4.32 1.387-9.31 2.08-14.96 2.08-2.83 0-5.65-.267-8.48-.8a60.19 60.19 0 01-8.24-2.16c-2.61-.907-5.04-1.973-7.28-3.2-2.24-1.28-4.16-2.64-5.76-4.08l5.76-9.12c.64-1.067 1.44-1.893 2.4-2.48 1.01-.64 2.29-.96 3.84-.96 1.44 0 2.72.32 3.84.96 1.17.64 2.43 1.333 3.76 2.08 1.33.747 2.88 1.44 4.64 2.08 1.81.64 4.08.96 6.8.96 1.92 0 3.55-.187 4.88-.56 1.33-.427 2.4-.987 3.2-1.68.8-.693 1.39-1.467 1.76-2.32.37-.853.56-1.733.56-2.64 0-1.653-.56-3.013-1.68-4.08-1.12-1.067-2.59-1.973-4.4-2.72-1.81-.8-3.89-1.52-6.24-2.16a155.81 155.81 0 01-7.04-2.32 63.695 63.695 0 01-7.12-3.04 26.02 26.02 0 01-6.16-4.56c-1.81-1.867-3.28-4.133-4.4-6.8-1.12-2.667-1.68-5.893-1.68-9.68 0-3.52.67-6.853 2-10 1.39-3.2 3.44-6 6.16-8.4 2.72-2.4 6.13-4.293 10.24-5.68 4.11-1.44 8.91-2.16 14.4-2.16 2.99 0 5.87.267 8.64.8 2.83.533 5.47 1.28 7.92 2.24 2.45.96 4.69 2.107 6.72 3.44 2.03 1.28 3.81 2.693 5.36 4.24l-5.6 8.72z"
      ></path>
      <path
        fill="#FCAD38"
        d="M1138.82 173.44c0-1.92.35-3.707 1.04-5.36.75-1.653 1.73-3.093 2.96-4.32a13.996 13.996 0 014.48-2.88c1.71-.747 3.57-1.12 5.6-1.12 1.97 0 3.81.373 5.52 1.12 1.71.693 3.2 1.653 4.48 2.88a12.702 12.702 0 012.96 4.32c.75 1.653 1.12 3.44 1.12 5.36 0 1.92-.37 3.733-1.12 5.44a12.702 12.702 0 01-2.96 4.32 13.996 13.996 0 01-4.48 2.88c-1.71.693-3.55 1.04-5.52 1.04-2.03 0-3.89-.347-5.6-1.04a13.996 13.996 0 01-4.48-2.88c-1.23-1.227-2.21-2.667-2.96-4.32a14.38 14.38 0 01-1.04-5.44z"
      ></path>
      <path
        fill="#fff"
        d="M45.971 105.997c10.597 26.32 19.484 47.855 19.997 47.855 1.367 0 10.255-24.44 10.255-27.858 0-1.539-5.811-17.434-12.99-35.38L50.244 58.142H27l18.971 47.856z"
      ></path>
      <path
        fill="#F25C54"
        d="M119.805 60.192c-.341 1.197-10.767 28.372-22.902 60.161l-22.047 57.94 3.589 8.374c4.102 10.084 8.716 11.11 12.134 2.564 1.368-2.905 4.957-11.622 8.033-18.971 8.717-21.022 22.219-33.328 36.917-33.499 12.819 0 5.128-8.033-9.571-9.742-4.785-.513-8.716-1.538-8.716-2.051 0-2.051 12.818-32.644 13.844-32.644.512 0 5.469 11.28 10.938 25.124 5.469 14.015 11.109 28.03 12.477 31.277l2.563 5.982 5.64-14.87 5.64-14.869-13.331-32.986-13.16-32.986-10.597-.513c-7.52-.341-10.938.171-11.451 1.71z"
      ></path>
      <path
        fill="#fff"
        d="M202.185 82.41c-5.128 13.503-15.382 40.165-22.732 59.307l-13.16 34.866 3.077 9.23c2.563 7.178 3.931 9.058 6.836 9.058 3.247 0 6.837-8.033 31.277-68.365L235 58.141h-23.244l-9.571 24.27z"
      ></path>
    </svg>
  )
}

export default Logo
