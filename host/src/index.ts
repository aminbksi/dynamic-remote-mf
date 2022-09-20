import { remoteModule } from "../../moduleConfig";

window[remoteModule.urlGlobalVariable] = remoteModule.url;

import("./bootstrap");
