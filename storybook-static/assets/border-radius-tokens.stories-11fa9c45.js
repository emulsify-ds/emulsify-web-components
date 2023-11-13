import{t as _,n as f,e as v,a as g}from"./styles-00d80ce8.js";import{f as p}from"./configma-641fdb9a.js";import{s as h,x as d}from"./lit-element-f1878214.js";var k=Object.defineProperty,$=Object.getOwnPropertyDescriptor,b=(a,s,r,t)=>{for(var e=t>1?void 0:t?$(s,r):s,i=a.length-1,l;i>=0;i--)(l=a[i])&&(e=(t?l(s,r,e):l(e))||e);return t&&e&&k(s,r,e),e};let n=class extends h{constructor(){super(...arguments),this.tokens={}}render(){const a=Object.entries(this.tokens).map(([s,r])=>d`
        <li class="sb-list__item">
          <span class="sb-list__label">${s}</span>
          <span class="sb-list__value">${r.value}px</span>
          <span class="sb-list__custom-property">
            <code class="sb-custom-property-name">var(--token-${s})</code>
          </span>
          <span
            class="sb-list__visualization"
            style="border-radius: ${r.value}px; width: 75px; height: 75px; background: var(--colors-sb-visualization);"
          ></span>
        </li>
      `);return d`
      <div>
        <h2 class="sb-title">Border Radius Tokens</h2>
        <ul class="sb-list">
          ${a}
        </ul>
      </div>
    `}};n.styles=[_];b([f()],n.prototype,"tokens",2);n=b([v("border-radius-tokens")],n);const O={title:"Tokens/Border Radius",component:"border-radius-tokens"},o={args:{tokens:g.radius},parameters:{design:{type:"figma",url:`${p.url}${p.borderRadius}`}}};var u,c,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    tokens: tokens.radius
  },
  parameters: {
    design: {
      type: 'figma',
      url: \`\${figma.url}\${figma.borderRadius}\`
    }
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const B=["BorderRadius"];export{o as BorderRadius,B as __namedExportsOrder,O as default};
//# sourceMappingURL=border-radius-tokens.stories-11fa9c45.js.map
