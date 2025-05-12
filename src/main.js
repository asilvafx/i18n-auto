import './lib/i18n';
import i18next from "i18next";

document.getElementById('app').innerHTML = `
${i18next.t('seo_title')}
<br>
${i18next.t('seo_description')}
<br><br>
<p><strong>Change your browser language to see the automatic translation in action.</strong></p>
`

console.log('i18n started!');