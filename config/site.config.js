/**
 * This file contains the configuration used for customising the website, such as the folder to share,
 * the title, used Google fonts, site icons, contact info, etc.
 */
module.exports = {
  // This is what we use to identify who you are when you are initialising the website for the first time.
  // Make sure this is exactly the same as the email address you use to sign into your Microsoft account.
  // You can also put this in your worker's environment variable if you worry about
  // your email being exposed in public.
  userPrincipalName: process.env.USER_PRINCIPLE_NAME || 'me@lyc8503.site',

  // [OPTIONAL] This is the website icon to the left of the title inside the navigation bar. It should be placed under the
  // /public directory of your GitHub project (not your OneDrive folder!), and referenced here by its relative path to /public.
  icon: '/icons/128.png',

  // The name of your website. Present alongside your icon.
  title: "FLAV1N's Stash",

  // The folder that you are to share publicly with onedrive-cf-index-ng. Use '/' if you want to share your root folder.
  baseDirectory: '/Anime',

  // [OPTIONAL] This represents the maximum number of items that one directory lists, pagination supported.
  // Do note that this is limited up to 200 items by the upstream OneDrive API.
  maxItems: 100,

  // [OPTIONAL] We use Google Fonts natively for font customisations.
  // You can check and generate the required links and names at https://fonts.google.com.
  // googleFontSans - the sans serif font used in onedrive-cf-index-ng.
  googleFontSans: 'Barlow',
  // googleFontMono - the monospace font used in onedrive-cf-index-ng.
  googleFontMono: 'JetBrains Mono',
  // googleFontLinks -  an array of links for referencing the google font assets.
  googleFontLinks: ['https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Inter:wght@400;500;700&display=swap','https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'],

  // [OPTIONAL] The footer component of your website. You can write HTML here, but you need to escape double
  // quotes - changing " to \". You can write anything here, and if you like badges, generate some with https://shields.io
  footer:
    'Powered by <a href="https://github.com/FLAV1N/ot-index" target="_blank" rel="noopener noreferrer">Otakuturu-Index</a>. Originally Made with ❤ by lyc8503 & spencerwooo. Then adapted to my own needs.',

  // [OPTIONAL] This is where you specify the folders that are password protected. It is an array of paths pointing to all
  // the directories in which you have .password set. Check the documentation for details.
  protectedRoutes: ['/Apps', '/Attachments', 'subtitle'],

  // [OPTIONAL] Use "" here if you want to remove this email address from the nav bar.
  email: "",

  // [OPTIONAL] This is an array of names and links for setting your social information and links.
  // In the latest update, all brand icons inside font awesome is supported and the icon to render is based on the name
  // you provide. See the documentation for details.
  links: [
    {
      name: 'Home',
      link: 'https://www.otakuturu.app/',
    },
    {
      name: 'Discord',
      link: 'https://discord.com/invite/aRQZPDGP72',
    },
    {
      name: 'Nyaa',
      link: 'https://nyaa.si/?f=0&c=0_0&q=flav1n',
    },
    {
      name: 'Perpusindo',
      link: 'https://www.perpusindo.info/user/FLAV1N',
    },
  ],

  // This is a day.js-style datetime format string to format datetimes in the app. Ref to
  // https://day.js.org/docs/en/display/format for detailed specification. The default value is ISO 8601 full datetime
  // without timezone and replacing T with space.
  datetimeFormat: 'MM/DD/YYYY HH:mm:ssZ[+07:00]',
}
