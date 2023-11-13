import{t as _,n as b,e as v,a as f}from"./styles-00d80ce8.js";import{f as c}from"./configma-641fdb9a.js";import{s as g,x as l}from"./lit-element-f1878214.js";var O=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d=(e,s,a,r)=>{for(var t=r>1?void 0:r?h(s,a):s,p=e.length-1,n;p>=0;p--)(n=e[p])&&(t=(r?n(s,a,t):n(t))||t);return r&&t&&O(s,a,t),t};let i=class extends g{constructor(){super(...arguments),this.tokens={}}render(){const e=Object.entries(this.tokens).map(([s,a])=>l`
        <li class="sb-list__item">
          <span class="sb-list__label">${s}</span>
          <span class="sb-list__value">${a.value}px</span>
          <span class="sb-list__custom-property">
            <code class="sb-custom-property-name">var(--opacity-${s})</code>
          </span>
          <span
            class="sb-list__visualization"
            style="opacity:
            var(--opacity-${s}); display: block; width: 50px; height: 50px;
            background-color: var(--colors-sb-visualization); border-radius:
            var(--radius-sm);"
          ></span>
        </li>
      `);return l`
      <div>
        <h2 class="sb-title">Opacity Tokens</h2>
        <ul class="sb-list">
          ${e}
        </ul>
      </div>
    `}};i.styles=[_];d([b()],i.prototype,"tokens",2);i=d([v("opacity-tokens")],i);const P={title:"Tokens/Opacity",component:"opacity-tokens"},o={args:{tokens:f.opacity},parameters:{design:{type:"figma",url:`${c.url}${c.opacity}`}}};var m,u,y;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    tokens: tokens.opacity
  },
  parameters: {
    design: {
      type: 'figma',
      url: \`\${figma.url}\${figma.opacity}\`
    }
  }
}`,...(y=(u=o.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const j=["Opacity"];export{o as Opacity,j as __namedExportsOrder,P as default};
//# sourceMappingURL=opacity-tokens.stories-b4430b66.js.map
