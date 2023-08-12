module.exports = (ctx) => ({
   map: ctx.options.map,
   plugins: {
      'cssnano': {},
      'autoprefixer': {},
      'postcss-nesting': {},
      'postcss-scrollbar': {},
   },
});
