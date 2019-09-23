'use strict';

class Suggest {
    constructor(root_selector, dataCallback) {
        this.selector_input = '.suggest__input';
        this.selector_list = '.suggest__list';
        this.class_list_show = 'suggest__list_show';

        this.$input = $(root_selector).find(this.selector_input);
        this.$list = $(root_selector).find(this.selector_list);

        this.data = [];
        dataCallback((data) => {
            this.data = data;
        });

        this.$input.keyup(() => this.filterInput());
    }

    filterInput() {
        const text = this.$input.val();

        if (text === '') {
            this.$list.removeClass(this.class_list_show);
            return;
        }

        const result = this.data.filter(function(item){
            return item.indexOf(text) > -1;
        });

        if (result.length === 0) {
            this.$list.removeClass(this.class_list_show);
            return;
        }

        this.$list.empty();
        result.forEach(result_item => {
            this.$list.append(`<li data-text="${result_item}">${result_item}</li>`);
        });

        this.$list.children('li').click(e => {
            this.select(e.target.dataset.text);
        });

        this.$list.addClass(this.class_list_show);
    }

    select(text) {
        this.$input.val(text);
        this.$list.removeClass(this.class_list_show);
    }
}

module.exports = Suggest;
