module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'frame': "url('https://cdn.shopify.com/s/files/1/0616/8592/4025/files/Perfume-banner-final-resized.jpg?v=1649948176')",  // Reference image in the public folder
        'frame2' : "url('https://png.pngtree.com/thumb_back/fh260/back_our/20190628/ourmid/pngtree-black-luxury-perfume-background-banner-image_264575.jpg')",
        'frame3' : "url('https://hips.hearstapps.com/hmg-prod/images/5-3-best-winter-perfumes-v1-655bce3479db8.jpg')"
      },
     animation: {
        dotMove: "dotMove 1.8s cubic-bezier(0.25, 0.25, 0.75, 0.75) infinite",
        lineStretch:
          "lineStretch 1.8s cubic-bezier(0.25, 0.25, 0.75, 0.75) infinite",
        letterStretch:
          "letterStretch 1.8s cubic-bezier(0.25, 0.23, 0.73, 0.75) infinite",
      },
      keyframes: {
        dotMove: {
          "0%, 100%": {
            transform: "rotate(180deg) translate(-110px, -10px) rotate(-180deg)",
          },
          "50%": {
            transform: "rotate(0deg) translate(-111px, 10px) rotate(0deg)",
          },
        },
        lineStretch: {
          "0%, 45%, 70%, 100%": { transform: "scaleY(0.125)" },
          "49%": { transform: "scaleY(0.75)" },
          "50%": { transform: "scaleY(0.875)" },
          "53%": { transform: "scaleY(0.5)" },
          "60%": { transform: "scaleY(0)" },
          "68%": { transform: "scaleY(0.18)" },
        },
        letterStretch: {
          "0%, 100%": {
            transform: "scale(1, 0.35)",
            transformOrigin: "100% 75%",
          },
          "8%, 28%": {
            transform: "scale(1, 2.125)",
            transformOrigin: "100% 67%",
          },
          "37%": {
            transform: "scale(1, 0.875)",
            transformOrigin: "100% 75%",
          },
          "46%": {
            transform: "scale(1, 1.03)",
            transformOrigin: "100% 75%",
          },
          "50%, 97%": {
            transform: "scale(1)",
            transformOrigin: "100% 75%",
          },
        },
      },

  
    },
  },
  plugins: [],
}

