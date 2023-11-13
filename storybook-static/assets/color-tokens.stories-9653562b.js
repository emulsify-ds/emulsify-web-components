import{t as v,n as $,e as b,a as f}from"./styles-00d80ce8.js";import{s as h,x as t}from"./lit-element-f1878214.js";var _=Object.defineProperty,y=Object.getOwnPropertyDescriptor,d=(a,s,e,o)=>{for(var r=o>1?void 0:o?y(s,e):s,n=a.length-1,p;n>=0;n--)(p=a[n])&&(r=(o?p(s,e,r):p(r))||r);return o&&r&&_(s,e,r),r};let c=class extends h{constructor(){super(...arguments),this.tokens={}}render(){const a=Object.entries(this.tokens).map(([s,e])=>t`
        <h2 class="sb-title">${s}</h2>
        <ul class="sb-list">
          ${e.value?t`
                <li
                  style="background: var(--color-${s});"
                  class="token-card"
                >
                  <span>
                    ${s}
                    <span>
                      <code class="sb-custom-property-name"
                        >var(--color-${s})</code
                      >
                    </span>
                  </span>
                </li>
              `:t`
                <ul class="sb-list">
                  ${Object.entries(e).map(([o])=>t`
                      <li
                        style="background: var(--color-${s}-${o});"
                        class="token-card"
                      >
                        <span>
                          ${o}
                          <span>
                            <code class="sb-custom-property-name"
                              >var(--color-${s}-${o})</code
                            >
                          </span>
                        </span>
                      </li>
                    `)}
                </ul>
              `}
        </ul>
      `);return t`
      <div>
        <h2 class="sb-title">Color Tokens</h2>
        ${a}
      </div>
    `}};c.styles=[v];d([$()],c.prototype,"tokens",2);c=d([b("color-tokens")],c);const C={title:"Tokens/Color",component:"color-tokens"},l={args:{tokens:f.color}};var i,m,u;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    tokens: tokens.color
  }
}`,...(u=(m=l.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const k=["Color"];export{l as Color,k as __namedExportsOrder,C as default};
//# sourceMappingURL=color-tokens.stories-9653562b.js.map
