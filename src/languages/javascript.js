import { encode } from '../helpers/base64';

export default {
  compiler: 'js_trunk',
  options: '',
  execute: true,
  libs: [],

  compilers(config) {
    return [
      {
        id: this.compiler,
        libs: this.libs,
        options: this.options,
        filters: {
          execute: this.execute,
        },
      },
    ];
  },

  state(config, source) {
    return {
      sessions: [
        {
          id: 1,
          language: 'javascript',
          source: source,
          compilers: this.compilers(),
          executors: [],
        },
      ],
    };
  },

  link(config, source) {
    const state = encodeURIComponent(encode(JSON.stringify(this.state(config, source))));

    return `https://godbolt.org/clientstate/${state}`;
  },

  element(config, source) {
    const link = this.link(config, source);

    const linkElement = document.createElement('a');

    linkElement.href = link;
    linkElement.target = '_blank';
    linkElement.textContent = config.text;
    linkElement.classList.add(config.class);

    return linkElement;
  },
};
