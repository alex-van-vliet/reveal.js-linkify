import merge from 'lodash/merge';

import languages from './languages';

const defaultConfig = {
  languages,
  text: 'Run Online!',
  class: 'linkify-link',
};

const addLink = (config, block) => {
  const language = Array.from(block.classList).find(className => config.languages.hasOwnProperty(className));

  if (language === undefined) {
    return;
  }

  const code = block.textContent;

  const link = config.languages[language].link(config, code);

  const linkElement = document.createElement('a');

  linkElement.href = link;
  linkElement.target = '_blank';
  linkElement.textContent = config.text;
  linkElement.classList.add(config.class);

  block.after(linkElement);
};

const Plugin = () => {
  return {
    id: 'linkify',
    init(deck) {
      const config = merge({}, defaultConfig, deck.getConfig().linkify || {});

      const blocks = Array.from(deck.getRevealElement().getElementsByTagName('code'));

      blocks.forEach(block => addLink(config, block));
    },
  };
};

export default Plugin;
