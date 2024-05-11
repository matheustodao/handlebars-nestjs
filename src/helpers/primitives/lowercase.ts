import hbs from 'handlebars';

hbs.registerHelper('toLowercase', (string: string) => {
  if (typeof string !== 'string') return string;

  return string.toLowerCase();
});
