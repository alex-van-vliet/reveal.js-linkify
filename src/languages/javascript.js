export default {
  editors: {
    html: false,
    css: false,
    javascript: true,
  },
  layout: 'left',

  state(config, source) {
    return {
      js: source,
      editors: (this.editors.html ? '1' : '0') + (this.editors.css ? '1' : '0') + (this.editors.javascript ? '1' : '0'),
      layout: this.layout,
    };
  },

  element(config, source) {
    const inputElement = document.createElement('input');
    inputElement.type = 'hidden';
    inputElement.name = 'data';
    inputElement.value = JSON.stringify(this.state(config, source));

    const linkElement = document.createElement('a');

    linkElement.href = '#';
    linkElement.onclick = e => {
      e.preventDefault();

      formElement.submit();
    };
    linkElement.textContent = config.text;
    linkElement.classList.add(config.class);

    const formElement = document.createElement('form');

    formElement.action = 'https://codepen.io/pen/define';
    formElement.method = 'POST';
    formElement.target = '_blank';

    formElement.appendChild(inputElement);

    return [linkElement, formElement];
  },
};
