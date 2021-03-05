/**
 *  Utilities.
 */


function readFromStore(property, defaultValue, action) {

    chrome.storage.sync.get(property, data => {

        if (data.hasOwnProperty(property)) {
            value = data[property];
        }
        else {
            value = defaultValue;
        }

        action(value);
    });
}

function saveToStore(property, value) {
    data = {}
    data[property] = value
    chrome.storage.sync.set(data, () => { })
}

function addStyle(styles) {
    var st = document.createElement("style");
    st.innerText = styles;
    document.head.appendChild(st);
}