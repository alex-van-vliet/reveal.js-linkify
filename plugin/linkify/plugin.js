import merge from 'lodash/merge';

import languages from './languages';

const defaultConfig = {
  languages,
};

const Plugin = () => {
  return {
    id: 'linkify',
    init(deck) {
      const config = merge({}, defaultConfig, deck.getConfig().linkify || {});

      console.log(config);
    },
  };
};

export default Plugin;
