import merge from 'lodash/merge';

import languages from './languages';

const defaultConfig = {
  languages,
  text: 'Run Online!',
  class: 'linkify-link',
};

const getContent = (block) => {
  if ((block.children.length > 0) && Array.from(block.children[0].classList).includes('hljs-ln')) {
    return Array.from(block.querySelectorAll('.hljs-ln-code')).map((el) => el.textContent).join('\n');
  } else {
    return block.textContent;
  }
};

const addLink = (config, block) => {
  const classPrefix = 'language-';

  const language = Array.from(block.classList)
    .filter(className => className.startsWith(classPrefix))
    .map(className => className.substring(classPrefix.length))
    .find(className => config.languages.hasOwnProperty(className));

  if (language === undefined) {
    return;
  }

  const code = getContent(block);

  block.after(config.languages[language].element(config, code));
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
