System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "none",
  paths: {
    "github:*": "lib/github/*"
  },

  map: {
    "angular": "github:angular/bower-angular@1.4.7"
  }
});
