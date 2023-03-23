

function run(){
    const hash = location.hash;
    if (!hash.startsWith('#:~:text=')) return;
    const parts = hash.substring(9).split(',');
    if (parts.length > 1) return console.log('multiple parts not supported');
    for (const part of parts) {
        if (part.startsWith('-')) return console.log('prefix not supported');
        if (part.endsWith('-')) return console.log('suffix not supported');
    }
    find(parts[0], true) || find(parts[0], true, true);
    /*
    const selection = getSelection();
    const range = selection.getRangeAt(0);
    if (!range) return;
    const mark = document.createElement('mark');
    range.surroundContents(mark);
    selection.collapseToEnd();

    function remove(){
        while (mark.firstChild) mark.before(mark.firstChild);
        mark.remove();
    }
    addEventListener('mousedown',remove);
    //document.addEventListener('scroll',remove);
    */
}

if (!document.fragmentDirective) {
    document.fragmentDirective = {};
    addEventListener('DOMContentLoaded', run);
    addEventListener('hashchange', run);
}
