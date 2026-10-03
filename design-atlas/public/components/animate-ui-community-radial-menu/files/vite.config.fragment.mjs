import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
export const componentAliases=Object.fromEntries(Object.entries({"@workspace/ui/lib/utils":"runtime/workspace-ui/lib/utils.js","@/registry/components/community/radial-menu":"runtime/components/animate-ui/components/community/radial-menu.jsx"}).map(([key,value])=>[key,path.resolve(root,value)]));
export default {resolve:{alias:componentAliases}};
