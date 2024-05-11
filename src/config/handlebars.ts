import { helpers } from 'handlebars';
import { join } from 'path';
import '../helpers/index';

export const HandlebarsConfigs = {
  public: join(__dirname, '..', '..', 'public'),
  views: join(__dirname, '..', '..', 'views'),
  partials: join(__dirname, '..', '..', 'views', 'partials'),
  layouts: join(__dirname, '..', '..', 'views', 'layouts'),
  helpers,
};
