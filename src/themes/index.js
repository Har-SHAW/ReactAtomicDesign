import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

import { orange, blue } from "@material-ui/core/colors";

const defaultTheme = createMuiTheme();

const baseTheme = createMuiTheme({
    palette: {
        type: "light",
        primary: {
            main: blue[500],
            dark: "#4bacb8",
        },
        secondary: {
            main: orange[500],
        },
        containerPrimary: {
            main: "pink",
            light: "pink",
            dark: "grey",
        },
        containerSecondary: {
            main: "lightblue",
            light: "lightblue",
            dark: "grey",
        },
    },
    typography: {
        fontFamily: "Itim",

        //For item and table sub headings
        body1: {
            fontSize: 18,

            "@media(max-width:1460px)": {
                fontSize: 14,
            },
            "@media(max-width:960px)": {
                fontSize: 14,
            },
            "@media(max-width:600px)": {
                fontSize: 14,
            },
            "@media(max-width:430px)": {
                fontSize: 10,
            },
        },

        //For item and table content
        body2: {
            fontSize: 18,
            fontWeight: "bold",
            color: orange[700],
            lineHeight: 1.5,
            "@media(max-width:1460px)": {
                fontSize: 14,
            },
            "@media(max-width:960px)": {
                fontSize: 14,
            },
            "@media(max-width:600px)": {
                fontSize: 14,
            },
            "@media(max-width:430px)": {
                fontSize: 10,
            },
        },

        //For navigation title
        h1: {
            textAlign: "center",
            fontSize: "46px",
            fontWeight: "bolder",
        },

        //for username in homepage
        h2: {
            fontSize: "20px",
            fontWeight: "bolder",
            "@media (max-width:600px)": {
                fontSize: 10,
            },
        },

        //For email under username
        subtitle2: {
            color: "grey",
            fontSize: 15,
            fontWeight: "lighter",
        },

        caption: {
            color: "grey",
            fontSize: "20px",
        },

        //For username in profile page
        subtitle1: {
            fontSize: 25,
            "@media (max-width:600px)": {
                fontSize: 10,
            },
        },
    },
});

const responsiveFontTheme = responsiveFontSizes(baseTheme);

export default responsiveFontTheme;
