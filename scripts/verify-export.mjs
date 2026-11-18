import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('out');
function readPage(route){const base=path.join(root,route);const file=fs.existsSync(base+'.html')?base+'.html':path.join(base,'index.html');assert.ok(fs.existsSync(file),`Missing exported route: /${route}`);return fs.readFileSync(file,'utf8');}
for(const route of ['','about','experience','contact','projects','projects/aurore','projects/quizforge','projects/tableflow']){
 const html=readPage(route);assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,`Expected one h1: /${route}`);assert.ok(html.includes('<meta name="description"'),`Missing description: /${route}`);const canonical=html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];assert.ok(canonical,`Missing canonical: /${route}`);assert.equal(new URL(canonical).origin,"https://wjb-portfolio.vercel.app");assert.equal(new URL(canonical).pathname,`/${route}`);
 for(const match of html.matchAll(/<img[^>]+src="(\/[^"?]+)"/g)){assert.ok(fs.existsSync(path.join(root,match[1])),`Missing image ${match[1]}`);}
}
const index=readPage('projects');assert.ok(!index.includes('href="/mini-projects"'),'Legacy menu must be removed from Projects navigation');for(const slug of ['aurore','quizforge','tableflow'])assert.ok(index.includes(`href="/projects/${slug}"`),`Missing project link ${slug}`);
const quiz=readPage('projects/quizforge');assert.ok(quiz.includes('href="https://quizforge-nine-chi.vercel.app/"'),'Missing QuizForge live URL');
const table=readPage('projects/tableflow');assert.ok(table.includes('계획한 기능'));assert.ok(!table.includes('구현한 주요 기능'));assert.ok(table.includes('아직')||table.includes('구현 완료된 기능이 아닙니다.'));
const aurore=readPage('projects/aurore');assert.ok(aurore.includes('https://github.com/orca305/AURORE'));assert.ok(!aurore.includes('https://github.com/orca305/easy-law-ai'));
const legacy=readPage('mini-projects');assert.ok(legacy.includes('http-equiv="refresh" content="0;url=/projects"'));assert.ok(legacy.includes('rel="canonical" href="https://wjb-portfolio.vercel.app/projects"'));
for(const style of [1,2,3,4,5]){readPage(`design/${style}/projects`);readPage(`design/${style}/mini-projects`);}
for(const name of ['portfolio','aurore','quizforge','tableflow'])assert.ok(fs.existsSync(path.join(root,'social',`${name}.png`)));
const data=fs.readFileSync('app/project-data.ts','utf8');for(const match of data.matchAll(/src:\s*['"](\/[^'"]+)['"]/g))assert.ok(fs.existsSync(path.join('public',match[1])),`Unresolved screenshot ${match[1]}`);
console.log('Verified project routes, canonical metadata, real image assets, planned-state labels, live link and compatibility routes.');
