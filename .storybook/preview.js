import "../styles/globals.css"; // import css file which contain tailwindCss properties to see the styling in our stories

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: { disable: true },
};

export const globalTypes = {
    theme: {
        name: "Theme",
        description: "Global theme",
        defaultValue: "default",
        toolbar: {
            icon: "lightning",
            items: ["default", "dark", "luxury", "cupcake"],
            showName: true,
        },
    },
};