import '../../common/now';
import '../../common/style';

const a = [1, 2, 3, 4, 5, 6];

const b = { x: { y: { z: 100 } } };

const c = x => x ** 2;

// ES2018 语法测试

console.log(
  '🐶🐶🐶',
  a.filter(n => n <= 5).reduce((acc, n) => acc + n, 0),
  a.map(n => n ** 2), // exponentiation-operator (env)
  '\n\n proposal-optional-chaining \n',
  b?.x?.y?.z,
  b?.x?.h?.z,
  b?.x?.y?.z?.h,
  '\n\n proposal-pipeline-operator \n',
  4 |> c,
  4 |> c |> c,
  '\n\n proposal-numeric-separator \n',
  9_999_887
);

const html = [
  '<br />',
  '<div><strong>语法测试</strong></div>',
  '<br />',
  '<p><strong>· proposal-optional-chaining</strong></p>',
  '<p>const b = { x: { y: { z: 100 } } };</p>',
  '<p>b?.x?.y?.z <em style="margin-left: 20px; color: #999"> // 100 </em></p>',
  '<p>b?.x?.h?.z <em style="margin-left: 20px; color: #999"> // undefined </em></p>',
  '<p>b?.x?.y?.z?.h?.h1?.h2 <em style="margin-left: 20px; color: #999"> // undefined </em></p>',
  '<br />',
  '<p><strong>· proposal-pipeline-operator</strong></p>',
  '<p>const c = x => x ** 2;</p>',
  '<p>4 |> c <em style="margin-left: 20px; color: #999"> // 16 </em></p>',
  '<p>4 |> c |> c <em style="margin-left: 20px; color: #999"> // 256 </em></p>',
  '<p><strong>· proposal-numeric-separator</strong></p>',
  '<p>9_999_887 <em style="margin-left: 20px; color: #999"> // 9999887 </em></p>'
].join('')
  .replace(/\?/g, '<span style="color: blue">?</span>')
  .replace(/\./g, '<span style="color: red">.</span>')
  .replace(/\|>/g, '<span style="color: red">|></span>')
  .replace(/_/g, '<span style="color: red">_</span>');

const divNode = document.createElement('div');
divNode.innerHTML = html;

document.body.append(divNode);
