import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
export const componentAliases=Object.fromEntries(Object.entries({"@/registry/primitives/radix/sheet":"runtime/components/animate-ui/primitives/radix/sheet.jsx","@/registry/lib/get-strict-context":"runtime/registry/lib/get-strict-context/index.jsx","@/registry/hooks/use-controlled-state":"runtime/registry/hooks/use-controlled-state/index.jsx","@workspace/ui/lib/utils":"runtime/workspace-ui/lib/utils.js","@workspace/ui/components/ui/button":"runtime/workspace-ui/components/ui/button.jsx","@workspace/ui/components/ui/input":"runtime/workspace-ui/components/ui/input.jsx","@workspace/ui/components/ui/label":"runtime/workspace-ui/components/ui/label.jsx","@/registry/components/radix/sheet":"runtime/components/animate-ui/components/radix/sheet.jsx"}).map(([key,value])=>[key,path.resolve(root,value)]));
export default {resolve:{alias:componentAliases}};
