import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
export const componentAliases=Object.fromEntries(Object.entries({"@/registry/primitives/buttons/liquid":"runtime/components/animate-ui/primitives/buttons/liquid.jsx","@/registry/primitives/animate/slot":"runtime/components/animate-ui/primitives/animate/slot.jsx","@workspace/ui/lib/utils":"runtime/workspace-ui/lib/utils.js","@/registry/components/buttons/liquid":"runtime/components/animate-ui/components/buttons/liquid.jsx"}).map(([key,value])=>[key,path.resolve(root,value)]));
export default {resolve:{alias:componentAliases}};
