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

const getLanguage = (config, classes) => {
  const classPrefix = 'language-';

  const prefixedLanguage = classes
    .filter(className => className.startsWith(classPrefix))
    .map(className => className.substring(classPrefix.length))
    .find(className => config.languages.hasOwnProperty(className));

  if (prefixedLanguage) {
    return prefixedLanguage;
  }

  const language = classes
    .find(className => config.languages.hasOwnProperty(className));

  if (language) {
    return language;
  }
};

const addLink = (config, block) => {
  const language = getLanguage(config, Array.from(block.classList));

  if (!language)
    return;

  const code = getContent(block);

  const element = config.languages[language].element(config, code);

  if (Array.isArray(element)) {
    element.reverse().forEach(el => block.after(el));
  } else {
    block.after(element);
  }
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
