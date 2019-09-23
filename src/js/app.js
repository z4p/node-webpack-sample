'use strict';

import $ from 'jquery';
import Suggest from './suggest.js';

window.$ = $;

// init Suggest on DOM loaded
$(function(){
    new Suggest('#suggestFriuts', (dataCallback) => {
        $.getJSON('/json/fruits.json', {}, (data) => {
            dataCallback(data);
        });
    });
});
