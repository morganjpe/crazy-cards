module.exports = {
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        // electric: "#db00ff",
        // ribbon: "#0047ff",
        gradientDirty1: "#6a85b6",
        gradientDirty2: "#bac8e0",

        gradientRed1: "#ff0844",
        gradientRed2: "#ffb199",

        gradientGreen1: "#00cdac",
        gradientGreen2: "#8ddad5",
      },
      gradients: {},
    },
  },
  plugins: [],
};
