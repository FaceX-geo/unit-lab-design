import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
export const componentAliases=Object.fromEntries(Object.entries({"@/hooks/use-dimensions":"runtime/hooks/use-dimensions.js","@/hooks/use-elastic-line-events":"runtime/hooks/use-elastic-line-events.js","@/hooks/use-mouse-position":"runtime/hooks/use-mouse-position.js"}).map(([key,value])=>[key,path.resolve(root,value)]));
export default {resolve:{alias:componentAliases}};
