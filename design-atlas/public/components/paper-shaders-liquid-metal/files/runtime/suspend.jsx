/**
 * A cut down version of suspend-react.
 * When paper-shaders only supports React 19+ we can use the use hook instead.
 */
const isPromise = (promise) => typeof promise === 'object' && typeof promise.then === 'function';
const globalCache = [];
function shallowEqualArrays(arrA, arrB) {
    if (arrA === arrB)
        return true;
    if (!arrA || !arrB)
        return false;
    const len = arrA.length;
    if (arrB.length !== len)
        return false;
    for (let i = 0; i < len; i++)
        if (arrA[i] !== arrB[i])
            return false;
    return true;
}
function query(fn, keys = null) {
    // If no keys were given, the function is the key
    if (keys === null)
        keys = [fn];
    for (const entry of globalCache) {
        // Find a match
        if (shallowEqualArrays(keys, entry.keys)) {
            // If an error occurred, throw
            if (Object.prototype.hasOwnProperty.call(entry, 'error'))
                throw entry.error;
            // If a response was successful, return
            if (Object.prototype.hasOwnProperty.call(entry, 'response')) {
                return entry.response;
            }
            // If the promise is still unresolved, throw
            throw entry.promise;
        }
    }
    // The request is new or has changed.
    const entry = {
        keys,
        promise: 
        // Execute the promise
        (isPromise(fn) ? fn : fn(...keys))
            // When it resolves, store its value
            .then((response) => {
            entry.response = response;
        })
            // Store caught errors, they will be thrown in the render-phase to bubble into an error-bound
            .catch((error) => (entry.error = error)),
    };
    // Register the entry
    globalCache.push(entry);
    // And throw the promise, this yields control back to React
    throw entry.promise;
}
const suspend = (fn, keys) => query(fn, keys);
export { suspend };
