
let Thing = Object.create(null);
Thing.toString = () => '[object Thing]';

Thing.clone = function(extension={}) {
    let clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    return Object.assign(clone, extension);
};

Thing.extend = function(extension={}) {
    let child = Object.create(this);
    return Object.assign(child, extension);
};

export default Thing;
