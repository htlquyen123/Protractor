exports.config = {
  directConnect: true,
  framework: 'jasmine',
  //  seleniumAddress: 'http://localhost:4444/wd/hub',
  // specs: ['exercise1-spec.js']
  //  specs: ['exercise2-spec.js']
   //specs: ['exercise3-spec.js'],
  // specs: ['exercise3.1.js'],
    specs: ['Bernardelin.js'],
    // specs: ['LoacatorbyModel.js'],

    // suites:{
    //     page_object: ['ui_test/spec/test_01.js']
    // },

 jasmineNodeOpts: {
     
      defaultTimeoutInterval: 140000
        }
}