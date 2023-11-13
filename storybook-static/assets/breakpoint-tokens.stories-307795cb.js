import{t as d,n as _,e as v,a as f}from"./styles-00d80ce8.js";import{f as l}from"./configma-641fdb9a.js";import{s as g,x as c}from"./lit-element-f1878214.js";var y=Object.defineProperty,h=Object.getOwnPropertyDescriptor,k=(r,s,t,a)=>{for(var e=a>1?void 0:a?h(s,t):s,i=r.length-1,p;i>=0;i--)(p=r[i])&&(e=(a?p(s,t,e):p(e))||e);return a&&e&&y(s,t,e),e};let o=class extends g{constructor(){super(...arguments),this.tokens={}}render(){const r=Object.entries(this.tokens).map(([s,t])=>c`
        <li class="sb-list__item" style="min-width: max-content;">
          <span class="sb-list__label">${s}</span>
          <span class="sb-list__value">${t.value}px</span>
          <span class="sb-list__custom-property">
            <code class=" sb-custom-property-name"
              >var(--breakpoint-${s})</code
            >
          </span>
          <span
            class="sb-list__visualization"
            style="width: ${t.value}px; height: 25px; background: var(--colors-sb-visualization); display: block; border-radius: var(--radius-sm);"
          ></span>
        </li>
      `);return c`
      <div>
        <h2 class="sb-title">Breakpoint Tokens</h2>
        <ul class="sb-list" style="overflow: scroll;">
          ${r}
        </ul>
      </div>
    `}};o.styles=[d];k([_()],o.prototype,"tokens",2);o=k([v("breakpoint-tokens")],o);const w={title:"Tokens/Breakpoint",component:"breakpoint-tokens"},n={args:{tokens:f.breakpoint},parameters:{design:{type:"figma",url:`${l.url}${l.breakpoint}`}}};var m,u,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    tokens: tokens.breakpoint
  },
  parameters: {
    design: {
      type: 'figma',
      url: \`\${figma.url}\${figma.breakpoint}\`
    }
  }
}`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const B=["Breakpoint"];export{n as Breakpoint,B as __namedExportsOrder,w as default};
//# sourceMappingURL=breakpoint-tokens.stories-307795cb.js.map
