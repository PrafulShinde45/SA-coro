module.exports = {
  theme: {
    extend: {
      keyframes: {
        rotateAround: {
          '0%': { transform: 'rotate(0deg) translateX(110px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(110px) rotate(-360deg)' },
        }
      },
      animation: {
        rotateAround: 'rotateAround 2s linear infinite'
      }
    }
  }
}
