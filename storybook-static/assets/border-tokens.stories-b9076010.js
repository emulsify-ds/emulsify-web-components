import{t as _,n as f,e as v,a as g}from"./styles-00d80ce8.js";import{f as p}from"./configma-641fdb9a.js";import{s as h,x as c}from"./lit-element-f1878214.js";var $=Object.defineProperty,k=Object.getOwnPropertyDescriptor,b=(t,s,r,o)=>{for(var e=o>1?void 0:o?k(s,r):s,l=t.length-1,i;l>=0;l--)(i=t[l])&&(e=(o?i(s,r,e):i(e))||e);return o&&e&&$(s,r,e),e};let n=class extends h{constructor(){super(...arguments),this.tokens={}}render(){const t=Object.entries(this.tokens).map(([s,r])=>c`
        <li class="sb-list__item">
          <span class="sb-list__label">${s}</span>
          <span class="sb-list__value">${r.value}px</span>
          <span class="sb-list__custom-property">
            <code class="sb-custom-property-name">var(--radius-${s})</code>
          </span>
          <span
            class="sb-list__visualization"
            style="height: ${r.value}px; background: var(--colors-sb-visualization); width: 300px;"
          ></span>
        </li>
      `);return c`
      <div>
        <h2 class="sb-title">Border Tokens</h2>
        <ul class="sb-list">
          ${t}
        </ul>
      </div>
    `}};n.styles=[_];b([f()],n.prototype,"tokens",2);n=b([v("border-tokens")],n);const B={title:"Tokens/Border",component:"border-tokens"},a={args:{tokens:g.border},parameters:{design:{type:"figma",url:`${p.url}${p.border}`}}};var m,d,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    tokens: tokens.border
  },
  parameters: {
    design: {
      type: 'figma',
      url: \`\${figma.url}\${figma.border}\`
    }
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const P=["Border"];export{a as Border,P as __namedExportsOrder,B as default};
//# sourceMappingURL=border-tokens.stories-b9076010.js.map
