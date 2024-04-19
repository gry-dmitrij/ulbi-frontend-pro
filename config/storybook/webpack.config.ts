import webpack from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  config.resolve.modules.push(path.resolve(__dirname, '../../src'));
  config.resolve.extensions.push('.ts', '.tsx');

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  config.module.rules.push(buildCssLoader(true));

  return config;
};
