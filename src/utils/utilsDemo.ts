export function formatCode(html: string) {
    const tab = '\t';
    let result = '';
    let indent= '';

    html.split(/>\s*</).forEach(function(element) {
        if (element.match( /^\/\w/ )) {
            indent = indent.substring(tab.length);
        }

        result += indent + '<' + element + '>\r\n';

        if (element.match( /^<?\w[^>]*[^\/]$/ ) && !element.startsWith("input")  ) {
            indent += tab;
        }
    });

    return result.substring(1, result.length-3).replace(/ data[^\s]*/g, '');
}