'use strict';

import $ from 'jquery';
import Suggest from './suggest.js';

window.$ = $;

// init Suggest on DOM loaded
$(function(){
    const s = new Suggest('#suggestFriuts', ['banana','orange','apple','grape','pine','pineapple']);
});
