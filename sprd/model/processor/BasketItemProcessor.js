define(['js/data/DataSource'], function(DataSource) {

    return DataSource.Processor.inherit("sprd.model.processor.BasketItemProcessor", {

        deserialize: function(data, action) {
            // TODO: transform element
            return data;
        },

        serialize: function(data, action) {

            return {
                quantity: data.quantity,
                element: {
                    id: data.element.$.id,
                    type: data.element.getType(),
                    // TODO: build url like the datasource it does
                    href: data.element.$.item.$.href,
                    properties: [
                        {
                            key: "appearance",
                            value: data.element.$.appearance.id
                        },
                        {
                            key: "size",
                            value: data.element.$.size.id
                        }
                    ]
                }
            }

        }
    });
});