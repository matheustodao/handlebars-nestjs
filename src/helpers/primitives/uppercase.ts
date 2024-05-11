import hbs from 'handlebars';

hbs.registerHelper('toUppercase', (string: string) => {
  if (typeof string !== 'string') return string;

  return string.toUpperCase();
});
