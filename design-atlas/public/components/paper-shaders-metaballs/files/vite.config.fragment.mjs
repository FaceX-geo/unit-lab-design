import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
export const componentAliases=Object.fromEntries(Object.entries({"../shader-mount.js":"runtime/shader-mount.jsx","./use-merge-refs.js":"runtime/use-merge-refs.js","./set-min-image-size.js":"runtime/set-min-image-size.jsx","../color-props-are-equal.js":"runtime/color-props-are-equal.js"}).map(([key,value])=>[key,path.resolve(root,value)]));
export default {resolve:{alias:componentAliases}};
