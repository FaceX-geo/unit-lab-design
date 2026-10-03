import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
export const componentAliases=Object.fromEntries(Object.entries({"@/lib/utils":"runtime/lib/utils.js","@/config/site":"runtime/config/site.js","@/components/ui/checkbox":"runtime/components/ui/checkbox.jsx"}).map(([key,value])=>[key,path.resolve(root,value)]));
export default {resolve:{alias:componentAliases}};
