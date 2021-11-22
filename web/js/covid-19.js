var getPrefsInfo = document.getElementById('getPrefsInfo');
var time = document.getElementById('time');
var infoTable = document.getElementById('info_table');
var infoTableBody = document.getElementById('info_table_body');


// When "各都道府県の情報を取得" button is clicked, get infomation about covid-19
getPrefsInfo.addEventListener('click', function () {
    var prefsData = getPrefectures();
    console.log('clicked button : ' + prefsData);
    renderPrefs(prefsData);
})

async function renderPrefs(body) {
    // var now = new Date();
    var now = moment().format('YYYY年MM月DD日HH時mm分');

    var updateTime = '<p>更新日時 : ' + now + '</p>';
    time.innerHTML = updateTime;

    var th = "<th>都道府県名</th><th>感染者数</th><th>PCR検査数</th><th>死亡者数</th><th>入院者数</th><th>退院者数</th>"
    infoTableBody.innerHTML = th;

    body.forEach(prefs => {
        var id = prefs.id;
        var name = prefs.name_ja;
        var cases = prefs.cases;
        var pcr = prefs.pcr;
        var deaths = prefs.deaths;
        var hospitalize = prefs.hospitalize;
        var discharge = prefs.discharge;

        td = '<td>' + name + '</td>'
        td += '<td>' + cases + '</td>'
        td += '<td>' + pcr + '</td>'
        td += '<td>' + deaths + '</td>'
        td += '<td>' + hospitalize + '</td>'
        td += '<td>' + discharge + '</td>'
        var tr = '<tr id=' + id + ' class="float-data">' + td + '</tr>';
        infoTableBody.innerHTML += tr;
    });
}

async function getPrefectures() {
    fetch('./api/v1/prefectures')
        .then((response) => (response.json()))
        .then((body) => {
            renderPrefs(body);
        })
}

// get info when the user come this site.
renderPrefs(getPrefectures());

