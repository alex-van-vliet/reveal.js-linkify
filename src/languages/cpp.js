import { encode } from '../helpers/base64';

export default {
  disassemble: false,

  compiler: 'clang_trunk',
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

  executors(config) {
    return this.compilers().map(compiler => ({
      compiler,
    }));
  },

  state(config, source) {
    return {
      sessions: [
        {
          id: 1,
          language: 'c++',
          source: source,
          compilers: this.disassemble ? this.compilers() : [],
          executors: this.disassemble ? [] : this.executors(),
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
