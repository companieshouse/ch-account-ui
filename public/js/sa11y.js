const jqueryJS = document.createElement('script')
jqueryJS.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js'
const popperJS = document.createElement('script')
popperJS.src = 'https://unpkg.com/@popperjs/core@2'
const tippyJS = document.createElement('script')
tippyJS.src = 'https://unpkg.com/tippy.js@6'
const sa11yJS = document.createElement('script')
sa11yJS.src = 'https://cdn.jsdelivr.net/gh/ryersondmp/sa11y@latest/sa11y.js'

document.body.appendChild(jqueryJS)
jqueryJS.onload = jqueryJS.onreadystatechange = function () {
  document.body.appendChild(popperJS)
  popperJS.onload = popperJS.onreadystatechange = function () {
    document.body.appendChild(tippyJS)
    tippyJS.onload = tippyJS.onreadystatechange = function () {
      document.body.appendChild(sa11yJS)
    }
  }
}
