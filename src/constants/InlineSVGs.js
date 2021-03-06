const inline = svg => { return {__html: svg }; };

export const panelPlaceholders = [
  inline(require('assets/inline/panel-one-placeholder.svg')),
  inline(require('assets/inline/panel-two-placeholder.svg')),
  inline(require('assets/inline/panel-three-placeholder.svg')),
  inline(require('assets/inline/panel-four-placeholder.svg')),
  inline(require('assets/inline/panel-five-placeholder.svg')),
  inline(require('assets/inline/panel-six-placeholder.svg')),
  inline(require('assets/inline/panel-seven-placeholder.svg'))
];

export const github = inline(require('assets/inline/github.svg'));
export const linkedin = inline(require('assets/inline/linkedin.svg'));
export const medium = inline(require('assets/inline/medium.svg'));
export const instagram = inline(require('assets/inline/instagram.svg'));
export const post = inline(require('assets/inline/post.svg'));
