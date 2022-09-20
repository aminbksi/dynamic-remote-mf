const moduleFileName = "remoteEntry.js";

// Host module
const hostModule = {
  fileName: moduleFileName,
  name: "host",
  port: 3001,
};

// Remote module
const remoteModule = {
  fileName: moduleFileName,
  name: "remote",
  port: 3000,
  get url() {
    return `//localhost:${this.port}`;
  },
  urlGlobalVariable: "remoteUrl",
  get federationConfig() {
    // app2@[window.app2Url]/remoteEntry.js
    return `${this.name}@[window.${this.urlGlobalVariable}]/${this.fileName}`;
  },
};

module.exports = {
  hostModule,
  remoteModule,
};
