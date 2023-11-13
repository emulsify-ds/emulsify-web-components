import{t as f,n as b,e as z,a as d}from"./styles-00d80ce8.js";import{f as p}from"./configma-641fdb9a.js";import{s as g,x as c}from"./lit-element-f1878214.js";var $=Object.defineProperty,h=Object.getOwnPropertyDescriptor,v=(r,s,e,a)=>{for(var t=a>1?void 0:a?h(s,e):s,i=r.length-1,l;i>=0;i--)(l=r[i])&&(t=(a?l(s,e,t):l(t))||t);return a&&t&&$(s,e,t),t};let o=class extends g{constructor(){super(...arguments),this.tokens={}}render(){const r=Object.entries(this.tokens).map(([s,e])=>c`
        <li class="sb-list__item">
          <span class="sb-list__label">${s}</span>
          <span class="sb-list__value">${e.value}px</span>
          <span class="sb-list__custom-property">
            <code class="sb-custom-property-name">var(--size-${s})</code>
          </span>
          <span
            class="sb-list__visualization"
            style="width: ${e.value}px; height: ${e.value}px; background-color: var(--colors-sb-visualization);"
          ></span>
        </li>
      `);return c`
      <div>
        <h2 class="sb-title">Size Tokens</h2>
        <ul class="sb-list">
          ${r}
        </ul>
      </div>
    `}};o.styles=[f];v([b()],o.prototype,"tokens",2);o=v([z("size-tokens")],o);const x={title:"Tokens/Size",component:"size-tokens"},n={args:{tokens:d.size},parameters:{design:{type:"figma",url:`${p.url}${p.size}`}}};var m,u,_;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    tokens: tokens.size
  },
  parameters: {
    design: {
      type: 'figma',
      url: \`\${figma.url}\${figma.size}\`
    }
  }
}`,...(_=(u=n.parameters)==null?void 0:u.docs)==null?void 0:_.source}}};const O=["Size"];export{n as Size,O as __namedExportsOrder,x as default};
//# sourceMappingURL=size-tokens.stories-4dd3bb7d.js.map
