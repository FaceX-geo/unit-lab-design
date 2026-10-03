import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
export const componentAliases=Object.fromEntries(Object.entries({"@/animata/widget/notes":"runtime/animata/widget/notes.jsx","@/lib/utils":"runtime/lib/utils.js","@/animata/widget/shopping-list":"runtime/animata/widget/shopping-list.jsx","./card-spread.css":"runtime/animata/card/card-spread.css"}).map(([key,value])=>[key,path.resolve(root,value)]));
export default {resolve:{alias:componentAliases}};
