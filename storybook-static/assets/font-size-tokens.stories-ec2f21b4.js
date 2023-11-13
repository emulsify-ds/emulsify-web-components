import{t as z,n as d,e as v,a as g}from"./styles-00d80ce8.js";import{f as l}from"./configma-641fdb9a.js";import{s as b,x as c}from"./lit-element-f1878214.js";var S=Object.defineProperty,$=Object.getOwnPropertyDescriptor,_=(r,s,t,n)=>{for(var e=n>1?void 0:n?$(s,t):s,i=r.length-1,p;i>=0;i--)(p=r[i])&&(e=(n?p(s,t,e):p(e))||e);return n&&e&&S(s,t,e),e};let a=class extends b{constructor(){super(...arguments),this.tokens={}}render(){const r=Object.entries(this.tokens).map(([s,t])=>c`
        <li class="sb-list__item">
          <span class="sb-list__label">${s}</span>
          <span class="sb-list__value">${t.value}px</span>
          <span class="sb-list__custom-property">
            <code class=" sb-custom-property-name"
              >var(--font-size-${s})</code
            >
          </span>

          <p style="font-size: var(--font-size-${s}); margin: 0;">
            ${s.toUpperCase()}
          </p>
        </li>
      `);return c`
      <div>
        <h2 class="sb-title">Font Size Tokens</h2>
        <ul class="sb-list">
          ${r.reverse()}
        </ul>
      </div>
    `}};a.styles=[z];_([d()],a.prototype,"tokens",2);a=_([v("font-size-tokens")],a);const k={title:"Tokens/Font Size",component:"font-size-tokens"},o={args:{tokens:g["font-size"]},parameters:{design:{type:"figma",url:`${l.url}${l.fontSize}`}}};var m,f,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    tokens: tokens['font-size']
  },
  parameters: {
    design: {
      type: 'figma',
      url: \`\${figma.url}\${figma.fontSize}\`
    }
  }
}`,...(u=(f=o.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const x=["FontSize"];export{o as FontSize,x as __namedExportsOrder,k as default};
//# sourceMappingURL=font-size-tokens.stories-ec2f21b4.js.map
