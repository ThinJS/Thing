
let Thing = {
    clone: function(extension={}) {
        let clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        return Object.assign(clone, extension);
    },
    extend: function(extension={}) {
        let child = Object.create(this);
        return Object.assign(child, extension);
    }
};
