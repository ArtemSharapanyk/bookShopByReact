export default  (s) => {
    return new Promise(resolve => setTimeout(() => resolve(true), s));
};