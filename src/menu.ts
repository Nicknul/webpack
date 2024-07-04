const root = document.querySelector('#root')!;

const hash = (): string => {
  let result = `#`;
  return result;
};

const textNode = (): string => {
  let result = `메뉴`;
  return result;
};

const anchorTags = (hash: string, textNode: string): string => {
  let result = `<a href="${hash}">${textNode}</a>`;
  return result;
};

const liTags = (children: string): string => {
  let result = `<li>${children}</li>`;
  return result;
};

root.innerHTML = `
<ul>
  ${liTags(anchorTags(hash(), textNode()))}
</ul>
`;
