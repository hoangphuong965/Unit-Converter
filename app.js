const btn = document.getElementById('btn');
const btn_clear = document.getElementById('btn-clear');

const km = document.getElementById('km');
const hm = document.getElementById('hm');
const dam = document.getElementById('dam');
const m = document.getElementById('m');

const out_m = document.getElementById('out_m');
const out_km = document.getElementById('out_km');
const out_hm = document.getElementById('out_hm');
const out_dam = document.getElementById('out_dam');

const unitForm = document.querySelector('unit-form');
const resultunit = document.getElementById('result-unit');

btn.addEventListener('click', unit);
function unit(e) {
  var inputUnit = document.getElementById('input-unit').value;
  var z = document.getElementById('select-unit').selectedIndex;
  var z1 = document.getElementById('select-unit').options;
  var y = document.getElementById('out-unit').selectedIndex;
  var y1 = document.getElementById('out-unit').options;
  // alert("Index: " + z1[z].index + " is " + z1[z].text);

  km_x();
  function km_x() {
    if (z1[z].index === 0 && y1[y].index === 0) {
      var result = inputUnit * 1000;
      document.getElementById('result-unit').value = result;
    }
    if (z1[z].index === 0 && y1[y].index === 1) {
      var result = inputUnit * 1;
      document.getElementById('result-unit').value = result;
    }
    if (z1[z].index === 0 && y1[y].index === 2) {
      var result = inputUnit * 10;
      document.getElementById('result-unit').value = result;
    }
    if (z1[z].index === 0 && y1[y].index === 3) {
      var result = inputUnit * 100;
      document.getElementById('result-unit').value = result;
    }
    e.preventDefault();
  }

  hm_x();
  function hm_x() {
    if (z1[z].index === 1 && y1[y].index === 0) {
      // m
      var result = inputUnit * 100;
      document.getElementById('result-unit').value = result;
    }
    if (z1[z].index === 1 && y1[y].index === 1) {
      // km
      var result = inputUnit / 10;
      document.getElementById('result-unit').value = result;
    }
    if (z1[z].index === 1 && y1[y].index === 2) {
      // hm
      var result = inputUnit * 1;
      document.getElementById('result-unit').value = result;
    }
    if (z1[z].index === 1 && y1[y].index === 3) {
      // dam
      var result = inputUnit * 10;
      document.getElementById('result-unit').value = result;
    }
    e.preventDefault();
  }

  dam_x();
  function dam_x() {
    if (z1[z].index === 2 && y1[y].index === 0) {
      // m
      var result = inputUnit * 10;
      document.getElementById('result-unit').value = result;
    }
    if (z1[z].index === 2 && y1[y].index === 1) {
      // km
      var result = inputUnit / 100;
      document.getElementById('result-unit').value = result;
    }
    if (z1[z].index === 2 && y1[y].index === 2) {
      // hm
      var result = inputUnit / 10;
      document.getElementById('result-unit').value = result;
    }
    if (z1[z].index === 2 && y1[y].index === 3) {
      // dam
      var result = inputUnit * 1;
      document.getElementById('result-unit').value = result;
    }
    e.preventDefault();
  }
  m_x();
  function m_x() {
    if (z1[z].index === 3 && y1[y].index === 0) {
      // m
      var result = inputUnit * 1;
      document.getElementById('result-unit').value = result;
    }
    if (z1[z].index === 3 && y1[y].index === 1) {
      // km
      var result = inputUnit / 1000;
      document.getElementById('result-unit').value = result;
    }
    if (z1[z].index === 3 && y1[y].index === 2) {
      // hm
      var result = inputUnit / 100;
      document.getElementById('result-unit').value = result;
    }
    if (z1[z].index === 3 && y1[y].index === 3) {
      // dam
      var result = inputUnit / 10;
      document.getElementById('result-unit').value = result;
    }
    e.preventDefault();
  }
}

btn_clear.addEventListener('click', clear);
function clear(e) {
  e.inputUnit = '';
  e.resultunit = ' ';
}

// if (z[0] && h[1]) { // km
//     var result = inputUnit * 1;
//     document.getElementById('result-unit').value = result;
// }
// if (z[0] && h[2]) { // hm
//     var result = inputUnit * 10;
//     document.getElementById('result-unit').value = result;
// }
// if (z[0] && h[3]) { // dam
//     var result = inputUnit * 100;
//     document.getElementById('result-unit').value = result;
// }
// km -> hm dam

// var x = document.getElementById('select-unit').selectedIndex; // lựa chọn theo chỉ mục
// var y = document.getElementById('out-unit').selectedIndex; // lựa chọn theo chỉ mục
// var k = document.getElementById('select-unit').options; // tên options
