const LeftBarItem = (item) => {
    return (`
       <a href="${item.link}" class="${item.refClass}">
            <i class="${item.iconClass}"></i>
            <span class="${item.titleClass}">${item.linkTitle}</span>
       </a>
   `);
}
export default LeftBarItem;