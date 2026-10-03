import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
export const componentAliases=Object.fromEntries(Object.entries({"@/registry/primitives/animate/tooltip":"runtime/components/animate-ui/primitives/animate/tooltip.jsx","@/registry/lib/get-strict-context":"runtime/registry/lib/get-strict-context/index.jsx","@/registry/primitives/animate/slot":"runtime/components/animate-ui/primitives/animate/slot.jsx","@workspace/ui/lib/utils":"runtime/workspace-ui/lib/utils.js","@/registry/components/animate/tooltip":"runtime/components/animate-ui/components/animate/tooltip.jsx","@workspace/ui/components/ui/button":"runtime/workspace-ui/components/ui/button.jsx"}).map(([key,value])=>[key,path.resolve(root,value)]));
export default {resolve:{alias:componentAliases}};
