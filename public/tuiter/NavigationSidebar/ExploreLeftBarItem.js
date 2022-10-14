/* global $ */
const LeftBarItem = (item, active) => {
    let html_res = `
       <a id = "leftBar" href="${item.link}" class="${item.refClass}">
            <i class="${item.iconClass}"></i>
            <span class="${item.titleClass}">${item.linkTitle}</span>
       </a>
   `;
    if (item.linkTitle.toLowerCase() === active.toLocaleString()) {
        let element = $(html_res);
        element.addClass('active');
        return $('<div></div>').append(element).html();
    } else {
        return html_res;
    }
}
export default LeftBarItem;