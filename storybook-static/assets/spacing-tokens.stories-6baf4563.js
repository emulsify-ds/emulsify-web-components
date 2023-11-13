import{t as d,n as f,e as b,a as v}from"./styles-00d80ce8.js";import{f as c}from"./configma-641fdb9a.js";import{s as h,x as l}from"./lit-element-f1878214.js";var y=Object.defineProperty,$=Object.getOwnPropertyDescriptor,_=(t,s,e,r)=>{for(var a=r>1?void 0:r?$(s,e):s,i=t.length-1,o;i>=0;i--)(o=t[i])&&(a=(r?o(s,e,a):o(a))||a);return r&&a&&y(s,e,a),a};let p=class extends h{constructor(){super(...arguments),this.tokens={}}render(){const t=Object.entries(this.tokens).map(([s,e])=>l`
        <li class="sb-list__item">
          <span class="sb-list__label">${s}</span>
          <span class="sb-list__value">${e.value}px</span>
          <span class="sb-list__custom-property">
            <code class="sb-custom-property-name">var(--spacing-${s})</code>
          </span>
          <ul
            class="sb-spacing-wrapper"
            style="gap: var(--spacing-${s}); padding-left: 0;"
          >
            ${Array.from({length:7}).map(()=>l`
                <li
                  class="sb-list__visualization"
                  style="width: 50px; height: 50px; background-color: var(--colors-sb-visualization);"
                ></li>
              `)}
          </ul>
        </li>
      `);return l`
      <div>
        <h2 class="sb-title">Spacing Tokens</h2>
        <ul class="sb-list">
          ${t}
        </ul>
      </div>
    `}};p.styles=[d];_([f()],p.prototype,"tokens",2);p=_([b("spacing-tokens")],p);const O={title:"Tokens/Spacing",component:"spacing-tokens"},n={args:{tokens:v.spacing},parameters:{design:{type:"figma",url:`${c.url}${c.spacing}`}}};var g,m,u;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    tokens: tokens.spacing
  },
  parameters: {
    design: {
      type: 'figma',
      url: \`\${figma.url}\${figma.spacing}\`
    }
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const w=["Spacing"];export{n as Spacing,w as __namedExportsOrder,O as default};
//# sourceMappingURL=spacing-tokens.stories-6baf4563.js.map
