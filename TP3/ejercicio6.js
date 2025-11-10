function isBalanced(s) {
  const pairs = { ')': '(', ']': '[', '}': '{' };
  const opens = new Set(Object.values(pairs));
  const stack = [];

  for (const ch of s) {
    if (opens.has(ch)) {
      stack.push(ch);
    } else if (ch in pairs) {
      if (stack.pop() !== pairs[ch]) return false;
    }
  }
  return stack.length === 0;
}

console.log(isBalanced("([]{})")); 
console.log(isBalanced("(]"));     

