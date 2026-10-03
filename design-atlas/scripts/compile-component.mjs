import fs from 'node:fs/promises';
import path from 'node:path';
import ts from 'typescript';
// Package-style JS + declarations alongside byte-for-byte upstream source.
// Type erasure avoids changing third-party implementations to satisfy a newer compiler.
export async function compileComponent(m,base){
 if(m.library==='uiverse')return [];
 const sourceRoot=path.resolve(base,'files');const runtimeRoot=path.join(sourceRoot,'runtime');
 await fs.rm(runtimeRoot,{recursive:true,force:true});await fs.mkdir(runtimeRoot,{recursive:true});
 const typed=m.files.filter(f=>/\.(tsx|ts)$/.test(f.path)&&!f.path.endsWith('.d.ts'));
 const options={target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext,moduleResolution:ts.ModuleResolutionKind.Bundler,jsx:ts.JsxEmit.Preserve,declaration:true,emitDeclarationOnly:true,noEmitOnError:false,skipLibCheck:true,strict:false,esModuleInterop:true,rootDir:sourceRoot,outDir:runtimeRoot};
 const host=ts.createCompilerHost(options);const declarations=new Map();
 host.resolveModuleNames=(names,file)=>names.map(name=>m.aliases[name]&&name.startsWith('@')&&/\.[jt]sx?$/.test(m.aliases[name])?{resolvedFileName:path.join(sourceRoot,m.aliases[name]),isExternalLibraryImport:false}:ts.resolveModuleName(name,file,options,host).resolvedModule);
 host.writeFile=(file,text)=>declarations.set(file,text);
 const program=ts.createProgram(typed.map(f=>path.join(sourceRoot,f.path)),options,host);program.emit();
 const outputs=[];
 for(const f of m.files){
  if(f.path==='LICENSE.txt')continue;
  const input=await fs.readFile(path.join(sourceRoot,f.path));
  const relative='runtime/'+f.path.replace(/\.tsx$/,'.jsx').replace(/(?<!\.d)\.ts$/,'.js');
  const target=path.join(sourceRoot,relative);await fs.mkdir(path.dirname(target),{recursive:true});
  if(typed.includes(f)){
   const js=ts.transpileModule(input.toString('utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext,jsx:ts.JsxEmit.Preserve,removeComments:false}}).outputText;
   await fs.writeFile(target,js);outputs.push(relative);
   const declaration=path.join(runtimeRoot,f.path.replace(/\.(tsx|ts)$/,'.d.ts'));
   if(!declarations.has(declaration))throw new Error('Declaration not emitted: '+m.id+'/'+f.path);
   await fs.writeFile(declaration,declarations.get(declaration));outputs.push(path.relative(sourceRoot,declaration));
  }else{await fs.writeFile(target,input);outputs.push(relative);}
 }
 const runtimePath=p=>'runtime/'+p.replace(/\.tsx$/,'.jsx').replace(/(?<!\.d)\.ts$/,'.js');
 m.runtimeAliases=Object.fromEntries(Object.entries(m.aliases).map(([key,value])=>[key,runtimePath(value)]));
 m.runtimeEntry=runtimePath(m.entry);m.runtimeDemoEntry=m.demoEntry?runtimePath(m.demoEntry):null;
 return outputs;
}
