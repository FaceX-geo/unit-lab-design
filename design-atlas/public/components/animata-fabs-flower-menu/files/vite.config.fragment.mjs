import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
export const componentAliases=Object.fromEntries(Object.entries({"@/lib/utils":"runtime/lib/utils.js","./flower-menu.css":"runtime/animata/fabs/flower-menu.css","next/link":"atlas-adapters/next-link.jsx"}).map(([key,value])=>[key,path.resolve(root,value)]));
export default {resolve:{alias:componentAliases}};
