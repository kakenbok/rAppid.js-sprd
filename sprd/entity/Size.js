define(['js/data/Entity'], function(Entity) {
    return Entity.inherit('sprd.entity.Size', {
        schema: {
            measures: [Entity]
        }
    })
});