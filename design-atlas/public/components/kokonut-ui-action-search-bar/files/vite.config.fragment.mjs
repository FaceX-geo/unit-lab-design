import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
export const componentAliases=Object.fromEntries(Object.entries({"@/components/ui/input":"runtime/components/ui/input.jsx","@/lib/utils":"runtime/lib/utils.js","@/hooks/use-debounce":"runtime/hooks/use-debounce.js"}).map(([key,value])=>[key,path.resolve(root,value)]));
export default {resolve:{alias:componentAliases}};
