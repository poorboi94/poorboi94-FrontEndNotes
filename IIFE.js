// imediately invoked function expression
// anon function that is immediately invoked
// common use case was when people wanted to immediately invoke jQuery plugins
// would use it for initialization 

(function() {
    //localStorage.setItem('hasPlugin', true);
    console.log('my logic');
})();

const result = (function() {
    const init = {
        id: 0,
        methods: {
            call () {

            }
        }
   };

   return init;
})();

console.log(result);