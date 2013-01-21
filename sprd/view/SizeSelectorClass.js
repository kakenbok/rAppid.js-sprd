define(['js/ui/SelectionView'], function (SelectionView) {
    return SelectionView.inherit({
        defaults: {
            componentClass: 'product-sizes',
            itemKey: 'size',
            // if null use default view
            productType: null,
            appearance: null,
            items: "{productType.sizes}",
            multiSelect: false
        },
        _commitItems: function(){
            this.set('needsSelection', false);
        },

        _commitChangedAttributes: function(attributes){
            this.callBase();
            if (this._hasSome(attributes, ["appearance"])) {
                var self = this;
                if (this.$lastSelectedSize) {

                }
            }
        },
        _commitSelectedItem: function(item){
            if(item){
                this.$lastSelectedSize = item;
            }
        },
        availableClass: function (size) {
            return this.$.productType.isSizeAndAppearanceAvailable(size, this.$.appearance) ? "available" : "not-available";
        }
    })
});