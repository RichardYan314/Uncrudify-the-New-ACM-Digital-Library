// ==UserScript==
// @name         Uncrudify the New ACM Digital Library
// @namespace    https://richardyan.site/
// @version      0.1
// @license      Creative Commons BY
// @description  Borrowed from https://www.cs.cornell.edu/~asampson/blog/delete.html for my personal use.

// @author       Richard Yan
// @homepageURL  https://github.com/RichardYan314/Uncrudify-the-New-ACM-Digital-Library#readme
// @supportURL   https://github.com/RichardYan314/Uncrudify-the-New-ACM-Digital-Library/issues
// @downloadURL  https://raw.githubusercontent.com/RichardYan314/Uncrudify-the-New-ACM-Digital-Library/master/Uncrudify-the-New-ACM-Digital-Library.user.js

// @match        https://dl.acm.org/doi/*
// @match        https://dl-acm-org.proxy.queensu.ca/doi/*
// @grant        none
// ==/UserScript==
// Not making separate meta.js file for now...

(function() {
  'use strict';

  document
    .querySelectorAll(`
      .pb-ad,
      .cookiePolicy-popup,
      #surveyContent,
      .recommendations,
      header,
      .pill-list,
      .article__sections,
      .share__block,
      .issue-item__footer-info`
    )
    .forEach((e) =>
      e.parentNode.removeChild(e)
    );
})();