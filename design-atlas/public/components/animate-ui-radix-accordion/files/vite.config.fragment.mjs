import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
export const componentAliases=Object.fromEntries(Object.entries({"@/registry/primitives/radix/accordion":"runtime/components/animate-ui/primitives/radix/accordion.jsx","@/registry/hooks/use-controlled-state":"runtime/registry/hooks/use-controlled-state/index.jsx","@/registry/lib/get-strict-context":"runtime/registry/lib/get-strict-context/index.jsx","@workspace/ui/lib/utils":"runtime/workspace-ui/lib/utils.js","@/registry/components/radix/accordion":"runtime/components/animate-ui/components/radix/accordion.jsx"}).map(([key,value])=>[key,path.resolve(root,value)]));
export default {resolve:{alias:componentAliases}};
