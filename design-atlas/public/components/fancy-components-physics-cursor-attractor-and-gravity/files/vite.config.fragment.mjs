import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
export const componentAliases=Object.fromEntries(Object.entries({"@/utils/calculate-position":"runtime/utils/calculate-position.js","@/utils/svg-path-to-vertices":"runtime/utils/svg-path-to-vertices.js","@/lib/utils":"runtime/lib/utils.js","@/hooks/use-mouse-position-ref":"runtime/hooks/use-mouse-position-ref.js"}).map(([key,value])=>[key,path.resolve(root,value)]));
export default {resolve:{alias:componentAliases}};
