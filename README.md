# YasminWebsiteRevamped
This project is to developed using GatsbyJS based on React. The framework used for this website will be used for future static website projects.

## Installing Gatsby
```bash
npm install -g gatsby-cli
```

## Create new Gatsby project
```bash
gatsby new yasminWebsiteRevamped
```

## Run app
```bash
npm run dev

OR

gatsby develop
```
Site can now be accessed at localhost:8000

## Enabling the SCSS Gatsby SCSS

https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sass

1. Copy font files into /static/fonts/

2. Create fonts.scss in the same folder
```javascript
//Poppins
@font-face {
    font-family: 'Poppins';
    src: url('Poppins-Regular.ttf');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Poppins';
    src: url('Poppins-Medium.ttf');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Poppins';
    src: url('Poppins-Bold.ttf');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Poppins';
    src: url('Poppins-SemiBold.ttf');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}
```

1. Install
```bash
npm install --save node-sass gatsby-plugin-sass
```

2. Add to gatsby-config.js
```javascript
plugins: [
    ...
    // enabling SCSS
    `gatsby-plugin-sass`,
```

3. Using Custom fonts

https://dev.to/iangloude/4-steps-to-self-hosted-fonts-in-gatsby-aj2

 - Install web font loader plugin
```bashh
npm install --save gatsby-plugin-web-font-loader
```

- update the gatsby-config.js
```javascript
{
    resolve: "gatsby-plugin-web-font-loader",
    options: {
    custom: {
        families: ["Poppins"],
        urls: ["/fonts/fonts.scss"],
    },
    },
},
```