import{t as d,n as y,e as f,a as v}from"./styles-00d80ce8.js";import{f as p}from"./configma-641fdb9a.js";import{s as _,x as m}from"./lit-element-f1878214.js";var b=Object.defineProperty,w=Object.getOwnPropertyDescriptor,g=(i,t,e,n)=>{for(var s=n>1?void 0:n?w(t,e):t,o=i.length-1,l;o>=0;o--)(l=i[o])&&(s=(n?l(t,e,s):l(s))||s);return n&&s&&b(t,e,s),s};let r=class extends _{constructor(){super(...arguments),this.tokens={}}render(){const i="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",t=Object.entries(this.tokens).map(([e,n])=>m`
        <li class="sb-list__item" style="min-width: max-content;">
          <span class="sb-list__label" style="width: 100px;">${e}</span>
          <span class="sb-list__value">${n.value}</span>
          <span class="sb-list__custom-property">
            <code class="sb-custom-property-name" style="width: 272px;"
              >var(--line-height-${e})</code
            >
          </span>
          <span
            class="sb-list__visualization"
            style="max-width: 600px; line-height: var(--line-height-${e});"
            >${i}</span
          >
        </li>
      `);return m`
      <div>
        <h2 class="sb-title">Line Heights</h2>
        <ul class="sb-list" style="overflow: scroll;">
          ${t}
        </ul>
      </div>
    `}};r.styles=[d];g([y()],r.prototype,"tokens",2);r=g([f("line-height-tokens")],r);const $={title:"Tokens/Line Height",component:"line-height-tokens"},a={args:{tokens:v["line-height"]},parameters:{design:{type:"figma",url:`${p.url}${p.lineHeight}`}}};var h,c,u;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    tokens: tokens['line-height']
  },
  parameters: {
    design: {
      type: 'figma',
      url: \`\${figma.url}\${figma.lineHeight}\`
    }
  }
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const H=["LineHeight"];export{a as LineHeight,H as __namedExportsOrder,$ as default};
//# sourceMappingURL=line-height-tokens.stories-4c1a3d28.js.map
