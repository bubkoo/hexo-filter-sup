# hexo-filter-sup

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/hexo-filter-sup/blob/master/LICENSE)

[![npm:](https://img.shields.io/npm/v/hexo-filter-sup.svg?style=flat-square)](https://www.npmjs.com/packages/hexo-filter-sup)
[![Package Quality](http://npm.packagequality.com/shield/hexo-filter-sup.svg)](http://packagequality.com/#?package=hexo-filter-sup)

> Generate superscript (`<sup>`) tag for Hexo.

## Install

```node
npm install --save hexo-filter-sup
```

## Usage

`29^th^` => `29<sup>th</sup>`

The default markup is based on [pandoc](http://johnmacfarlane.net/pandoc/README.html#superscripts-and-subscripts) definition. But nested markup is currently not supported.

Markup can be specified as follow in you `_config.yml`:

```
sup:
  markup: '$'
```

## Related
   
   - [hexo-filter-sub](https://github.com/bubkoo/hexo-filter-sub) Generate subscript (`<sub>`) tag for Hexo.
   - [hexo-toc](https://github.com/bubkoo/hexo-toc) Insert a markdown TOC before posts be rendered.
   - [hexo-filter-fenced-code](https://github.com/bubkoo/hexo-filter-fenced-code) Extend syntax for the native fenced code block.
   - [hexo-filter-flowchart](https://github.com/bubkoo/hexo-filter-flowchart) Generate flowchart diagrams for Hexo.
   - [hexo-filter-sequence](https://github.com/bubkoo/hexo-filter-sequence) Generate UML sequence diagrams for Hexo.
   - [hexo-theme-formula](https://github.com/bubkoo/hexo-theme-formula) Hexo theme base on jade and less. 

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/bubkoo/hexo-filter-sup/issues/new).
